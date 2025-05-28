import type { FoodFormData } from '../types/food';
import type { MealType } from '../config/theme';

export function createMealEntry({
  food,
  quantity,
  mealType,
}: {
  food: FoodFormData;
  quantity: number;
  mealType: MealType;
}) {
  const qty = isNaN(quantity) ? 0 : quantity;
  return {
    mealType,
    name: food.name,
    calories: Math.round((food.calories || 0) * qty / 100),
    protein: Math.round((food.protein || 0) * qty / 100),
    carbs: Math.round((food.carbs || 0) * qty / 100),
    fat: Math.round((food.fat || 0) * qty / 100),
    // autres champs si besoin
  };
} 