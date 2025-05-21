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
    // Calcul du BMR (Basal Metabolic Rate) avec la formule de Mifflin-St Jeor
    const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === 'male' ? 5 : -161);
    
    // Application du multiplicateur d'activité
    return Math.round(bmr * activity);
}

/**
 * Ajuste le TDEE selon l'objectif :
 * – perte : -500 kcal
 * – prise : +350 kcal
 * – maintien : TDEE
 */
export function calcCaloricGoal(tdee: number, goal: GoalType): number {
    switch (goal) {
        case 'loss':
            return Math.round(tdee - 500); // Déficit de 500 calories
        case 'gain':
            return Math.round(tdee + 500); // Surplus de 500 calories
        case 'maintain':
        default:
            return Math.round(tdee);
    }
}

/**
 * Calcule le pourcentage de masse grasse (bodyfat %) basé sur l'IMC, l'âge et le sexe.
 * Formule simplifiée basée sur l'étude de Deurenberg et al.
 */
export function calcBodyFatPercent({
    sex,
    age,
    height,
    weight
}: {
    sex: 'male' | 'female',
    age: number,
    height: number,
    weight: number
}): number {
    // Vérification des valeurs de base
    if (typeof height !== 'number' || typeof weight !== 'number' || typeof age !== 'number' ||
        isNaN(height) || isNaN(weight) || isNaN(age) ||
        height <= 0 || weight <= 0 || age <= 0) {
        return 0;
    }

    // Conversion en mètres si nécessaire
    const heightInM = height < 3 ? height / 100 : height / 100;
    
    // Calcul de l'IMC
    const bmi = weight / (heightInM * heightInM);
    
    // Formule de Deurenberg simplifiée
    let result;
    if (sex === 'male') {
        result = (1.20 * bmi) + (0.23 * age) - 16.2;
    } else {
        result = (1.20 * bmi) + (0.23 * age) - 5.4;
    }

    return Math.max(0, Math.min(100, Math.round(result)));
}

/**
 * Calcule l'objectif de protéines (g/jour) : 2g/kg de poids cible.
 */
export function calcProteinGoal(weight: number): number {
    // 2g de protéines par kg de poids corporel
    return Math.round(weight * 2);
}

/**
 * Calcule l'objectif de lipides (g/jour) : 1g/kg de poids cible.
 */
export function calcFatGoal(weight: number): number {
    // 0.8g de lipides par kg de poids corporel
    return Math.round(weight * 0.8);
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
    // Calcul des calories des protéines et lipides
    const proteinCalories = proteinGrams * 4; // 4 calories par gramme de protéines
    const fatCalories = fatGrams * 9; // 9 calories par gramme de lipides
    
    // Calcul des calories restantes pour les glucides
    const carbCalories = caloricGoal - proteinCalories - fatCalories;
    
    // Conversion en grammes (4 calories par gramme de glucides)
    return Math.round(carbCalories / 4);
}
