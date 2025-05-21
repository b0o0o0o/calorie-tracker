import { useUserProfileState } from '../hooks/useUserProfileState';
import { signout } from '../services/auth';
import { IoLogOutOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { FaChartLine } from 'react-icons/fa';
import type { User } from '../types/user';

export default function Settings() {
    const navigate = useNavigate();
    const {loading, setError, user } = useUserProfileState();       

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
        <>
            <div className="w-full max-w-md mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
                {/* Section des informations utilisateur */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Profil</h2>
                    <div className="space-y-3">
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <p className="text-gray-300 text-sm">Email</p>
                            <p className="text-white font-medium">{user?.email}</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <p className="text-gray-300 text-sm">Objectif calorique</p>
                            <p className="text-white font-medium">{(user as User)?.caloricGoal || 2000} calories</p>
                        </div>
                    </div>
                </div>

                {/* Section des actions */}
                <div className="space-y-4">
                    <button
                        onClick={() => navigate('/results')}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                        aria-label="Voir les résultats"
                    >
                        <FaChartLine size={20} />
                        <span>Voir les résultats</span>
                    </button>

                    <button
                        onClick={handleSignOut}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                        aria-label="Se déconnecter"
                    >
                        <IoLogOutOutline size={20} />
                        <span>Se déconnecter</span>
                    </button>
                </div>
            </div>
        </>
    );
}
