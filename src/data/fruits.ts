
export interface Fruit {
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

export const FRUITS: Fruit[] = [
    // 🍎 Fruits à pépins
    {
        foodId: 'FR001',
        label: 'Pomme',
        category: 'fruits_pepins',
        unit: 'g',
        nutrients: { calories: 81, protein: 0.4, carbs: 14.6, fat: 0.4 }
    },
    {
        foodId: 'FR002',
        label: 'Poire',
        category: 'fruits_pepins',
        unit: 'g',
        nutrients: { calories: 117, protein: 0.5, carbs: 30.6, fat: 0.9 }
    },
    {
        foodId: 'FR003',
        label: 'Coing',
        category: 'fruits_pepins',
        unit: 'g',
        nutrients: { calories: 74, protein: 0.6, carbs: 21.4, fat: 0.2 }
    },
    {
        foodId: 'FR004',
        label: 'Nashi',
        category: 'fruits_pepins',
        unit: 'g',
        nutrients: { calories: 53, protein: 0.8, carbs: 15.4, fat: 0.2 }
    },
    {
        foodId: 'FR005',
        label: 'Kiwano',
        category: 'fruits_pepins',
        unit: 'g',
        nutrients: { calories: 87, protein: 1.5, carbs: 16.8, fat: 0.5 }
    },
    {
        foodId: 'FR006',
        label: 'Kaki',
        category: 'fruits_pepins',
        unit: 'g',
        nutrients: { calories: 113, protein: 0.7, carbs: 28.5, fat: 0.2 }
    },
    {
        foodId: 'FR007',
        label: 'Grenade',
        category: 'fruits_pepins',
        unit: 'g',
        nutrients: { calories: 137, protein: 1.9, carbs: 30.3, fat: 0.4 }
    },
    {
        foodId: 'FR008',
        label: 'Poire cactus',
        category: 'fruits_pepins',
        unit: 'g',
        nutrients: { calories: 98, protein: 0.7, carbs: 22.1, fat: 0.3 }
    },
    {
        foodId: 'FR009',
        label: 'Pepino',
        category: 'fruits_pepins',
        unit: 'g',
        nutrients: { calories: 59, protein: 0.4, carbs: 13.9, fat: 0.2 }
    },
    {
        foodId: 'FR010',
        label: 'Néflier',
        category: 'fruits_pepins',
        unit: 'g',
        nutrients: { calories: 45, protein: 0.6, carbs: 11.3, fat: 0.1 }
    },
    {
        foodId: 'FR011',
        label: 'Star apple',
        category: 'fruits_pepins',
        unit: 'g',
        nutrients: { calories: 68, protein: 0.7, carbs: 15.2, fat: 0.2 }
    },

    // 🍊 Agrumes
    {
        foodId: 'FR012',
        label: 'Orange',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 79, protein: 0.7, carbs: 17.9, fat: 0.3 }
    },
    {
        foodId: 'FR013',
        label: 'Mandarine',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 82, protein: 0.6, carbs: 18.5, fat: 0.2 }
    },
    {
        foodId: 'FR014',
        label: 'Clémentine',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 70, protein: 0.6, carbs: 15.7, fat: 0.2 }
    },
    {
        foodId: 'FR015',
        label: 'Citron',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 36, protein: 0.9, carbs: 9.2, fat: 0.2 }
    },
    {
        foodId: 'FR016',
        label: 'Citron vert',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 43, protein: 0.8, carbs: 10.4, fat: 0.1 }
    },
    {
        foodId: 'FR017',
        label: 'Pamplemousse',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 50, protein: 0.7, carbs: 12.0, fat: 0.2 }
    },
    {
        foodId: 'FR018',
        label: 'Pomelo',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 46, protein: 0.5, carbs: 11.5, fat: 0.1 }
    },
    {
        foodId: 'FR019',
        label: 'Kumquat',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 71, protein: 1.4, carbs: 16.2, fat: 0.4 }
    },
    {
        foodId: 'FR020',
        label: 'Yuzu',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 38, protein: 0.6, carbs: 9.8, fat: 0.1 }
    },
    {
        foodId: 'FR021',
        label: 'Bergamote',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 44, protein: 0.9, carbs: 10.6, fat: 0.2 }
    },
    {
        foodId: 'FR022',
        label: 'Sudachi',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 40, protein: 0.8, carbs: 9.5, fat: 0.1 }
    },
    {
        foodId: 'FR023',
        label: 'Calamondin',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 42, protein: 1.0, carbs: 10.1, fat: 0.1 }
    },
    {
        foodId: 'FR024',
        label: 'Tangor',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 69, protein: 1.1, carbs: 14.5, fat: 0.2 }
    },
    {
        foodId: 'FR025',
        label: 'Tangelo',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 73, protein: 1.0, carbs: 15.2, fat: 0.3 }
    },
    {
        foodId: 'FR026',
        label: 'Limequat',
        category: 'fruits_agrumes',
        unit: 'g',
        nutrients: { calories: 55, protein: 1.2, carbs: 12.0, fat: 0.2 }
    },

    // 🍑 Fruits à noyau
    {
        foodId: 'FR027',
        label: 'Pêche',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 67, protein: 0.9, carbs: 14.6, fat: 0.3 }
    },
    {
        foodId: 'FR028',
        label: 'Nectarine',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 70, protein: 1.0, carbs: 15.2, fat: 0.3 }
    },
    {
        foodId: 'FR029',
        label: 'Abricot',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 48, protein: 0.8, carbs: 11.5, fat: 0.1 }
    },
    {
        foodId: 'FR030',
        label: 'Prune',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 57, protein: 0.9, carbs: 13.4, fat: 0.2 }
    },
    {
        foodId: 'FR031',
        label: 'Mirabelle',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 66, protein: 0.8, carbs: 14.9, fat: 0.2 }
    },
    {
        foodId: 'FR032',
        label: 'Reine-claude',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 65, protein: 0.9, carbs: 14.3, fat: 0.3 }
    },
    {
        foodId: 'FR033',
        label: 'Cerise',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 63, protein: 1.1, carbs: 14.0, fat: 0.2 }
    },
    {
        foodId: 'FR034',
        label: 'Griotte',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 58, protein: 0.9, carbs: 13.5, fat: 0.2 }
    },
    {
        foodId: 'FR035',
        label: 'Mangue',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 96, protein: 0.8, carbs: 22.8, fat: 0.4 }
    },
    {
        foodId: 'FR036',
        label: 'Litchi',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 66, protein: 0.9, carbs: 16.5, fat: 0.3 }
    },
    {
        foodId: 'FR037',
        label: 'Nèfle',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 47, protein: 0.6, carbs: 11.0, fat: 0.1 }
    },
    {
        foodId: 'FR038',
        label: 'Figue',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 74, protein: 0.8, carbs: 18.0, fat: 0.2 }
    },
    {
        foodId: 'FR039',
        label: 'Avocat',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 160, protein: 2.0, carbs: 8.5, fat: 15.0 }
    },
    {
        foodId: 'FR040',
        label: 'Dattes',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 282, protein: 2.4, carbs: 75.0, fat: 0.4 }
    },
    {
        foodId: 'FR041',
        label: 'Olive',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 115, protein: 0.8, carbs: 6.3, fat: 10.7 }
    },
    {
        foodId: 'FR042',
        label: 'Chérimole',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 101, protein: 1.6, carbs: 25.2, fat: 0.3 }
    },
    {
        foodId: 'FR043',
        label: 'Tamarillo',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 50, protein: 2.1, carbs: 11.3, fat: 0.3 }
    },
    {
        foodId: 'FR044',
        label: 'Lucuma',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 99, protein: 1.4, carbs: 24.0, fat: 0.4 }
    },
    {
        foodId: 'FR045',
        label: 'Sapotille',
        category: 'fruits_noyau',
        unit: 'g',
        nutrients: { calories: 124, protein: 0.9, carbs: 32.0, fat: 1.1 }
    },

    // 🍇 Fruits rouges & baies
    {
        foodId: 'FR046',
        label: 'Fraise',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 42, protein: 0.6, carbs: 9.1, fat: 0.3 }
    },
    {
        foodId: 'FR047',
        label: 'Framboise',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 52, protein: 1.2, carbs: 12.2, fat: 0.6 }
    },
    {
        foodId: 'FR048',
        label: 'Mûre',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 43, protein: 1.4, carbs: 9.6, fat: 0.5 }
    },
    {
        foodId: 'FR049',
        label: 'Myrtille',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 57, protein: 0.7, carbs: 14.2, fat: 0.3 }
    },
    {
        foodId: 'FR050',
        label: 'Cassis',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 63, protein: 1.4, carbs: 15.4, fat: 0.4 }
    },
    {
        foodId: 'FR051',
        label: 'Groseille',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 56, protein: 1.0, carbs: 13.8, fat: 0.2 }
    },
    {
        foodId: 'FR052',
        label: 'Canneberge',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 46, protein: 0.4, carbs: 12.0, fat: 0.1 }
    },
    {
        foodId: 'FR053',
        label: 'Airelle',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 55, protein: 0.5, carbs: 13.5, fat: 0.2 }
    },
    {
        foodId: 'FR054',
        label: 'Baie de sureau',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 73, protein: 1.0, carbs: 18.4, fat: 0.5 }
    },
    {
        foodId: 'FR055',
        label: 'Baie d\'aronia',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 55, protein: 1.4, carbs: 12.1, fat: 0.3 }
    },
    {
        foodId: 'FR056',
        label: 'Baie d\'açai',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 70, protein: 1.2, carbs: 13.0, fat: 4.5 }
    },
    {
        foodId: 'FR057',
        label: 'Goji',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 83, protein: 2.4, carbs: 21.3, fat: 0.3 }
    },
    {
        foodId: 'FR058',
        label: 'Physalis',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 53, protein: 1.3, carbs: 11.2, fat: 0.7 }
    },
    {
        foodId: 'FR059',
        label: 'Haskap',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 51, protein: 1.5, carbs: 12.0, fat: 0.5 }
    },
    {
        foodId: 'FR060',
        label: 'Boysenberry',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 50, protein: 1.0, carbs: 11.8, fat: 0.4 }
    },
    {
        foodId: 'FR061',
        label: 'Loganberry',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 45, protein: 1.1, carbs: 10.2, fat: 0.3 }
    },
    {
        foodId: 'FR062',
        label: 'Cloudberry',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 53, protein: 1.1, carbs: 11.4, fat: 0.4 }
    },
    {
        foodId: 'FR063',
        label: 'Serviceberry',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 58, protein: 1.6, carbs: 13.5, fat: 0.3 }
    },
    {
        foodId: 'FR064',
        label: 'Salmonberry',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 49, protein: 1.0, carbs: 10.8, fat: 0.3 }
    },
    {
        foodId: 'FR065',
        label: 'White currant',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 56, protein: 1.0, carbs: 13.8, fat: 0.2 }
    },
    {
        foodId: 'FR066',
        label: 'Black raspberry',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 52, protein: 1.4, carbs: 12.5, fat: 0.3 }
    },
    {
        foodId: 'FR067',
        label: 'Épine-vinette',
        category: 'fruits_baies',
        unit: 'g',
        nutrients: { calories: 64, protein: 1.0, carbs: 15.3, fat: 0.3 }
    },

    // 🍌 Fruits tropicaux & exotiques
    {
        foodId: 'FR068',
        label: 'Banane',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3 }
    },
    {
        foodId: 'FR069',
        label: 'Ananas',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 50, protein: 0.5, carbs: 13.1, fat: 0.1 }
    },
    {
        foodId: 'FR070',
        label: 'Papaye',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 43, protein: 0.5, carbs: 10.8, fat: 0.3 }
    },
    {
        foodId: 'FR071',
        label: 'Fruit de la passion',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 97, protein: 2.2, carbs: 23.4, fat: 0.4 }
    },
    {
        foodId: 'FR072',
        label: 'Goyave',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 68, protein: 2.6, carbs: 14.3, fat: 0.9 }
    },
    {
        foodId: 'FR073',
        label: 'Pitaya',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 50, protein: 1.1, carbs: 11.0, fat: 0.4 }
    },
    {
        foodId: 'FR074',
        label: 'Ramboutan',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 68, protein: 0.9, carbs: 16.5, fat: 0.2 }
    },
    {
        foodId: 'FR075',
        label: 'Mangoustan',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 73, protein: 0.4, carbs: 18.1, fat: 0.2 }
    },
    {
        foodId: 'FR076',
        label: 'Longane',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 60, protein: 1.3, carbs: 15.1, fat: 0.1 }
    },
    {
        foodId: 'FR077',
        label: 'Durian',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 147, protein: 1.5, carbs: 27.1, fat: 5.3 }
    },
    {
        foodId: 'FR078',
        label: 'Jackfruit',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 95, protein: 1.7, carbs: 23.5, fat: 0.6 }
    },
    {
        foodId: 'FR079',
        label: 'Carambole',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 31, protein: 1.0, carbs: 6.7, fat: 0.3 }
    },
    {
        foodId: 'FR080',
        label: 'Sapotille',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 124, protein: 0.9, carbs: 32.0, fat: 1.1 }
    },
    {
        foodId: 'FR081',
        label: 'Corossol',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 66, protein: 1.0, carbs: 16.8, fat: 0.3 }
    },
    {
        foodId: 'FR082',
        label: 'Tamarillo',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 50, protein: 2.1, carbs: 11.3, fat: 0.3 }
    },
    {
        foodId: 'FR083',
        label: 'Chérimole',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 101, protein: 1.6, carbs: 25.2, fat: 0.3 }
    },
    {
        foodId: 'FR084',
        label: 'Feijoa',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 55, protein: 0.9, carbs: 13.0, fat: 0.6 }
    },
    {
        foodId: 'FR085',
        label: 'Marula',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 97, protein: 1.2, carbs: 21.5, fat: 0.5 }
    },
    {
        foodId: 'FR086',
        label: 'Bael',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 137, protein: 1.8, carbs: 31.2, fat: 0.4 }
    },
    {
        foodId: 'FR087',
        label: 'Lulo',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 44, protein: 1.4, carbs: 10.2, fat: 0.3 }
    },
    {
        foodId: 'FR088',
        label: 'Salak',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 82, protein: 0.6, carbs: 20.9, fat: 0.4 }
    },
    {
        foodId: 'FR089',
        label: 'Camu camu',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 17, protein: 0.6, carbs: 4.0, fat: 0.2 }
    },
    {
        foodId: 'FR090',
        label: 'Langsat',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 57, protein: 1.0, carbs: 14.2, fat: 0.2 }
    },
    {
        foodId: 'FR091',
        label: 'Jambose',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 25, protein: 0.6, carbs: 6.0, fat: 0.1 }
    },
    {
        foodId: 'FR092',
        label: 'Canistel',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 140, protein: 1.5, carbs: 36.7, fat: 0.5 }
    },
    {
        foodId: 'FR093',
        label: 'Abiu',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 95, protein: 1.2, carbs: 22.5, fat: 0.3 }
    },
    {
        foodId: 'FR094',
        label: 'Monstera deliciosa',
        category: 'fruits_tropicaux',
        unit: 'g',
        nutrients: { calories: 100, protein: 1.3, carbs: 23.6, fat: 0.4 }
    },

    // 🍈 Melons & pastèques
    {
        foodId: 'FR095',
        label: 'Melon',
        category: 'fruits_melon',
        unit: 'g',
        nutrients: { calories: 34, protein: 0.8, carbs: 8.2, fat: 0.2 }
    },
    {
        foodId: 'FR096',
        label: 'Pastèque',
        category: 'fruits_melon',
        unit: 'g',
        nutrients: { calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2 }
    },
    {
        foodId: 'FR097',
        label: 'Melon d\'hiver',
        category: 'fruits_melon',
        unit: 'g',
        nutrients: { calories: 36, protein: 0.7, carbs: 8.9, fat: 0.2 }
    },
    {
        foodId: 'FR098',
        label: 'Melon Galia',
        category: 'fruits_melon',
        unit: 'g',
        nutrients: { calories: 35, protein: 0.7, carbs: 8.5, fat: 0.2 }
    },
    {
        foodId: 'FR099',
        label: 'Honeydew',
        category: 'fruits_melon',
        unit: 'g',
        nutrients: { calories: 36, protein: 0.5, carbs: 9.1, fat: 0.1 }
    },
    {
        foodId: 'FR100',
        label: 'Melon canari',
        category: 'fruits_melon',
        unit: 'g',
        nutrients: { calories: 33, protein: 0.6, carbs: 8.0, fat: 0.1 }
    },
    {
        foodId: 'FR101',
        label: 'Melon Santa Claus',
        category: 'fruits_melon',
        unit: 'g',
        nutrients: { calories: 35, protein: 0.8, carbs: 8.4, fat: 0.2 }
    },

    // 🌰 Fruits secs à coque
    {
        foodId: 'FR102',
        label: 'Noix',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 654, protein: 15.2, carbs: 13.7, fat: 65.2 }
    },
    {
        foodId: 'FR103',
        label: 'Noisette',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 628, protein: 15.0, carbs: 16.7, fat: 60.8 }
    },
    {
        foodId: 'FR104',
        label: 'Amande',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 579, protein: 21.2, carbs: 21.7, fat: 49.9 }
    },
    {
        foodId: 'FR105',
        label: 'Pistache',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 562, protein: 20.2, carbs: 28.0, fat: 45.4 }
    },
    {
        foodId: 'FR106',
        label: 'Noix de cajou',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 553, protein: 18.2, carbs: 30.2, fat: 43.9 }
    },
    {
        foodId: 'FR107',
        label: 'Noix de pécan',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 691, protein: 9.2, carbs: 13.9, fat: 72.0 }
    },
    {
        foodId: 'FR108',
        label: 'Noix de macadamia',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 718, protein: 7.9, carbs: 13.8, fat: 75.8 }
    },
    {
        foodId: 'FR109',
        label: 'Châtaigne',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 213, protein: 2.4, carbs: 45.5, fat: 2.2 }
    },
    {
        foodId: 'FR110',
        label: 'Noix du Brésil',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 659, protein: 14.3, carbs: 11.7, fat: 67.1 }
    },
    {
        foodId: 'FR111',
        label: 'Noix de coco',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 354, protein: 3.3, carbs: 15.2, fat: 33.5 }
    },
    {
        foodId: 'FR112',
        label: 'Pignon de pin',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 673, protein: 13.7, carbs: 13.1, fat: 68.4 }
    },
    {
        foodId: 'FR113',
        label: 'Ginkgo',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 182, protein: 4.3, carbs: 37.6, fat: 1.7 }
    },
    {
        foodId: 'FR114',
        label: 'Pili nut',
        category: 'fruits_secs',
        unit: 'g',
        nutrients: { calories: 719, protein: 11.0, carbs: 13.0, fat: 75.0 }
    },

    // 🥥 Fruits transformés ou secs
    {
        foodId: 'FR115',
        label: 'Raisin sec',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 299, protein: 3.1, carbs: 79.2, fat: 0.5 }
    },
    {
        foodId: 'FR116',
        label: 'Abricot sec',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 241, protein: 3.4, carbs: 63.9, fat: 0.5 }
    },
    {
        foodId: 'FR117',
        label: 'Figue sèche',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 249, protein: 3.3, carbs: 63.9, fat: 0.9 }
    },
    {
        foodId: 'FR118',
        label: 'Dattes séchées',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 282, protein: 2.5, carbs: 75.0, fat: 0.4 }
    },
    {
        foodId: 'FR119',
        label: 'Pruneau',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 240, protein: 2.2, carbs: 63.9, fat: 0.4 }
    },
    {
        foodId: 'FR120',
        label: 'Pommes séchées',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 243, protein: 0.9, carbs: 65.9, fat: 0.3 }
    },
    {
        foodId: 'FR121',
        label: 'Bananes séchées',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 346, protein: 3.9, carbs: 88.3, fat: 0.6 }
    },
    {
        foodId: 'FR122',
        label: 'Cranberries séchées',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 325, protein: 0.1, carbs: 82.0, fat: 1.3 }
    },
    {
        foodId: 'FR123',
        label: 'Mangue séchée',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 314, protein: 2.9, carbs: 78.6, fat: 0.6 }
    },
    {
        foodId: 'FR124',
        label: 'Papaye séchée',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 327, protein: 1.5, carbs: 82.2, fat: 0.4 }
    },
    {
        foodId: 'FR125',
        label: 'Ananas séché',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 349, protein: 2.3, carbs: 87.0, fat: 0.4 }
    },
    {
        foodId: 'FR126',
        label: 'Kiwis séchés',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 341, protein: 1.5, carbs: 84.2, fat: 0.6 }
    },
    {
        foodId: 'FR127',
        label: 'Poires séchées',
        category: 'fruits_transformes',
        unit: 'g',
        nutrients: { calories: 262, protein: 1.6, carbs: 69.2, fat: 0.2 }
    }
];

export const FRUIT_CATEGORIES = {
    fruits_pepins: { label: 'Fruits à pépins' },
    fruits_agrumes: { label: 'Agrumes' },
    fruits_noyau: { label: 'Fruits à noyau' },
    fruits_baies: { label: 'Fruits rouges & baies' },
    fruits_tropicaux: { label: 'Fruits tropicaux & exotiques' },
    fruits_melon: { label: 'Melons & pastèques' },
    fruits_secs: { label: 'Fruits secs à coque' },
    fruits_transformes: { label: 'Fruits transformés ou secs' }
}; 