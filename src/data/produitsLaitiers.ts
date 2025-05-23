import { FaCheese, FaIceCream, FaGlassWhiskey } from 'react-icons/fa';
import { GiMilkCarton, GiButter } from 'react-icons/gi';

export interface ProduitLaitier {
    foodId: string;
    label: string;
    category: string;
    unit: 'ml' | 'g';
    nutrients: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
    };
}

export const PRODUITS_LAITIERS: ProduitLaitier[] = [
    // 🥛 Laits animaux
    {
        foodId: 'PL001',
        label: 'Babeurre',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 40, protein: 3.3, carbs: 4.8, fat: 0.9 }
    },
    {
        foodId: 'PL002',
        label: 'Kéfir de lait',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 41, protein: 3.4, carbs: 4.8, fat: 1.0 }
    },
    {
        foodId: 'PL003',
        label: 'Lait UHT',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 64, protein: 3.2, carbs: 4.7, fat: 3.5 }
    },
    {
        foodId: 'PL004',
        label: 'Lait aromatisé',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 85, protein: 3.1, carbs: 11.0, fat: 2.0 }
    },
    {
        foodId: 'PL005',
        label: 'Lait concentré non sucré',
        category: 'lait_animal',
        unit: 'g',
        nutrients: { calories: 134, protein: 7.0, carbs: 10.0, fat: 7.5 }
    },
    {
        foodId: 'PL006',
        label: 'Lait concentré sucré',
        category: 'lait_animal',
        unit: 'g',
        nutrients: { calories: 320, protein: 8.0, carbs: 55.0, fat: 8.0 }
    },
    {
        foodId: 'PL007',
        label: 'Lait cru',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 66, protein: 3.3, carbs: 4.6, fat: 4.0 }
    },
    {
        foodId: 'PL008',
        label: 'Lait de brebis',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 95, protein: 5.5, carbs: 5.0, fat: 6.0 }
    },
    {
        foodId: 'PL009',
        label: 'Lait de chèvre',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 69, protein: 3.1, carbs: 4.5, fat: 4.1 }
    },
    {
        foodId: 'PL010',
        label: 'Lait de vache demi-écrémé',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 47, protein: 3.2, carbs: 4.8, fat: 1.6 }
    },
    {
        foodId: 'PL011',
        label: 'Lait de vache écrémé',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 35, protein: 3.3, carbs: 5.0, fat: 0.1 }
    },
    {
        foodId: 'PL012',
        label: 'Lait de vache entier',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 65, protein: 3.2, carbs: 4.8, fat: 3.6 }
    },
    {
        foodId: 'PL013',
        label: 'Lait en poudre',
        category: 'lait_animal',
        unit: 'g',
        nutrients: { calories: 496, protein: 26.0, carbs: 38.0, fat: 26.0 }
    },
    {
        foodId: 'PL014',
        label: 'Lait fermenté',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 50, protein: 3.2, carbs: 5.0, fat: 1.5 }
    },
    {
        foodId: 'PL015',
        label: 'Lait infantile',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 67, protein: 1.3, carbs: 7.2, fat: 3.6 }
    },
    {
        foodId: 'PL016',
        label: 'Lait pasteurisé',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 65, protein: 3.2, carbs: 4.8, fat: 3.6 }
    },
    {
        foodId: 'PL017',
        label: 'Lait stérilisé',
        category: 'lait_animal',
        unit: 'ml',
        nutrients: { calories: 66, protein: 3.2, carbs: 4.8, fat: 3.6 }
    },

    // 🧈 Beurres
    {
        foodId: 'PL018',
        label: 'Beurre allégé',
        category: 'beurre',
        unit: 'g',
        nutrients: { calories: 360, protein: 1.0, carbs: 2.0, fat: 39.0 }
    },
    {
        foodId: 'PL019',
        label: 'Beurre aux herbes',
        category: 'beurre',
        unit: 'g',
        nutrients: { calories: 650, protein: 1.0, carbs: 2.0, fat: 70.0 }
    },
    {
        foodId: 'PL020',
        label: 'Beurre baratté',
        category: 'beurre',
        unit: 'g',
        nutrients: { calories: 745, protein: 0.5, carbs: 0.7, fat: 82.0 }
    },
    {
        foodId: 'PL021',
        label: 'Beurre clarifié (ghee)',
        category: 'beurre',
        unit: 'g',
        nutrients: { calories: 900, protein: 0.3, carbs: 0.0, fat: 99.8 }
    },
    {
        foodId: 'PL022',
        label: 'Beurre cru',
        category: 'beurre',
        unit: 'g',
        nutrients: { calories: 748, protein: 0.5, carbs: 0.6, fat: 83.0 }
    },
    {
        foodId: 'PL023',
        label: 'Beurre de montagne (AOP)',
        category: 'beurre',
        unit: 'g',
        nutrients: { calories: 750, protein: 0.5, carbs: 0.7, fat: 83.0 }
    },
    {
        foodId: 'PL024',
        label: 'Beurre demi-sel',
        category: 'beurre',
        unit: 'g',
        nutrients: { calories: 740, protein: 0.5, carbs: 0.7, fat: 81.0 }
    },
    {
        foodId: 'PL025',
        label: 'Beurre doux',
        category: 'beurre',
        unit: 'g',
        nutrients: { calories: 745, protein: 0.5, carbs: 0.7, fat: 82.0 }
    },
    {
        foodId: 'PL026',
        label: 'Beurre salé',
        category: 'beurre',
        unit: 'g',
        nutrients: { calories: 740, protein: 0.6, carbs: 0.6, fat: 81.0 }
    },

    // 🧀 Fromages
    {
        foodId: 'PL027',
        label: 'Abondance',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 393, protein: 26.0, carbs: 0.5, fat: 32.0 }
    },
    {
        foodId: 'PL028',
        label: 'Appenzeller',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 390, protein: 25.0, carbs: 0.5, fat: 31.0 }
    },
    {
        foodId: 'PL029',
        label: 'Asiago',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 376, protein: 25.0, carbs: 1.0, fat: 31.0 }
    },
    {
        foodId: 'PL030',
        label: 'Banon',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 295, protein: 19.0, carbs: 1.0, fat: 24.0 }
    },
    {
        foodId: 'PL031',
        label: 'Beaufort',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 410, protein: 27.0, carbs: 0.5, fat: 34.0 }
    },
    {
        foodId: 'PL032',
        label: 'Bleu de Gex',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 21.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL033',
        label: 'Boursin',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 320, protein: 6.0, carbs: 3.0, fat: 33.0 }
    },
    {
        foodId: 'PL034',
        label: 'Brie de Meaux / Melun',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 334, protein: 20.0, carbs: 0.5, fat: 28.0 }
    },
    {
        foodId: 'PL035',
        label: 'Cantal',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 370, protein: 25.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL036',
        label: 'Cabécou',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 300, protein: 19.0, carbs: 1.0, fat: 25.0 }
    },
    {
        foodId: 'PL037',
        label: 'Camembert',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 299, protein: 20.0, carbs: 0.5, fat: 24.0 }
    },
    {
        foodId: 'PL038',
        label: 'Chaumes',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 335, protein: 21.0, carbs: 1.0, fat: 27.0 }
    },
    {
        foodId: 'PL039',
        label: 'Chabichou',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 305, protein: 20.0, carbs: 1.0, fat: 25.0 }
    },
    {
        foodId: 'PL040',
        label: 'Chavroux',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 290, protein: 15.0, carbs: 3.0, fat: 23.0 }
    },
    {
        foodId: 'PL041',
        label: 'Clochette',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 300, protein: 19.0, carbs: 1.0, fat: 25.0 }
    },
    {
        foodId: 'PL042',
        label: 'Comté',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 380, protein: 28.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL043',
        label: 'Cotija',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 380, protein: 24.0, carbs: 2.0, fat: 30.0 }
    },
    {
        foodId: 'PL044',
        label: 'Coulommiers',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 320, protein: 20.0, carbs: 0.5, fat: 26.0 }
    },
    {
        foodId: 'PL045',
        label: 'Crottin de Chavignol',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 305, protein: 20.0, carbs: 1.0, fat: 25.0 }
    },
    {
        foodId: 'PL046',
        label: 'Curé Nantais',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 22.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL047',
        label: 'Edam',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 25.0, carbs: 0.5, fat: 27.0 }
    },
    {
        foodId: 'PL048',
        label: 'Emmental',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 380, protein: 28.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL049',
        label: 'Epoisses',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 340, protein: 20.0, carbs: 1.0, fat: 29.0 }
    },
    {
        foodId: 'PL050',
        label: 'Fiore Sardo',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 371, protein: 24.0, carbs: 1.0, fat: 30.0 }
    },
    {
        foodId: 'PL051',
        label: 'Fol Épi',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 360, protein: 24.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL052',
        label: 'Gaperon',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 250, protein: 15.0, carbs: 1.0, fat: 20.0 }
    },
    {
        foodId: 'PL053',
        label: 'Fromage blanc',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 98, protein: 7.0, carbs: 3.0, fat: 6.0 }
    },
    {
        foodId: 'PL054',
        label: 'Halloumi',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 320, protein: 22.0, carbs: 1.0, fat: 25.0 }
    },
    {
        foodId: 'PL055',
        label: 'Havarti',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 25.0, carbs: 1.0, fat: 28.0 }
    },
    {
        foodId: 'PL056',
        label: 'Idiazabal',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 400, protein: 25.0, carbs: 0.0, fat: 32.0 }
    },
    {
        foodId: 'PL057',
        label: 'Jarlsberg',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 27.0, carbs: 1.0, fat: 28.0 }
    },
    {
        foodId: 'PL058',
        label: 'Kefalotyri',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 400, protein: 26.0, carbs: 1.0, fat: 32.0 }
    },
    {
        foodId: 'PL059',
        label: 'Laguiole',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 390, protein: 25.0, carbs: 0.5, fat: 31.0 }
    },
    {
        foodId: 'PL060',
        label: 'Langres',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 330, protein: 21.0, carbs: 0.5, fat: 28.0 }
    },
    {
        foodId: 'PL061',
        label: 'Livarot',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 325, protein: 21.0, carbs: 0.5, fat: 27.0 }
    },
    {
        foodId: 'PL062',
        label: 'Mahón',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 370, protein: 26.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL063',
        label: 'Manchego',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 376, protein: 25.0, carbs: 0.5, fat: 31.0 }
    },
    {
        foodId: 'PL064',
        label: 'Monterey Jack',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 373, protein: 25.0, carbs: 1.0, fat: 30.0 }
    },
    {
        foodId: 'PL065',
        label: 'Morbier',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 340, protein: 23.0, carbs: 0.5, fat: 28.0 }
    },
    {
        foodId: 'PL066',
        label: 'Gorgonzola',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 19.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL067',
        label: 'Gouda',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 356, protein: 25.0, carbs: 2.0, fat: 27.0 }
    },
    {
        foodId: 'PL068',
        label: 'Gruyère',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 380, protein: 28.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL069',
        label: 'Mascarpone',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 429, protein: 4.0, carbs: 4.0, fat: 44.0 }
    },
    {
        foodId: 'PL070',
        label: 'Morlacco',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 370, protein: 24.0, carbs: 0.5, fat: 31.0 }
    },
    {
        foodId: 'PL071',
        label: 'Munster',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 23.0, carbs: 0.5, fat: 28.0 }
    },
    {
        foodId: 'PL072',
        label: 'Neufchâtel',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 290, protein: 19.0, carbs: 0.5, fat: 24.0 }
    },
    {
        foodId: 'PL073',
        label: 'Oaxaca',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 370, protein: 26.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL074',
        label: 'Paneer',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 296, protein: 18.0, carbs: 2.0, fat: 23.0 }
    },
    {
        foodId: 'PL075',
        label: 'Parmesan',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 431, protein: 38.0, carbs: 3.0, fat: 29.0 }
    },
    {
        foodId: 'PL076',
        label: 'Pecorino',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 387, protein: 32.0, carbs: 3.0, fat: 28.0 }
    },
    {
        foodId: 'PL077',
        label: 'Picodon',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 310, protein: 21.0, carbs: 1.0, fat: 26.0 }
    },
    {
        foodId: 'PL078',
        label: 'Pont-l\'Évêque',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 325, protein: 20.0, carbs: 1.0, fat: 27.0 }
    },
    {
        foodId: 'PL079',
        label: 'Port-Salut',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 320, protein: 22.0, carbs: 0.5, fat: 26.0 }
    },
    {
        foodId: 'PL080',
        label: 'Pélardon',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 310, protein: 21.0, carbs: 1.0, fat: 26.0 }
    },
    {
        foodId: 'PL081',
        label: 'Provolone',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 351, protein: 25.0, carbs: 2.0, fat: 27.0 }
    },
    {
        foodId: 'PL082',
        label: 'Quark',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 70, protein: 12.0, carbs: 3.0, fat: 0.3 }
    },
    {
        foodId: 'PL083',
        label: 'Raclette',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 357, protein: 23.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL084',
        label: 'Requeijão',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 240, protein: 8.0, carbs: 3.0, fat: 22.0 }
    },
    {
        foodId: 'PL085',
        label: 'Ricotta',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 174, protein: 11.0, carbs: 3.0, fat: 13.0 }
    },
    {
        foodId: 'PL086',
        label: 'Roquefort',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 369, protein: 22.0, carbs: 2.0, fat: 30.0 }
    },
    {
        foodId: 'PL087',
        label: 'Roncal',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 375, protein: 25.0, carbs: 1.0, fat: 31.0 }
    },
    {
        foodId: 'PL088',
        label: 'Saint-Nectaire',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 340, protein: 22.0, carbs: 0.5, fat: 28.0 }
    },
    {
        foodId: 'PL089',
        label: 'Saint-Paulin',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 330, protein: 22.0, carbs: 0.5, fat: 28.0 }
    },
    {
        foodId: 'PL090',
        label: 'Sainte-Maure-de-Touraine',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 310, protein: 21.0, carbs: 1.0, fat: 26.0 }
    },
    {
        foodId: 'PL091',
        label: 'Serra da Estrela',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 21.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL092',
        label: 'Stilton',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 410, protein: 23.0, carbs: 1.0, fat: 35.0 }
    },
    {
        foodId: 'PL093',
        label: 'Taleggio',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 321, protein: 21.0, carbs: 0.5, fat: 27.0 }
    },
    {
        foodId: 'PL094',
        label: 'Tête de Moine',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 400, protein: 28.0, carbs: 0.5, fat: 33.0 }
    },
    {
        foodId: 'PL095',
        label: 'Tomme de Savoie',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 25.0, carbs: 0.5, fat: 28.0 }
    },
    {
        foodId: 'PL096',
        label: 'Torta del Casar',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 370, protein: 22.0, carbs: 1.0, fat: 32.0 }
    },
    {
        foodId: 'PL097',
        label: 'Valençay',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 310, protein: 21.0, carbs: 1.0, fat: 26.0 }
    },
    {
        foodId: 'PL098',
        label: 'Vacherin Mont-d\'Or',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 21.0, carbs: 1.0, fat: 30.0 }
    },
    {
        foodId: 'PL099',
        label: 'Vacherin',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 320, protein: 20.0, carbs: 0.5, fat: 26.0 }
    },

    // 🥣 Yaourts et produits fermentés
    {
        foodId: 'PL100',
        label: 'Yaourt nature',
        category: 'yaourt',
        unit: 'g',
        nutrients: { calories: 59, protein: 3.5, carbs: 4.7, fat: 3.3 }
    },
    {
        foodId: 'PL101',
        label: 'Yaourt aux fruits',
        category: 'yaourt',
        unit: 'g',
        nutrients: { calories: 105, protein: 3.5, carbs: 15.0, fat: 3.0 }
    },
    {
        foodId: 'PL102',
        label: 'Yaourt grec',
        category: 'yaourt',
        unit: 'g',
        nutrients: { calories: 97, protein: 9.0, carbs: 3.6, fat: 5.0 }
    },
    {
        foodId: 'PL103',
        label: 'Yaourt à boire',
        category: 'yaourt',
        unit: 'ml',
        nutrients: { calories: 45, protein: 1.0, carbs: 6.0, fat: 1.0 }
    },
    {
        foodId: 'PL104',
        label: 'Kéfir',
        category: 'yaourt',
        unit: 'ml',
        nutrients: { calories: 41, protein: 3.3, carbs: 4.7, fat: 1.0 }
    },
    {
        foodId: 'PL105',
        label: 'Lassi',
        category: 'yaourt',
        unit: 'ml',
        nutrients: { calories: 45, protein: 1.0, carbs: 6.0, fat: 1.0 }
    },

    // 🍮 Crèmes et desserts lactés
    {
        foodId: 'PL106',
        label: 'Chantilly',
        category: 'creme',
        unit: 'g',
        nutrients: { calories: 270, protein: 2.0, carbs: 6.0, fat: 25.0 }
    },
    {
        foodId: 'PL107',
        label: 'Crème caramel',
        category: 'creme',
        unit: 'g',
        nutrients: { calories: 130, protein: 3.0, carbs: 17.0, fat: 4.5 }
    },
    {
        foodId: 'PL108',
        label: 'Crème dessert',
        category: 'creme',
        unit: 'g',
        nutrients: { calories: 130, protein: 3.0, carbs: 17.0, fat: 4.5 }
    },
    {
        foodId: 'PL109',
        label: 'Crème fleurette',
        category: 'creme',
        unit: 'ml',
        nutrients: { calories: 320, protein: 2.0, carbs: 3.0, fat: 32.0 }
    },
    {
        foodId: 'PL110',
        label: 'Crème fraîche épaisse',
        category: 'creme',
        unit: 'g',
        nutrients: { calories: 300, protein: 2.0, carbs: 3.0, fat: 30.0 }
    },
    {
        foodId: 'PL111',
        label: 'Crème liquide',
        category: 'creme',
        unit: 'ml',
        nutrients: { calories: 195, protein: 2.0, carbs: 3.0, fat: 20.0 }
    },
    {
        foodId: 'PL112',
        label: 'Danette',
        category: 'creme',
        unit: 'g',
        nutrients: { calories: 130, protein: 3.2, carbs: 16.0, fat: 4.0 }
    },
    {
        foodId: 'PL113',
        label: 'Entremets',
        category: 'creme',
        unit: 'g',
        nutrients: { calories: 130, protein: 3.0, carbs: 17.0, fat: 4.0 }
    },
    {
        foodId: 'PL114',
        label: 'Flan',
        category: 'creme',
        unit: 'g',
        nutrients: { calories: 120, protein: 4.0, carbs: 15.0, fat: 5.0 }
    },
    {
        foodId: 'PL115',
        label: 'Mascarpone',
        category: 'creme',
        unit: 'g',
        nutrients: { calories: 430, protein: 4.0, carbs: 1.5, fat: 45.0 }
    },
    {
        foodId: 'PL116',
        label: 'Panna cotta',
        category: 'creme',
        unit: 'g',
        nutrients: { calories: 165, protein: 2.5, carbs: 18.0, fat: 9.0 }
    },
    {
        foodId: 'PL117',
        label: 'Riz au lait',
        category: 'creme',
        unit: 'g',
        nutrients: { calories: 115, protein: 3.0, carbs: 18.0, fat: 3.5 }
    },

    // 🍦 Glaces et produits glacés au lait
    {
        foodId: 'PL118',
        label: 'Gelato',
        category: 'glace',
        unit: 'g',
        nutrients: { calories: 180, protein: 3.0, carbs: 25.0, fat: 6.0 }
    },
    {
        foodId: 'PL119',
        label: 'Glace au lait',
        category: 'glace',
        unit: 'g',
        nutrients: { calories: 170, protein: 3.5, carbs: 24.0, fat: 6.0 }
    },
    {
        foodId: 'PL120',
        label: 'Milkshake',
        category: 'glace',
        unit: 'ml',
        nutrients: { calories: 110, protein: 3.0, carbs: 18.0, fat: 3.0 }
    },

    // 🧊 Autres produits laitiers & techniques
    {
        foodId: 'PL121',
        label: 'Caséine',
        category: 'autre',
        unit: 'g',
        nutrients: { calories: 350, protein: 88.0, carbs: 3.0, fat: 1.0 }
    },
    {
        foodId: 'PL122',
        label: 'Petit-lait (lactosérum / whey)',
        category: 'autre',
        unit: 'g',
        nutrients: { calories: 340, protein: 80.0, carbs: 8.0, fat: 2.0 }
    },
    {
        foodId: 'PL123',
        label: 'Protéines de lait en poudre',
        category: 'autre',
        unit: 'g',
        nutrients: { calories: 380, protein: 85.0, carbs: 5.0, fat: 1.5 }
    },
    {
        foodId: 'PL124',
        label: 'Substitut lacté pour cuisine',
        category: 'autre',
        unit: 'ml',
        nutrients: { calories: 120, protein: 1.5, carbs: 7.0, fat: 10.0 }
    },
    {
        foodId: 'PL125',
        label: 'Fromage fondu',
        category: 'autre',
        unit: 'g',
        nutrients: { calories: 275, protein: 10.0, carbs: 5.0, fat: 24.0 }
    },

    // 🌱 Laits végétaux
    {
        foodId: 'PL126',
        label: 'Lait d\'amande',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 24, protein: 0.5, carbs: 0.2, fat: 2.2 }
    },
    {
        foodId: 'PL127',
        label: 'Lait de cajou',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 38, protein: 1.0, carbs: 2.0, fat: 3.0 }
    },
    {
        foodId: 'PL128',
        label: 'Lait de chanvre',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 60, protein: 3.0, carbs: 0.5, fat: 4.5 }
    },
    {
        foodId: 'PL129',
        label: 'Lait de coco',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 200, protein: 2.0, carbs: 3.0, fat: 21.0 }
    },
    {
        foodId: 'PL130',
        label: 'Lait de datte',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 70, protein: 1.0, carbs: 13.0, fat: 1.0 }
    },
    {
        foodId: 'PL131',
        label: 'Lait de lupin',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 50, protein: 3.0, carbs: 2.0, fat: 2.0 }
    },
    {
        foodId: 'PL132',
        label: 'Lait de macadamia',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 40, protein: 0.8, carbs: 0.5, fat: 3.5 }
    },
    {
        foodId: 'PL133',
        label: 'Lait de millet',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 48, protein: 1.0, carbs: 8.0, fat: 1.0 }
    },
    {
        foodId: 'PL134',
        label: 'Lait de noisette',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 29, protein: 0.5, carbs: 0.3, fat: 2.8 }
    },
    {
        foodId: 'PL135',
        label: 'Lait de noix',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 45, protein: 1.0, carbs: 1.0, fat: 4.0 }
    },
    {
        foodId: 'PL136',
        label: 'Lait de pistache',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 50, protein: 1.5, carbs: 2.0, fat: 3.5 }
    },
    {
        foodId: 'PL137',
        label: 'Lait de pois',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 45, protein: 3.3, carbs: 1.5, fat: 2.0 }
    },
    {
        foodId: 'PL138',
        label: 'Lait de quinoa',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 45, protein: 1.2, carbs: 6.0, fat: 1.0 }
    },
    {
        foodId: 'PL139',
        label: 'Lait de riz',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 50, protein: 0.3, carbs: 9.2, fat: 1.0 }
    },
    {
        foodId: 'PL140',
        label: 'Lait de soja',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 45, protein: 3.5, carbs: 3.0, fat: 2.0 }
    },
    {
        foodId: 'PL141',
        label: 'Lait d\'avoine',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 47, protein: 1.0, carbs: 6.0, fat: 1.5 }
    },
    {
        foodId: 'PL142',
        label: 'Lait de banane',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 60, protein: 0.8, carbs: 10.0, fat: 1.0 }
    },
    {
        foodId: 'PL143',
        label: 'Lait d\'épeautre',
        category: 'lait_vegetal',
        unit: 'ml',
        nutrients: { calories: 45, protein: 1.0, carbs: 6.0, fat: 1.0 }
    },
    {
        foodId: 'PL144',
        label: 'Reblochon',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 340, protein: 22.0, carbs: 0.5, fat: 28.0 }
    },
    {
        foodId: 'PL145',
        label: 'Chabichou',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 305, protein: 20.0, carbs: 1.0, fat: 25.0 }
    },
    {
        foodId: 'PL146',
        label: 'Chavroux',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 290, protein: 15.0, carbs: 3.0, fat: 23.0 }
    },
    {
        foodId: 'PL147',
        label: 'Clochette',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 300, protein: 19.0, carbs: 1.0, fat: 25.0 }
    },
    {
        foodId: 'PL148',
        label: 'Cotija',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 380, protein: 24.0, carbs: 2.0, fat: 30.0 }
    },
    {
        foodId: 'PL149',
        label: 'Crottin de Chavignol',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 305, protein: 20.0, carbs: 1.0, fat: 25.0 }
    },
    {
        foodId: 'PL150',
        label: 'Curé Nantais',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 22.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL151',
        label: 'Edam',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 25.0, carbs: 0.5, fat: 27.0 }
    },
    {
        foodId: 'PL152',
        label: 'Epoisses',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 340, protein: 20.0, carbs: 1.0, fat: 29.0 }
    },
    {
        foodId: 'PL153',
        label: 'Fiore Sardo',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 371, protein: 24.0, carbs: 1.0, fat: 30.0 }
    },
    {
        foodId: 'PL154',
        label: 'Fol Épi',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 360, protein: 24.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL155',
        label: 'Gaperon',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 250, protein: 15.0, carbs: 1.0, fat: 20.0 }
    },
    {
        foodId: 'PL156',
        label: 'Halloumi',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 320, protein: 22.0, carbs: 1.0, fat: 25.0 }
    },
    {
        foodId: 'PL157',
        label: 'Havarti',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 25.0, carbs: 1.0, fat: 28.0 }
    },
    {
        foodId: 'PL158',
        label: 'Idiazabal',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 400, protein: 25.0, carbs: 0.0, fat: 32.0 }
    },
    {
        foodId: 'PL159',
        label: 'Jarlsberg',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 350, protein: 27.0, carbs: 1.0, fat: 28.0 }
    },
    {
        foodId: 'PL160',
        label: 'Kefalotyri',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 400, protein: 26.0, carbs: 1.0, fat: 32.0 }
    },
    {
        foodId: 'PL161',
        label: 'Laguiole',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 390, protein: 25.0, carbs: 0.5, fat: 31.0 }
    },
    {
        foodId: 'PL162',
        label: 'Langres',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 330, protein: 21.0, carbs: 0.5, fat: 28.0 }
    },
    {
        foodId: 'PL163',
        label: 'Livarot',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 325, protein: 21.0, carbs: 0.5, fat: 27.0 }
    },
    {
        foodId: 'PL164',
        label: 'Mahón',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 370, protein: 26.0, carbs: 0.5, fat: 30.0 }
    },
    {
        foodId: 'PL165',
        label: 'Manchego',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 376, protein: 25.0, carbs: 0.5, fat: 31.0 }
    },
    {
        foodId: 'PL166',
        label: 'Monterey Jack',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 373, protein: 25.0, carbs: 1.0, fat: 30.0 }
    },
    {
        foodId: 'PL167',
        label: 'Morbier',
        category: 'fromage',
        unit: 'g',
        nutrients: { calories: 340, protein: 23.0, carbs: 0.5, fat: 28.0 }
    }
];

export const PRODUIT_LAITIER_CATEGORIES = {
    lait_animal: { label: 'Laits animaux', icon: GiMilkCarton },
    beurre: { label: 'Beurres', icon: GiButter },
    fromage: { label: 'Fromages', icon: FaCheese },
    yaourt: { label: 'Yaourts et produits fermentés', icon: FaGlassWhiskey },
    creme: { label: 'Crèmes et desserts lactés', icon: GiMilkCarton },
    glace: { label: 'Glaces et produits glacés au lait', icon: FaIceCream },
    autre: { label: 'Autres produits laitiers & techniques', icon: GiMilkCarton },
    lait_vegetal: { label: 'Laits végétaux', icon: GiMilkCarton }
}; 