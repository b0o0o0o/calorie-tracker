import React from 'react';
import Button from '../../components/common/Button';

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
        <Button
            type={type}
            onClick={onClick}
            variant="auth"
            fullWidth
        >
            {children}
        </Button>
    );
};

export default AuthButton; 