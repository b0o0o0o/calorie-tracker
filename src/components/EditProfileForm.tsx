import React from 'react';
import { useProfileFields } from '../hooks/useProfileFields';
import ProfileForm from './ProfileForm';
import { calcTDEE, calcCaloricGoal, calcBodyFatPercent, calcProteinGoal, calcFatGoal, calcCarbGoal, type GoalType } from '../utils/nutrition';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

interface EditProfileFormProps {
    user: any;
    onError: (error: string) => void;
}

export default function EditProfileForm({ user, onError }: EditProfileFormProps) {
    const navigate = useNavigate();
    const [weight, setWeight] = React.useState(70);
    const [height, setHeight] = React.useState(170);
    const [age, setAge] = React.useState(30);
    const [sex, setSex] = React.useState<'male' | 'female'>('male');
    const [activity, setActivity] = React.useState(1.2);
    const [goal, setGoal] = React.useState<GoalType>('maintain');
    const [waist, setWaist] = React.useState<number | null>(80);
    const [error, setError] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(true);

    // Récupération des données actuelles de l'utilisateur
    React.useEffect(() => {
        const fetchUserData = async () => {
            if (!user) return;
            try {
                const userDoc = await getDoc(doc(db, 'users', user.uid));
                if (userDoc.exists()) {
                    const data = userDoc.data();
                    setWeight(data.weight || 70);
                    setHeight(data.height || 170);
                    setAge(data.age || 30);
                    setSex(data.sex || 'male');
                    setActivity(data.activity || 1.2);
                    setGoal(data.goal || 'maintain');
                    setWaist(data.waist || 80);
                }
            } catch (err) {
                console.error('[EditProfileForm] getDoc error', err);
                setError('Erreur lors de la récupération des données.');
                onError('Erreur lors de la récupération des données.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user, onError]);

    const { inputFields, selectFields } = useProfileFields(
        weight, setWeight,
        height, setHeight,
        age, setAge,
        sex, setSex,
        activity, setActivity,
        goal, setGoal,
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!user) return;
        setError(null);
        try {
            // Calcul du TDEE (Total Daily Energy Expenditure)
            const tdee = calcTDEE(weight, height, age, sex, activity);
            
            // Calcul de l'objectif calorique en fonction du TDEE et de l'objectif
            const caloricGoal = calcCaloricGoal(tdee, goal);
            
            // Calcul du pourcentage de masse grasse
            const currentBodyfat = calcBodyFatPercent({ 
                sex, 
                age, 
                height, 
                weight, 
                waist: waist || 0
            });
            
            // Vérification que le calcul est valide
            const bodyFatValue = Number(currentBodyfat.toFixed(1));
            if (isNaN(bodyFatValue)) {
                throw new Error('Calcul de la masse graisseuse invalide');
            }
            
            // Calcul du poids cible en fonction de l'objectif
            const targetWeight = goal === 'loss' ? weight - 5 : 
                               goal === 'gain' ? weight + 5 : 
                               weight;
            
            // Calcul des macronutriments
            const proteinGoal = calcProteinGoal(targetWeight);
            const fatGoal = calcFatGoal(targetWeight);
            const carbGoal = calcCarbGoal({ 
                caloricGoal, 
                proteinGrams: proteinGoal, 
                fatGrams: fatGoal 
            });

            // Mise à jour complète du profil utilisateur
            await setDoc(doc(db, 'users', user.uid), {
                // Informations de base
                weight,
                height,
                age,
                sex,
                activity,
                goal,
                waist,
                email: user.email,
                
                // Calculs et objectifs
                tdee,
                caloricGoal,
                currentBodyfat: bodyFatValue,
                targetWeight,
                proteinGoal,
                fatGoal,
                carbGoal,
                
                // Métadonnées
                updatedAt: new Date(),
                lastProfileUpdate: new Date(),
            });

            // Redirection vers la page des paramètres
            navigate('/settings', { replace: true });
        } catch (err) {
            console.error('[EditProfileForm] setDoc error', err);
            setError('Une erreur est survenue, veuillez réessayer.');
            onError('Une erreur est survenue, veuillez réessayer.');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900" role="status" aria-label="Chargement">
                <p className="text-gray-400">Chargement…</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                    Modifier votre profil
                </h2>
                <ProfileForm
                    inputFields={inputFields}
                    selectFields={selectFields}
                    error={error}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
} 