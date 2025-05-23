import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDate } from '../../context/DateContext';
import { IoCloseSharp, IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';
import type { MealType } from '../../config/theme';

interface AddFoodMenuProps {
    onMealSelect: (meal: MealType) => void;
    onManualAdd: () => void;
    onClose: () => void;
}

const MEALS: { type: MealType; label: string }[] = [
    { type: 'breakfast', label: 'Petit-déjeuner' },
    { type: 'lunch', label: 'Déjeuner' },
    { type: 'dinner', label: 'Dîner' },
    { type: 'snack', label: 'Collation' },
];

const AddFoodMenu: React.FC<AddFoodMenuProps> = ({ onMealSelect, onClose }) => {
    const navigate = useNavigate();
    const { selectedDate } = useDate();
    const [isMealsExpanded, setIsMealsExpanded] = useState(false);

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-[90vw] max-w-md">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-[#4D9078]">Ajouter un aliment</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Fermer"
                    >
                        <IoCloseSharp size={24} />
                    </button>
                </div>

                <div className="space-y-3">
                    {/* Menu déroulant des repas */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                            onClick={() => setIsMealsExpanded(!isMealsExpanded)}
                            className="w-full p-4 bg-[#e7f2e5] text-[#4D9078] font-medium flex items-center justify-between"
                        >
                            <span>Choisis le repas...</span>
                            {isMealsExpanded ? (
                                <IoChevronUpOutline size={20} />
                            ) : (
                                <IoChevronDownOutline size={20} />
                            )}
                        </button>
                        
                        {isMealsExpanded && (
                            <div className="bg-white">
                                {MEALS.map(({ type, label }) => (
                                    <button
                                        key={type}
                                        onClick={() => {
                                            onMealSelect(type);
                                            navigate(`/add-food?meal=${type}&date=${selectedDate}`);
                                        }}
                                        className="w-full p-4 text-left text-[#4D9078] hover:bg-[#e7f2e5] transition-all duration-200 border-t border-gray-100"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default AddFoodMenu; 