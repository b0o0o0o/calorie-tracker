import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { calcTDEE, calcCaloricGoal, calcBodyFatPercent, calcProteinGoal, calcFatGoal, calcCarbGoal } from '../utils/nutrition';
import type { GoalType } from '../utils/nutrition';

interface ProfileData {
    weight: number;
    height: number;
    age: number;
    sex: 'male' | 'female';
    activity: number;
    goal: GoalType;
    user: any;
}

interface SubmitOptions {
    onSuccess?: () => void;
    onError?: (error: string) => void;
}

export function useProfileSubmit() {
    const handleSubmit = async (data: ProfileData, options: SubmitOptions = {}) => {
        const { user, weight, height, age, sex, activity, goal } = data;
        const { onSuccess, onError } = options;

        if (!user) return;

        try {
            // Calcul du TDEE
            const tdee = calcTDEE(weight, height, age, sex, activity);
            
            // Calcul de l'objectif calorique
            const caloricGoal = calcCaloricGoal(tdee, goal);
            
            // Calcul du pourcentage de masse grasse
            const currentBodyfat = calcBodyFatPercent({ sex, age, height, weight });
            
            // Calcul du poids cible
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

            // Mise à jour du profil utilisateur
            await setDoc(doc(db, 'users', user.uid), {
                // Informations de base
                weight,
                height,
                age,
                sex,
                activity,
                goal,
                email: user.email,
                
                // Calculs et objectifs
                tdee,
                caloricGoal,
                currentBodyfat,
                targetWeight,
                proteinGoal,
                fatGoal,
                carbGoal,
                
                // Métadonnées
                updatedAt: new Date(),
                lastProfileUpdate: new Date(),
            });

            onSuccess?.();
        } catch (err) {
            console.error('[useProfileSubmit] setDoc error', err);
            onError?.('Une erreur est survenue, veuillez réessayer.');
        }
    };

    return { handleSubmit };
} 