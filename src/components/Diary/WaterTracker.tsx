// src/components/Diary/WaterTracker.tsx
import React from 'react';
import { WiRaindrop } from 'react-icons/wi';

interface WaterTrackerProps {
    amount: number;            // quantité d'eau déjà consommée (en ml)
    onAdd: (qty: number) => void;
    onReset: () => void;       // callback pour réinitialiser la quantité
}

const WaterTracker: React.FC<WaterTrackerProps> = ({ amount, onAdd, onReset }) => {
    const TARGET = 2000; // objectif quotidien en ml

    // Palette personnalisée
    const PALETTE = {
        green: '#5FAD56',
        yellow: '#F2C14E',
        orange: '#F78154',
        teal: '#4D9078',
        pink: '#B4436C',
    };

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

            <div className="flex items-center justify-between mb-4">
                {/* Boutons d'ajout à gauche */}
                <div className="flex items-center space-x-2">
                    {[250, 500].map(size => (
                        <button
                            key={size}
                            onClick={() => onAdd(size)}
                            className="flex flex-col items-center justify-center w-12 h-12 border border-[#5FAD56] text-[#5FAD56] bg-white rounded-full font-bold hover:bg-[#5FAD56] hover:text-white transition-colors"
                        >
                            <span className="text-sm">{size}</span>
                            <span className="text-xs">ml</span>
                        </button>
                    ))}
                </div>

                {/* Bouton Reset à droite */}
                <button
                    onClick={onReset}
                    className="bg-[#B4436C] text-white px-4 py-2 rounded shadow hover:bg-[#F78154] transition-colors"
                >
                    Réinitialiser
                </button>
            </div>
        </div>
    );
};

export default WaterTracker;
