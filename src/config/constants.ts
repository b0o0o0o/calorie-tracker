import type { FoodCategory } from '../types/food';

export const FOOD_CATEGORIES: readonly FoodCategory[] = [
    { value: 'legume', label: 'Légume' },
    { value: 'fruit', label: 'Fruit' },
    { value: 'viande', label: 'Viande' },
    { value: 'poisson', label: 'Poisson' },
    { value: 'produit_laitier', label: 'Produit laitier' },
    { value: 'oleagineux', label: 'Oléagineux' },
    { value: 'oeuf', label: 'Oeuf' },
    { value: 'cereal', label: 'Céréale / légumineuse' },
    { value: 'huile', label: 'Huile' },
    { value: 'autre', label: 'Autre' },
] as const;

export const MEAL_OPTIONS = [
    { value: 'breakfast', label: 'Matin', icon: 'IoCafeOutline' },
    { value: 'lunch', label: 'Midi', icon: 'IoRestaurantOutline' },
    { value: 'dinner', label: 'Soir', icon: 'IoPizzaOutline' },
    { value: 'snack', label: 'Snack', icon: 'IoFastFoodOutline' },
] as const; 