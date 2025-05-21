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
}

export interface RecipeFormData {
  name: string;
  ingredients: Ingredient[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  preparationTime: number;
  servings: number;
}

export interface SearchableRecipe {
  foodId: string;
  label: string;
  nutrients: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  servingSize: number;
  unit: 'g';
  category: 'recipe';
  recipeId: string;
  servings: number;
} 