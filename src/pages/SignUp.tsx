// src/pages/SignUp.tsx
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
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Inscription</h2>
                {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium text-gray-200">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="vous@example.com"
                            required
                            className="
                                w-full
                                px-4 py-3
                                bg-gray-700
                                border border-gray-600
                                rounded-lg
                                text-white
                                placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-yellow-400
                                transition
                            "
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 font-medium text-gray-200">Mot de passe</label>
                        <input
                            id="password"
                            type="password"
                            value={pwd}
                            onChange={handlePwdChange}
                            placeholder="Votre mot de passe"
                            required
                            className="
                                w-full
                                px-4 py-3
                                bg-gray-700
                                border border-gray-600
                                rounded-lg
                                text-white
                                placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-yellow-400
                                transition
                            "
                        />
                    </div>
                    <button
                        type="submit"
                        className="
                            w-full
                            py-3
                            bg-yellow-400
                            text-gray-900
                            font-semibold
                            rounded-lg
                            hover:bg-yellow-500
                            transition-colors
                        "
                    >
                        S’inscrire
                    </button>
                </form>
            </div>
        </div>
    );
}
