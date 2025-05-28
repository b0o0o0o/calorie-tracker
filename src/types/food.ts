import type { NutritionValues } from './common';
import { FoodUnit } from './common';

export type FoodCategoryValue = 
    | 'legume'
    | 'fruit'
    | 'viande'
    | 'poisson'
    | 'produit_laitier'
    | 'oleagineux'
    | 'oeuf'
    | 'cereal'
    | 'huile'
    | 'autre';

export interface FoodCategory {
    readonly value: FoodCategoryValue;
    readonly label: string;
}

export interface FoodFormData extends NutritionValues {
    name: string;
    unit: FoodUnit;
    category: FoodCategoryValue;
} 