import { useAuth } from '../contexts/AuthContext';
import { signout } from '../services/auth';

export default function Home() {
    const user = useAuth();

    return (
        <div className="p-8">
            <h2 className="text-2xl mb-4">Bienvenue, {user?.email}</h2>
            <button
                onClick={signout}
                className="px-4 py-2 bg-red-500 text-white rounded"
            >
                Se déconnecter
            </button>
            {/* Ici viendront tes composants de suivi calories */}
        </div>
    );
}