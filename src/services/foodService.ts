import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '../firebase';
import type { FoodItem } from '../data/baseIngredients';

const FOOD_COLLECTION = 'foods';


export const foodService = {
    async searchCustomFoods(searchQuery: string): Promise<FoodItem[]> {
        if (!searchQuery.trim()) return [];
        
        try {
            const q = query(
                collection(db, FOOD_COLLECTION),
                where('label', '>=', searchQuery.toLowerCase()),
                where('label', '<=', searchQuery.toLowerCase() + '\uf8ff'),
                limit(20) // Limiter le nombre de résultats pour des raisons de performance
            );
            
            const querySnapshot = await getDocs(q);
            
            return querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    foodId: doc.id,
                    label: data.label || data.name, // Pour rétrocompatibilité
                    nutrients: {
                        calories: data.calories || data.nutrients?.calories || 0,
                        protein: data.protein || data.nutrients?.protein || 0,
                        carbs: data.carbs || data.nutrients?.carbs || 0,
                        fat: data.fat || data.nutrients?.fat || 0
                    },
                    unit: data.unit || 'g',
                    category: data.category || 'autre'
                } as FoodItem;
            });
        } catch (error) {
            console.error('Erreur lors de la recherche des aliments personnalisés:', error);
            return [];
        }
    }
};