// Palette de couleurs principale
export const PALETTE = {
    green: '#5FAD56',    // Vert principal
    yellow: '#F2C14E',   // Jaune
    orange: '#F78154',   // Orange
    teal: '#4D9078',     // Vert-bleu
    pink: '#B4436C'      // Rose
};

// Couleurs des macronutriments
export const MACRO_COLORS = {
    protein: PALETTE.pink,
    carbs: PALETTE.yellow,
    fat: PALETTE.orange,
};

// Couleurs de fond
export const BACKGROUND_COLORS = {
    main: '#F9FAFB',
    light: '#E5E7EB',
    navigation: '#CFE6CC'
};

// Couleurs de texte
export const TEXT_COLORS = {
    primary: PALETTE.teal,
    secondary: '#4B5563',
    light: '#9CA3AF'
};

export const COLORS = {
    protein: PALETTE.pink,
    carbs: PALETTE.yellow,
    fat: PALETTE.orange,
};

export const MEALS = [
    { key: 'breakfast', label: 'Breakfast', icon: 'IoCafeOutline' },
    { key: 'lunch', label: 'Lunch', icon: 'IoRestaurantOutline' },
    { key: 'dinner', label: 'Dinner', icon: 'IoPizzaOutline' },
    { key: 'snack', label: 'Snack', icon: 'IoFastFoodOutline' },
] as const;

export type MealType = typeof MEALS[number]['key']; 