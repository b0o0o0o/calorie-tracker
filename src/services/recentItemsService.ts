import type { FoodItem } from '../data/baseIngredients';
import type { SearchableRecipe } from '../types/Recipe';

export type RecentItem = FoodItem | SearchableRecipe;

const RECENT_ITEMS_KEY = 'recentItems';
const MAX_RECENT_ITEMS = 6;

export const getRecentItems = (): RecentItem[] => {
    const items = localStorage.getItem(RECENT_ITEMS_KEY);
    console.log('Getting recent items from localStorage:', items);
    return items ? JSON.parse(items) : [];
};

export const addRecentItem = (item: RecentItem): void => {
    console.log('Adding item to recent items:', item);
    const items = getRecentItems();
    const existingIndex = items.findIndex(i => i.foodId === item.foodId);
    
    if (existingIndex !== -1) {
        console.log('Item already exists, removing from current position');
        items.splice(existingIndex, 1);
    }
    
    items.unshift(item);
    
    if (items.length > MAX_RECENT_ITEMS) {
        console.log('Max items reached, removing oldest item');
        items.pop();
    }
    
    console.log('Saving updated items to localStorage:', items);
    localStorage.setItem(RECENT_ITEMS_KEY, JSON.stringify(items));
};

export const clearRecentItems = (): void => {
    console.log('Clearing recent items');
    localStorage.removeItem(RECENT_ITEMS_KEY);
}; 