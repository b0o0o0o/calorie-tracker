// src/components/Diary/WaterTracker.tsx
import React from 'react';
import { WiRaindrop } from 'react-icons/wi';
import { PALETTE } from '../../config/theme';
import { useWaterTracker } from '../../hooks/useWaterTracker';

interface WaterTrackerProps {
    amount?: number;
    onAdd?: (qty: number) => Promise<void> | void;
    onReset?: () => Promise<void> | void;
}

const WaterTracker: React.FC<WaterTrackerProps> = ({ amount: propAmount, onAdd, onReset }) => {
    const TARGET = 2000; // objectif quotidien en ml
    const { amount, loading, handleAdd } = useWaterTracker();

    const displayAmount = propAmount !== undefined ? propAmount : amount;
    const addHandler = onAdd || handleAdd;

    if (loading && propAmount === undefined) {
        return (
            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
            </div>
        );
    }

    return (
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <WiRaindrop size={20} className="text-[#4D9078]" />
                    <span className="font-semibold text-[#4D9078]">Water Balance</span>
                </div>
                <span className="text-gray-500 font-medium">
                    {displayAmount} / {TARGET} ml
                </span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className="h-full transition-all duration-300 ease-out"
                    style={{ 
                        width: `${Math.min(100, (displayAmount / TARGET) * 100)}%`,
                        background: PALETTE.teal
                    }}
                />
            </div>
            <div className="flex justify-between mt-4 gap-2">
                <button
                    onClick={() => addHandler(-500)}
                    className="flex-1 px-2 py-1.5 bg-white border border-[#B4436C] text-[#B4436C] rounded-lg hover:bg-[#ffebeb] transition-colors text-xs font-medium shadow-sm hover:shadow-md cursor-pointer"
                >
                    -500ml
                </button>
                <button
                    onClick={() => addHandler(-250)}
                    className="flex-1 px-2 py-1.5 bg-white border border-[#B4436C] text-[#B4436C] rounded-lg hover:bg-[#ffebeb] transition-colors text-xs font-medium shadow-sm hover:shadow-md cursor-pointer"
                >
                    -250ml
                </button>
                <button
                    onClick={() => addHandler(250)}
                    className="flex-1 px-2 py-1.5 bg-white border border-[#4D9078] text-[#4D9078] rounded-lg hover:bg-[#e7f2e5] transition-colors text-xs font-medium shadow-sm hover:shadow-md cursor-pointer"
                >
                    +250ml
                </button>
                <button
                    onClick={() => addHandler(500)}
                    className="flex-1 px-2 py-1.5 bg-white border border-[#4D9078] text-[#4D9078] rounded-lg hover:bg-[#e7f2e5] transition-colors text-xs font-medium shadow-sm hover:shadow-md cursor-pointer"
                >
                    +500ml
                </button>
            </div>
            {onReset && (
                <button
                    onClick={onReset}
                    className="mt-3 w-full px-2 py-1.5 bg-gray-100 border border-gray-300 text-gray-500 rounded-lg hover:bg-gray-200 transition-colors text-xs font-medium shadow-sm hover:shadow-md cursor-pointer"
                >
                    Réinitialiser
                </button>
            )}
        </div>
    );
};

export default WaterTracker;
