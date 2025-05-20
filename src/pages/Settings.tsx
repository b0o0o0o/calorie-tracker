
import { useUserProfileState } from '../hooks/useUserProfileState';
import { signout } from '../services/auth';
import { IoLogOutOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
    const navigate = useNavigate();
    const {loading, setError } = useUserProfileState();       


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
                <div className="mt-8 pt-6 border-t border-gray-700">
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
