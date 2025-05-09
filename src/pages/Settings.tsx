// src/pages/Settings.tsx
import React, { useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useProfileFields } from '../hooks/useProfileFields';
import ProfileForm from '../components/ProfileForm';
import { calcTDEE, calcCaloricGoal } from '../utils/nutrition';
import { useUserProfileState } from '../hooks/useUserProfileState';

export default function Settings() {
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
        loading, setLoading,
    } = useUserProfileState(true);

    const { inputFields, selectFields } = useProfileFields(
        weight, setWeight,
        height, setHeight,
        age, setAge,
        sex, setSex,
        activity, setActivity,
        goal, setGoal
    );

    // Charger les données existantes
    useEffect(() => {
        if (!user) return;
        (async () => {
            try {
                const snap = await getDoc(doc(db, 'users', user.uid));
                if (snap.exists()) {
                    const data = snap.data();
                    setWeight(data.weight ?? 0);
                    setHeight(data.height ?? 0);
                    setAge(data.age ?? 0);
                    setSex(data.sex ?? 'male');
                    setActivity(data.activity ?? 1.2);
                    setGoal(data.goal ?? 'maintain');
                }
            } catch (err) {
                console.error('[Settings] getDoc error', err);
                setError('Impossible de charger vos données.');
            } finally {
                setLoading(false);
            }
        })();
    }, [setActivity, setAge, setError, setGoal, setHeight, setLoading, setSex, setWeight, user]);

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
            console.error('[Settings] setDoc error', err);
            setError('Erreur lors de l’enregistrement. Réessayez.');
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-900">
                <p className="text-gray-400">Chargement…</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                    Paramètres du profil
                </h2>
                <ProfileForm
                    inputFields={inputFields}
                    selectFields={selectFields}
                    error={error}
                    onSubmit={handleSubmit}
                    submitLabel="Mettre à jour"
                />
            </div>
        </div>
    );
}
