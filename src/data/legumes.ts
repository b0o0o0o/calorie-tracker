import { FaLeaf, FaAppleAlt, FaCircle } from 'react-icons/fa';
import { GiMushroom, GiCarrot, GiHerbsBundle } from 'react-icons/gi';
import { BiLeaf } from 'react-icons/bi';
import { RiPlantLine } from 'react-icons/ri';

export interface Legume {
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

export const LEGUMES: Legume[] = [
    // 🥬 Légumes feuilles
    {
        foodId: 'LE001',
        label: 'Laitue',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 17, protein: 1.5, carbs: 2.8, fat: 0.2 }
    },
    {
        foodId: 'LE002',
        label: 'Épinards',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 26, protein: 2.6, carbs: 3.6, fat: 0.4 }
    },
    {
        foodId: 'LE003',
        label: 'Bette',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 20, protein: 1.2, carbs: 3.0, fat: 0.3 }
    },
    {
        foodId: 'LE004',
        label: 'Chou frisé',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 35, protein: 2.9, carbs: 6.2, fat: 0.5 }
    },
    {
        foodId: 'LE005',
        label: 'Chou vert',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 31, protein: 2.0, carbs: 5.3, fat: 0.3 }
    },
    {
        foodId: 'LE006',
        label: 'Chou rouge',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 27, protein: 1.6, carbs: 5.0, fat: 0.2 }
    },
    {
        foodId: 'LE007',
        label: 'Chou chinois',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 20, protein: 1.2, carbs: 3.2, fat: 0.3 }
    },
    {
        foodId: 'LE008',
        label: 'Chou cabus',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 25, protein: 1.5, carbs: 4.2, fat: 0.2 }
    },
    {
        foodId: 'LE009',
        label: 'Chou de Bruxelles',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 43, protein: 3.4, carbs: 7.1, fat: 0.4 }
    },
    {
        foodId: 'LE010',
        label: 'Mâche',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 19, protein: 2.0, carbs: 2.8, fat: 0.2 }
    },
    {
        foodId: 'LE011',
        label: 'Roquette',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 25, protein: 2.5, carbs: 3.0, fat: 0.3 }
    },
    {
        foodId: 'LE012',
        label: 'Cresson',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 15, protein: 2.2, carbs: 1.5, fat: 0.2 }
    },
    {
        foodId: 'LE013',
        label: 'Endive',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 16, protein: 1.2, carbs: 2.3, fat: 0.3 }
    },
    {
        foodId: 'LE014',
        label: 'Radicchio',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 23, protein: 1.5, carbs: 4.0, fat: 0.3 }
    },
    {
        foodId: 'LE015',
        label: 'Feuilles de moutarde',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 28, protein: 2.6, carbs: 3.7, fat: 0.3 }
    },
    {
        foodId: 'LE016',
        label: 'Feuilles de navet',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 27, protein: 2.3, carbs: 4.1, fat: 0.4 }
    },
    {
        foodId: 'LE017',
        label: 'Pak choï',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 22, protein: 1.9, carbs: 3.2, fat: 0.2 }
    },
    {
        foodId: 'LE018',
        label: 'Mizuna',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 18, protein: 2.0, carbs: 2.5, fat: 0.2 }
    },
    {
        foodId: 'LE019',
        label: 'Pourpier',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 20, protein: 1.8, carbs: 3.3, fat: 0.3 }
    },
    {
        foodId: 'LE020',
        label: 'Amarante',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 34, protein: 3.1, carbs: 4.2, fat: 0.4 }
    },
    {
        foodId: 'LE021',
        label: 'Basilic sacré',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 26, protein: 2.1, carbs: 3.5, fat: 0.3 }
    },
    {
        foodId: 'LE022',
        label: 'Trèfle',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 21, protein: 2.0, carbs: 2.9, fat: 0.2 }
    },
    {
        foodId: 'LE023',
        label: 'Kangkong',
        category: 'legume_feuille',
        unit: 'g',
        nutrients: { calories: 19, protein: 2.3, carbs: 2.8, fat: 0.2 }
    },

    // 🥕 Légumes racines
    {
        foodId: 'LE024',
        label: 'Carotte',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2 }
    },
    {
        foodId: 'LE025',
        label: 'Betterave',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 43, protein: 1.6, carbs: 9.4, fat: 0.2 }
    },
    {
        foodId: 'LE026',
        label: 'Navet',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 28, protein: 0.9, carbs: 6.2, fat: 0.1 }
    },
    {
        foodId: 'LE027',
        label: 'Panais',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 75, protein: 1.2, carbs: 17.0, fat: 0.3 }
    },
    {
        foodId: 'LE028',
        label: 'Radis',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 16, protein: 0.7, carbs: 3.4, fat: 0.1 }
    },
    {
        foodId: 'LE029',
        label: 'Rutabaga',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 37, protein: 1.2, carbs: 8.6, fat: 0.2 }
    },
    {
        foodId: 'LE030',
        label: 'Topinambour',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 73, protein: 2.0, carbs: 17.4, fat: 0.1 }
    },
    {
        foodId: 'LE031',
        label: 'Salsifis',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 82, protein: 3.3, carbs: 17.0, fat: 0.2 }
    },
    {
        foodId: 'LE032',
        label: 'Scorsonère',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 80, protein: 3.0, carbs: 18.0, fat: 0.2 }
    },
    {
        foodId: 'LE033',
        label: 'Manioc',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 160, protein: 1.4, carbs: 38.0, fat: 0.3 }
    },
    {
        foodId: 'LE034',
        label: 'Igname',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 118, protein: 1.5, carbs: 28.0, fat: 0.2 }
    },
    {
        foodId: 'LE035',
        label: 'Taro',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 112, protein: 1.6, carbs: 26.5, fat: 0.2 }
    },
    {
        foodId: 'LE036',
        label: 'Céleri-rave',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 42, protein: 1.5, carbs: 9.2, fat: 0.3 }
    },
    {
        foodId: 'LE037',
        label: 'Patate douce',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 86, protein: 1.6, carbs: 20.1, fat: 0.1 }
    },
    {
        foodId: 'LE038',
        label: 'Oca du Pérou',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 64, protein: 1.5, carbs: 13.0, fat: 0.1 }
    },
    {
        foodId: 'LE039',
        label: 'Yacon',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 54, protein: 0.8, carbs: 12.8, fat: 0.1 }
    },
    {
        foodId: 'LE040',
        label: 'Macabo',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 105, protein: 2.0, carbs: 24.0, fat: 0.3 }
    },
    {
        foodId: 'LE041',
        label: 'Wasabi',
        category: 'legume_racine',
        unit: 'g',
        nutrients: { calories: 109, protein: 4.0, carbs: 23.5, fat: 0.6 }
    },

    // 🧅 Légumes bulbes
    {
        foodId: 'LE042',
        label: 'Oignon jaune',
        category: 'legume_bulbe',
        unit: 'g',
        nutrients: { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.2 }
    },
    {
        foodId: 'LE043',
        label: 'Oignon rouge',
        category: 'legume_bulbe',
        unit: 'g',
        nutrients: { calories: 42, protein: 1.2, carbs: 9.7, fat: 0.2 }
    },
    {
        foodId: 'LE044',
        label: 'Oignon blanc',
        category: 'legume_bulbe',
        unit: 'g',
        nutrients: { calories: 38, protein: 1.0, carbs: 8.8, fat: 0.2 }
    },
    {
        foodId: 'LE045',
        label: 'Ail',
        category: 'legume_bulbe',
        unit: 'g',
        nutrients: { calories: 149, protein: 6.4, carbs: 33.1, fat: 0.5 }
    },
    {
        foodId: 'LE046',
        label: 'Échalote',
        category: 'legume_bulbe',
        unit: 'g',
        nutrients: { calories: 72, protein: 2.5, carbs: 16.8, fat: 0.1 }
    },
    {
        foodId: 'LE047',
        label: 'Ciboule',
        category: 'legume_bulbe',
        unit: 'g',
        nutrients: { calories: 32, protein: 1.8, carbs: 7.3, fat: 0.3 }
    },
    {
        foodId: 'LE048',
        label: 'Ciboulette',
        category: 'legume_bulbe',
        unit: 'g',
        nutrients: { calories: 30, protein: 3.3, carbs: 4.4, fat: 0.7 }
    },
    {
        foodId: 'LE049',
        label: 'Poireau',
        category: 'legume_bulbe',
        unit: 'g',
        nutrients: { calories: 31, protein: 1.5, carbs: 7.4, fat: 0.2 }
    },
    {
        foodId: 'LE050',
        label: 'Fenouil',
        category: 'legume_bulbe',
        unit: 'g',
        nutrients: { calories: 31, protein: 1.2, carbs: 7.3, fat: 0.2 }
    },
    {
        foodId: 'LE051',
        label: 'Tulbaghia',
        category: 'legume_bulbe',
        unit: 'g',
        nutrients: { calories: 35, protein: 2.0, carbs: 5.9, fat: 0.3 }
    },
    {
        foodId: 'LE052',
        label: 'Ail triquètre',
        category: 'legume_bulbe',
        unit: 'g',
        nutrients: { calories: 37, protein: 2.1, carbs: 6.5, fat: 0.2 }
    },

    // 🥔 Légumes tubercules
    {
        foodId: 'LE053',
        label: 'Pomme de terre',
        category: 'legume_tubercule',
        unit: 'g',
        nutrients: { calories: 77, protein: 2.0, carbs: 17.0, fat: 0.1 }
    },
    {
        foodId: 'LE054',
        label: 'Patate douce',
        category: 'legume_tubercule',
        unit: 'g',
        nutrients: { calories: 86, protein: 1.6, carbs: 20.1, fat: 0.1 }
    },
    {
        foodId: 'LE055',
        label: 'Taro',
        category: 'legume_tubercule',
        unit: 'g',
        nutrients: { calories: 112, protein: 1.6, carbs: 26.5, fat: 0.2 }
    },
    {
        foodId: 'LE056',
        label: 'Igname',
        category: 'legume_tubercule',
        unit: 'g',
        nutrients: { calories: 118, protein: 1.5, carbs: 28.0, fat: 0.2 }
    },
    {
        foodId: 'LE057',
        label: 'Topinambour',
        category: 'legume_tubercule',
        unit: 'g',
        nutrients: { calories: 73, protein: 2.0, carbs: 17.4, fat: 0.1 }
    },
    {
        foodId: 'LE058',
        label: 'Jerusalem artichoke',
        category: 'legume_tubercule',
        unit: 'g',
        nutrients: { calories: 75, protein: 2.2, carbs: 18.2, fat: 0.1 }
    },
    {
        foodId: 'LE059',
        label: 'Yautia',
        category: 'legume_tubercule',
        unit: 'g',
        nutrients: { calories: 98, protein: 1.8, carbs: 22.0, fat: 0.2 }
    },
    {
        foodId: 'LE060',
        label: 'Arrowroot',
        category: 'legume_tubercule',
        unit: 'g',
        nutrients: { calories: 65, protein: 1.2, carbs: 13.1, fat: 0.2 }
    },
    {
        foodId: 'LE061',
        label: 'Ulluco',
        category: 'legume_tubercule',
        unit: 'g',
        nutrients: { calories: 63, protein: 1.5, carbs: 14.3, fat: 0.1 }
    },
    {
        foodId: 'LE062',
        label: 'Mashua',
        category: 'legume_tubercule',
        unit: 'g',
        nutrients: { calories: 61, protein: 1.4, carbs: 13.8, fat: 0.1 }
    },

    // 🍅 Légumes fruits
    {
        foodId: 'LE063',
        label: 'Tomate',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 }
    },
    {
        foodId: 'LE064',
        label: 'Poivron',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 20, protein: 1.0, carbs: 4.6, fat: 0.3 }
    },
    {
        foodId: 'LE065',
        label: 'Aubergine',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 25, protein: 1.0, carbs: 5.9, fat: 0.2 }
    },
    {
        foodId: 'LE066',
        label: 'Courgette',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 17, protein: 1.2, carbs: 3.1, fat: 0.2 }
    },
    {
        foodId: 'LE067',
        label: 'Concombre',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 16, protein: 0.7, carbs: 3.6, fat: 0.1 }
    },
    {
        foodId: 'LE068',
        label: 'Cornichon',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 14, protein: 0.6, carbs: 3.2, fat: 0.1 }
    },
    {
        foodId: 'LE069',
        label: 'Potiron',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 26, protein: 1.0, carbs: 6.5, fat: 0.1 }
    },
    {
        foodId: 'LE070',
        label: 'Citrouille',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 20, protein: 0.9, carbs: 4.5, fat: 0.1 }
    },
    {
        foodId: 'LE071',
        label: 'Courge musquée',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 45, protein: 1.0, carbs: 11.7, fat: 0.1 }
    },
    {
        foodId: 'LE072',
        label: 'Courge spaghetti',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 31, protein: 0.7, carbs: 7.0, fat: 0.2 }
    },
    {
        foodId: 'LE073',
        label: 'Melon amer',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 19, protein: 1.0, carbs: 4.3, fat: 0.2 }
    },
    {
        foodId: 'LE074',
        label: 'Chayotte',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 19, protein: 0.8, carbs: 4.5, fat: 0.1 }
    },
    {
        foodId: 'LE075',
        label: 'Gombo',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 33, protein: 2.0, carbs: 7.5, fat: 0.2 }
    },
    {
        foodId: 'LE076',
        label: 'Tomatillo',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 32, protein: 1.3, carbs: 5.8, fat: 0.4 }
    },
    {
        foodId: 'LE077',
        label: 'Pepino',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 24, protein: 0.8, carbs: 5.4, fat: 0.2 }
    },
    {
        foodId: 'LE078',
        label: 'Kiwano',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 44, protein: 1.2, carbs: 9.1, fat: 0.4 }
    },
    {
        foodId: 'LE079',
        label: 'Patidou',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 38, protein: 0.9, carbs: 9.0, fat: 0.2 }
    },
    {
        foodId: 'LE080',
        label: 'Delicata',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 37, protein: 1.1, carbs: 8.6, fat: 0.2 }
    },
    {
        foodId: 'LE081',
        label: 'Courge turban',
        category: 'legume_fruit',
        unit: 'g',
        nutrients: { calories: 40, protein: 1.0, carbs: 9.5, fat: 0.2 }
    },

    // 🌱 Légumineuses fraîches
    {
        foodId: 'LE082',
        label: 'Haricots verts',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 31, protein: 1.8, carbs: 6.9, fat: 0.1 }
    },
    {
        foodId: 'LE083',
        label: 'Haricots plats',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 34, protein: 2.0, carbs: 7.2, fat: 0.2 }
    },
    {
        foodId: 'LE084',
        label: 'Haricots beurre',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 36, protein: 2.1, carbs: 7.8, fat: 0.2 }
    },
    {
        foodId: 'LE085',
        label: 'Pois verts',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 81, protein: 5.4, carbs: 14.5, fat: 0.4 }
    },
    {
        foodId: 'LE086',
        label: 'Pois mange-tout',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 42, protein: 3.1, carbs: 7.2, fat: 0.3 }
    },
    {
        foodId: 'LE087',
        label: 'Pois gourmands',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 40, protein: 3.0, carbs: 7.0, fat: 0.2 }
    },
    {
        foodId: 'LE088',
        label: 'Fèves',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 88, protein: 6.6, carbs: 15.4, fat: 0.4 }
    },
    {
        foodId: 'LE089',
        label: 'Edamame',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 122, protein: 11.5, carbs: 8.9, fat: 5.2 }
    },
    {
        foodId: 'LE090',
        label: 'Haricot mungo',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 105, protein: 7.0, carbs: 19.1, fat: 0.6 }
    },
    {
        foodId: 'LE091',
        label: 'Lablab',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 95, protein: 6.2, carbs: 16.4, fat: 0.5 }
    },
    {
        foodId: 'LE092',
        label: 'Pois pigeon',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 140, protein: 10.0, carbs: 25.0, fat: 0.8 }
    },
    {
        foodId: 'LE093',
        label: 'Pois chiche frais',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 119, protein: 8.2, carbs: 19.0, fat: 1.6 }
    },
    {
        foodId: 'LE094',
        label: 'Dolique asperge',
        category: 'legume_legumineuse',
        unit: 'g',
        nutrients: { calories: 88, protein: 5.5, carbs: 14.0, fat: 0.4 }
    },

    // 🌿 Légumes tiges
    {
        foodId: 'LE095',
        label: 'Céleri branche',
        category: 'legume_tige',
        unit: 'g',
        nutrients: { calories: 16, protein: 0.7, carbs: 3.2, fat: 0.2 }
    },
    {
        foodId: 'LE096',
        label: 'Rhubarbe',
        category: 'legume_tige',
        unit: 'g',
        nutrients: { calories: 21, protein: 0.9, carbs: 4.5, fat: 0.2 }
    },
    {
        foodId: 'LE097',
        label: 'Asperge verte',
        category: 'legume_tige',
        unit: 'g',
        nutrients: { calories: 20, protein: 2.2, carbs: 3.9, fat: 0.2 }
    },
    {
        foodId: 'LE098',
        label: 'Asperge blanche',
        category: 'legume_tige',
        unit: 'g',
        nutrients: { calories: 21, protein: 2.1, carbs: 4.0, fat: 0.2 }
    },
    {
        foodId: 'LE099',
        label: 'Cœur de palmier',
        category: 'legume_tige',
        unit: 'g',
        nutrients: { calories: 29, protein: 2.5, carbs: 6.7, fat: 0.3 }
    },
    {
        foodId: 'LE100',
        label: 'Pousse de bambou',
        category: 'legume_tige',
        unit: 'g',
        nutrients: { calories: 27, protein: 2.6, carbs: 5.2, fat: 0.2 }
    },
    {
        foodId: 'LE101',
        label: 'Cardon',
        category: 'legume_tige',
        unit: 'g',
        nutrients: { calories: 17, protein: 1.0, carbs: 3.2, fat: 0.1 }
    },
    {
        foodId: 'LE102',
        label: 'Chénopode bon-Henri',
        category: 'legume_tige',
        unit: 'g',
        nutrients: { calories: 30, protein: 2.7, carbs: 4.3, fat: 0.3 }
    },
    {
        foodId: 'LE103',
        label: 'Tige d\'ail',
        category: 'legume_tige',
        unit: 'g',
        nutrients: { calories: 28, protein: 1.4, carbs: 5.1, fat: 0.3 }
    },
    {
        foodId: 'LE104',
        label: 'Fougère comestible',
        category: 'legume_tige',
        unit: 'g',
        nutrients: { calories: 34, protein: 4.0, carbs: 5.0, fat: 0.2 }
    },

    // 🍄 Champignons
    {
        foodId: 'LE105',
        label: 'Champignon de Paris',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3 }
    },
    {
        foodId: 'LE106',
        label: 'Pleurote',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 33, protein: 3.3, carbs: 6.1, fat: 0.4 }
    },
    {
        foodId: 'LE107',
        label: 'Shiitake',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 35, protein: 2.2, carbs: 6.8, fat: 0.5 }
    },
    {
        foodId: 'LE108',
        label: 'Cèpe',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 31, protein: 3.7, carbs: 4.9, fat: 0.4 }
    },
    {
        foodId: 'LE109',
        label: 'Girolle',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 25, protein: 1.5, carbs: 4.5, fat: 0.3 }
    },
    {
        foodId: 'LE110',
        label: 'Morille',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 31, protein: 3.1, carbs: 5.0, fat: 0.4 }
    },
    {
        foodId: 'LE111',
        label: 'Trompette de la mort',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 30, protein: 3.0, carbs: 5.2, fat: 0.3 }
    },
    {
        foodId: 'LE112',
        label: 'Enoki',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 37, protein: 2.7, carbs: 7.5, fat: 0.3 }
    },
    {
        foodId: 'LE113',
        label: 'Maitaké',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 32, protein: 1.9, carbs: 6.9, fat: 0.4 }
    },
    {
        foodId: 'LE114',
        label: 'Pied bleu',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 28, protein: 3.0, carbs: 5.4, fat: 0.2 }
    },
    {
        foodId: 'LE115',
        label: 'Pied de mouton',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 29, protein: 2.8, carbs: 5.3, fat: 0.3 }
    },
    {
        foodId: 'LE116',
        label: 'Truffe',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 92, protein: 7.4, carbs: 10.5, fat: 2.5 }
    },
    {
        foodId: 'LE117',
        label: 'Hydne hérisson',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 35, protein: 2.6, carbs: 6.4, fat: 0.3 }
    },
    {
        foodId: 'LE118',
        label: 'Coprin chevelu',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 25, protein: 2.5, carbs: 4.5, fat: 0.2 }
    },
    {
        foodId: 'LE119',
        label: 'Bolet bai',
        category: 'legume_champignon',
        unit: 'g',
        nutrients: { calories: 30, protein: 3.2, carbs: 5.1, fat: 0.2 }
    },

    // 🧄 Légumes aromatiques & condiments
    {
        foodId: 'LE120',
        label: 'Persil',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 36, protein: 3.0, carbs: 6.3, fat: 0.5 }
    },
    {
        foodId: 'LE121',
        label: 'Coriandre',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 23, protein: 2.1, carbs: 3.7, fat: 0.3 }
    },
    {
        foodId: 'LE122',
        label: 'Aneth',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 43, protein: 3.5, carbs: 6.0, fat: 0.4 }
    },
    {
        foodId: 'LE123',
        label: 'Basilic',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 22, protein: 3.2, carbs: 2.7, fat: 0.3 }
    },
    {
        foodId: 'LE124',
        label: 'Menthe',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 44, protein: 3.8, carbs: 8.0, fat: 0.7 }
    },
    {
        foodId: 'LE125',
        label: 'Oseille',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 22, protein: 2.0, carbs: 3.9, fat: 0.3 }
    },
    {
        foodId: 'LE126',
        label: 'Cerfeuil',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 40, protein: 3.3, carbs: 6.1, fat: 0.3 }
    },
    {
        foodId: 'LE127',
        label: 'Estragon',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 46, protein: 3.4, carbs: 7.0, fat: 0.5 }
    },
    {
        foodId: 'LE128',
        label: 'Laurier',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 37, protein: 2.7, carbs: 6.0, fat: 0.4 }
    },
    {
        foodId: 'LE129',
        label: 'Thym',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 47, protein: 3.9, carbs: 8.5, fat: 0.6 }
    },
    {
        foodId: 'LE130',
        label: 'Romarin',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 50, protein: 3.5, carbs: 9.2, fat: 0.7 }
    },
    {
        foodId: 'LE131',
        label: 'Ciboulette',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 30, protein: 3.3, carbs: 4.4, fat: 0.7 }
    },
    {
        foodId: 'LE132',
        label: 'Livèche',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 32, protein: 3.2, carbs: 5.6, fat: 0.3 }
    },
    {
        foodId: 'LE133',
        label: 'Origan',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 45, protein: 3.6, carbs: 7.0, fat: 0.5 }
    },
    {
        foodId: 'LE134',
        label: 'Sarriette',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 42, protein: 3.5, carbs: 6.8, fat: 0.4 }
    },
    {
        foodId: 'LE135',
        label: 'Mélisse',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 31, protein: 3.1, carbs: 5.3, fat: 0.3 }
    },
    {
        foodId: 'LE136',
        label: 'Fenugrec',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 46, protein: 3.4, carbs: 7.1, fat: 0.6 }
    },
    {
        foodId: 'LE137',
        label: 'Cresson de Para',
        category: 'legume_aromatique',
        unit: 'g',
        nutrients: { calories: 25, protein: 2.3, carbs: 4.0, fat: 0.3 }
    }
];

export const LEGUME_CATEGORIES = {
    legume_feuille: { label: 'Légumes feuilles', icon: FaLeaf },
    legume_racine: { label: 'Légumes racines', icon: GiCarrot },
    legume_bulbe: { label: 'Légumes bulbes', icon: FaCircle },
    legume_tubercule: { label: 'Légumes tubercules', icon: FaCircle },
    legume_fruit: { label: 'Légumes fruits', icon: FaAppleAlt },
    legume_legumineuse: { label: 'Légumineuses fraîches', icon: BiLeaf },
    legume_tige: { label: 'Légumes tiges', icon: RiPlantLine },
    legume_champignon: { label: 'Champignons', icon: GiMushroom },
    legume_aromatique: { label: 'Légumes aromatiques & condiments', icon: GiHerbsBundle }
}; 