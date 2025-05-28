import React from 'react';
import type { IconType } from 'react-icons';
import Button from './Button';

interface ActionButtonProps {
    onClick: () => void;
    label: string;
    icon?: IconType;
    variant?: 'primary' | 'secondary' | 'gradient';
    fullWidth?: boolean;
    className?: string;
    disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    onClick,
    label,
    icon: Icon,
    variant = 'primary',
    fullWidth = false,
    className = '',
    disabled = false
}) => {
    return (
        <Button
            onClick={onClick}
            icon={Icon}
            variant={variant}
            fullWidth={fullWidth}
            className={className}
            disabled={disabled}
        >
            {label}
        </Button>
    );
};

export default ActionButton; 