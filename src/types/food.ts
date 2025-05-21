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

export type FoodUnit = 'g' | 'ml';

export interface FoodFormData {
    name: string;
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    unit: FoodUnit;
    category: FoodCategoryValue;
} 