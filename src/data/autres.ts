import type { FoodItem } from './baseIngredients';

export const AUTRES_CATEGORIES = {
    oeuf: { label: 'Oeufs' },
    cereal: { label: 'Céréales & Pseudo-céréales' },
    farine: { label: 'Farines' },
    huile: { label: 'Huiles' },
    nouilles: { label: 'Nouilles & Pâtes' },
    autre: { label: 'Autres' },
};

export const AUTRES: FoodItem[] = [
    // Oeufs
    { foodId: 'AU001', label: 'Oeuf de poule', nutrients: { calories: 72, protein: 6.5, carbs: 0.6, fat: 5.2 }, unit: 'g', category: 'oeuf' },
    { foodId: 'AU002', label: 'Oeuf de caille', nutrients: { calories: 79, protein: 6.5, carbs: 0.2, fat: 5.6 }, unit: 'g', category: 'oeuf' },
    { foodId: 'AU003', label: "Jaune d'oeuf", nutrients: { calories: 161, protein: 8, carbs: 1.8, fat: 13.5 }, unit: 'g', category: 'oeuf' },
    { foodId: 'AU004', label: "Blanc d'oeuf", nutrients: { calories: 26, protein: 5.5, carbs: 0.4, fat: 0.1 }, unit: 'g', category: 'oeuf' },

    // Légumineuses sèches & céréales
    { foodId: 'AU005', label: 'Lentilles vertes', nutrients: { calories: 353, protein: 25, carbs: 60, fat: 1.1 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU006', label: 'Lentilles corail', nutrients: { calories: 345, protein: 25, carbs: 56, fat: 1.1 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU007', label: 'Pois chiches', nutrients: { calories: 364, protein: 19, carbs: 61, fat: 6 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU008', label: 'Haricots rouges', nutrients: { calories: 333, protein: 24, carbs: 60, fat: 0.8 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU009', label: 'Haricots blancs', nutrients: { calories: 333, protein: 21, carbs: 60, fat: 0.8 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU010', label: 'Haricots noirs', nutrients: { calories: 339, protein: 21, carbs: 63, fat: 0.9 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU011', label: 'Flageolets', nutrients: { calories: 327, protein: 21, carbs: 54, fat: 1.2 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU012', label: 'Pois cassés', nutrients: { calories: 324, protein: 23, carbs: 54, fat: 1.1 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU013', label: 'Soja sec', nutrients: { calories: 446, protein: 36, carbs: 30, fat: 20 }, unit: 'g', category: 'cereal' },

    // Céréales et pseudo-céréales
    { foodId: 'AU014', label: 'Riz complet', nutrients: { calories: 111, protein: 2.6, carbs: 23, fat: 0.9 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU015', label: 'Riz basmati', nutrients: { calories: 121, protein: 3.5, carbs: 25, fat: 0.4 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU016', label: 'Riz rouge', nutrients: { calories: 111, protein: 2.6, carbs: 23, fat: 0.9 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU017', label: 'Riz noir', nutrients: { calories: 335, protein: 8.5, carbs: 72, fat: 2.2 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU018', label: 'Quinoa', nutrients: { calories: 368, protein: 14, carbs: 64, fat: 6 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU019', label: 'Boulgour', nutrients: { calories: 342, protein: 12, carbs: 76, fat: 1.3 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU020', label: 'Avoine (flocons)', nutrients: { calories: 367, protein: 13, carbs: 56, fat: 7 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU021', label: 'Millet', nutrients: { calories: 378, protein: 11, carbs: 73, fat: 4.2 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU022', label: 'Orge', nutrients: { calories: 354, protein: 12, carbs: 73, fat: 2.3 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU023', label: 'Seigle', nutrients: { calories: 338, protein: 10, carbs: 76, fat: 1.6 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU024', label: 'Maïs grain', nutrients: { calories: 365, protein: 9, carbs: 74, fat: 4.7 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU025', label: 'Sarrasin', nutrients: { calories: 343, protein: 13, carbs: 72, fat: 3.4 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU026', label: 'Amarante', nutrients: { calories: 371, protein: 14, carbs: 65, fat: 7 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU027', label: 'Épeautre', nutrients: { calories: 338, protein: 15, carbs: 70, fat: 2.5 }, unit: 'g', category: 'cereal' },
    { foodId: 'AU028', label: 'Petit épeautre', nutrients: { calories: 335, protein: 12, carbs: 67, fat: 2.7 }, unit: 'g', category: 'cereal' },

    // Nouilles & Pâtes
    { foodId: 'AU060', label: 'Spaghetti', nutrients: { calories: 158, protein: 5.8, carbs: 30.9, fat: 0.9 }, unit: 'g', category: 'nouilles' },
    { foodId: 'AU061', label: 'Penne', nutrients: { calories: 157, protein: 5.7, carbs: 30.8, fat: 0.9 }, unit: 'g', category: 'nouilles' },
    { foodId: 'AU065', label: 'Pates', nutrients: { calories: 157, protein: 5.7, carbs: 30.8, fat: 0.9 }, unit: 'g', category: 'nouilles' },
    { foodId: 'AU062', label: 'Nouilles de riz', nutrients: { calories: 108, protein: 1.6, carbs: 24.9, fat: 0.2 }, unit: 'g', category: 'nouilles' },
    { foodId: 'AU063', label: 'Tagliatelles', nutrients: { calories: 158, protein: 5.8, carbs: 30.9, fat: 0.9 }, unit: 'g', category: 'nouilles' },
    { foodId: 'AU064', label: 'Vermicelles', nutrients: { calories: 150, protein: 5.0, carbs: 32.0, fat: 0.5 }, unit: 'g', category: 'nouilles' },

    // Farines de base
    { foodId: 'AU029', label: 'Farine de blé T80', nutrients: { calories: 340, protein: 11, carbs: 70, fat: 1.5 }, unit: 'g', category: 'farine' },
    { foodId: 'AU030', label: 'Farine de blé T110', nutrients: { calories: 335, protein: 12, carbs: 67, fat: 2.7 }, unit: 'g', category: 'farine' },
    { foodId: 'AU031', label: 'Farine de seigle', nutrients: { calories: 335, protein: 8.5, carbs: 73, fat: 1.7 }, unit: 'g', category: 'farine' },
    { foodId: 'AU032', label: 'Farine de sarrasin', nutrients: { calories: 335, protein: 12, carbs: 67, fat: 2.7 }, unit: 'g', category: 'farine' },
    { foodId: 'AU033', label: 'Farine de pois chiche', nutrients: { calories: 387, protein: 22, carbs: 57, fat: 6.7 }, unit: 'g', category: 'farine' },
    { foodId: 'AU034', label: 'Farine de riz', nutrients: { calories: 366, protein: 6, carbs: 80, fat: 1 }, unit: 'g', category: 'farine' },
    { foodId: 'AU035', label: 'Farine de maïs', nutrients: { calories: 361, protein: 7, carbs: 76, fat: 3.9 }, unit: 'g', category: 'farine' },

    // Huiles vierges
    { foodId: 'AU036', label: "Huile d'olive extra vierge", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, unit: 'ml', category: 'huile' },
    { foodId: 'AU037', label: "Huile de colza", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, unit: 'ml', category: 'huile' },
    { foodId: 'AU038', label: "Huile de noix", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, unit: 'ml', category: 'huile' },
    { foodId: 'AU039', label: "Huile de lin", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, unit: 'ml', category: 'huile' },
    { foodId: 'AU040', label: "Huile de sésame", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, unit: 'ml', category: 'huile' },
    { foodId: 'AU041', label: "Huile de tournesol", nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 }, unit: 'ml', category: 'huile' },
    { foodId: 'AU042', label: "Huile de coco vierge", nutrients: { calories: 892, protein: 0, carbs: 0, fat: 99 }, unit: 'g', category: 'huile' },

    // Autres
    { foodId: 'AU043', label: 'Miel brut', nutrients: { calories: 304, protein: 0.3, carbs: 82, fat: 0 }, unit: 'g', category: 'autre' },
    { foodId: 'AU044', label: "Sirop d'erable pur", nutrients: { calories: 260, protein: 0, carbs: 67, fat: 0 }, unit: 'g', category: 'autre' },
    { foodId: 'AU045', label: 'Vinaigre de cidre', nutrients: { calories: 21, protein: 0, carbs: 0.9, fat: 0 }, unit: 'ml', category: 'autre' },
    { foodId: 'AU046', label: 'Vinaigre balsamique', nutrients: { calories: 88, protein: 0.5, carbs: 17, fat: 0 }, unit: 'ml', category: 'autre' },
    { foodId: 'AU047', label: 'Sel de mer', nutrients: { calories: 0, protein: 0, carbs: 0, fat: 0 }, unit: 'g', category: 'autre' },
    { foodId: 'AU048', label: 'Fleur de sel', nutrients: { calories: 0, protein: 0, carbs: 0, fat: 0 }, unit: 'g', category: 'autre' },
    { foodId: 'AU049', label: 'Poivre en grain', nutrients: { calories: 251, protein: 10, carbs: 64, fat: 3.3 }, unit: 'g', category: 'autre' },
    { foodId: 'AU050', label: 'Curcuma frais ou moulu', nutrients: { calories: 312, protein: 9.7, carbs: 67, fat: 3.3 }, unit: 'g', category: 'autre' },
    { foodId: 'AU051', label: 'Gingembre frais', nutrients: { calories: 80, protein: 1.8, carbs: 18, fat: 0.8 }, unit: 'g', category: 'autre' },
    { foodId: 'AU052', label: 'Cacao en poudre non sucré', nutrients: { calories: 228, protein: 19.6, carbs: 57.9, fat: 13.7 }, unit: 'g', category: 'autre' },
    { foodId: 'AU053', label: 'Algues séchées (nori, wakame, kombu…)', nutrients: { calories: 35, protein: 5.8, carbs: 5.1, fat: 0.3 }, unit: 'g', category: 'autre' },
]; 