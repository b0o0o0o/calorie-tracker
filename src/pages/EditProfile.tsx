import { useUserProfileState } from '../hooks/useUserProfileState';
import EditProfileForm from '../components/EditProfileForm';

export default function EditProfile() {
    const { user, loading, setError } = useUserProfileState();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen" role="status" aria-label="Chargement">
                <p className="text-gray-400">Chargement…</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-900">
                <p className="text-gray-400">Vous devez être connecté pour accéder à cette page.</p>
            </div>
        );
    }

    return <EditProfileForm user={user} onError={setError} />;
} 