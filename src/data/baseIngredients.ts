export interface FoodItem {
    foodId: string;
    label: string;
    nutrients: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
    };
    servingSize: number;
    unit: 'g' | 'ml';
    category: string;
}

import { LEGUMES } from './legumes';
import { FRUITS } from './fruits';
import { VIANDES } from './viandes';
import { POISSONS } from './poissons';
import { PRODUITS_LAITIERS } from './produitsLaitiers';
import { OLEAGINEUX } from './oleagineux';
import { AUTRES } from './autres';

export const BASE_INGREDIENTS: FoodItem[] = [
    ...LEGUMES,
    ...FRUITS,
    ...VIANDES,
    ...POISSONS,
    ...PRODUITS_LAITIERS,
    ...OLEAGINEUX,
    ...AUTRES
]; 