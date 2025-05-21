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
    // Vérification des valeurs de base avec des logs pour le débogage
    console.log('Valeurs reçues:', { sex, age, height, weight, waist });
    
    // Vérification plus souple des valeurs
    if (typeof height !== 'number' || typeof weight !== 'number' || typeof age !== 'number' ||
        isNaN(height) || isNaN(weight) || isNaN(age) ||
        height <= 0 || weight <= 0 || age <= 0) {
        console.warn('Valeurs invalides pour le calcul de masse graisseuse');
        return 0;
    }

    // Conversion en centimètres si nécessaire
    const heightInCm = height < 3 ? height * 100 : height;
    const waistInCm = waist && waist < 3 ? waist * 100 : waist;

    if (waistInCm && waistInCm > 0) {
        try {
            // Formule Navy (en cm)
            if (sex === 'male') {
                const logWaistHeight = Math.log10(Math.max(1, waistInCm - heightInCm));
                const logHeight = Math.log10(heightInCm);
                const result = 495 / (1.0324 - 0.19077 * logWaistHeight + 0.15456 * logHeight) - 450;
                console.log('Calcul Navy (homme):', { logWaistHeight, logHeight, result });
                return Math.max(0, Math.min(100, Math.round(result)));
            } else {
                // Pour les femmes, la Navy nécessite aussi le tour de hanches, ici on fait une approximation
                const logWaistHeight = Math.log10(Math.max(1, waistInCm + heightInCm));
                const logHeight = Math.log10(heightInCm);
                const result = 495 / (1.29579 - 0.35004 * logWaistHeight + 0.22100 * logHeight) - 450;
                console.log('Calcul Navy (femme):', { logWaistHeight, logHeight, result });
                return Math.max(0, Math.min(100, Math.round(result)));
            }
        } catch (error) {
            console.warn('Erreur dans le calcul Navy:', error);
        }
    }

    // Approximation basée sur l'IMC, l'âge et le sexe
    const bmi = weight / Math.pow(heightInCm / 100, 2);
    console.log('Calcul IMC:', { bmi, heightInCm, weight });
    
    if (sex === 'male') {
        const result = 1.20 * bmi + 0.23 * age - 16.2;
        console.log('Résultat final (homme):', result);
        return Math.max(0, Math.min(100, Math.round(result)));
    } else {
        const result = 1.20 * bmi + 0.23 * age - 5.4;
        console.log('Résultat final (femme):', result);
        return Math.max(0, Math.min(100, Math.round(result)));
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
