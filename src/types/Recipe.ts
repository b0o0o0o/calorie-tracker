export interface Ingredient {
  foodId: string;
  label: string;
  quantity: number;
  unit: 'g' | 'ml';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  preparationTime: number;
  servings: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface RecipeFormData extends Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'> {} 