import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
                <h2 className="text-3xl font-bold mb-4">Bienvenue, {user?.email}</h2>

                {loading ? (
                    <p>Chargement des données…</p>
                ) : (
                    <>
                        {goal && caloricGoal != null ? (
                            <>
                                <p className="text-xl mb-2">
                                    Objectif : <span className="font-semibold">{goalLabels[goal]}</span>
                                </p>
                                <p className="text-xl mb-6">
                                    Apport calorique cible : <span className="font-semibold">{caloricGoal} kcal</span>
                                </p>
                            </>
                        ) : (
                            <p className="text-red-600">Profil incomplet ou introuvable.</p>
                        )}
                    </>
                )}

                <button
                    onClick={handleSignout}
                    className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition"
                >
                    Déconnexion
                </button>
            </div>
        </div>
    );
}