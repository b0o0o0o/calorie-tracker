// src/pages/SignIn.tsx
import AuthForm from '../components/Auth/AuthForm';
import AuthInput from '../components/Auth/AuthInput';
import AuthButton from '../components/Auth/AuthButton';
import { useAuthForm } from '../hooks/useAuthForm';

// Page de connexion
export default function SignIn() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        error,
        handleSubmit,
    } = useAuthForm({ mode: 'signin' });

    return (
        <AuthForm
            title="Se connecter"
            onSubmit={handleSubmit}
            error={error}
            linkText="Pas de compte ?"
            linkTo="/signup"
            linkLabel="S'inscrire"
        >
            <AuthInput
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="vous@example.com"
                label="Email"
            />
            <AuthInput
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Votre mot de passe"
                label="Mot de passe"
            />
            <AuthButton>Se connecter</AuthButton>
        </AuthForm>
    );
}
