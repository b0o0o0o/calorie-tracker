import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { 
    calcTDEE, 
    calcCaloricGoal,
    calcProteinGoal,
    calcFatGoal,
    calcCarbGoal,
    calcWaterGoal,
    calcBodyFatPercent,
    type GoalType 
} from '../../utils/nutrition';

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
    onError?: (error: any) => void;
}

export function useProfileSubmit() {
    const handleSubmit = async (data: ProfileData, options: SubmitOptions = {}) => {
        const { onSuccess, onError } = options;
        const { user, weight, height, age, sex, activity, goal } = data;

        try {
            // Calculs des objectifs
            const tdee = calcTDEE(weight, height, age, sex, activity);
            const caloricGoal = calcCaloricGoal(tdee, goal);
            const currentBodyfat = calcBodyFatPercent({ sex, age, height, weight });
            const targetWeight = goal === 'maintain' ? weight : 
                               goal === 'loss' ? weight * 0.95 : 
                               weight * 1.05;
            const proteinGoal = calcProteinGoal(weight);
            const fatGoal = calcFatGoal(weight);
            const carbGoal = calcCarbGoal({ 
                caloricGoal, 
                proteinGrams: proteinGoal, 
                fatGrams: fatGoal 
            });
            const waterGoal = calcWaterGoal(weight, activity);

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
                waterGoal,
                
                // Préférences d'eau
                waterPreferences: {
                    useCustomGoal: false,
                    customGoal: null
                },
                
                // Métadonnées
                updatedAt: new Date(),
                lastProfileUpdate: new Date(),
            });

            onSuccess?.();
        } catch (error) {
            console.error('Error updating profile:', error);
            onError?.(error);
        }
    };

    return { handleSubmit };
} 