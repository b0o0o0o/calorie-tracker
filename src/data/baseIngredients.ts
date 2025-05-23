export interface FoodItem {
    foodId: string;
    label: string;
    nutrients: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
    };
    unit: 'g' | 'ml';
    category: string;
}

import { LEGUMES } from './legumes';
import { FRUITS } from './fruits';
import { VIANDES } from './viandes';
import { POISSONS } from './poissons';
import { PRODUITS_LAITIERS } from './produitsLaitiers';
import { AUTRES } from './autres';
import { BOULANGERIE } from './boulangerie';

export const BASE_INGREDIENTS: FoodItem[] = [
    ...LEGUMES,
    ...FRUITS,
    ...VIANDES,
    ...POISSONS,
    ...PRODUITS_LAITIERS,
    ...AUTRES,
    ...BOULANGERIE
]; 