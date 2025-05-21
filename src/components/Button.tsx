import React from 'react';
import type { IconType } from 'react-icons';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    icon?: IconType;
    variant?: 'primary' | 'danger';
    className?: string;
    ariaLabel?: string;
}

export default function Button({ 
    onClick, 
    children, 
    icon: Icon, 
    variant = 'primary',
    className = '',
    ariaLabel
}: ButtonProps) {
    const baseStyles = "w-full flex items-center justify-center gap-2 py-3 px-4 bg-white rounded-xl font-medium transition-all duration-200 cursor-pointer";
    
    const variantStyles = {
        primary: "border-2 border-[#4D9078] text-[#4D9078] hover:bg-[#e7f2e5]",
        danger: "border-2 border-red-500 text-red-500 hover:bg-red-50"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            aria-label={ariaLabel}
        >
            {Icon && <Icon size={20} />}
            <span>{children}</span>
        </button>
    );
} 