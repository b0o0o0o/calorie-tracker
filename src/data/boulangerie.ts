
export interface Boulangerie {
    foodId: string;
    label: string;
    category: string;
    unit: 'g';
    nutrients: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
    };
}

export const BOULANGERIE: Boulangerie[] = [
    // 🥐 Viennoiseries françaises classiques
    {
        foodId: 'BO001',
        label: 'Croissant nature',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 403, protein: 6.7, carbs: 47.5, fat: 22.4 }
    },
    {
        foodId: 'BO002',
        label: 'Croissant aux amandes',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 440, protein: 7.3, carbs: 48.8, fat: 26.9 }
    },
    {
        foodId: 'BO003',
        label: 'Pain au chocolat',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 417, protein: 6.4, carbs: 45.2, fat: 25.1 }
    },
    {
        foodId: 'BO004',
        label: 'Pain aux raisins',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 394, protein: 5.7, carbs: 43.1, fat: 23.6 }
    },
    {
        foodId: 'BO005',
        label: 'Chausson aux pommes',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 379, protein: 4.9, carbs: 41.5, fat: 22.1 }
    },
    {
        foodId: 'BO006',
        label: 'Brioche',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 373, protein: 7.2, carbs: 49.7, fat: 18.3 }
    },
    {
        foodId: 'BO007',
        label: 'Brioche tressée',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 384, protein: 6.3, carbs: 48.5, fat: 20.7 }
    },
    {
        foodId: 'BO008',
        label: 'Brioche suisse',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 390, protein: 6.1, carbs: 47.8, fat: 21.9 }
    },
    {
        foodId: 'BO009',
        label: 'Kouglof',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 375, protein: 6.5, carbs: 44.0, fat: 20.5 }
    },
    {
        foodId: 'BO010',
        label: 'Pain viennois',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 350, protein: 7.0, carbs: 46.8, fat: 16.2 }
    },
    {
        foodId: 'BO011',
        label: 'Oranais (abricot)',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 387, protein: 5.5, carbs: 45.6, fat: 21.4 }
    },
    {
        foodId: 'BO012',
        label: 'Schneck',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 392, protein: 5.8, carbs: 46.0, fat: 22.5 }
    },
    {
        foodId: 'BO013',
        label: 'Croissant au jambon',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 408, protein: 8.2, carbs: 39.7, fat: 24.3 }
    },
    {
        foodId: 'BO014',
        label: 'Roulé à la cannelle',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 395, protein: 6.1, carbs: 49.3, fat: 21.2 }
    },
    {
        foodId: 'BO015',
        label: 'Pains au lait',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 343, protein: 6.4, carbs: 45.0, fat: 15.8 }
    },
    {
        foodId: 'BO016',
        label: 'Pains aux pépites de chocolat',
        category: 'boulangerie_viennoiserie',
        unit: 'g',
        nutrients: { calories: 382, protein: 5.8, carbs: 47.2, fat: 20.3 }
    },

    // 🍰 Pâtisseries françaises traditionnelles
    {
        foodId: 'BO017',
        label: 'Éclair au chocolat',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 374, protein: 6.2, carbs: 38.5, fat: 21.1 }
    },
    {
        foodId: 'BO018',
        label: 'Éclair au café',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 368, protein: 6.0, carbs: 39.1, fat: 19.7 }
    },
    {
        foodId: 'BO019',
        label: 'Religieuse',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 389, protein: 6.4, carbs: 40.0, fat: 22.3 }
    },
    {
        foodId: 'BO020',
        label: 'Paris-Brest',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 425, protein: 7.8, carbs: 41.2, fat: 27.5 }
    },
    {
        foodId: 'BO021',
        label: 'Mille-feuille',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 401, protein: 5.9, carbs: 42.0, fat: 24.0 }
    },
    {
        foodId: 'BO022',
        label: 'Opéra',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 418, protein: 6.7, carbs: 45.2, fat: 25.1 }
    },
    {
        foodId: 'BO023',
        label: 'Saint-Honoré',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 408, protein: 6.3, carbs: 42.4, fat: 23.5 }
    },
    {
        foodId: 'BO024',
        label: 'Tarte Tatin',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 377, protein: 3.7, carbs: 46.9, fat: 20.3 }
    },
    {
        foodId: 'BO025',
        label: 'Tarte aux pommes',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 369, protein: 3.9, carbs: 44.7, fat: 19.6 }
    },
    {
        foodId: 'BO026',
        label: 'Tarte au citron meringuée',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 389, protein: 4.0, carbs: 47.5, fat: 21.7 }
    },
    {
        foodId: 'BO027',
        label: 'Tarte aux fruits',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 358, protein: 3.5, carbs: 45.2, fat: 18.4 }
    },
    {
        foodId: 'BO028',
        label: 'Tarte aux fraises',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 364, protein: 3.8, carbs: 45.5, fat: 19.1 }
    },
    {
        foodId: 'BO029',
        label: 'Flan pâtissier',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 341, protein: 6.5, carbs: 41.1, fat: 15.3 }
    },
    {
        foodId: 'BO030',
        label: 'Clafoutis',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 318, protein: 6.0, carbs: 36.0, fat: 14.5 }
    },
    {
        foodId: 'BO031',
        label: 'Moelleux au chocolat',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 426, protein: 6.8, carbs: 42.9, fat: 26.5 }
    },
    {
        foodId: 'BO032',
        label: 'Fondant au chocolat',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 435, protein: 6.1, carbs: 44.1, fat: 27.3 }
    },
    {
        foodId: 'BO033',
        label: 'Gâteau au yaourt',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 345, protein: 5.2, carbs: 44.0, fat: 16.7 }
    },
    {
        foodId: 'BO034',
        label: 'Gâteau basque',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 388, protein: 6.0, carbs: 43.1, fat: 22.6 }
    },
    {
        foodId: 'BO035',
        label: 'Forêt-noire',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 407, protein: 5.6, carbs: 45.0, fat: 23.9 }
    },
    {
        foodId: 'BO036',
        label: 'Charlotte aux fruits',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 333, protein: 4.8, carbs: 40.0, fat: 15.2 }
    },
    {
        foodId: 'BO037',
        label: 'Moka',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 414, protein: 5.7, carbs: 42.3, fat: 25.4 }
    },
    {
        foodId: 'BO038',
        label: 'Baba au rhum',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 352, protein: 5.4, carbs: 39.7, fat: 17.5 }
    },
    {
        foodId: 'BO039',
        label: 'Savarin',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 359, protein: 5.5, carbs: 41.5, fat: 18.3 }
    },
    {
        foodId: 'BO040',
        label: 'Canelé',
        category: 'boulangerie_patisserie',
        unit: 'g',
        nutrients: { calories: 326, protein: 5.0, carbs: 40.4, fat: 14.7 }
    },

    // 🍪 Biscuits, petits gâteaux et mignardises
    {
        foodId: 'BO041',
        label: 'Madeleines',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 396, protein: 5.6, carbs: 48.5, fat: 21.5 }
    },
    {
        foodId: 'BO042',
        label: 'Financiers',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 438, protein: 6.3, carbs: 49.8, fat: 25.9 }
    },
    {
        foodId: 'BO043',
        label: 'Tuiles aux amandes',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 421, protein: 6.5, carbs: 45.7, fat: 24.2 }
    },
    {
        foodId: 'BO044',
        label: 'Sablés',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 434, protein: 5.3, carbs: 51.2, fat: 23.8 }
    },
    {
        foodId: 'BO045',
        label: 'Palets bretons',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 437, protein: 4.9, carbs: 52.3, fat: 24.5 }
    },
    {
        foodId: 'BO046',
        label: 'Langues de chat',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 410, protein: 5.0, carbs: 50.0, fat: 22.0 }
    },
    {
        foodId: 'BO047',
        label: 'Rochers coco',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 408, protein: 5.8, carbs: 44.1, fat: 23.6 }
    },
    {
        foodId: 'BO048',
        label: 'Macarons',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 456, protein: 5.9, carbs: 54.6, fat: 24.7 }
    },
    {
        foodId: 'BO049',
        label: 'Meringues',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 389, protein: 3.1, carbs: 85.5, fat: 0.2 }
    },
    {
        foodId: 'BO050',
        label: 'Cookies',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 472, protein: 5.7, carbs: 58.3, fat: 25.3 }
    },
    {
        foodId: 'BO051',
        label: 'Brownies',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 466, protein: 5.5, carbs: 51.2, fat: 27.1 }
    },
    {
        foodId: 'BO052',
        label: 'Shortbreads',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 478, protein: 4.9, carbs: 57.7, fat: 28.3 }
    },
    {
        foodId: 'BO053',
        label: 'Churros',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 412, protein: 4.4, carbs: 47.9, fat: 23.5 }
    },
    {
        foodId: 'BO054',
        label: 'Beignets',
        category: 'boulangerie_biscuits',
        unit: 'g',
        nutrients: { calories: 430, protein: 5.0, carbs: 50.2, fat: 24.9 }
    },

    // 🥖 Pains traditionnels
    {
        foodId: 'BO055',
        label: 'Baguette tradition',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 267, protein: 7.8, carbs: 54.1, fat: 1.2 }
    },
    {
        foodId: 'BO056',
        label: 'Baguette blanche',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 274, protein: 8.0, carbs: 55.0, fat: 1.3 }
    },
    {
        foodId: 'BO057',
        label: 'Pain de campagne',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 262, protein: 7.2, carbs: 50.6, fat: 1.5 }
    },
    {
        foodId: 'BO058',
        label: 'Pain complet',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 251, protein: 9.2, carbs: 43.8, fat: 2.2 }
    },
    {
        foodId: 'BO059',
        label: 'Pain aux céréales',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 269, protein: 8.7, carbs: 45.5, fat: 3.2 }
    },
    {
        foodId: 'BO060',
        label: 'Pain aux noix',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 288, protein: 8.0, carbs: 42.3, fat: 4.8 }
    },
    {
        foodId: 'BO061',
        label: 'Pain aux figues',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 295, protein: 7.2, carbs: 49.9, fat: 2.6 }
    },
    {
        foodId: 'BO062',
        label: 'Pain de seigle',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 259, protein: 6.7, carbs: 47.2, fat: 1.6 }
    },
    {
        foodId: 'BO063',
        label: 'Pain au levain',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 260, protein: 7.3, carbs: 48.0, fat: 1.5 }
    },
    {
        foodId: 'BO064',
        label: 'Pain brioché',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 314, protein: 8.2, carbs: 48.7, fat: 9.0 }
    },
    {
        foodId: 'BO065',
        label: 'Pain bûcheron',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 276, protein: 9.0, carbs: 42.5, fat: 2.7 }
    },
    {
        foodId: 'BO066',
        label: 'Pain viennois',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 281, protein: 7.5, carbs: 47.3, fat: 4.3 }
    },
    {
        foodId: 'BO067',
        label: 'Pain pita',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 275, protein: 8.4, carbs: 55.2, fat: 1.2 }
    },
    {
        foodId: 'BO068',
        label: 'Pain polaire',
        category: 'boulangerie_pain_traditionnel',
        unit: 'g',
        nutrients: { calories: 251, protein: 6.3, carbs: 44.7, fat: 2.1 }
    },

    // 🍞 Pains spéciaux et pains du monde
    {
        foodId: 'BO069',
        label: 'Pain de mie',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 272, protein: 7.3, carbs: 49.3, fat: 3.3 }
    },
    {
        foodId: 'BO070',
        label: 'Pain de mie complet',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 260, protein: 8.4, carbs: 42.7, fat: 3.5 }
    },
    {
        foodId: 'BO071',
        label: 'Pain de mie sans croûte',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 267, protein: 7.5, carbs: 47.1, fat: 3.1 }
    },
    {
        foodId: 'BO072',
        label: 'Pain burger (bun)',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 289, protein: 8.1, carbs: 51.4, fat: 4.5 }
    },
    {
        foodId: 'BO073',
        label: 'Pain hot dog',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 284, protein: 7.2, carbs: 49.8, fat: 4.2 }
    },
    {
        foodId: 'BO074',
        label: 'Pain à bagel',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 295, protein: 9.1, carbs: 55.3, fat: 2.6 }
    },
    {
        foodId: 'BO075',
        label: 'Pain naan',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 310, protein: 8.5, carbs: 49.0, fat: 8.2 }
    },
    {
        foodId: 'BO076',
        label: 'Pain chapati',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 285, protein: 7.9, carbs: 48.2, fat: 4.0 }
    },
    {
        foodId: 'BO077',
        label: 'Pain matlouh',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 292, protein: 8.0, carbs: 50.6, fat: 3.6 }
    },
    {
        foodId: 'BO078',
        label: 'Pain lavash',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 278, protein: 7.1, carbs: 48.7, fat: 2.9 }
    },
    {
        foodId: 'BO079',
        label: 'Pain suédois (polarbröd)',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 271, protein: 7.0, carbs: 46.8, fat: 3.1 }
    },
    {
        foodId: 'BO080',
        label: 'Focaccia',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 327, protein: 7.2, carbs: 48.4, fat: 11.3 }
    },
    {
        foodId: 'BO081',
        label: 'Ciabatta',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 281, protein: 7.5, carbs: 52.2, fat: 3.5 }
    },
    {
        foodId: 'BO082',
        label: 'Pain allemand',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 266, protein: 8.6, carbs: 39.0, fat: 3.1 }
    },
    {
        foodId: 'BO083',
        label: 'Pain brésilien (pão de queijo)',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 344, protein: 5.8, carbs: 42.3, fat: 18.4 }
    },
    {
        foodId: 'BO084',
        label: 'Pain irlandais (soda bread)',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 263, protein: 7.4, carbs: 47.9, fat: 3.0 }
    },
    {
        foodId: 'BO085',
        label: 'Pain islandais (rúgbrauð)',
        category: 'boulangerie_pain_special',
        unit: 'g',
        nutrients: { calories: 252, protein: 6.9, carbs: 44.7, fat: 1.8 }
    },

    // 🍞 Brioches et pains sucrés du monde
    {
        foodId: 'BO086',
        label: 'Panettone (Italie)',
        category: 'boulangerie_pain_sucre',
        unit: 'g',
        nutrients: { calories: 391, protein: 6.3, carbs: 52.1, fat: 17.4 }
    },
    {
        foodId: 'BO087',
        label: 'Pandoro',
        category: 'boulangerie_pain_sucre',
        unit: 'g',
        nutrients: { calories: 410, protein: 6.1, carbs: 54.3, fat: 18.5 }
    },
    {
        foodId: 'BO088',
        label: 'Colomba di Pasqua',
        category: 'boulangerie_pain_sucre',
        unit: 'g',
        nutrients: { calories: 423, protein: 6.7, carbs: 55.8, fat: 19.2 }
    },
    {
        foodId: 'BO089',
        label: 'Babka (Europe de l\'Est)',
        category: 'boulangerie_pain_sucre',
        unit: 'g',
        nutrients: { calories: 435, protein: 5.9, carbs: 53.4, fat: 22.1 }
    },
    {
        foodId: 'BO090',
        label: 'Tsoureki (Grèce)',
        category: 'boulangerie_pain_sucre',
        unit: 'g',
        nutrients: { calories: 402, protein: 6.8, carbs: 52.2, fat: 17.6 }
    },
    {
        foodId: 'BO091',
        label: 'Challah (pain tressé juif)',
        category: 'boulangerie_pain_sucre',
        unit: 'g',
        nutrients: { calories: 378, protein: 7.2, carbs: 49.0, fat: 13.8 }
    },
    {
        foodId: 'BO092',
        label: 'Brioche polonaise',
        category: 'boulangerie_pain_sucre',
        unit: 'g',
        nutrients: { calories: 399, protein: 6.0, carbs: 50.2, fat: 18.3 }
    },
    {
        foodId: 'BO093',
        label: 'Kouign-amann (Bretagne)',
        category: 'boulangerie_pain_sucre',
        unit: 'g',
        nutrients: { calories: 452, protein: 5.3, carbs: 44.6, fat: 29.7 }
    },
    {
        foodId: 'BO094',
        label: 'Ensaimada (Espagne)',
        category: 'boulangerie_pain_sucre',
        unit: 'g',
        nutrients: { calories: 426, protein: 6.5, carbs: 48.0, fat: 23.4 }
    },
    {
        foodId: 'BO095',
        label: 'Zopf (Suisse)',
        category: 'boulangerie_pain_sucre',
        unit: 'g',
        nutrients: { calories: 387, protein: 6.7, carbs: 47.6, fat: 16.1 }
    },
    {
        foodId: 'BO096',
        label: 'Cinnamon roll',
        category: 'boulangerie_pain_sucre',
        unit: 'g',
        nutrients: { calories: 419, protein: 5.8, carbs: 54.0, fat: 20.2 }
    }
];

export const BOULANGERIE_CATEGORIES = {
    boulangerie_viennoiserie: { label: 'Viennoiseries françaises classiques' },
    boulangerie_patisserie: { label: 'Pâtisseries françaises traditionnelles' },
    boulangerie_biscuits: { label: 'Biscuits, petits gâteaux et mignardises' },
    boulangerie_pain_traditionnel: { label: 'Pains traditionnels' },
    boulangerie_pain_special: { label: 'Pains spéciaux et pains du monde' },
    boulangerie_pain_sucre: { label: 'Brioches et pains sucrés du monde' }
}; 