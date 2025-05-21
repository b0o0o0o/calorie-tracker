import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { MEAL_OPTIONS } from '../../config/constants';
import type { MealType } from '../../config/theme';

interface MealSelectorProps {
    onMealSelect: (meal: MealType) => void;
    onManualAdd: () => void;
}

const MealSelector: React.FC<MealSelectorProps> = ({ onMealSelect, onManualAdd }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB]">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-8 max-w-lg w-full mx-auto flex flex-col gap-6">
                <h2 className="text-2xl font-extrabold mb-2 tracking-tight text-[#4D9078]">Dans quel repas ?</h2>
                <div className="flex flex-col gap-4 w-full">
                    {MEAL_OPTIONS.map(opt => (
                        <button
                            key={opt.value}
                            className="w-full flex items-center justify-center gap-4 py-4 rounded-2xl bg-[#e7f2e5] hover:bg-[#5FAD56]/20 text-[#4D9078] font-semibold text-lg shadow-md transition-all duration-200 border border-[#5FAD56]/30 hover:border-[#5FAD56] group"
                            onClick={() => onMealSelect(opt.value as MealType)}
                        >
                            <span className="tracking-wide text-xl">{opt.label}</span>
                        </button>
                    ))}
                    <button
                        className="w-full flex items-center justify-center gap-4 py-4 rounded-2xl bg-gradient-to-r from-[#5FAD56] via-[#F2C14E] to-[#B4436C] text-white font-bold text-lg shadow-xl border-2 border-[#5FAD56] hover:from-[#4D9078] hover:to-[#B4436C] transition-all duration-200 mt-2"
                        onClick={onManualAdd}
                    >
                        <FaLeaf size={28} className="text-white drop-shadow-lg" />
                        <span className="tracking-wide text-xl">+ Ingrédient</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MealSelector; 