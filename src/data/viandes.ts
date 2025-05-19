import type { FoodItem } from './baseIngredients';

export const VIANDES: FoodItem[] = [
    // Volailles
    { foodId: 'poulet_filet', label: 'Poulet (filet)', nutrients: { calories: 110, protein: 23, carbs: 0, fat: 1.2 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'poulet_cuisse', label: 'Poulet (cuisse)', nutrients: { calories: 143, protein: 18, carbs: 0, fat: 7.3 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'poulet_aile', label: 'Poulet (aile)', nutrients: { calories: 203, protein: 27, carbs: 0, fat: 10.9 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'dinde', label: 'Dinde', nutrients: { calories: 104, protein: 24, carbs: 0, fat: 1 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'canard', label: 'Canard', nutrients: { calories: 337, protein: 27, carbs: 0, fat: 25 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'pintade', label: 'Pintade', nutrients: { calories: 134, protein: 21, carbs: 0, fat: 5 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'caille', label: 'Caille', nutrients: { calories: 158, protein: 25, carbs: 0, fat: 6.6 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'oie', label: 'Oie', nutrients: { calories: 305, protein: 28, carbs: 0, fat: 21 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'pigeon', label: 'Pigeon', nutrients: { calories: 142, protein: 24, carbs: 0, fat: 4.5 }, servingSize: 100, unit: 'g', category: 'viande' },

    // Viandes rouges / rosées
    { foodId: 'boeuf_steak', label: 'Boeuf (steak)', nutrients: { calories: 133, protein: 21, carbs: 0, fat: 5 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'boeuf_rumsteck', label: 'Boeuf (rumsteck)', nutrients: { calories: 120, protein: 22, carbs: 0, fat: 3.5 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'boeuf_jarret', label: 'Boeuf (jarret)', nutrients: { calories: 120, protein: 21, carbs: 0, fat: 4 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'veau_escalope', label: 'Veau (escalope)', nutrients: { calories: 112, protein: 21, carbs: 0, fat: 3 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'veau_cote', label: 'Veau (côte)', nutrients: { calories: 150, protein: 20, carbs: 0, fat: 7 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'agneau_gigot', label: 'Agneau (gigot)', nutrients: { calories: 180, protein: 20, carbs: 0, fat: 12 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'agneau_cote', label: 'Agneau (côte)', nutrients: { calories: 250, protein: 18, carbs: 0, fat: 20 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'agneau_collier', label: 'Agneau (collier)', nutrients: { calories: 220, protein: 18, carbs: 0, fat: 16 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'cheval', label: 'Cheval', nutrients: { calories: 133, protein: 21, carbs: 0, fat: 5 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'porc_filet', label: 'Porc (filet)', nutrients: { calories: 143, protein: 21, carbs: 0, fat: 6 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'porc_echine', label: 'Porc (échine)', nutrients: { calories: 215, protein: 18, carbs: 0, fat: 16 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'porc_cote', label: 'Porc (côte)', nutrients: { calories: 196, protein: 18, carbs: 0, fat: 14 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'porc_joue', label: 'Porc (joue)', nutrients: { calories: 250, protein: 18, carbs: 0, fat: 20 }, servingSize: 100, unit: 'g', category: 'viande' },

    // Autres
    { foodId: 'lapin', label: 'Lapin', nutrients: { calories: 133, protein: 21, carbs: 0, fat: 5 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'sanglier', label: 'Sanglier', nutrients: { calories: 120, protein: 22, carbs: 0, fat: 3 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'cerf', label: 'Cerf', nutrients: { calories: 120, protein: 22, carbs: 0, fat: 3 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'chevreuil', label: 'Chevreuil', nutrients: { calories: 120, protein: 22, carbs: 0, fat: 3 }, servingSize: 100, unit: 'g', category: 'viande' },
    { foodId: 'faisan', label: 'Faisan', nutrients: { calories: 133, protein: 21, carbs: 0, fat: 5 }, servingSize: 100, unit: 'g', category: 'viande' }
]; 