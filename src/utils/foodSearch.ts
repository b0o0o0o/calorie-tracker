import { BASE_INGREDIENTS } from '../data/baseIngredients';
import { getCustomIngredients } from '../data/customIngredients';
import type { FoodItem } from '../data/baseIngredients';

export const searchFood = (query: string): FoodItem[] => {
    if (!query.trim()) {
        return [];
    }
    const customs = getCustomIngredients();
    const allIngredients = [...customs, ...BASE_INGREDIENTS];
    const lowerQuery = query.toLowerCase();
    // On trie pour mettre les oeufs en premier si la recherche contient 'oeuf'
    const sorted = allIngredients
        .filter(item => item.label.toLowerCase().includes(lowerQuery))
        .sort((a, b) => {
            const aIsEgg = a.label.toLowerCase().includes('oeuf');
            const bIsEgg = b.label.toLowerCase().includes('oeuf');
            const aIsBeef = a.label.toLowerCase().includes('boeuf');
            const bIsBeef = b.label.toLowerCase().includes('boeuf');
            // Priorité oeuf > boeuf > autres
            if (aIsEgg && !bIsEgg) return -1;
            if (!aIsEgg && bIsEgg) return 1;
            if (aIsBeef && !bIsBeef) return 1;
            if (!aIsBeef && bIsBeef) return -1;
            return a.label.localeCompare(b.label);
        });
    return sorted.slice(0, 6);
};

export const getDefaultQuantity = (food: FoodItem): number => {
    return food.foodId.startsWith('oeuf') ? 1 : 100;
};

export const formatEggQuantity = (quantity: number, servingSize: number): string => {
    return `${quantity} œuf${quantity > 1 ? 's' : ''} = ${quantity * servingSize}g`;
}; 