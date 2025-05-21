import React from 'react';

interface AuthButtonProps {
    type?: 'submit' | 'button';
    onClick?: () => void;
    children: React.ReactNode;
}

const AuthButton: React.FC<AuthButtonProps> = ({
    type = 'submit',
    onClick,
    children
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
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
            {children}
        </button>
    );
};

export default AuthButton; 