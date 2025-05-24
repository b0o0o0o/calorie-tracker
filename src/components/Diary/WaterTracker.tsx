// src/components/Diary/WaterTracker.tsx
import React from 'react';
import { useWaterTracker } from '../../hooks/useWaterTracker';

const WaterTracker: React.FC = () => {
    const { amount, loading, handleAdd, waterGoal } = useWaterTracker();

    if (loading) return <div>Chargement de l'eau…</div>;

    return (
        <div className="bg-white rounded-xl p-4 shadow flex flex-col items-center">
            <h3 className="text-lg font-semibold text-[#4D9078] mb-2">Eau</h3>
            <div className="flex items-center gap-4 mb-2">
                <button onClick={() => handleAdd(-250)} className="btn">-250ml</button>
                <span className="text-2xl font-bold">{amount} / {waterGoal} ml</span>
                <button onClick={() => handleAdd(250)} className="btn">+250ml</button>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-[#4D9078] h-2 rounded-full"
                    style={{ width: `${Math.min((amount / waterGoal) * 100, 100)}%` }}
                />
            </div>
        </div>
    );
};

export default WaterTracker;
