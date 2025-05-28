import { useState } from 'react';
import { signin, signup } from '../../services/auth';

interface UseAuthFormProps {
    mode: 'signin' | 'signup';
    onSuccess?: () => void;
}

export function useAuthForm({ mode, onSuccess }: UseAuthFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            if (mode === 'signin') {
                await signin(email, password);
            } else {
                await signup(email, password);
            }
            onSuccess?.();
        } catch (err) {
            console.error(err);
            setError(
                mode === 'signin'
                    ? 'Échec de la connexion'
                    : "Erreur lors de l'inscription. Réessayez."
            );
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        error,
        handleSubmit,
    };
} 