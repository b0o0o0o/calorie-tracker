import { useUserProfileState } from './useUserProfileState';
import { createMealEntry } from '../utils/mealEntry';
import type { FoodFormData } from '../types/food';
import type { MealType } from '../config/theme';

export function useAddMealEntry() {
  const { addEntry } = useUserProfileState();

  return async ({ food, quantity, mealType }: { food: FoodFormData; quantity: number; mealType: MealType }) => {
    const entry = createMealEntry({ food, quantity, mealType });
    await addEntry(entry);
  };
} 