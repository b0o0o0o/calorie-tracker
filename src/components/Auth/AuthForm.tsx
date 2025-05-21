import React from 'react';
import { Link } from 'react-router-dom';
import { PALETTE, BACKGROUND_COLORS, TEXT_COLORS } from '../../config/theme';

interface AuthFormProps {
    title: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    error: string | null;
    children: React.ReactNode;
    linkText?: string;
    linkTo?: string;
    linkLabel?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
    title,
    onSubmit,
    error,
    children,
    linkText,
    linkTo,
    linkLabel
}) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">{title}</h2>
                {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
                <form onSubmit={onSubmit} className="space-y-6">
                    {children}
                </form>
                {linkText && linkTo && linkLabel && (
                    <p className="mt-4 text-center text-gray-400">
                        {linkText}{' '}
                        <Link to={linkTo} className="text-yellow-400 hover:text-yellow-500 underline">
                            {linkLabel}
                        </Link>
                    </p>
                )}
            </div>
        </div>
    );
};

export default AuthForm; 