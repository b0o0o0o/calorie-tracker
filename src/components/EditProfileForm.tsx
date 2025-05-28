import React from 'react';
import { useProfileFields } from '../hooks/auth/useProfileFields';
import { useProfileSubmit } from '../hooks/auth/useProfileSubmit';
import { GoalType, Sex, ActivityLevel } from '../types/common';
import ProfileForm from './ProfileForm';
import { doc, getDoc } from 'firebase/firestore';
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
    const [sex, setSex] = React.useState<Sex>(Sex.MALE);
    const [activity, setActivity] = React.useState<ActivityLevel>(ActivityLevel.SEDENTARY);
    const [goal, setGoal] = React.useState<GoalType>(GoalType.MAINTAIN);
    const [error, setError] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(true);

    const { handleSubmit } = useProfileSubmit();

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
                    setSex(data.sex || Sex.MALE);
                    setActivity(data.activity || ActivityLevel.SEDENTARY);
                    setGoal(data.goal || GoalType.MAINTAIN);
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
        goal, setGoal
    );

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        
        await handleSubmit(
            { user, weight, height, age, sex, activity, goal },
            {
                onSuccess: () => navigate('/settings', { replace: true }),
                onError: (err) => {
                    setError(err);
                    onError(err);
                }
            }
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900" role="status" aria-label="Chargement">
                <p className="text-gray-400">Chargement…</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center  text-gray-900">
                    Modifier votre profil
                </h2>
                <ProfileForm
                    inputFields={inputFields}
                    selectFields={selectFields}
                    error={error}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
} 