import React from 'react';
import { Link } from 'react-router-dom';
import { IoAddOutline, IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';
import { COLORS } from '../../config/theme';
import { formatMacro } from '../../utils/macroCalculations';
import { calculateMealTotals } from '../../utils/mealCalculations';
import MealEntryList from './MealEntryList';
import type { MealEntry } from './MealEntryList';
import type { MealType } from '../../config/theme';

interface MealCardProps {
    type: MealType;
    label: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
    entries: MealEntry[];
    isExpanded: boolean;
    onToggle: () => void;
    onUpdate: (entry: MealEntry) => void;
    onDelete: (id: string) => void;
    selectedDate: string;
}

const MealCard: React.FC<MealCardProps> = ({
    type,
    label,
    Icon,
    entries,
    isExpanded,
    onToggle,
    onUpdate,
    onDelete,
    selectedDate,
}) => {
    const mealTotals = calculateMealTotals(entries);

    return (
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <Icon size={18} className="text-[#4D9078]" />
                    <span className="font-semibold text-[#4D9078]">{label}</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-sm font-bold text-[#F78154]">
                        {Math.round(mealTotals.calories)} cal
                    </span>
                    <Link
                        to={`/add-food?meal=${type}&date=${selectedDate}`}
                        className="p-1.5 rounded-xl hover:bg-[#F2C14E]/30 transition-all duration-200"
                        aria-label={`Ajouter au ${label}`}
                    >
                        <IoAddOutline
                            size={20}
                            className=""
                            style={{color: '#4D9078'}}
                        />
                    </Link>
                    <button
                        onClick={onToggle}
                        className="p-1.5 rounded-xl hover:bg-[#5FAD56]/20 transition-all duration-200"
                    >
                        {isExpanded ? (
                            <IoChevronUpOutline size={20} className="text-gray-500" />
                        ) : (
                            <IoChevronDownOutline size={20} className="text-gray-500" />
                        )}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 text-center text-xs text-gray-400 mb-2">
                <span style={{color:COLORS.protein}}>{formatMacro(mealTotals.protein)}</span>
                <span style={{color:COLORS.fat}}>{formatMacro(mealTotals.fat)}</span>
                <span style={{color:COLORS.carbs}}>{formatMacro(mealTotals.carbs)}</span>
            </div>

            {isExpanded && (
                <MealEntryList
                    entries={entries}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            )}
        </div>
    );
};

export default MealCard; 