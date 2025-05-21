import React from 'react';
import type { FoodItem } from '../../data/baseIngredients';
import { getCustomIngredients, removeCustomIngredient } from '../../data/customIngredients';

interface SearchResultsProps {
    results: FoodItem[];
    selectedFood: FoodItem | null;
    onFoodSelect: (food: FoodItem) => void;
    onSearch: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ 
    results, 
    selectedFood, 
    onFoodSelect,
    onSearch 
}) => {
    return (
        <div className="space-y-2">
            {results.map(food => (
                <div
                    key={food.foodId}
                    className={`flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4 transition-all duration-200 ${selectedFood?.foodId === food.foodId ? 'ring-2 ring-green-500' : ''}`}
                    onClick={() => onFoodSelect(food)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="flex items-center gap-3">
                        <input
                            type="radio"
                            checked={selectedFood?.foodId === food.foodId}
                            readOnly
                            className="form-radio text-green-400 focus:ring-green-500"
                        />
                        <span className="text-gray-900 text-sm font-medium">{food.label}</span>
                    </div>
                    {Boolean(getCustomIngredients().find(i => i.foodId === food.foodId)) && (
                        <button
                            type="button"
                            className="ml-2 text-red-400 hover:text-red-600 text-xs border border-red-400 rounded px-2 py-1 transition-all duration-200"
                            onClick={e => {
                                e.stopPropagation();
                                removeCustomIngredient(food.foodId);
                                onSearch();
                            }}
                        >
                            Supprimer
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SearchResults; 