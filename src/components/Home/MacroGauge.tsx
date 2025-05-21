import React from 'react';
import { MACRO_COLORS, BACKGROUND_COLORS } from '../../config/theme';

interface MacroGaugeProps {
    value: number;
    goal: number;
    label: string;
    size?: number;
    strokeWidth?: number;
}

const MacroGauge: React.FC<MacroGaugeProps> = ({
    value,
    goal,
    label,
    size = 80,
    strokeWidth = 7
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = Math.min(1, value / goal);
    const strokeDashoffset = circumference - circumference * progress;

    return (
        <div className="flex-1 bg-white rounded-2xl p-2 flex flex-col items-center shadow-md border border-gray-100">
            <div className="relative mb-0.5">
                <svg width={size} height={size} role="img" aria-label={`Progression des ${label}`}>
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={BACKGROUND_COLORS.light}
                        strokeWidth={strokeWidth}
                    />
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={MACRO_COLORS[label.toLowerCase() as keyof typeof MACRO_COLORS]}
                        strokeWidth={strokeWidth - 1}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(.4,2,.6,1)' }}
                        filter="drop-shadow(0 0 2px #ffffff88)"
                    />
                </svg>
                <span 
                    className="absolute inset-0 flex items-center justify-center font-bold" 
                    style={{
                        fontSize: '0.7rem',
                        color: MACRO_COLORS[label.toLowerCase() as keyof typeof MACRO_COLORS]
                    }}
                >
                    {value.toFixed(1)} g
                </span>
            </div>
            <div 
                className="uppercase text-[10px] tracking-widest mt-0.5 font-semibold"
                style={{ color: MACRO_COLORS[label.toLowerCase() as keyof typeof MACRO_COLORS] }}
            >
                {label.toUpperCase()}
            </div>
        </div>
    );
};

export default MacroGauge; 