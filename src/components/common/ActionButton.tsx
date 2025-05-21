import React from 'react';
import type { IconBaseProps } from 'react-icons';

interface ActionButtonProps {
    onClick: () => void;
    label: string;
    icon?: React.ComponentType<IconBaseProps>;
    variant?: 'primary' | 'secondary' | 'gradient';
    fullWidth?: boolean;
    className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    onClick,
    label,
    icon: Icon,
    variant = 'primary',
    fullWidth = false,
    className = ''
}) => {
    const baseClasses = "flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200";
    const variantClasses = {
        primary: "bg-green-600 hover:bg-green-500 text-white",
        secondary: "bg-gray-700 hover:bg-gray-600 text-white",
        gradient: "bg-gradient-to-r from-[#5FAD56] via-[#F2C14E] to-[#B4436C] text-white border-2 border-[#5FAD56] hover:from-[#4D9078] hover:to-[#B4436C]"
    };
    const widthClass = fullWidth ? "w-full" : "";

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
        >
            {Icon && <Icon size={20} className="text-white drop-shadow-lg" />}
            <span className="tracking-wide">{label}</span>
        </button>
    );
};

export default ActionButton; 