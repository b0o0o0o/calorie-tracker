import type { FoodItem } from './baseIngredients';

export const POISSONS: FoodItem[] = [
    // Poissons blancs
    { foodId: 'cabillaud', label: 'Cabillaud', nutrients: { calories: 82, protein: 18, carbs: 0, fat: 0.7 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'colin', label: 'Colin', nutrients: { calories: 76, protein: 17, carbs: 0, fat: 0.4 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'merlan', label: 'Merlan', nutrients: { calories: 70, protein: 16, carbs: 0, fat: 0.3 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'lieu_noir', label: 'Lieu noir', nutrients: { calories: 76, protein: 17, carbs: 0, fat: 0.4 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'sole', label: 'Sole', nutrients: { calories: 70, protein: 16, carbs: 0, fat: 1.4 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'turbot', label: 'Turbot', nutrients: { calories: 95, protein: 16, carbs: 0, fat: 3 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'dorade', label: 'Dorade', nutrients: { calories: 96, protein: 20, carbs: 0, fat: 2 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'bar', label: 'Bar', nutrients: { calories: 97, protein: 20, carbs: 0, fat: 2 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'sandre', label: 'Sandre', nutrients: { calories: 84, protein: 18, carbs: 0, fat: 0.7 }, servingSize: 100, unit: 'g', category: 'poisson' },

    // Poissons gras
    { foodId: 'saumon', label: 'Saumon', nutrients: { calories: 208, protein: 20, carbs: 0, fat: 13 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'thon', label: 'Thon', nutrients: { calories: 132, protein: 28, carbs: 0, fat: 1 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'maquereau', label: 'Maquereau', nutrients: { calories: 205, protein: 19, carbs: 0, fat: 14 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'sardine', label: 'Sardine', nutrients: { calories: 208, protein: 25, carbs: 0, fat: 11 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'hareng', label: 'Hareng', nutrients: { calories: 158, protein: 18, carbs: 0, fat: 9 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'truite', label: 'Truite', nutrients: { calories: 148, protein: 21, carbs: 0, fat: 6 }, servingSize: 100, unit: 'g', category: 'poisson' },

    // Fruits de mer et crustacés
    { foodId: 'crevette', label: 'Crevette', nutrients: { calories: 99, protein: 24, carbs: 0.2, fat: 0.3 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'gambas', label: 'Gambas', nutrients: { calories: 105, protein: 24, carbs: 0.2, fat: 0.5 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'langoustine', label: 'Langoustine', nutrients: { calories: 90, protein: 19, carbs: 0.5, fat: 1 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'crabe', label: 'Crabe', nutrients: { calories: 83, protein: 18, carbs: 0, fat: 1 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'tourteau', label: 'Tourteau', nutrients: { calories: 89, protein: 18, carbs: 0, fat: 1.5 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'homard', label: 'Homard', nutrients: { calories: 89, protein: 19, carbs: 0, fat: 1 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'araignee_mer', label: 'Araignée de mer', nutrients: { calories: 70, protein: 15, carbs: 0, fat: 0.5 }, servingSize: 100, unit: 'g', category: 'poisson' },

    // Coquillages et céphalopodes
    { foodId: 'moules', label: 'Moules', nutrients: { calories: 86, protein: 12, carbs: 3.7, fat: 2.2 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'huitre', label: 'Huître', nutrients: { calories: 68, protein: 7, carbs: 4, fat: 2 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'palourde', label: 'Palourde', nutrients: { calories: 74, protein: 12, carbs: 3.6, fat: 0.9 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'coquille_saint_jacques', label: 'Coquille Saint-Jacques', nutrients: { calories: 69, protein: 12, carbs: 3, fat: 0.5 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'ormeau', label: 'Ormeau', nutrients: { calories: 105, protein: 17, carbs: 6, fat: 0.8 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'calamar', label: 'Calamar', nutrients: { calories: 92, protein: 15, carbs: 3, fat: 1.4 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'seiche', label: 'Seiche', nutrients: { calories: 79, protein: 16, carbs: 1.5, fat: 1 }, servingSize: 100, unit: 'g', category: 'poisson' },
    { foodId: 'poulpe', label: 'Poulpe', nutrients: { calories: 82, protein: 16, carbs: 2.2, fat: 1 }, servingSize: 100, unit: 'g', category: 'poisson' }
]; 