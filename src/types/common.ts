// Types de base pour les valeurs nutritionnelles
export interface NutritionValues {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

// Interface de base pour les entités avec ID et timestamps
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Enums pour les types communs
export enum GoalType {
  LOSS = 'loss',
  MAINTAIN = 'maintain',
  GAIN = 'gain'
}

export enum ActivityLevel {
  SEDENTARY = 1.2,
  LIGHTLY_ACTIVE = 1.375,
  MODERATELY_ACTIVE = 1.55,
  VERY_ACTIVE = 1.725,
  EXTREMELY_ACTIVE = 1.9
}

export enum Sex {
  MALE = 'male',
  FEMALE = 'female'
}

export enum FoodUnit {
  GRAM = 'g',
  MILLILITER = 'ml'
}

// Type pour les préférences d'eau
export interface WaterPreferences {
  customGoal?: number;
  useCustomGoal: boolean;
}

// Type pour les objectifs nutritionnels
export interface NutritionGoals extends NutritionValues {
  waterGoal: number;
} 