// src/pages/Profile.tsx
import React from 'react';
import { useProfileFields, useUserProfileState, useProfileSubmit } from '../hooks/auth';
import ProfileForm from '../components/ProfileForm';

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

    const { handleSubmit } = useProfileSubmit();

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
                onSuccess: () => navigate('/results', { replace: true }),
                onError: setError
            }
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
                    Complétez votre profil
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
