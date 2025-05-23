import React from 'react';
import type { RecentItem } from '../../services/recentItemsService';
import { IoRestaurantOutline } from 'react-icons/io5';
import { getFoodCategoryIcon } from '../../utils/foodCategoryIcon';

interface RecentItemsProps {
    items: RecentItem[];
    selectedFood: RecentItem | null;
    onFoodSelect: (food: RecentItem) => void;
    isVisible: boolean;
}

const RecentItems: React.FC<RecentItemsProps> = ({ items, selectedFood, onFoodSelect, isVisible }) => {
    console.log('RecentItems render:', { items, isVisible });

    if (!isVisible || items.length === 0) {
        console.log('RecentItems not visible or empty');
        return null;
    }

    return (
        <div className="mt-4 mb-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Derniers ajouts</h3>
            <div className="space-y-2">
                {items.map((item) => (
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
        </div>
    );
};

export default RecentItems; 