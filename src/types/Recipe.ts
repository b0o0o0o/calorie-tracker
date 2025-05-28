import type { NutritionValues, BaseEntity } from './common';
import { FoodUnit } from './common';

export interface Ingredient extends NutritionValues {
  foodId: string;
  label: string;
  quantity: number;
  unit: FoodUnit;
}

export interface Recipe extends BaseEntity, NutritionValues {
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  preparationTime: number;
  servings: number;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
}

export type RecipeFormData = Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'> & {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export interface SearchableRecipe {
  foodId: string;
  label: string;
  nutrients: NutritionValues;
  servingSize: number;
  unit: FoodUnit;
  category: 'recipe';
  recipeId: string;
  servings: number;
} 