// src/pages/SignIn.tsx
import React, { useState } from 'react';
import { signin } from '../services/auth';
import { Link, useNavigate } from 'react-router-dom';

// Page de connexion
export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setError('');
            await signin(email, password);
            navigate('/');
        } catch {
            setError('Échec de la connexion');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Se connecter</h2>
                {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium text-gray-200">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            value={password}
                            onChange={e => setPassword(e.target.value)}
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
                        Se connecter
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-400">
                    Pas de compte ?{' '}
                    <Link to="/signup" className="text-yellow-400 hover:text-yellow-500 underline">
                        S’inscrire
                    </Link>
                </p>
            </div>
        </div>
    );
}
