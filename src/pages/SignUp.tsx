// src/pages/SignUp.tsx
import AuthForm from '../components/Auth/AuthForm';
import AuthInput from '../components/Auth/AuthInput';
import AuthButton from '../components/Auth/AuthButton';
import { useAuthForm } from '../hooks/auth';

export default function SignUp() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        error,
        handleSubmit,
    } = useAuthForm({ mode: 'signup' });

    return (
        <AuthForm
            title="Inscription"
            onSubmit={handleSubmit}
            error={error}
            linkText="Déjà un compte ?"
            linkTo="/signin"
            linkLabel="Se connecter"
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
            <AuthButton>S'inscrire</AuthButton>
        </AuthForm>
    );
}
