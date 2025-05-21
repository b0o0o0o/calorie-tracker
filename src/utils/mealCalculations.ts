import type { MealType } from '../config/theme';

interface MealEntry {
    id: string;
    name: string;
    mealType: MealType;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    quantity?: number;
    unit?: string;
}

interface MealTotals {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}

/**
 * Filtre les entrées par type de repas
 */
export const filterEntriesByMealType = (entries: MealEntry[], mealType: MealType): MealEntry[] => {
    return entries.filter(entry => entry.mealType === mealType);
};

/**
 * Calcule les totaux pour un repas spécifique
 */
export const calculateMealTotals = (entries: MealEntry[]): MealTotals => {
    return entries.reduce(
        (acc, e) => ({
            calories: acc.calories + e.calories,
            protein: acc.protein + e.protein,
            carbs: acc.carbs + e.carbs,
            fat: acc.fat + e.fat,
        }),
        { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );
};

/**
 * Calcule les totaux pour tous les repas
 */
export const calculateAllMealTotals = (entries: MealEntry[]): Record<MealType, MealTotals> => {
    const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner', 'snack'];
    return mealTypes.reduce((acc, mealType) => {
        const mealEntries = filterEntriesByMealType(entries, mealType);
        acc[mealType] = calculateMealTotals(mealEntries);
        return acc;
    }, {} as Record<MealType, MealTotals>);
};

/**
 * Calcule les totaux journaliers
 */
export const calculateDailyTotals = (entries: MealEntry[]): MealTotals => {
    return calculateMealTotals(entries);
}; 