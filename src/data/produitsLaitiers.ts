import type { FoodItem } from './baseIngredients';

export const PRODUITS_LAITIERS: FoodItem[] = [
    // Laits
    { foodId: 'lait_cru_vache', label: 'Lait cru de vache', nutrients: { calories: 67, protein: 3.2, carbs: 4.8, fat: 3.7 }, servingSize: 100, unit: 'ml', category: 'produit_laitier' },
    { foodId: 'lait_cru_brebis', label: 'Lait cru de brebis', nutrients: { calories: 108, protein: 5.5, carbs: 5, fat: 7 }, servingSize: 100, unit: 'ml', category: 'produit_laitier' },
    { foodId: 'lait_cru_chevre', label: 'Lait cru de chèvre', nutrients: { calories: 69, protein: 3.6, carbs: 4.5, fat: 4.1 }, servingSize: 100, unit: 'ml', category: 'produit_laitier' },
    { foodId: 'lait_entier', label: 'Lait entier frais', nutrients: { calories: 64, protein: 3.2, carbs: 4.8, fat: 3.6 }, servingSize: 100, unit: 'ml', category: 'produit_laitier' },
    { foodId: 'lait_demi_ecreme', label: 'Lait demi-écrémé frais', nutrients: { calories: 47, protein: 3.2, carbs: 4.8, fat: 1.6 }, servingSize: 100, unit: 'ml', category: 'produit_laitier' },

    // Fromages frais / fermentés
    { foodId: 'fromage_blanc', label: 'Fromage blanc nature', nutrients: { calories: 46, protein: 8.1, carbs: 3.6, fat: 0.2 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'faisselle', label: 'Faisselle', nutrients: { calories: 61, protein: 7.9, carbs: 3.7, fat: 2.5 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'skyr', label: 'Skyr', nutrients: { calories: 63, protein: 11, carbs: 4, fat: 0.2 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'ricotta', label: 'Ricotta', nutrients: { calories: 174, protein: 11, carbs: 3, fat: 13 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'cottage_cheese', label: 'Cottage cheese', nutrients: { calories: 98, protein: 11, carbs: 3.4, fat: 4.3 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'mozzarella', label: 'Mozzarella au lait entier', nutrients: { calories: 280, protein: 18, carbs: 2.2, fat: 21 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'feta', label: 'Feta AOP', nutrients: { calories: 264, protein: 14, carbs: 4, fat: 21 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'chevre_frais', label: 'Chèvre frais', nutrients: { calories: 250, protein: 18, carbs: 2, fat: 20 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },

    // Fromages à pâte dure / molle
    { foodId: 'comte', label: 'Comté', nutrients: { calories: 400, protein: 27, carbs: 0.5, fat: 32 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'gruyere', label: 'Gruyère', nutrients: { calories: 413, protein: 30, carbs: 0.4, fat: 32 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'emmental', label: 'Emmental', nutrients: { calories: 380, protein: 28, carbs: 1.5, fat: 30 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'parmesan', label: 'Parmesan', nutrients: { calories: 431, protein: 38, carbs: 4, fat: 29 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'tome', label: 'Tome', nutrients: { calories: 350, protein: 25, carbs: 1, fat: 28 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'reblochon', label: 'Reblochon', nutrients: { calories: 327, protein: 20, carbs: 1.5, fat: 27 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'camembert', label: 'Camembert', nutrients: { calories: 299, protein: 19, carbs: 0.5, fat: 24 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'brie', label: 'Brie', nutrients: { calories: 334, protein: 20, carbs: 0.5, fat: 27 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'roquefort', label: 'Roquefort', nutrients: { calories: 369, protein: 21, carbs: 2, fat: 30 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'bleu_auvergne', label: "Bleu d'Auvergne", nutrients: { calories: 353, protein: 21, carbs: 2, fat: 29 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },

    // Autres
    { foodId: 'beurre_cru', label: 'Beurre cru', nutrients: { calories: 717, protein: 0.9, carbs: 0.1, fat: 81 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'creme_fraiche', label: 'Crème fraîche épaisse', nutrients: { calories: 292, protein: 2, carbs: 2.9, fat: 30 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'kefir', label: 'Kéfir', nutrients: { calories: 41, protein: 3.3, carbs: 4.7, fat: 1 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'yaourt_nature', label: 'Yaourt nature', nutrients: { calories: 61, protein: 3.5, carbs: 4.7, fat: 3.3 }, servingSize: 100, unit: 'g', category: 'produit_laitier' },
    { foodId: 'yaourt_brebis', label: 'Yaourt au lait de brebis', nutrients: { calories: 72, protein: 4.5, carbs: 5.2, fat: 4.2 }, servingSize: 100, unit: 'g', category: 'produit_laitier' }
]; 