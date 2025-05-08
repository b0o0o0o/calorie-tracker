import React, { useState } from 'react';
import { signup } from '../services/auth';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setError('');
            await signup(email, password);
            navigate('/');
        } catch {
            setError('Échec de l’inscription');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-6">NUTRITION TRACKER</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="block mb-4 w-full p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="block mb-4 w-full p-2 border rounded"
                    required
                />
                <button type="submit" className="w-full p-2 bg-blue-500 rounded text-white mb-4">
                    SIGNUP
                </button>
                <p className="text-center">
                    Have an account?{' '}
                    <Link to="/signin" className="text-blue-600 underline">
                        Signin
                    </Link>
                </p>
            </form>
        </div>
    );
}