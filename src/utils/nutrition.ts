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

/**
 * Calcule le pourcentage de masse grasse (bodyfat %).
 * Si le tour de taille est renseigné, utilise la formule Navy, sinon une approximation IMC/âge/sexe.
 */
export function calcBodyFatPercent({
    sex,
    age,
    height,
    weight,
    waist
}: {
    sex: 'male' | 'female',
    age: number,
    height: number,
    weight: number,
    waist?: number | null
}): number {
    if (waist && waist > 0) {
        // Formule Navy (en cm)
        if (sex === 'male') {
            return Math.round(495 / (1.0324 - 0.19077 * Math.log10(waist - height) + 0.15456 * Math.log10(height)) - 450);
        } else {
            // Pour les femmes, la Navy nécessite aussi le tour de hanches, ici on fait une approximation
            return Math.round(495 / (1.29579 - 0.35004 * Math.log10(waist + height) + 0.22100 * Math.log10(height)) - 450);
        }
    } else {
        // Approximation basée sur l'IMC, l'âge et le sexe
        const bmi = weight / Math.pow(height / 100, 2);
        if (sex === 'male') {
            return Math.round(1.20 * bmi + 0.23 * age - 16.2);
        } else {
            return Math.round(1.20 * bmi + 0.23 * age - 5.4);
        }
    }
}

/**
 * Calcule l'objectif de protéines (g/jour) : 2g/kg de poids cible.
 */
export function calcProteinGoal(targetWeight: number): number {
    return Math.round(targetWeight * 2);
}

/**
 * Calcule l'objectif de lipides (g/jour) : 1g/kg de poids cible.
 */
export function calcFatGoal(targetWeight: number): number {
    return Math.round(targetWeight * 1);
}

/**
 * Calcule l'objectif de glucides (g/jour) : le reste des calories après prot/lipides.
 */
export function calcCarbGoal({
    caloricGoal,
    proteinGrams,
    fatGrams
}: {
    caloricGoal: number,
    proteinGrams: number,
    fatGrams: number
}): number {
    const proteinCals = proteinGrams * 4;
    const fatCals = fatGrams * 9;
    const carbsCals = caloricGoal - (proteinCals + fatCals);
    return Math.max(0, Math.round(carbsCals / 4));
}
