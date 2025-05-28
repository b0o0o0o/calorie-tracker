import React, { createContext, useContext, useState, useCallback } from 'react';
import type { FoodItem } from '../data/baseIngredients';
import type { SearchableRecipe } from '../types/Recipe';
import type { MealType } from '../config/theme';
import { searchFood } from '../utils/foodSearch';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

interface AddFoodContextType {
    // État
    search: string;
    searchResults: (FoodItem | SearchableRecipe)[];
    selectedFood: (FoodItem | SearchableRecipe) | null;
    quantity: number;
    showManualForm: boolean;
    isLoading: boolean;
    error: string | null;
    recentlyAdded: (FoodItem | SearchableRecipe)[];
    
    // Actions
    setSearch: (search: string) => void;
    setSelectedFood: (food: (FoodItem | SearchableRecipe) | null) => void;
    setQuantity: (quantity: number) => void;
    setShowManualForm: (show: boolean) => void;
    handleSearch: (query: string) => Promise<void>;
    handleAddFood: (mealType: MealType) => Promise<void>;
    handleManualAdd: (foodData: any) => Promise<void>;
    clearError: () => void;
}

const AddFoodContext = createContext<AddFoodContextType | undefined>(undefined);

export const AddFoodProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // État
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState<(FoodItem | SearchableRecipe)[]>([]);
    const [selectedFood, setSelectedFood] = useState<(FoodItem | SearchableRecipe) | null>(null);
    const [quantity, setQuantity] = useState(100);
    const [showManualForm, setShowManualForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [recentlyAdded, setRecentlyAdded] = useState<(FoodItem | SearchableRecipe)[]>([]);

    // Actions
    const handleSearch = useCallback(async (query: string) => {
        try {
            setIsLoading(true);
            setError(null);
            const results = await searchFood(query);
            setSearchResults(results);
        } catch (err) {
            setError('Erreur lors de la recherche');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleAddFood = useCallback(async (mealType: MealType) => {
        if (!selectedFood) return;

        try {
            setIsLoading(true);
            setError(null);

            // Ajouter l'aliment à Firestore
            await addDoc(collection(db, 'foods'), {
                ...selectedFood,
                quantity,
                mealType,
                createdAt: new Date(),
                updatedAt: new Date()
            });

            // Ajouter aux aliments récemment ajoutés
            setRecentlyAdded(prev => [selectedFood, ...prev].slice(0, 5));

            // Réinitialiser l'état
            setSelectedFood(null);
            setQuantity(100);
            setSearch('');
            setSearchResults([]);
        } catch (err) {
            setError('Erreur lors de l\'ajout de l\'aliment');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [selectedFood, quantity]);

    const handleManualAdd = useCallback(async (foodData: any) => {
        try {
            setIsLoading(true);
            setError(null);

            // Ajouter l'aliment manuel à Firestore
            await addDoc(collection(db, 'foods'), {
                ...foodData,
                createdAt: new Date(),
                updatedAt: new Date()
            });

            // Réinitialiser l'état
            setShowManualForm(false);
        } catch (err) {
            setError('Erreur lors de l\'ajout de l\'aliment');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    const value = {
        // État
        search,
        searchResults,
        selectedFood,
        quantity,
        showManualForm,
        isLoading,
        error,
        recentlyAdded,
        
        // Actions
        setSearch,
        setSelectedFood,
        setQuantity,
        setShowManualForm,
        handleSearch,
        handleAddFood,
        handleManualAdd,
        clearError
    };

    return (
        <AddFoodContext.Provider value={value}>
            {children}
        </AddFoodContext.Provider>
    );
};

export const useAddFood = () => {
    const context = useContext(AddFoodContext);
    if (context === undefined) {
        throw new Error('useAddFood must be used within an AddFoodProvider');
    }
    return context;
}; 