// src/components/Diary/WaterTracker.tsx
import React from 'react';

interface WaterTrackerProps {
    amount: number;      // nombre de verres ou ml déjà consommés
    onAdd: (qty: number) => void;
}

const WaterTracker: React.FC<WaterTrackerProps> = ({ amount, onAdd }) => {
    return (
        <div className="border rounded p-4">
            <h3 className="font-medium mb-2">Suivi d'eau</h3>
            <p className="text-lg mb-4">Consommé : {amount} verres</p>
            <button
                onClick={() => onAdd(1)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                + 1 verre
            </button>
        </div>
    );
};

export default WaterTracker;
