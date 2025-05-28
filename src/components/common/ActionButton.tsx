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
}

const ActionButton: React.FC<ActionButtonProps> = ({
    onClick,
    label,
    icon: Icon,
    variant = 'primary',
    fullWidth = false,
    className = ''
}) => {
    return (
        <Button
            onClick={onClick}
            icon={Icon}
            variant={variant}
            fullWidth={fullWidth}
            className={className}
        >
            {label}
        </Button>
    );
};

export default ActionButton; 