import type { RecipeFormData } from '../../types/Recipe';

export interface ValidationError {
    field: string;
    message: string;
}

export function validateRecipe(recipe: RecipeFormData): ValidationError[] {
    const errors: ValidationError[] = [];

    // Validation du nom
    if (!recipe.name.trim()) {
        errors.push({ field: 'name', message: 'Le nom de la recette est requis' });
    }

    // Validation de la description
    if (!recipe.description.trim()) {
        errors.push({ field: 'description', message: 'La description est requise' });
    }

    // Validation des ingrédients
    if (recipe.ingredients.length === 0) {
        errors.push({ field: 'ingredients', message: 'Au moins un ingrédient est requis' });
    }

    // Validation des instructions
    if (recipe.instructions.length === 0) {
        errors.push({ field: 'instructions', message: 'Au moins une instruction est requise' });
    }

    // Validation du temps de préparation
    if (recipe.preparationTime <= 0) {
        errors.push({ field: 'preparationTime', message: 'Le temps de préparation doit être supérieur à 0' });
    }

    // Validation du nombre de portions
    if (recipe.servings <= 0) {
        errors.push({ field: 'servings', message: 'Le nombre de portions doit être supérieur à 0' });
    }

    return errors;
} 