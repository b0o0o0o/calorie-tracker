import type { FoodItem } from '../data/baseIngredients';

interface NutritionValues {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}

/**
 * Calcule les valeurs nutritionnelles en fonction de la quantité
 */
export const calculateNutritionValues = (
    food: FoodItem,
    quantity: number
): NutritionValues => {
    const isEgg = food.foodId.startsWith('oeuf');
    const ratio = isEgg ? quantity : quantity ;

    // Les valeurs nutritionnelles sont stockées pour 100g, donc on divise par 100
    return {
        calories: Math.round((food.nutrients.calories * ratio) / 100),
        protein: Math.round((food.nutrients.protein * ratio * 10) / 100) / 10,
        carbs: Math.round((food.nutrients.carbs * ratio * 10) / 100) / 10,
        fat: Math.round((food.nutrients.fat * ratio * 10) / 100) / 10
    };
};

/**
 * Crée un nouvel ingrédient à partir des données du formulaire
 */
export const createNewIngredient = (
    name: string,
    calories: string,
    protein: string,
    carbs: string,
    fat: string,
    unit: 'g' | 'ml',
    category: string
): FoodItem => {
    return {
        foodId: name.toLowerCase().replace(/\s+/g, '_'),
        label: name,
        nutrients: {
            calories: Number(calories) || 0,
            protein: Number(protein) || 0,
            carbs: Number(carbs) || 0,
            fat: Number(fat) || 0
        },
        unit,
        category,
    };
}; 