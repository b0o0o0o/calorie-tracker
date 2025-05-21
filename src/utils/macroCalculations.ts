interface MacroTotals {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}

interface DiaryEntry {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}

/**
 * Calcule les totaux des macronutriments à partir d'une liste d'entrées
 */
export const calculateMacroTotals = (entries: DiaryEntry[]): MacroTotals => {
    return entries.reduce(
        (acc, e) => ({
            calories: acc.calories + e.calories,
            protein: acc.protein + (e.protein || 0),
            carbs: acc.carbs + (e.carbs || 0),
            fat: acc.fat + (e.fat || 0),
        }),
        { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );
};

/**
 * Calcule les objectifs de macronutriments en fonction de l'objectif calorique
 */
export const calculateMacroGoals = (caloricGoal: number) => ({
    protein: Math.round((caloricGoal * 0.2) / 4), // 20% des calories, 4kcal/g
    carbs: Math.round((caloricGoal * 0.5) / 4),   // 50% des calories, 4kcal/g
    fat: Math.round((caloricGoal * 0.3) / 9),     // 30% des calories, 9kcal/g
});

/**
 * Calcule le pourcentage de calories consommées
 */
export const calculateCaloriePercentage = (current: number, goal: number): number => {
    return goal ? Math.min(100, Math.round((current / goal) * 100)) : 0;
};

/**
 * Calcule les calories restantes
 */
export const calculateCaloriesLeft = (current: number, goal: number): number => {
    return goal - current;
};

/**
 * Formate un nombre de macronutriments (affiche une décimale seulement si nécessaire)
 */
export const formatMacro = (val: number): string => {
    return Number.isInteger(val) ? val.toString() : val.toFixed(1);
}; 