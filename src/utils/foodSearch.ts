import { BASE_INGREDIENTS } from '../data/baseIngredients';
import { getCustomIngredients } from '../data/customIngredients';
import type { FoodItem } from '../data/baseIngredients';
import type { SearchableRecipe } from '../types/Recipe';
import { recipeService } from '../services/recipeService';
import { FoodUnit } from '../types/common';

export const searchFood = async (query: string, excludeRecipes: boolean = false): Promise<(FoodItem | SearchableRecipe)[]> => {
    if (!query.trim()) {
        return [];
    }
    const customs = getCustomIngredients();
    const allIngredients = [...customs, ...BASE_INGREDIENTS];
    const lowerQuery = query.toLowerCase();

    // Recherche des recettes seulement si on ne les exclut pas
    let searchableRecipes: SearchableRecipe[] = [];
    if (!excludeRecipes) {
        const recipes = await recipeService.getAllRecipes();
        searchableRecipes = recipes.map(recipe => ({
            foodId: `recipe_${recipe.id}`,
            label: recipe.name,
            nutrients: {
                calories: recipe.calories,
                protein: recipe.protein,
                carbs: recipe.carbs,
                fat: recipe.fat
            },
            servingSize: 1,
            unit: FoodUnit.GRAM,
            category: 'recipe',
            recipeId: recipe.id,
            servings: recipe.servings
        }));
    }

    // Combiner et trier les résultats
    const allResults = [...allIngredients, ...searchableRecipes];
    const sorted = allResults
        .filter(item => item.label.toLowerCase().includes(lowerQuery))
        .sort((a, b) => {
            const aIsEgg = a.label.toLowerCase().includes('oeuf');
            const bIsEgg = b.label.toLowerCase().includes('oeuf');
            const aIsBeef = a.label.toLowerCase().includes('boeuf');
            const bIsBeef = b.label.toLowerCase().includes('boeuf');
            const aIsRecipe = a.category === 'recipe';
            const bIsRecipe = b.category === 'recipe';
            
            // Priorité : recettes > oeuf > boeuf > autres
            if (aIsRecipe && !bIsRecipe) return -1;
            if (!aIsRecipe && bIsRecipe) return 1;
            if (aIsEgg && !bIsEgg) return -1;
            if (!aIsEgg && bIsEgg) return 1;
            if (aIsBeef && !bIsBeef) return 1;
            if (!aIsBeef && bIsBeef) return -1;
            return a.label.localeCompare(b.label);
        });
    return sorted.slice(0, 6);
};

export const getDefaultQuantity = (food: FoodItem): number => {
    return food.foodId.startsWith('oeuf') ? 1 : 100;
};

export const formatEggQuantity = (quantity: number, servingSize: number): string => {
    return `${quantity} œuf${quantity > 1 ? 's' : ''} = ${quantity * servingSize}g`;
}; 