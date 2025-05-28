import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'info' | 'recipe';
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
    children, 
    className = '', 
    variant = 'default',
    onClick 
}) => {
    const baseStyles = 'rounded-xl transition-all duration-200';
    const variantStyles = {
        default: 'bg-white border border-gray-100 shadow-md hover:shadow-lg',
        info: 'bg-gray-100 border border-gray-300',
        recipe: 'bg-white border border-gray-100 shadow-md hover:shadow-lg'
    };

    return (
        <div 
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card; 