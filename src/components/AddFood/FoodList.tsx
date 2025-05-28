import React from 'react';
import { IoClose } from 'react-icons/io5';
import type { FoodItem } from '../../data/baseIngredients';
import type { SearchableRecipe } from '../../types/Recipe';

interface FoodListItem {
    food: FoodItem | SearchableRecipe;
    quantity: number;
}

interface FoodListProps {
    items: FoodListItem[];
    onRemoveItem: (index: number) => void;
}

const FoodList: React.FC<FoodListProps> = ({ items, onRemoveItem }) => {
    if (items.length === 0) {
        return null;
    }

    return (
        <div className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold text-[#4D9078]">Aliments sélectionnés</h3>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div
                        key={`${item.food.foodId || item.food.label}-${index}`}
                        className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200"
                    >
                        <div className="flex-1">
                            <div className="font-medium">{item.food.label}</div>
                            <div className="text-sm text-gray-500">
                                {item.quantity}g &middot; {item.food.nutrients.calories} kcal
                            </div>
                        </div>
                        <button
                            onClick={() => onRemoveItem(index)}
                            className="p-1 text-gray-500 hover:text-red-500 transition-colors"
                            aria-label="Supprimer"
                        >
                            <IoClose size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodList; 