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
    // Fonction de normalisation pour gérer 'oe' et 'œ'
    function normalize(str: string) {
        return str.toLowerCase().replace(/œ/g, 'oe');
    }
    // Algorithme de scoring avancé
    function getScore(label: string, query: string) {
        const l = normalize(label);
        const q = normalize(query);
        if (l === q) return 300;
        if (l.startsWith(q)) return 200;
        const index = l.indexOf(q);
        if (index > 0) return 100 - index; // plus c'est loin, moins c'est pertinent
        return 0;
    }
    const filtered = allResults.filter(item => normalize(item.label).includes(normalize(query)));
    const scored = filtered.map(item => ({ item, score: getScore(item.label, query) }));
    scored.sort((a, b) => b.score - a.score || a.item.label.localeCompare(b.item.label));
    const sorted = scored.map(s => s.item);
    return sorted.slice(0, 20);
};

export const getDefaultQuantity = (food: FoodItem): number => {
    return food.foodId.startsWith('oeuf') ? 1 : 100;
};

export const formatEggQuantity = (quantity: number, servingSize: number): string => {
    return `${quantity} œuf${quantity > 1 ? 's' : ''} = ${quantity * servingSize}g`;
}; 