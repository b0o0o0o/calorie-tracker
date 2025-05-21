import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../services/auth';

interface UseAuthFormProps {
    mode: 'signin' | 'signup';
    onSuccess?: () => void;
}

export function useAuthForm({ mode, onSuccess }: UseAuthFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            if (mode === 'signin') {
                await signin(email, password);
                navigate('/');
            } else {
                await signup(email, password);
                navigate('/profile', { replace: true });
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