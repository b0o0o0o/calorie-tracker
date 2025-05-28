import { useState, useCallback } from 'react';
import type { FoodItem } from '../data/baseIngredients';
import type { SearchableRecipe } from '../types/Recipe';
import { searchFood } from '../utils/foodSearch';

export const useFoodSearch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<(FoodItem | SearchableRecipe)[]>([]);

    const search = useCallback(async (query: string) => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            const searchResults = await searchFood(query);
            setResults(searchResults);
        } catch (err) {
            setError('Erreur lors de la recherche');
            console.error(err);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const clearResults = useCallback(() => {
        setResults([]);
        setError(null);
    }, []);

    return {
        results,
        isLoading,
        error,
        search,
        clearResults
    };
}; 