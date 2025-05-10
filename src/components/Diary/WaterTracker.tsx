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

    return (
        <div className="bg-gray-800 text-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <WiRaindrop size={20} />
                    <span className="font-medium">Water Balance</span>
                </div>
                <span>
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
                            className="flex flex-col items-center justify-center w-12 h-12 border rounded-full"
                        >
                            <span className="text-sm">{size}</span>
                            <span className="text-xs">ml</span>
                        </button>
                    ))}
                </div>

                {/* Bouton Reset à droite */}
                <button
                    onClick={onReset}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Réinitialiser
                </button>
            </div>
        </div>
    );
};

export default WaterTracker;
