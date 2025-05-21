import { BASE_INGREDIENTS } from '../data/baseIngredients';
import { getCustomIngredients } from '../data/customIngredients';
import type { FoodItem } from '../data/baseIngredients';

export const searchFood = (query: string): FoodItem[] => {
    if (!query.trim()) {
        return [];
    }
    const customs = getCustomIngredients();
    const allIngredients = [...customs, ...BASE_INGREDIENTS];
    return allIngredients
        .filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 6);
};

export const getDefaultQuantity = (food: FoodItem): number => {
    return food.foodId.startsWith('oeuf') ? 1 : 100;
};

export const formatEggQuantity = (quantity: number, servingSize: number): string => {
    return `${quantity} œuf${quantity > 1 ? 's' : ''} = ${quantity * servingSize}g`;
}; 