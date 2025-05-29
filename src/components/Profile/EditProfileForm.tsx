import React, { useState } from 'react';
import { useProfileFields } from '../../hooks/auth/useProfileFields';
import { useNavigate } from 'react-router-dom';
import { useProfileSubmit } from '../../hooks/auth/useProfileSubmit';
import { FoodUnit, Sex, ActivityLevel, GoalType } from '../../types/common';
import type { User } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import ProfileForm from './ProfileForm';

interface EditProfileFormProps {
    user: User;
    onError: (error: string) => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ user, onError }) => {
    const navigate = useNavigate();
    const [weight, setWeight] = useState<number>(70);
    const [height, setHeight] = useState<number>(170);
    const [age, setAge] = useState<number>(30);
    const [sex, setSex] = useState<Sex>(Sex.MALE);
    const [activity, setActivity] = useState<ActivityLevel>(ActivityLevel.SEDENTARY);
    const [goal, setGoal] = useState<GoalType>(GoalType.MAINTAIN);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { inputFields, selectFields } = useProfileFields(
        weight, setWeight,
        height, setHeight,
        age, setAge,
        sex, setSex,
        activity, setActivity,
        goal, setGoal
    );

    const { handleSubmit } = useProfileSubmit();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            await handleSubmit(
                { user, weight, height, age, sex, activity, goal },
                {
                    onSuccess: async () => {
                        try {
                            // Mettre à jour les préférences d'unité si nécessaire
                            const userDoc = doc(db, 'users', user.uid);
                            await updateDoc(userDoc, {
                                unit: FoodUnit.GRAM
                            });
                            
                            // Rediriger vers la page des paramètres après un court délai
                            setTimeout(() => {
                                navigate('/settings');
                            }, 1000);
                        } catch (err) {
                            console.error('Error updating user preferences:', err);
                            setError('Erreur lors de la mise à jour des préférences');
                        }
                    },
                    onError: (err: Error) => {
                        setError(err.message);
                        onError(err.message);
                        setIsSubmitting(false);
                    }
                }
            );
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
            setError(errorMessage);
            onError(errorMessage);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
                    Modifier votre profil
                </h2>
                <ProfileForm
                    inputFields={inputFields}
                    selectFields={selectFields}
                    error={error}
                    onSubmit={onSubmit}
                    isSubmitting={isSubmitting}
                />
            </div>
        </div>
    );
};

export default EditProfileForm; 