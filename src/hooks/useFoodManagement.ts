import { useState, useCallback } from 'react';
import type { FoodItem } from '../data/baseIngredients';
import type { SearchableRecipe } from '../types/Recipe';
import type { MealType } from '../config/theme';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

export const useFoodManagement = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [recentlyAdded, setRecentlyAdded] = useState<(FoodItem | SearchableRecipe)[]>([]);

    const addFood = useCallback(async (food: FoodItem | SearchableRecipe, quantity: number, mealType: MealType) => {
        try {
            setIsLoading(true);
            setError(null);

            // Ajouter l'aliment à Firestore
            await addDoc(collection(db, 'foods'), {
                ...food,
                quantity,
                mealType,
                createdAt: new Date(),
                updatedAt: new Date()
            });

            // Ajouter aux aliments récemment ajoutés
            setRecentlyAdded(prev => [food, ...prev].slice(0, 5));

            return true;
        } catch (err) {
            setError('Erreur lors de l\'ajout de l\'aliment');
            console.error(err);
            return false;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const addManualFood = useCallback(async (foodData: any) => {
        try {
            setIsLoading(true);
            setError(null);

            // Ajouter l'aliment manuel à Firestore
            await addDoc(collection(db, 'foods'), {
                ...foodData,
                createdAt: new Date(),
                updatedAt: new Date()
            });

            return true;
        } catch (err) {
            setError('Erreur lors de l\'ajout de l\'aliment');
            console.error(err);
            return false;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {
        isLoading,
        error,
        recentlyAdded,
        addFood,
        addManualFood,
        clearError
    };
}; 