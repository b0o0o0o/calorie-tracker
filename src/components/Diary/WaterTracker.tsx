// src/components/Diary/WaterTracker.tsx
import React from 'react';
import { useWaterTracker } from '../../hooks/data';
import { FaTint, FaPlus, FaMinus, FaCheckCircle } from 'react-icons/fa';

const WaterTracker: React.FC = () => {
    const { amount, loading, handleAdd, waterGoal } = useWaterTracker();
    const percentage = Math.min((amount / waterGoal) * 100, 100);
    const isGoalReached = amount >= waterGoal;

    if (loading) return (
        <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-md mx-auto">
            <div className="animate-pulse space-y-4">
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded-full"></div>
            </div>
        </div>
    );

    // Fonction pour obtenir la couleur en fonction du pourcentage
    const getProgressColor = (percent: number) => {
        if (percent < 50) return 'from-blue-300 to-blue-400';
        if (percent < 80) return 'from-blue-400 to-blue-500';
        return 'from-blue-500 to-blue-600';
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg w-full mx-auto">
            {/* En-tête */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-600 flex items-center gap-2">
                    <FaTint className="w-5 h-5" />
                    Hydratation
                </h3>
                <span className="text-sm text-gray-500">Objectif: {waterGoal}ml</span>
            </div>
            
            {/* Barre de progression */}
            <div className="relative mb-6">
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div
                        className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(percentage)}`}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                
                {/* Marqueurs de progression */}
                {[0.25, 0.5, 0.75, 1].map((marker) => (
                    <div 
                        key={marker}
                        className="absolute top-0 h-3 w-px bg-gray-300"
                        style={{ left: `${marker * 100}%` }}
                    />
                ))}
            </div>

            {/* Contrôles */}
            <div className="flex items-center justify-between">
                <button 
                    onClick={() => handleAdd(-250)} 
                    disabled={amount <= 0}
                    className={`p-3 rounded-full cursor-pointer ${amount <= 0 ? 'bg-gray-100 text-gray-300' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'} 
                        transition-colors flex items-center justify-center`}
                    aria-label="Retirer 250ml"
                >
                    <FaMinus className="w-4 h-4" />
                </button>
                
                <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800">
                        {amount}
                        <span className="text-lg font-normal text-gray-500 ml-1">ml</span>
                    </div>
                    {isGoalReached && (
                        <div className="text-xs text-green-500 mt-1 flex items-center justify-center">
                            <FaCheckCircle className="w-3 h-3 mr-1" />
                            Objectif atteint !
                        </div>
                    )}
                </div>
                
                <button 
                    onClick={() => handleAdd(250)}
                    className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Ajouter 250ml"
                >
                    <FaPlus className="w-4 h-4" />
                </button>
            </div>

            {/* Boutons rapides */}
            <div className="mt-6 flex justify-center gap-3">
                {[100, 250, 500].map((value) => (
                    <button
                        key={value}
                        onClick={() => handleAdd(value)}
                        className="px-3 py-1.5 text-sm rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer"
                    >
                        +{value}ml
                    </button>
                ))}
            </div>
        </div>
    );
};

export default WaterTracker;
