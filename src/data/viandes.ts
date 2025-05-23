import { FaPiggyBank, FaDrumstickBite, FaHorse, FaBrain, FaUtensils } from 'react-icons/fa';
import { GiRabbit, GiCow, GiSheep, GiMeat, GiMeatCleaver } from 'react-icons/gi';

export interface Viande {
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

export const VIANDES: Viande[] = [
    // 🥩 Viandes de boucherie (rouges et blanches)
    {
        foodId: 'VI001',
        label: 'Bœuf',
        category: 'viande_boeuf',
        unit: 'g',
        nutrients: { calories: 275, protein: 28.1, carbs: 1.4, fat: 21.9 }
    },
    {
        foodId: 'VI002',
        label: 'Veau',
        category: 'viande_veau',
        unit: 'g',
        nutrients: { calories: 193, protein: 27.2, carbs: 2.0, fat: 11.7 }
    },
    {
        foodId: 'VI003',
        label: 'Porc',
        category: 'viande_porc',
        unit: 'g',
        nutrients: { calories: 316, protein: 27.4, carbs: 1.2, fat: 25.6 }
    },
    {
        foodId: 'VI004',
        label: 'Agneau',
        category: 'viande_agneau',
        unit: 'g',
        nutrients: { calories: 326, protein: 25.0, carbs: 1.8, fat: 28.3 }
    },
    {
        foodId: 'VI005',
        label: 'Mouton',
        category: 'viande_agneau',
        unit: 'g',
        nutrients: { calories: 340, protein: 26.7, carbs: 1.0, fat: 30.8 }
    },
    {
        foodId: 'VI006',
        label: 'Cheval',
        category: 'viande_cheval',
        unit: 'g',
        nutrients: { calories: 185, protein: 31.5, carbs: 1.3, fat: 6.4 }
    },
    {
        foodId: 'VI007',
        label: 'Chevreau',
        category: 'viande_chevre',
        unit: 'g',
        nutrients: { calories: 212, protein: 28.2, carbs: 1.9, fat: 12.9 }
    },
    {
        foodId: 'VI008',
        label: 'Cerf',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 170, protein: 32.3, carbs: 0.5, fat: 4.8 }
    },
    {
        foodId: 'VI009',
        label: 'Sanglier',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 235, protein: 29.1, carbs: 0.7, fat: 14.2 }
    },
    {
        foodId: 'VI010',
        label: 'Biche',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 192, protein: 30.0, carbs: 0.8, fat: 8.6 }
    },
    {
        foodId: 'VI011',
        label: 'Daim',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 205, protein: 27.9, carbs: 1.2, fat: 10.4 }
    },
    {
        foodId: 'VI012',
        label: 'Chevreuil',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 199, protein: 31.1, carbs: 0.9, fat: 7.2 }
    },
    {
        foodId: 'VI013',
        label: 'Lapin',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 176, protein: 29.0, carbs: 0.5, fat: 7.0 }
    },
    {
        foodId: 'VI014',
        label: 'Lièvre',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 182, protein: 30.4, carbs: 0.6, fat: 7.5 }
    },
    {
        foodId: 'VI015',
        label: 'Kangourou',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 168, protein: 31.9, carbs: 1.1, fat: 4.9 }
    },
    {
        foodId: 'VI016',
        label: 'Zèbre',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 195, protein: 30.5, carbs: 0.6, fat: 8.1 }
    },
    {
        foodId: 'VI017',
        label: 'Autruche',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 170, protein: 30.0, carbs: 0.8, fat: 6.0 }
    },
    {
        foodId: 'VI018',
        label: 'Bison',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 198, protein: 29.7, carbs: 1.0, fat: 7.8 }
    },
    {
        foodId: 'VI019',
        label: 'Bufflonne',
        category: 'viande_gibier',
        unit: 'g',
        nutrients: { calories: 222, protein: 27.1, carbs: 0.9, fat: 13.0 }
    },

    // 🔪 Morceaux de viande courants
    {
        foodId: 'VI020',
        label: 'Filet',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 215, protein: 31.0, carbs: 0.5, fat: 9.0 }
    },
    {
        foodId: 'VI021',
        label: 'Rumsteck',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 222, protein: 30.5, carbs: 0.6, fat: 10.3 }
    },
    {
        foodId: 'VI022',
        label: 'Entrecôte',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 287, protein: 28.0, carbs: 1.2, fat: 22.4 }
    },
    {
        foodId: 'VI023',
        label: 'Côte',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 298, protein: 26.5, carbs: 1.4, fat: 24.5 }
    },
    {
        foodId: 'VI024',
        label: 'Faux-filet',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 279, protein: 29.3, carbs: 0.9, fat: 21.0 }
    },
    {
        foodId: 'VI025',
        label: 'Bavette',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 240, protein: 30.2, carbs: 1.0, fat: 15.0 }
    },
    {
        foodId: 'VI026',
        label: 'Jarret',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 190, protein: 27.7, carbs: 0.8, fat: 9.0 }
    },
    {
        foodId: 'VI027',
        label: 'Joue',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 260, protein: 28.1, carbs: 1.5, fat: 18.2 }
    },
    {
        foodId: 'VI028',
        label: 'Onglet',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 228, protein: 29.4, carbs: 1.0, fat: 12.0 }
    },
    {
        foodId: 'VI029',
        label: 'Hampe',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 235, protein: 30.0, carbs: 0.9, fat: 13.7 }
    },
    {
        foodId: 'VI030',
        label: 'Aiguillette',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 220, protein: 28.6, carbs: 0.6, fat: 11.8 }
    },
    {
        foodId: 'VI031',
        label: 'Tende de tranche',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 210, protein: 29.1, carbs: 0.7, fat: 10.5 }
    },
    {
        foodId: 'VI032',
        label: 'Collier',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 278, protein: 26.2, carbs: 1.3, fat: 22.1 }
    },
    {
        foodId: 'VI033',
        label: 'Épaule',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 294, protein: 25.5, carbs: 1.2, fat: 23.6 }
    },
    {
        foodId: 'VI034',
        label: 'Gigot',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 315, protein: 27.8, carbs: 1.1, fat: 25.0 }
    },
    {
        foodId: 'VI035',
        label: 'Poitrine',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 356, protein: 21.0, carbs: 1.6, fat: 32.5 }
    },
    {
        foodId: 'VI036',
        label: 'Paleron',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 250, protein: 26.4, carbs: 1.0, fat: 18.7 }
    },
    {
        foodId: 'VI037',
        label: 'Plat de côte',
        category: 'viande_morceaux',
        unit: 'g',
        nutrients: { calories: 320, protein: 23.7, carbs: 1.4, fat: 28.9 }
    },

    // 🐓 Volailles et gibiers à plumes
    {
        foodId: 'VI038',
        label: 'Poulet',
        category: 'viande_volaille',
        unit: 'g',
        nutrients: { calories: 165, protein: 31.0, carbs: 0.5, fat: 3.6 }
    },
    {
        foodId: 'VI039',
        label: 'Dinde',
        category: 'viande_volaille',
        unit: 'g',
        nutrients: { calories: 145, protein: 29.0, carbs: 0.4, fat: 2.5 }
    },
    {
        foodId: 'VI040',
        label: 'Canard',
        category: 'viande_volaille',
        unit: 'g',
        nutrients: { calories: 337, protein: 27.0, carbs: 0.8, fat: 28.4 }
    },
    {
        foodId: 'VI041',
        label: 'Oie',
        category: 'viande_volaille',
        unit: 'g',
        nutrients: { calories: 345, protein: 26.0, carbs: 0.9, fat: 29.7 }
    },
    {
        foodId: 'VI042',
        label: 'Pintade',
        category: 'viande_volaille',
        unit: 'g',
        nutrients: { calories: 163, protein: 29.0, carbs: 0.6, fat: 4.0 }
    },
    {
        foodId: 'VI043',
        label: 'Caille',
        category: 'viande_volaille',
        unit: 'g',
        nutrients: { calories: 123, protein: 25.0, carbs: 0.5, fat: 2.3 }
    },
    {
        foodId: 'VI044',
        label: 'Pigeon',
        category: 'viande_volaille',
        unit: 'g',
        nutrients: { calories: 142, protein: 26.7, carbs: 0.4, fat: 3.0 }
    },
    {
        foodId: 'VI045',
        label: 'Poule',
        category: 'viande_volaille',
        unit: 'g',
        nutrients: { calories: 175, protein: 28.5, carbs: 0.6, fat: 6.5 }
    },
    {
        foodId: 'VI046',
        label: 'Coq',
        category: 'viande_volaille',
        unit: 'g',
        nutrients: { calories: 185, protein: 29.1, carbs: 0.5, fat: 7.0 }
    },
    {
        foodId: 'VI047',
        label: 'Faisan',
        category: 'viande_volaille',
        unit: 'g',
        nutrients: { calories: 143, protein: 27.5, carbs: 0.5, fat: 2.8 }
    },
    {
        foodId: 'VI048',
        label: 'Perdrix',
        category: 'viande_volaille',
        unit: 'g',
        nutrients: { calories: 130, protein: 26.1, carbs: 0.5, fat: 2.0 }
    },

    // 🧠 Abats (produits tripiers)
    {
        foodId: 'VI049',
        label: 'Foie',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 136, protein: 20.0, carbs: 2.5, fat: 5.0 }
    },
    {
        foodId: 'VI050',
        label: 'Cœur',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 140, protein: 18.2, carbs: 1.3, fat: 7.5 }
    },
    {
        foodId: 'VI051',
        label: 'Rognons',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 112, protein: 17.6, carbs: 1.2, fat: 3.6 }
    },
    {
        foodId: 'VI052',
        label: 'Langue',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 215, protein: 16.0, carbs: 1.1, fat: 17.9 }
    },
    {
        foodId: 'VI053',
        label: 'Tripes',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 108, protein: 17.0, carbs: 1.0, fat: 4.0 }
    },
    {
        foodId: 'VI054',
        label: 'Joues',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 155, protein: 20.0, carbs: 1.0, fat: 8.0 }
    },
    {
        foodId: 'VI055',
        label: 'Pieds',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 131, protein: 19.0, carbs: 1.2, fat: 5.5 }
    },
    {
        foodId: 'VI056',
        label: 'Queue',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 190, protein: 21.0, carbs: 0.8, fat: 12.0 }
    },
    {
        foodId: 'VI057',
        label: 'Tête',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 170, protein: 18.5, carbs: 0.9, fat: 10.0 }
    },
    {
        foodId: 'VI058',
        label: 'Cervelle',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 124, protein: 12.0, carbs: 1.1, fat: 9.5 }
    },
    {
        foodId: 'VI059',
        label: 'Ris de veau',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 217, protein: 15.0, carbs: 1.4, fat: 18.0 }
    },
    {
        foodId: 'VI060',
        label: 'Rate',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 133, protein: 19.1, carbs: 1.1, fat: 5.2 }
    },
    {
        foodId: 'VI061',
        label: 'Poumons',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 104, protein: 18.5, carbs: 0.8, fat: 3.1 }
    },
    {
        foodId: 'VI062',
        label: 'Testicules',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 110, protein: 16.0, carbs: 1.0, fat: 5.0 }
    },
    {
        foodId: 'VI063',
        label: 'Pancréas',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 125, protein: 17.5, carbs: 1.2, fat: 6.0 }
    },
    {
        foodId: 'VI064',
        label: 'Gésiers',
        category: 'viande_abats',
        unit: 'g',
        nutrients: { calories: 118, protein: 20.0, carbs: 1.1, fat: 3.5 }
    },

    // 🧂 Charcuteries crues et sèches
    {
        foodId: 'VI065',
        label: 'Jambon cru',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 241, protein: 27.0, carbs: 0.5, fat: 14.0 }
    },
    {
        foodId: 'VI066',
        label: 'Saucisson sec',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 397, protein: 24.0, carbs: 1.0, fat: 34.0 }
    },
    {
        foodId: 'VI067',
        label: 'Chorizo',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 455, protein: 24.0, carbs: 1.0, fat: 40.0 }
    },
    {
        foodId: 'VI068',
        label: 'Coppa',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 370, protein: 27.0, carbs: 1.0, fat: 30.0 }
    },
    {
        foodId: 'VI069',
        label: 'Lonzo',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 350, protein: 28.0, carbs: 0.5, fat: 28.0 }
    },
    {
        foodId: 'VI070',
        label: 'Bresaola',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 165, protein: 32.0, carbs: 0.5, fat: 3.0 }
    },
    {
        foodId: 'VI071',
        label: 'Viande des Grisons',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 180, protein: 33.0, carbs: 0.4, fat: 3.5 }
    },
    {
        foodId: 'VI072',
        label: 'Rosette',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 405, protein: 23.0, carbs: 1.0, fat: 35.0 }
    },
    {
        foodId: 'VI073',
        label: 'Salami',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 423, protein: 22.0, carbs: 1.2, fat: 38.0 }
    },
    {
        foodId: 'VI074',
        label: 'Soubressade',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 412, protein: 19.0, carbs: 1.3, fat: 36.0 }
    },
    {
        foodId: 'VI075',
        label: 'Lomo',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 298, protein: 31.0, carbs: 0.8, fat: 20.0 }
    },
    {
        foodId: 'VI076',
        label: 'Pastrami',
        category: 'viande_charcuterie_crue',
        unit: 'g',
        nutrients: { calories: 147, protein: 22.0, carbs: 2.0, fat: 5.0 }
    },

    // 🍖 Charcuteries cuites
    {
        foodId: 'VI077',
        label: 'Jambon blanc',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 135, protein: 20.0, carbs: 1.0, fat: 5.0 }
    },
    {
        foodId: 'VI078',
        label: 'Mortadelle',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 311, protein: 14.0, carbs: 2.0, fat: 28.0 }
    },
    {
        foodId: 'VI079',
        label: 'Saucisse de Strasbourg',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 287, protein: 12.0, carbs: 2.0, fat: 25.0 }
    },
    {
        foodId: 'VI080',
        label: 'Saucisse de Francfort',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 290, protein: 13.0, carbs: 2.0, fat: 26.0 }
    },
    {
        foodId: 'VI081',
        label: 'Knack',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 300, protein: 14.0, carbs: 2.1, fat: 27.0 }
    },
    {
        foodId: 'VI082',
        label: 'Saucisse de Morteau',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 330, protein: 18.0, carbs: 1.5, fat: 30.0 }
    },
    {
        foodId: 'VI083',
        label: 'Saucisse de Montbéliard',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 325, protein: 17.0, carbs: 1.6, fat: 29.0 }
    },
    {
        foodId: 'VI084',
        label: 'Fromage de tête',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 210, protein: 19.0, carbs: 1.2, fat: 15.0 }
    },
    {
        foodId: 'VI085',
        label: 'Pâté',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 280, protein: 13.0, carbs: 2.0, fat: 24.0 }
    },
    {
        foodId: 'VI086',
        label: 'Terrine',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 270, protein: 12.0, carbs: 1.5, fat: 23.0 }
    },
    {
        foodId: 'VI087',
        label: 'Rillettes',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 400, protein: 15.0, carbs: 0.5, fat: 38.0 }
    },
    {
        foodId: 'VI088',
        label: 'Andouille',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 290, protein: 19.0, carbs: 1.0, fat: 23.0 }
    },
    {
        foodId: 'VI089',
        label: 'Andouillette',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 310, protein: 18.0, carbs: 1.2, fat: 27.0 }
    },
    {
        foodId: 'VI090',
        label: 'Boudin blanc',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 295, protein: 14.0, carbs: 3.0, fat: 25.0 }
    },
    {
        foodId: 'VI091',
        label: 'Boudin noir',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 379, protein: 14.0, carbs: 5.0, fat: 35.0 }
    },
    {
        foodId: 'VI092',
        label: 'Galantine',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 250, protein: 15.0, carbs: 2.0, fat: 20.0 }
    },
    {
        foodId: 'VI093',
        label: 'Ballotine',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 265, protein: 17.0, carbs: 1.7, fat: 22.0 }
    },
    {
        foodId: 'VI094',
        label: 'Pâté en croûte',
        category: 'viande_charcuterie_cuite',
        unit: 'g',
        nutrients: { calories: 310, protein: 13.0, carbs: 10.0, fat: 24.0 }
    }
];

export const VIANDE_CATEGORIES = {
    viande_boeuf: { label: 'Viande de bœuf', icon: GiCow },
    viande_veau: { label: 'Viande de veau', icon: GiCow },
    viande_porc: { label: 'Viande de porc', icon: FaPiggyBank },
    viande_agneau: { label: 'Viande d\'agneau / mouton', icon: GiSheep },
    viande_cheval: { label: 'Viande de cheval', icon: FaHorse },
    viande_chevre: { label: 'Viande de chèvre / bouc', icon: GiSheep },
    viande_gibier: { label: 'Viande de gibier / sauvage', icon: GiRabbit },
    viande_morceaux: { label: 'Morceaux de viande', icon: GiMeatCleaver },
    viande_volaille: { label: 'Volailles et gibiers à plumes', icon: FaDrumstickBite },
    viande_abats: { label: 'Abats et produits tripiers', icon: FaBrain },
    viande_charcuterie_crue: { label: 'Charcuteries crues et sèches', icon: GiMeat },
    viande_charcuterie_cuite: { label: 'Charcuteries cuites', icon: FaUtensils }
}; 