import React from 'react';
import type { IconType } from 'react-icons';

interface ButtonProps {
    onClick?: () => void;
    type?: 'button' | 'submit';
    children: React.ReactNode;
    icon?: IconType;
    variant?: 'primary' | 'secondary' | 'gradient' | 'danger' | 'auth';
    fullWidth?: boolean;
    className?: string;
    disabled?: boolean;
    ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    type = 'button',
    children,
    icon: Icon,
    variant = 'primary',
    fullWidth = false,
    className = '',
    disabled = false,
    ariaLabel
}) => {
    const baseStyles = "flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200";
    
    const variantStyles = {
        primary: "bg-white border-2 border-[#4D9078] text-[#4D9078] hover:bg-[#e7f2e5]",
        secondary: "bg-white border-2 border-gray-600 hover:bg-gray-200 text-gray-600",
        gradient: "bg-gradient-to-r from-[#5FAD56] via-[#F2C14E] to-[#B4436C] text-white border-2 border-[#5FAD56] hover:from-[#4D9078] hover:to-[#B4436C]",
        danger: "bg-white border-2 border-red-500 text-red-500 hover:bg-red-50",
        auth: "bg-[#4D9078] text-white hover:bg-[#3D7A63]"
    };

    const widthClass = fullWidth ? "w-full" : "";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${widthClass} ${disabledClass} ${className}`}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {Icon && <Icon size={20} className="drop-shadow-lg" />}
            <span>{children}</span>
        </button>
    );
};

export default Button; 