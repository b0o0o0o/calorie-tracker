// src/utils/nutrition.ts
export type GoalType = 'loss' | 'maintain' | 'gain';

/**
 * Calcule le TDEE (Total Daily Energy Expenditure) à partir des paramètres utilisateur.
 */
export function calcTDEE(
    weight: number,
    height: number,
    age: number,
    sex: 'male' | 'female',
    activity: number
): number {
    const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === 'male' ? 5 : -161);
    return Math.round(bmr * activity);
}

/**
 * Ajuste le TDEE selon l'objectif :
 * – perte : -500 kcal
 * – prise : +350 kcal
 * – maintien : TDEE
 */
export function calcCaloricGoal(tdee: number, goal: GoalType): number {
    if (goal === 'loss') return tdee - 500;
    if (goal === 'gain') return tdee + 350;
    return tdee;
}
