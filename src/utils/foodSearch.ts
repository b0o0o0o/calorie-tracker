import { BASE_INGREDIENTS } from '../data/baseIngredients';
import { getCustomIngredients } from '../data/customIngredients';
import type { FoodItem } from '../data/baseIngredients';
import type { SearchableRecipe } from '../types/Recipe';
import { recipeService } from '../services/recipeService';
import { foodService } from '../services/foodService';
import { FoodUnit } from '../types/common';

// Fonction utilitaire pour normaliser le texte de recherche
function normalize(str: string) {
    return str.toLowerCase().replace(/œ/g, 'oe');
}

// Algorithme de scoring pour classer les résultats
function getScore(label: string, query: string) {
    const l = normalize(label);
    const q = normalize(query);
    if (l === q) return 300;
    if (l.startsWith(q)) return 200;
    const index = l.indexOf(q);
    if (index > 0) return 100 - index; // plus c'est loin, moins c'est pertinent
    return 0;
}

export const searchFood = async (query: string, excludeRecipes: boolean = false): Promise<(FoodItem | SearchableRecipe)[]> => {
    if (!query.trim()) {
        return [];
    }

    // Récupérer les aliments de base et personnalisés en parallèle
    const [customs, customFoods] = await Promise.all([
        getCustomIngredients(),
        foodService.searchCustomFoods(query)
    ]);
    
    const allIngredients = [...customs, ...BASE_INGREDIENTS, ...customFoods];

    // Recherche des recettes seulement si on ne les exclut pas
    let searchableRecipes: SearchableRecipe[] = [];
    if (!excludeRecipes) {
        try {
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
        } catch (error) {
            console.error('Erreur lors du chargement des recettes:', error);
        }
    }

    // Combiner tous les résultats
    const allResults = [...allIngredients, ...searchableRecipes];
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