import { useState, useCallback } from 'react';
import { searchFood } from '../../utils/foodSearch';
import type { FoodFormData } from '../../types/food';
import { FoodUnit } from '../../types/common';
import type { FoodCategoryValue } from '../../types/food';

export function useIngredientSearch() {
    const [searchResults, setSearchResults] = useState<FoodFormData[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [searchError, setSearchError] = useState<string | null>(null);

    const searchIngredients = useCallback(async (query: string) => {
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        setIsSearching(true);
        setSearchError(null);

        try {
            const results = await searchFood(query);
            const formattedResults: FoodFormData[] = results.map(item => {
                if ('recipeId' in item) {
                    // C'est une recette
                    return {
                        name: item.label,
                        calories: item.nutrients.calories,
                        protein: item.nutrients.protein,
                        carbs: item.nutrients.carbs,
                        fat: item.nutrients.fat,
                        unit: FoodUnit.GRAM,
                        category: 'autre' as FoodCategoryValue
                    };
                } else {
                    // C'est un ingrédient
                    return {
                        name: item.label,
                        calories: item.nutrients.calories,
                        protein: item.nutrients.protein,
                        carbs: item.nutrients.carbs,
                        fat: item.nutrients.fat,
                        unit: item.unit as FoodUnit,
                        category: item.category as FoodCategoryValue
                    };
                }
            });
            setSearchResults(formattedResults);
        } catch (error) {
            setSearchError('Erreur lors de la recherche d\'ingrédients');
            setSearchResults([]);
        } finally {
            setIsSearching(false);
        }
    }, []);

    return {
        searchResults,
        isSearching,
        searchError,
        searchIngredients
    };
} 