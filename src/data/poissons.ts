
export interface Poisson {
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

export const POISSONS: Poisson[] = [
    // 🐟 Poissons maigres
    {
        foodId: 'PO001',
        label: 'Cabillaud (morue fraîche)',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 80, protein: 18.0, carbs: 0.0, fat: 0.7 }
    },
    {
        foodId: 'PO002',
        label: 'Colin (lieu noir)',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 85, protein: 18.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO003',
        label: 'Colin (lieu jaune)',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 90, protein: 19.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO004',
        label: 'Merlan',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 82, protein: 17.0, carbs: 0.0, fat: 0.9 }
    },
    {
        foodId: 'PO005',
        label: 'Merlu',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 91, protein: 18.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO006',
        label: 'Sole',
        category: 'poisson_plat',
        unit: 'g',
        nutrients: { calories: 91, protein: 18.0, carbs: 0.0, fat: 1.2 }
    },
    {
        foodId: 'PO007',
        label: 'Limande',
        category: 'poisson_plat',
        unit: 'g',
        nutrients: { calories: 90, protein: 18.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO008',
        label: 'Plie',
        category: 'poisson_plat',
        unit: 'g',
        nutrients: { calories: 90, protein: 18.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO009',
        label: 'Églefin (aiglefin)',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 71, protein: 16.0, carbs: 0.0, fat: 0.6 }
    },
    {
        foodId: 'PO010',
        label: 'Brosme',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 88, protein: 19.0, carbs: 0.0, fat: 1.5 }
    },
    {
        foodId: 'PO011',
        label: 'Tacaud',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 90, protein: 19.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO012',
        label: 'Bar (loup de mer)',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 97, protein: 20.0, carbs: 0.0, fat: 1.8 }
    },
    {
        foodId: 'PO013',
        label: 'Dorade grise',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 100, protein: 20.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO014',
        label: 'Dorade royale',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 100, protein: 20.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO015',
        label: 'Truite (non fumée)',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 102, protein: 20.0, carbs: 0.0, fat: 3.5 }
    },
    {
        foodId: 'PO016',
        label: 'Sandre',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 84, protein: 18.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO017',
        label: 'Mulet',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 120, protein: 20.0, carbs: 0.0, fat: 5.0 }
    },
    {
        foodId: 'PO018',
        label: 'Carpe',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 127, protein: 17.0, carbs: 0.0, fat: 5.6 }
    },
    {
        foodId: 'PO019',
        label: 'Perche',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 91, protein: 19.0, carbs: 0.0, fat: 1.2 }
    },
    {
        foodId: 'PO020',
        label: 'Ombre chevalier',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 90, protein: 19.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO021',
        label: 'Tanche',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 88, protein: 18.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO022',
        label: 'Tilapia',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 96, protein: 20.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO023',
        label: 'Poisson-sabre',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 110, protein: 20.0, carbs: 0.0, fat: 3.0 }
    },
    {
        foodId: 'PO024',
        label: 'Grondin',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 92, protein: 19.0, carbs: 0.0, fat: 1.5 }
    },
    {
        foodId: 'PO025',
        label: 'Chevesne',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 94, protein: 18.0, carbs: 0.0, fat: 2.0 }
    },

    // 🐠 Poissons gras
    {
        foodId: 'PO026',
        label: 'Saumon',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 208, protein: 20.0, carbs: 0.0, fat: 13.0 }
    },
    {
        foodId: 'PO027',
        label: 'Truite fumée',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 180, protein: 21.0, carbs: 0.0, fat: 10.0 }
    },
    {
        foodId: 'PO028',
        label: 'Maquereau',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 205, protein: 18.0, carbs: 0.0, fat: 13.5 }
    },
    {
        foodId: 'PO029',
        label: 'Hareng',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 203, protein: 19.0, carbs: 0.0, fat: 12.0 }
    },
    {
        foodId: 'PO030',
        label: 'Sardine',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 200, protein: 21.0, carbs: 0.0, fat: 11.0 }
    },
    {
        foodId: 'PO031',
        label: 'Thon',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 144, protein: 23.0, carbs: 0.0, fat: 5.0 }
    },
    {
        foodId: 'PO032',
        label: 'Anguille',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 236, protein: 18.0, carbs: 0.0, fat: 18.0 }
    },
    {
        foodId: 'PO033',
        label: 'Anchois',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 210, protein: 29.0, carbs: 0.0, fat: 10.0 }
    },
    {
        foodId: 'PO034',
        label: 'Espadon',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 144, protein: 23.0, carbs: 0.0, fat: 5.0 }
    },
    {
        foodId: 'PO035',
        label: 'Flétan',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 105, protein: 21.0, carbs: 0.0, fat: 3.0 }
    },
    {
        foodId: 'PO036',
        label: 'Sériole (limon)',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 125, protein: 23.0, carbs: 0.0, fat: 4.0 }
    },
    {
        foodId: 'PO037',
        label: 'Poisson-lait',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 115, protein: 20.0, carbs: 0.0, fat: 4.5 }
    },
    {
        foodId: 'PO038',
        label: 'Capelan',
        category: 'poisson_gras',
        unit: 'g',
        nutrients: { calories: 150, protein: 22.0, carbs: 0.0, fat: 6.0 }
    },
    {
        foodId: 'PO039',
        label: 'Marlin',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 140, protein: 24.0, carbs: 0.0, fat: 4.0 }
    },
    {
        foodId: 'PO040',
        label: 'Mahi-mahi (coryphène)',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 100, protein: 22.0, carbs: 0.0, fat: 1.5 }
    },
    {
        foodId: 'PO041',
        label: 'Denti',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 96, protein: 20.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO042',
        label: 'Vivaneau',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 100, protein: 20.0, carbs: 0.0, fat: 2.0 }
    },

    // 🐟 Poissons plats
    {
        foodId: 'PO043',
        label: 'Sole',
        category: 'poisson_plat',
        unit: 'g',
        nutrients: { calories: 91, protein: 18.0, carbs: 0.0, fat: 1.2 }
    },
    {
        foodId: 'PO044',
        label: 'Turbot',
        category: 'poisson_plat',
        unit: 'g',
        nutrients: { calories: 95, protein: 19.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO045',
        label: 'Barbue',
        category: 'poisson_plat',
        unit: 'g',
        nutrients: { calories: 89, protein: 19.0, carbs: 0.0, fat: 1.6 }
    },
    {
        foodId: 'PO046',
        label: 'Plie',
        category: 'poisson_plat',
        unit: 'g',
        nutrients: { calories: 91, protein: 18.0, carbs: 0.0, fat: 1.1 }
    },
    {
        foodId: 'PO047',
        label: 'Limande',
        category: 'poisson_plat',
        unit: 'g',
        nutrients: { calories: 90, protein: 18.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO048',
        label: 'Saint-Pierre',
        category: 'poisson_plat',
        unit: 'g',
        nutrients: { calories: 92, protein: 18.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO049',
        label: 'Flet',
        category: 'poisson_plat',
        unit: 'g',
        nutrients: { calories: 90, protein: 18.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO050',
        label: 'Raie',
        category: 'poisson_plat',
        unit: 'g',
        nutrients: { calories: 95, protein: 21.0, carbs: 0.0, fat: 1.0 }
    },

    // 🐟 Poissons d'eau douce
    {
        foodId: 'PO051',
        label: 'Truite',
        category: 'poisson_eau_douce',
        unit: 'g',
        nutrients: { calories: 102, protein: 20.0, carbs: 0.0, fat: 3.5 }
    },
    {
        foodId: 'PO052',
        label: 'Perche',
        category: 'poisson_eau_douce',
        unit: 'g',
        nutrients: { calories: 91, protein: 19.0, carbs: 0.0, fat: 1.2 }
    },
    {
        foodId: 'PO053',
        label: 'Brochet',
        category: 'poisson_eau_douce',
        unit: 'g',
        nutrients: { calories: 88, protein: 19.0, carbs: 0.0, fat: 1.2 }
    },
    {
        foodId: 'PO054',
        label: 'Sandre',
        category: 'poisson_eau_douce',
        unit: 'g',
        nutrients: { calories: 84, protein: 18.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO055',
        label: 'Carpe',
        category: 'poisson_eau_douce',
        unit: 'g',
        nutrients: { calories: 127, protein: 17.0, carbs: 0.0, fat: 5.6 }
    },
    {
        foodId: 'PO056',
        label: 'Silure',
        category: 'poisson_eau_douce',
        unit: 'g',
        nutrients: { calories: 97, protein: 18.0, carbs: 0.0, fat: 2.5 }
    },
    {
        foodId: 'PO057',
        label: 'Tanche',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 88, protein: 18.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO058',
        label: 'Ombre chevalier',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 90, protein: 19.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO059',
        label: 'Chevesne',
        category: 'poisson_maigre',
        unit: 'g',
        nutrients: { calories: 94, protein: 18.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO060',
        label: 'Anguille',
        category: 'poisson_eau_douce',
        unit: 'g',
        nutrients: { calories: 281, protein: 18.4, carbs: 0.0, fat: 23.8 }
    },
    {
        foodId: 'PO061',
        label: 'Black bass',
        category: 'poisson_eau_douce',
        unit: 'g',
        nutrients: { calories: 110, protein: 20.0, carbs: 0.0, fat: 3.5 }
    },
    {
        foodId: 'PO062',
        label: 'Goujon',
        category: 'poisson_eau_douce',
        unit: 'g',
        nutrients: { calories: 95, protein: 19.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO063',
        label: 'Brème',
        category: 'poisson_eau_douce',
        unit: 'g',
        nutrients: { calories: 100, protein: 18.0, carbs: 0.0, fat: 3.0 }
    },
    {
        foodId: 'PO064',
        label: 'Rotengle',
        category: 'poisson_eau_douce',
        unit: 'g',
        nutrients: { calories: 92, protein: 18.0, carbs: 0.0, fat: 2.0 }
    },

    // 🌴 Poissons tropicaux
    {
        foodId: 'PO065',
        label: 'Tilapia',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 96, protein: 20.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO066',
        label: 'Denti',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 96, protein: 20.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO067',
        label: 'Vivaneau',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 100, protein: 20.0, carbs: 0.0, fat: 2.0 }
    },
    {
        foodId: 'PO068',
        label: 'Poisson-perroquet',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 102, protein: 22.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO069',
        label: 'Barracuda',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 130, protein: 24.0, carbs: 0.0, fat: 3.0 }
    },
    {
        foodId: 'PO070',
        label: 'Capitaine',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 140, protein: 22.0, carbs: 0.0, fat: 4.0 }
    },
    {
        foodId: 'PO071',
        label: 'Marlin',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 140, protein: 24.0, carbs: 0.0, fat: 4.0 }
    },
    {
        foodId: 'PO072',
        label: 'Garoupa (mérou tropical)',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 112, protein: 23.0, carbs: 0.0, fat: 2.5 }
    },
    {
        foodId: 'PO073',
        label: 'Thazard',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 125, protein: 21.0, carbs: 0.0, fat: 5.0 }
    },
    {
        foodId: 'PO074',
        label: 'Thon à nageoires jaunes',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 130, protein: 25.0, carbs: 0.0, fat: 3.0 }
    },
    {
        foodId: 'PO075',
        label: 'Thon à nageoires jaunes',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 130, protein: 25.0, carbs: 0.0, fat: 3.0 }
    },
    {
        foodId: 'PO076',
        label: 'Mahi-mahi (coryphène)',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 100, protein: 22.0, carbs: 0.0, fat: 1.5 }
    },
    {
        foodId: 'PO077',
        label: 'Carangue',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 145, protein: 23.0, carbs: 0.0, fat: 5.0 }
    },
    {
        foodId: 'PO078',
        label: 'Poisson-ballon (fugu)',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 120, protein: 22.0, carbs: 0.0, fat: 4.0 }
    },
    {
        foodId: 'PO079',
        label: 'Poisson-globe',
        category: 'poisson_tropical',
        unit: 'g',
        nutrients: { calories: 120, protein: 22.0, carbs: 0.0, fat: 4.0 }
    },

    // 🧂 Poissons transformés
    {
        foodId: 'PO080',
        label: 'Morue salée',
        category: 'poisson_transforme',
        unit: 'g',
        nutrients: { calories: 136, protein: 30.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO081',
        label: 'Hareng fumé',
        category: 'poisson_transforme',
        unit: 'g',
        nutrients: { calories: 203, protein: 19.0, carbs: 0.0, fat: 12.0 }
    },
    {
        foodId: 'PO082',
        label: 'Truite fumée',
        category: 'poisson_transforme',
        unit: 'g',
        nutrients: { calories: 180, protein: 21.0, carbs: 0.0, fat: 10.0 }
    },
    {
        foodId: 'PO083',
        label: 'Saumon fumé',
        category: 'poisson_transforme',
        unit: 'g',
        nutrients: { calories: 180, protein: 21.0, carbs: 0.0, fat: 10.0 }
    },
    {
        foodId: 'PO084',
        label: 'Anchois marinés',
        category: 'poisson_transforme',
        unit: 'g',
        nutrients: { calories: 210, protein: 29.0, carbs: 0.0, fat: 10.0 }
    },
    {
        foodId: 'PO085',
        label: 'Sardines en conserve',
        category: 'poisson_transforme',
        unit: 'g',
        nutrients: { calories: 220, protein: 25.0, carbs: 0.0, fat: 14.0 }
    },
    {
        foodId: 'PO086',
        label: 'Thon en boîte',
        category: 'poisson_transforme',
        unit: 'g',
        nutrients: { calories: 160, protein: 26.0, carbs: 0.0, fat: 6.0 }
    },
    {
        foodId: 'PO087',
        label: 'Filets de maquereaux',
        category: 'poisson_transforme',
        unit: 'g',
        nutrients: { calories: 205, protein: 18.0, carbs: 0.0, fat: 13.5 }
    },
    {
        foodId: 'PO088',
        label: 'Tarama',
        category: 'poisson_transforme',
        unit: 'g',
        nutrients: { calories: 300, protein: 10.0, carbs: 2.0, fat: 28.0 }
    },
    {
        foodId: 'PO089',
        label: 'Rillettes de thon',
        category: 'poisson_transforme',
        unit: 'g',
        nutrients: { calories: 200, protein: 20.0, carbs: 2.0, fat: 12.0 }
    },
    {
        foodId: 'PO090',
        label: 'Rillettes de saumon',
        category: 'poisson_transforme',
        unit: 'g',
        nutrients: { calories: 220, protein: 18.0, carbs: 2.0, fat: 15.0 }
    },
    {
        foodId: 'PO091',
        label: 'Pinces de crabe',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 82, protein: 18.0, carbs: 0.0, fat: 1.1 }
    },
    {
        foodId: 'PO092',
        label: 'Cocktail de fruits de mer',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 150, protein: 20.0, carbs: 5.0, fat: 5.0 }
    },
    {
        foodId: 'PO093',
        label: 'Rillettes de crabe',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 200, protein: 15.0, carbs: 5.0, fat: 12.0 }
    },
    {
        foodId: 'PO094',
        label: 'Rillettes de crevettes',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 200, protein: 15.0, carbs: 5.0, fat: 12.0 }
    },
    {
        foodId: 'PO095',
        label: 'Bisque de homard',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 150, protein: 10.0, carbs: 5.0, fat: 8.0 }
    },
    {
        foodId: 'PO096',
        label: 'Soupe de crustacés',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 150, protein: 10.0, carbs: 5.0, fat: 8.0 }
    },
    {
        foodId: 'PO097',
        label: 'Terrine de crustacés',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 200, protein: 15.0, carbs: 5.0, fat: 12.0 }
    },
    {
        foodId: 'PO098',
        label: 'Raviolis de crevette',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 250, protein: 12.0, carbs: 30.0, fat: 8.0 }
    },
    {
        foodId: 'PO099',
        label: 'Boulettes de crevette',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 200, protein: 15.0, carbs: 10.0, fat: 10.0 }
    },

    // 🥚 Œufs et produits dérivés
    {
        foodId: 'PO108',
        label: 'Caviar (esturgeon)',
        category: 'oeufs_poisson',
        unit: 'g',
        nutrients: { calories: 264, protein: 24.0, carbs: 4.0, fat: 18.0 }
    },
    {
        foodId: 'PO109',
        label: 'Œufs de saumon',
        category: 'oeufs_poisson',
        unit: 'g',
        nutrients: { calories: 250, protein: 29.0, carbs: 2.9, fat: 14.0 }
    },
    {
        foodId: 'PO110',
        label: 'Œufs de truite',
        category: 'oeufs_poisson',
        unit: 'g',
        nutrients: { calories: 250, protein: 29.0, carbs: 2.9, fat: 14.0 }
    },
    {
        foodId: 'PO111',
        label: 'Œufs de lompe',
        category: 'oeufs_poisson',
        unit: 'g',
        nutrients: { calories: 250, protein: 29.0, carbs: 2.9, fat: 14.0 }
    },
    {
        foodId: 'PO112',
        label: 'Boutargue (œufs de mulet séchés)',
        category: 'oeufs_poisson',
        unit: 'g',
        nutrients: { calories: 300, protein: 30.0, carbs: 0.0, fat: 20.0 }
    },
    {
        foodId: 'PO113',
        label: 'Tarama (crème d\'œufs de poisson)',
        category: 'oeufs_poisson',
        unit: 'g',
        nutrients: { calories: 300, protein: 10.0, carbs: 2.0, fat: 28.0 }
    },

    // 🦐 Crustacés
    {
        foodId: 'PO114',
        label: 'Crevette grise',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 85, protein: 18.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO115',
        label: 'Crevette rose',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 85, protein: 18.0, carbs: 0.0, fat: 1.0 }
    },
    {
        foodId: 'PO116',
        label: 'Gambas',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 105, protein: 24.0, carbs: 0.2, fat: 0.5 }
    },
    {
        foodId: 'PO117',
        label: 'Langoustine',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 91, protein: 19.0, carbs: 0.0, fat: 1.6 }
    },
    {
        foodId: 'PO118',
        label: 'Langouste',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 91, protein: 19.0, carbs: 0.0, fat: 1.6 }
    },
    {
        foodId: 'PO119',
        label: 'Homard',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 90, protein: 19.0, carbs: 0.0, fat: 1.5 }
    },
    {
        foodId: 'PO120',
        label: 'Crabe',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 82, protein: 18.0, carbs: 0.0, fat: 1.1 }
    },
    {
        foodId: 'PO121',
        label: 'Tourteau',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 85, protein: 19.0, carbs: 0.0, fat: 1.3 }
    },
    {
        foodId: 'PO122',
        label: 'Étrille',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 89, protein: 18.0, carbs: 0.0, fat: 1.5 }
    },
    {
        foodId: 'PO123',
        label: 'Araignée de mer',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 70, protein: 15.0, carbs: 0.0, fat: 0.5 }
    },
    {
        foodId: 'PO124',
        label: 'Bernard-l\'hermite',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 89, protein: 18.0, carbs: 0.0, fat: 1.5 }
    },
    {
        foodId: 'PO125',
        label: 'Squille',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 89, protein: 18.0, carbs: 0.0, fat: 1.5 }
    },
    {
        foodId: 'PO126',
        label: 'Chair de crabe',
        category: 'crustace',
        unit: 'g',
        nutrients: { calories: 82, protein: 18.0, carbs: 0.0, fat: 1.1 }
    }
];

export const POISSON_CATEGORIES = {
    poisson_maigre: { label: 'Poissons maigres' },
    poisson_gras: { label: 'Poissons gras' },
    poisson_plat: { label: 'Poissons plats' },
    poisson_eau_douce: { label: 'Poissons d\'eau douce' },
    poisson_tropical: { label: 'Poissons tropicaux' },
    poisson_transforme: { label: 'Poissons transformés' },
    oeufs_poisson: { label: 'Œufs et produits dérivés' },
    crustace: { label: 'Crustacés' },
    mollusque: { label: 'Mollusques' }
}; 