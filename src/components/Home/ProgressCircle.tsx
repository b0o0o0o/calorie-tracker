import React, { useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { PALETTE, BACKGROUND_COLORS } from '../../config/theme';
import { FaCheckCircle } from 'react-icons/fa';

type ViewMode = 'percentage' | 'absolute';

interface ProgressCircleProps {
    value: number;
    max: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    children?: ReactNode | ((viewMode: ViewMode) => ReactNode);
}

const OVER_GOAL_COLOR = '#f04f4f'; // Rouge personnalisé pour les valeurs dépassées

const getProgressColor = (progress: number) => {
    if (progress < 0.34) return PALETTE.green; // 0-33% - Vert
    if (progress < 0.67) return PALETTE.orange; // 34-66% - Orange
    return OVER_GOAL_COLOR; // 67-100% - Rouge personnalisé
};

const ProgressCircle: React.FC<ProgressCircleProps> = ({
    value,
    max,
    size = 260,
    strokeWidth = 18,
    color,
    children
}) => {
    const [viewMode, setViewMode] = useState<ViewMode>('percentage');
    
    const toggleView = useCallback(() => {
        setViewMode(prev => prev === 'percentage' ? 'absolute' : 'percentage');
    }, []);
    
    // Calcul des valeurs communes
    const progress = Math.min(1, Math.max(0, value / max));
    const caloriesLeft = Math.round(max - value);
    const isGoalReached = value >= max;
    
    // Rendu du contenu en fonction du mode de vue
    const renderContent = () => {
        if (typeof children === 'function') {
            return children(viewMode);
        }
        
        if (children) {
            return children;
        }
        
        if (viewMode === 'percentage') {
            return (
                <div className="text-center">
                    <div className="text-3xl font-bold">{Math.round(progress * 100)}%</div>
                    <div className="text-sm opacity-70">
                        {caloriesLeft > 0 ? `${caloriesLeft} cal left` : `${-caloriesLeft} cal over`}
                    </div>
                </div>
            );
        }
        
        return (
            <div className="text-center">
                <div className="text-3xl font-bold">{Math.round(value)}</div>
                <div className="text-sm opacity-70">/ {max} cal</div>
            </div>
        );
    };
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - circumference * progress;
    const progressColor = color || getProgressColor(progress);



    return (
        <div className="flex flex-col items-center">
            <div 
                className="relative flex items-center justify-center cursor-pointer" 
                style={{ width: size, height: size }}
                onClick={toggleView}
            >
                <svg 
                    width={size} 
                    height={size} 
                    className="block" 
                    role="img" 
                    aria-label="Progression"
                    style={{ pointerEvents: 'none' }}
                >
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
                        stroke={progressColor}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(.4,2,.6,1)' }}
                        filter="drop-shadow(0 0 5px #5FAD5688)"
                    />
                </svg>
                {/* Contenu central */}
                <div 
                    className="absolute w-full h-full flex flex-col items-center justify-center"
                    style={{ pointerEvents: 'none' }}
                >
                    {renderContent()}
                </div>
            </div>
            {isGoalReached && (
                <div className="mt-2 text-green-500 text-sm font-medium flex items-center">
                    <FaCheckCircle className="mr-1" />
                    Objectif atteint !
                </div>
            )}
        </div>
    );
};

export default ProgressCircle;