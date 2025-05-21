import React from 'react';
import { PALETTE } from '../../config/theme';

interface WaterProgressProps {
    current: number;
    goal: number;
    className?: string;
}

const WaterProgress: React.FC<WaterProgressProps> = ({
    current,
    goal,
    className = '',
}) => {
    const percentage = Math.min(100, (current / goal) * 100);

    return (
        <div className={`w-full bg-white rounded-2xl p-3 flex flex-col gap-1 shadow-md border border-gray-100 ${className}`}>
            <div className="flex items-center justify-between mb-0.5">
                <span className="text-[#4D9078] text-xs font-medium flex items-center gap-1">
                    <span role="img" aria-label="eau">💧</span> Water Balance
                </span>
                <span className="text-gray-500 text-xs">{current} / {goal} ml</span>
            </div>
            <div 
                className="w-full h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden" 
                role="progressbar" 
                aria-valuenow={current} 
                aria-valuemin={0} 
                aria-valuemax={goal}
            >
                <div 
                    className="h-full transition-all duration-300 ease-in-out" 
                    style={{ 
                        width: `${percentage}%`,
                        background: PALETTE.teal 
                    }} 
                />
            </div>
        </div>
    );
};

export default WaterProgress; 