import { useUserProfileState } from '../hooks/auth';
import { signout } from '../services/auth';
import { IoLogOutOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import InfoCard from '../components/InfoCard';
import Button from '../components/common/Button';
import WaterGoalSettings from '../components/Settings/WaterGoalSettings';

interface UserStats {
    caloricGoal: number;
    proteinGoal: number;
    fatGoal: number;
    bodyFat: number;
    weight: number;
    activity: number;
}

export default function Settings() {
    const navigate = useNavigate();
    const {loading, setError, user } = useUserProfileState();
    const [stats, setStats] = useState<UserStats>({
        caloricGoal: 2000,
        proteinGoal: 0,
        fatGoal: 0,
        bodyFat: 0,
        weight: 70,
        activity: 1.2
    });

    useEffect(() => {
        if (!user) return;
        const userDoc = doc(db, 'users', user.uid);
        const unsub = onSnapshot(userDoc, (snap) => {
            if (snap.exists()) {
                const data = snap.data();
                setStats({
                    caloricGoal: data.caloricGoal ?? 2000,
                    proteinGoal: data.proteinGoal ?? 0,
                    fatGoal: data.fatGoal ?? 0,
                    bodyFat: data.currentBodyfat ?? 0,
                    weight: data.weight ?? 70,
                    activity: data.activity ?? 1.2
                });
            }
        });
        return () => unsub();
    }, [user]);

    const handleSignOut = async () => {
        try {
            await signout();
            navigate('/signin', { replace: true });
        } catch (err) {
            console.error('[Settings] signout error', err);
            setError("Erreur lors de la déconnexion. Réessayez.");
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-900" role="status" aria-label="Chargement">
                <p className="text-gray-400">Chargement…</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-full max-w-md mx-auto bg-[#F9FAFB] p-8 rounded-4xl border border-gray-100 shadow-lg">
                {/* Section des informations utilisateur */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Profil</h2>
                    <div className="space-y-3">
                        <InfoCard 
                            label="Email"
                            value={user?.email || ''}
                        />
                        <div className="grid grid-cols-2 gap-3">
                            <InfoCard 
                                label="Calories"
                                value={stats.caloricGoal}
                                unit=" kcal"
                            />
                            <InfoCard 
                                label="Protéines"
                                value={stats.proteinGoal}
                                unit="g"
                            />
                            <InfoCard 
                                label="Lipides"
                                value={stats.fatGoal}
                                unit="g"
                            />
                            <InfoCard 
                                label="Masse grasse"
                                value={stats.bodyFat.toFixed(1)}
                                unit="%"
                            />
                        </div>
                    </div>
                </div>

                {/* Section des paramètres d'eau */}
                <div className="mb-8">
                    <WaterGoalSettings 
                        weight={stats.weight}
                        activity={stats.activity}
                    />
                </div>

                {/* Section des actions */}
                <div className="space-y-4">
                    <Button
                        onClick={() => navigate('/edit-profile')}
                        icon={FaUserEdit}
                        variant="primary"
                        ariaLabel="Modifier le profil"
                        fullWidth
                    >
                        Modifier le profil
                    </Button>

                    <Button
                        onClick={handleSignOut}
                        icon={IoLogOutOutline}
                        variant="danger"
                        ariaLabel="Se déconnecter"
                        fullWidth
                    >
                        Se déconnecter
                    </Button>
                </div>
            </div>
        </div>
    );
}
