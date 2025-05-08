import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/auth';

export default function SignUp() {
    const [email, setEmail]     = useState<string>('');
    const [pwd, setPwd]         = useState<string>('');
    const [error, setError]     = useState<string | null>(null);
    const navigate              = useNavigate();

    // Typé pour un <form>
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            await signup(email, pwd);
            navigate('/profile', { replace: true });
        } catch (err: unknown) {
            console.error(err);
            setError('Erreur lors de l’inscription. Réessayez.');
        }
    };

    // Typés pour des <input type="email|password">
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPwd(e.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Inscription</h2>
                {error && <p className="mb-4 text-red-600">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Ex. vous@example.com"
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium">Mot de passe</label>
                        <input
                            id="password"
                            type="password"
                            value={pwd}
                            onChange={handlePwdChange}
                            placeholder="Votre mot de passe"
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                    >
                        S’inscrire
                    </button>
                </form>
            </div>
        </div>
    );
}
