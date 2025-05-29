import {
  GiCarrot, GiFruitBowl, GiMeat, GiFishCooked, GiMilkCarton, GiPeanut, GiEggClutch, GiWheat, GiForkKnifeSpoon,
  GiAppleSeeds, GiPeach, GiGrapes, GiPineapple, GiHerbsBundle, GiBeanstalk, GiMushroomGills, GiCroissant,
  GiCakeSlice, GiCookie, GiBread, GiFlatfish, GiCrabClaw, GiSquid, GiCow, GiPig, GiChickenOven, GiSausage
} from 'react-icons/gi';
import { FaOilCan } from 'react-icons/fa';

export function getFoodCategoryIcon(category: string, size = 22) {
    // Catégories principales
    switch (category) {
        case 'legume':
            return <GiCarrot size={size} className="text-green-500" />;
        case 'fruit':
            return <GiFruitBowl size={size} className="text-orange-400" />;
        case 'viande':
            return <GiMeat size={size} className="text-pink-500" />;
        case 'poisson':
            return <GiFishCooked size={size} className="text-blue-400" />;
        case 'produit_laitier':
            return <GiMilkCarton size={size} className="text-yellow-400" />;
        case 'oleagineux':
            return <GiPeanut size={size} className="text-amber-700" />;
        case 'oeuf':
            return <GiEggClutch size={size} className="text-yellow-300" />;
        case 'cereal':
            return <GiWheat size={size} className="text-orange-400" />;
        case 'autre':
            return <GiForkKnifeSpoon size={size} className="text-gray-400" />;
        case 'huile':
            return <FaOilCan size={size} className="text-lime-500" />;
    }

    // Sous-catégories de fruits
    if (category.startsWith('fruits_')) {
        switch (category) {
            case 'fruits_pepins':
                return <GiAppleSeeds size={size} className="text-red-400" />;
            case 'fruits_agrumes':
                return <GiPineapple size={size} className="text-yellow-400" />;
            case 'fruits_baies':
                return <GiGrapes size={size} className="text-purple-500" />;
            case 'fruits_noyau':
                return <GiPeach size={size} className="text-pink-400" />;
            case 'fruits_tropicaux':
                return <GiPineapple size={size} className="text-yellow-400" />;
            case 'fruits_melon':
                return <GiFruitBowl size={size} className="text-green-400" />;
            case 'fruits_secs':
                return <GiGrapes size={size} className="text-amber-600" />;
            case 'fruits_transformes':
                return <GiFruitBowl size={size} className="text-yellow-600" />;
            default:
                return <GiFruitBowl size={size} className="text-gray-400" />;
        }
    }

    // Sous-catégories de viandes
    if (category.startsWith('viande_')) {
        switch (category) {
            case 'viande_boeuf':
                return <GiCow size={size} className="text-pink-400" />;
            case 'viande_veau':
                return <GiCow size={size} className="text-pink-300" />;
            case 'viande_porc':
                return <GiPig size={size} className="text-pink-400" />;
            case 'viande_agneau':
                return <GiCow size={size} className="text-pink-200" />;
            case 'viande_chevre':
                return <GiCow size={size} className="text-pink-200" />;
            case 'viande_cheval':
                return <GiCow size={size} className="text-pink-200" />;
            case 'viande_gibier':
                return <GiCow size={size} className="text-pink-200" />;
            case 'viande_morceaux':
                return <GiMeat size={size} className="text-pink-400" />;
            case 'viande_volaille':
                return <GiChickenOven size={size} className="text-yellow-400" />;
            case 'viande_abats':
                return <GiSausage size={size} className="text-pink-400" />;
            case 'viande_charcuterie_crue':
                return <GiSausage size={size} className="text-pink-400" />;
            case 'viande_charcuterie_cuite':
                return <GiSausage size={size} className="text-pink-400" />;
        }
    }

    // Sous-catégories de produits laitiers
    if (category.startsWith('lait_') || category === 'beurre' || category === 'fromage' || category === 'yaourt' || category === 'creme' || category === 'glace') {
        switch (category) {
            case 'lait_animal':
            case 'lait_vegetal':
            case 'creme':
                return <GiMilkCarton size={size} className="text-yellow-400" />;
            case 'beurre':
                return <GiMilkCarton size={size} className="text-yellow-300" />;
            case 'fromage':
                return <GiMilkCarton size={size} className="text-yellow-500" />;
            case 'yaourt':
                return <GiMilkCarton size={size} className="text-yellow-400" />;
            case 'glace':
                return <GiMilkCarton size={size} className="text-blue-200" />;
        }
    }

    // Sous-catégories de boulangerie
    if (category.startsWith('boulangerie_')) {
        switch (category) {
            case 'boulangerie_viennoiserie':
                return <GiCroissant size={size} className="text-orange-400" />;
            case 'boulangerie_patisserie':
                return <GiCakeSlice size={size} className="text-pink-400" />;
            case 'boulangerie_biscuits':
                return <GiCookie size={size} className="text-yellow-700" />;
            case 'boulangerie_pain_traditionnel':
                return <GiBread size={size} className="text-yellow-800" />;
            case 'boulangerie_pain_special':
                return <GiBread size={size} className="text-yellow-600" />;
            case 'boulangerie_pain_sucre':
                return <GiBread size={size} className="text-yellow-400" />;
        }
    }

    // Sous-catégories de légumes
    if (category.startsWith('legume_')) {
        switch (category) {
            case 'legume_feuille':
                return <GiHerbsBundle size={size} className="text-green-400" />;
            case 'legume_racine':
                return <GiCarrot size={size} className="text-orange-500" />;
            case 'legume_bulbe':
            case 'legume_tubercule':
                return <GiCarrot size={size} className="text-yellow-500" />;
            case 'legume_fruit':
                return <GiFruitBowl size={size} className="text-green-400" />;
            case 'legume_legumineuse':
                return <GiBeanstalk size={size} className="text-green-700" />;
            case 'legume_tige':
                return <GiHerbsBundle size={size} className="text-green-300" />;
            case 'legume_champignon':
                return <GiMushroomGills size={size} className="text-amber-700" />;
            case 'legume_aromatique':
                return <GiHerbsBundle size={size} className="text-green-500" />;
        }
    }

    // Sous-catégories de poissons
    if (category.startsWith('poisson_') || category === 'crustace' || category === 'mollusque') {
        switch (category) {
            case 'poisson_maigre':
            case 'poisson_gras':
                return <GiFishCooked size={size} className="text-blue-400" />;
            case 'poisson_plat':
                return <GiFlatfish size={size} className="text-blue-300" />;
            case 'poisson_eau_douce':
                return <GiFishCooked size={size} className="text-blue-200" />;
            case 'poisson_tropical':
                return <GiFishCooked size={size} className="text-yellow-400" />;
            case 'poisson_transforme':
                return <GiFishCooked size={size} className="text-gray-400" />;
            case 'oeufs_poisson':
                return <GiEggClutch size={size} className="text-orange-400" />;
            case 'crustace':
                return <GiCrabClaw size={size} className="text-pink-400" />;
            case 'mollusque':
                return <GiSquid size={size} className="text-purple-400" />;
        }
    }

    // Sous-catégories de céréales
    if (category.startsWith('cereal_')) {
        switch (category) {
            case 'cereal_ble':
                return <GiWheat size={size} className="text-yellow-600" />;
            case 'cereal_riz':
                return <GiWheat size={size} className="text-yellow-400" />;
            case 'cereal_mais':
                return <GiWheat size={size} className="text-yellow-300" />;
            case 'cereal_quinoa':
                return <GiWheat size={size} className="text-yellow-500" />;
            case 'cereal_orge':
                return <GiWheat size={size} className="text-yellow-700" />;
            case 'cereal_seigle':
                return <GiWheat size={size} className="text-yellow-800" />;
            case 'cereal_sarrasin':
                return <GiWheat size={size} className="text-yellow-900" />;
            case 'cereal_amarante':
                return <GiWheat size={size} className="text-yellow-500" />;
            case 'cereal_epeautre':
                return <GiWheat size={size} className="text-yellow-400" />;
            case 'cereal_farine':
                return <GiWheat size={size} className="text-yellow-200" />;
        }
    }

    // Icône par défaut si aucune catégorie ne correspond
    return <GiForkKnifeSpoon size={size} className="text-gray-400" />;
} 