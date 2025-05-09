// src/pages/Profile.tsx
import React from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useProfileFields } from '../hooks/useProfileFields';
import ProfileForm from '../components/ProfileForm';
import { calcTDEE, calcCaloricGoal } from '../utils/nutrition';
import { useUserProfileState } from '../hooks/useUserProfileState';

export default function Profile() {
    const {
        user,
        navigate,
        weight, setWeight,
        height, setHeight,
        age, setAge,
        sex, setSex,
        activity, setActivity,
        goal, setGoal,
        error, setError,
    } = useUserProfileState(false);

    const { inputFields, selectFields } = useProfileFields(
        weight, setWeight,
        height, setHeight,
        age, setAge,
        sex, setSex,
        activity, setActivity,
        goal, setGoal
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!user) return;
        setError(null);
        try {
            const tdee = calcTDEE(weight, height, age, sex, activity);
            const caloricGoal = calcCaloricGoal(tdee, goal);

            await setDoc(doc(db, 'users', user.uid), {
                weight,
                height,
                age,
                sex,
                activity,
                tdee,
                goal,
                caloricGoal,
                updatedAt: new Date(),
            });
            navigate('/', { replace: true });
        } catch (err) {
            console.error('[Profile] setDoc error', err);
            setError('Une erreur est survenue, veuillez réessayer.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                    Complétez votre profil
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
