import React from 'react';
import { COLORS } from '../../config/theme';
import { formatMacro } from '../../utils/macroCalculations';

interface MacroSummaryProps {
    totals: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
    };
    className?: string;
}

const MacroSummary: React.FC<MacroSummaryProps> = ({ totals, className = '' }) => {
    return (
        <div className={`grid grid-cols-4 text-center text-xs text-gray-500 mb-2 ${className}`}>
            <div>
                <p className="uppercase" style={{color:COLORS.protein}}>Protein</p>
                <p className="mt-1 font-bold" style={{color:COLORS.protein}}>{formatMacro(totals.protein)}</p>
            </div>
            <div>
                <p className="uppercase" style={{color:COLORS.fat}}>Fats</p>
                <p className="mt-1 font-bold" style={{color:COLORS.fat}}>{formatMacro(totals.fat)}</p>
            </div>
            <div>
                <p className="uppercase" style={{color:COLORS.carbs}}>Carbs</p>
                <p className="mt-1 font-bold" style={{color:COLORS.carbs}}>{formatMacro(totals.carbs)}</p>
            </div>
            <div>
                <p className="uppercase text-[#4D9078]">Calories</p>
                <p className="mt-1 font-bold text-[#4D9078]">{Math.round(totals.calories)}</p>
            </div>
        </div>
    );
};

export default MacroSummary; 