import type { NutritionValues } from './common';
import { FoodUnit } from './common';

export interface BaseIngredient extends NutritionValues {
    foodId: string;
    label: string;
    unit: FoodUnit;
    category: string;
} 