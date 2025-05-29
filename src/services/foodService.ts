import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import type { FoodFormData } from '../types/food';

const FOOD_COLLECTION = 'foods';

export const foodService = {
    async searchFood(searchQuery: string): Promise<FoodFormData[]> {
        const foodQuery = query(
            collection(db, FOOD_COLLECTION),
            where('name', '>=', searchQuery.toLowerCase()),
            where('name', '<=', searchQuery.toLowerCase() + '\uf8ff')
        );

        const querySnapshot = await getDocs(foodQuery);
        return querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                name: data.name,
                unit: data.unit,
                category: data.category,
                calories: data.calories,
                protein: data.protein,
                carbs: data.carbs,
                fat: data.fat
            } as FoodFormData;
        });
    }
}; 