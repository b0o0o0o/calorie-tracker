// src/components/Diary/WaterTracker.tsx
import React from 'react';
import { WiRaindrop } from 'react-icons/wi';
import { PALETTE } from '../../config/theme';

interface WaterTrackerProps {
    amount: number;            // quantité d'eau déjà consommée (en ml)
    onAdd: (amount: number) => void;
    onReset: () => void;       // callback pour réinitialiser la quantité
}

const WaterTracker: React.FC<WaterTrackerProps> = ({ amount, onAdd, onReset }) => {
    const TARGET = 2000; // objectif quotidien en ml

    return (
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <WiRaindrop size={20} className="text-[#4D9078]" />
                    <span className="font-semibold text-[#4D9078]">Water Balance</span>
                </div>
                <span className="text-gray-500 font-medium">
                    {amount} / {TARGET} ml
                </span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className="h-full transition-all duration-300 ease-out"
                    style={{ 
                        width: `${Math.min(100, (amount / TARGET) * 100)}%`,
                        background: PALETTE.teal
                    }}
                />
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => onAdd(250)}
                    className="px-3 py-1.5 bg-[#e7f2e5] text-[#4D9078] rounded-lg hover:bg-[#5FAD56]/20 transition-colors"
                >
                    + 250ml
                </button>
                        <button
                    onClick={() => onAdd(500)}
                    className="px-3 py-1.5 bg-[#e7f2e5] text-[#4D9078] rounded-lg hover:bg-[#5FAD56]/20 transition-colors"
                        >
                    + 500ml
                        </button>
                <button
                    onClick={onReset}
                    className="px-3 py-1.5 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200 transition-colors"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default WaterTracker;
