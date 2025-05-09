// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signout } from '../services/auth';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const goalLabels: Record<string, string> = {
    loss: 'Perte de poids',
    maintain: 'Maintien',
    gain: 'Prise de masse',
};

export default function Home() {
    const user = useAuth();
    const navigate = useNavigate();
    const [goal, setGoal] = useState<string | null>(null);
    const [caloricGoal, setCaloricGoal] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const fetchProfile = async () => {
            try {
                const snap = await getDoc(doc(db, 'users', user.uid));
                if (snap.exists()) {
                    const data = snap.data();
                    setGoal(data.goal ?? null);
                    setCaloricGoal(data.caloricGoal ?? null);
                }
            } catch (err) {
                console.error('[Home] erreur getDoc', err);
            } finally {
                setLoading(false);
            }
        };

        void fetchProfile();
    }, [user]);

    const handleSignout = async () => {
        try {
            await signout();
            navigate('/signin', { replace: true });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">
                    Bienvenue, {user?.email}
                </h2>

                {loading ? (
                    <p className="text-gray-400">Chargement des données…</p>
                ) : (
                    <>
                        {goal && caloricGoal != null ? (
                            <>
                                <p className="text-xl mb-2 text-gray-200">
                                    Objectif :{' '}
                                    <span className="font-semibold text-white">
                                        {goalLabels[goal]}
                                    </span>
                                </p>
                                <p className="text-xl mb-6 text-gray-200">
                                    Apport calorique cible :{' '}
                                    <span className="font-semibold text-white">
                                        {caloricGoal} kcal
                                    </span>
                                </p>
                            </>
                        ) : (
                            <p className="text-red-500">Profil incomplet ou introuvable.</p>
                        )}
                    </>
                )}

                <button
                    onClick={handleSignout}
                    className="
                        w-full
                        py-3
                        bg-yellow-400 text-gray-900 font-semibold
                        rounded-lg hover:bg-yellow-500
                        transition-colors
                   "
                >
                    Déconnexion
                </button>
            </div>
        </div>
    );
}
