import React from 'react';
import { PALETTE, BACKGROUND_COLORS } from '../../config/theme';

interface ProgressCircleProps {
    value: number;
    max: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    children?: React.ReactNode;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
    value,
    max,
    size = 260,
    strokeWidth = 18,
    color = PALETTE.green,
    children
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = Math.min(1, value / max);
    const strokeDashoffset = circumference - circumference * progress;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="block" role="img" aria-label="Progression">
                {/* Cercle de fond */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={BACKGROUND_COLORS.light}
                    strokeWidth={strokeWidth}
                />
                {/* Cercle de progression */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(.4,2,.6,1)' }}
                    filter="drop-shadow(0 0 5px #5FAD5688)"
                />
            </svg>
            {/* Contenu central */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default ProgressCircle; 