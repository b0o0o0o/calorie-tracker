import type { FoodItem } from './baseIngredients';

export const AUTRES: FoodItem[] = [
    // Oeufs
    { foodId: 'oeuf_poule', label: 'Oeuf de poule entier', nutrients: { calories: 72, protein: 6.5, carbs: 0.6, fat: 5.2 }, servingSize: 50, unit: 'g', category: 'oeuf' },
    { foodId: 'oeuf_caille', label: 'Oeuf de caille', nutrients: { calories: 79, protein: 6.5, carbs: 0.2, fat: 5.6 }, servingSize: 50, unit: 'g', category: 'oeuf' },
    { foodId: 'jaune_oeuf', label: "Jaune d'oeuf", nutrients: { calories: 161, protein: 8, carbs: 1.8, fat: 13.5 }, servingSize: 50, unit: 'g', category: 'oeuf' },
    { foodId: 'blanc_oeuf', label: "Blanc d'oeuf", nutrients: { calories: 26, protein: 5.5, carbs: 0.4, fat: 0.1 }, servingSize: 50, unit: 'g', category: 'oeuf' },

    // Légumineuses sèches
    { foodId: 'lentilles_vertes', label: 'Lentilles vertes', nutrients: { calories: 353, protein: 25, carbs: 60, fat: 1.1 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'lentilles_corail', label: 'Lentilles corail', nutrients: { calories: 345, protein: 25, carbs: 56, fat: 1.1 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'pois_chiches', label: 'Pois chiches', nutrients: { calories: 364, protein: 19, carbs: 61, fat: 6 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'haricots_rouges', label: 'Haricots rouges', nutrients: { calories: 333, protein: 24, carbs: 60, fat: 0.8 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'haricots_blancs', label: 'Haricots blancs', nutrients: { calories: 333, protein: 21, carbs: 60, fat: 0.8 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'haricots_noirs', label: 'Haricots noirs', nutrients: { calories: 339, protein: 21, carbs: 63, fat: 0.9 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'flageolets', label: 'Flageolets', nutrients: { calories: 327, protein: 21, carbs: 54, fat: 1.2 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'pois_casses', label: 'Pois cassés', nutrients: { calories: 324, protein: 23, carbs: 54, fat: 1.1 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'soja_sec', label: 'Soja sec', nutrients: { calories: 446, protein: 36, carbs: 30, fat: 20 }, servingSize: 100, unit: 'g', category: 'cereal' },

    // Céréales et pseudo-céréales
    { foodId: 'riz_complet', label: 'Riz complet', nutrients: { calories: 111, protein: 2.6, carbs: 23, fat: 0.9 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'riz_basmati', label: 'Riz basmati', nutrients: { calories: 121, protein: 3.5, carbs: 25, fat: 0.4 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'riz_rouge', label: 'Riz rouge', nutrients: { calories: 111, protein: 2.6, carbs: 23, fat: 0.9 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'riz_noir', label: 'Riz noir', nutrients: { calories: 335, protein: 8.5, carbs: 72, fat: 2.2 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'quinoa', label: 'Quinoa', nutrients: { calories: 368, protein: 14, carbs: 64, fat: 6 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'boulgour', label: 'Boulgour', nutrients: { calories: 342, protein: 12, carbs: 76, fat: 1.3 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'avoine', label: 'Avoine (flocons)', nutrients: { calories: 367, protein: 13, carbs: 56, fat: 7 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'millet', label: 'Millet', nutrients: { calories: 378, protein: 11, carbs: 73, fat: 4.2 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'orge', label: 'Orge', nutrients: { calories: 354, protein: 12, carbs: 73, fat: 2.3 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'seigle', label: 'Seigle', nutrients: { calories: 338, protein: 10, carbs: 76, fat: 1.6 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'mais_grain', label: 'Maïs grain', nutrients: { calories: 365, protein: 9, carbs: 74, fat: 4.7 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'sarrasin', label: 'Sarrasin', nutrients: { calories: 343, protein: 13, carbs: 72, fat: 3.4 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'amarante', label: 'Amarante', nutrients: { calories: 371, protein: 14, carbs: 65, fat: 7 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'épeautre', label: 'Épeautre', nutrients: { calories: 338, protein: 15, carbs: 70, fat: 2.5 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'petit_epeautre', label: 'Petit épeautre', nutrients: { calories: 335, protein: 12, carbs: 67, fat: 2.7 }, servingSize: 100, unit: 'g', category: 'cereal' },

    // Farines de base
    { foodId: 'farine_ble_t80', label: 'Farine de blé T80', nutrients: { calories: 340, protein: 11, carbs: 70, fat: 1.5 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'farine_ble_t110', label: 'Farine de blé T110', nutrients: { calories: 335, protein: 12, carbs: 67, fat: 2.7 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'farine_seigle', label: 'Farine de seigle', nutrients: { calories: 335, protein: 8.5, carbs: 73, fat: 1.7 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'farine_sarrasin', label: 'Farine de sarrasin', nutrients: { calories: 335, protein: 12, carbs: 67, fat: 2.7 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'farine_pois_chiche', label: 'Farine de pois chiche', nutrients: { calories: 387, protein: 22, carbs: 57, fat: 6.7 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'farine_riz', label: 'Farine de riz', nutrients: { calories: 366, protein: 6, carbs: 80, fat: 1 }, servingSize: 100, unit: 'g', category: 'cereal' },
    { foodId: 'farine_mais', label: 'Farine de maïs', nutrients: { calories: 361, protein: 7, carbs: 76, fat: 3.9 }, servingSize: 100, unit: 'g', category: 'cereal' },

    // Huiles vierges
    { foodId: 'huile_olive_extra', label: "Huile d'olive extra vierge", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, servingSize: 100, unit: 'ml', category: 'huile' },
    { foodId: 'huile_colza', label: "Huile de colza", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, servingSize: 100, unit: 'ml', category: 'huile' },
    { foodId: 'huile_noix', label: "Huile de noix", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, servingSize: 100, unit: 'ml', category: 'huile' },
    { foodId: 'huile_lin', label: "Huile de lin", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, servingSize: 100, unit: 'ml', category: 'huile' },
    { foodId: 'huile_sesame', label: "Huile de sésame", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, servingSize: 100, unit: 'ml', category: 'huile' },
    { foodId: 'huile_tournesol', label: "Huile de tournesol", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, servingSize: 100, unit: 'ml', category: 'huile' },
    { foodId: 'huile_coco', label: "Huile de coco vierge", nutrients: { calories: 892, protein: 0, carbs: 0, fat: 99 }, servingSize: 100, unit: 'g', category: 'huile' },

    // Autres
    { foodId: 'miel_brut', label: 'Miel brut', nutrients: { calories: 304, protein: 0.3, carbs: 82, fat: 0 }, servingSize: 100, unit: 'g', category: 'autre' },
    { foodId: 'sirop_erable', label: "Sirop d'erable pur", nutrients: { calories: 260, protein: 0, carbs: 67, fat: 0 }, servingSize: 100, unit: 'g', category: 'autre' },
    { foodId: 'vinaigre_cidre', label: 'Vinaigre de cidre', nutrients: { calories: 21, protein: 0, carbs: 0.9, fat: 0 }, servingSize: 100, unit: 'ml', category: 'autre' },
    { foodId: 'vinaigre_balsamique', label: 'Vinaigre balsamique', nutrients: { calories: 88, protein: 0.5, carbs: 17, fat: 0 }, servingSize: 100, unit: 'ml', category: 'autre' },
    { foodId: 'sel_mer', label: 'Sel de mer', nutrients: { calories: 0, protein: 0, carbs: 0, fat: 0 }, servingSize: 100, unit: 'g', category: 'autre' },
    { foodId: 'fleur_sel', label: 'Fleur de sel', nutrients: { calories: 0, protein: 0, carbs: 0, fat: 0 }, servingSize: 100, unit: 'g', category: 'autre' },
    { foodId: 'poivre_grain', label: 'Poivre en grain', nutrients: { calories: 251, protein: 10, carbs: 64, fat: 3.3 }, servingSize: 100, unit: 'g', category: 'autre' },
    { foodId: 'curcuma', label: 'Curcuma frais ou moulu', nutrients: { calories: 312, protein: 9.7, carbs: 67, fat: 3.3 }, servingSize: 100, unit: 'g', category: 'autre' },
    { foodId: 'gingembre', label: 'Gingembre frais', nutrients: { calories: 80, protein: 1.8, carbs: 18, fat: 0.8 }, servingSize: 100, unit: 'g', category: 'autre' },
    { foodId: 'cacao_poudre', label: 'Cacao en poudre non sucré', nutrients: { calories: 228, protein: 19.6, carbs: 57.9, fat: 13.7 }, servingSize: 100, unit: 'g', category: 'autre' },
    { foodId: 'algues_sechees', label: 'Algues séchées (nori, wakame, kombu…)', nutrients: { calories: 35, protein: 5.8, carbs: 5.1, fat: 0.3 }, servingSize: 100, unit: 'g', category: 'autre' }
]; 