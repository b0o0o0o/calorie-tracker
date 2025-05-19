import type { FoodItem } from './baseIngredients';

const STORAGE_KEY = 'customIngredients';

export function getCustomIngredients(): FoodItem[] {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    try {
        return JSON.parse(data) as FoodItem[];
    } catch {
        return [];
    }
}

export function addCustomIngredient(ingredient: FoodItem) {
    const list = getCustomIngredients();
    // On évite les doublons par foodId
    if (!list.find(i => i.foodId === ingredient.foodId)) {
        list.push(ingredient);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
}

export function removeCustomIngredient(foodId: string) {
    const list = getCustomIngredients().filter(i => i.foodId !== foodId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
} 