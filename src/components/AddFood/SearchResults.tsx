import React from 'react';
import type { FoodItem } from '../../data/baseIngredients';
import type { SearchableRecipe } from '../../types/Recipe';
import { IoRestaurantOutline } from 'react-icons/io5';
import { getFoodCategoryIcon } from '../../utils/foodCategoryIcon';

interface SearchResultsProps {
    results: (FoodItem | SearchableRecipe)[];
    selectedFood: (FoodItem | SearchableRecipe) | null;
    onFoodSelect: (food: FoodItem | SearchableRecipe) => void;
    onSearch: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, selectedFood, onFoodSelect }) => {
    if (!results || !Array.isArray(results) || results.length === 0) {
        return null;
    }

    return (
        <div className="mt-2 space-y-2">
            {results.map((item) => (
                <div
                    key={item.foodId}
                    className={`p-2 rounded-lg cursor-pointer ${
                        selectedFood?.foodId === item.foodId
                            ? 'border-2 border-[#4D9078] bg-[#CFE6CC]'
                            : 'hover:bg-gray-100'
                    }`}
                    onClick={() => onFoodSelect(item)}
                >
                    <div className="flex items-center gap-2">
                        {item.category === 'recipe' ? (
                            <IoRestaurantOutline className="text-lg" />
                        ) : (
                            getFoodCategoryIcon(item.category)
                        )}
                        <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                        {item.nutrients.calories} kcal &middot;{' '}
                        <span className="text-[#B4436C]">P {item.nutrients.protein}g</span> &middot;{' '}
                        <span className="text-[#F2C14E]">C {item.nutrients.carbs}g</span> &middot;{' '}
                        <span className="text-[#F78154]">L {item.nutrients.fat}g</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResults; 