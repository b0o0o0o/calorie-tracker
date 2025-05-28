import { FaCarrot, FaAppleAlt, FaDrumstickBite, FaFish, FaCheese, FaSeedling, FaEgg, FaQuestion, FaLeaf, FaCircle, FaPiggyBank, FaHorse, FaBrain, FaUtensils, FaBreadSlice, FaCookie, FaCookieBite, FaGlobe, FaWineGlassAlt, FaWater, FaPeace, FaWineGlass, FaAt, FaPepperHot } from 'react-icons/fa';
import { GiOlive, GiRabbit, GiCow, GiSheep, GiMeat, GiMeatCleaver, GiMilkCarton, GiButter, GiCroissant, GiCakeSlice, GiMushroom, GiCarrot, GiHerbsBundle, GiFlatfish, GiFishBucket, GiTropicalFish, GiCannedFish, GiFishEggs, GiCrab, GiOctopus, GiOrange, GiWheat, GiCorn, GiOre, GiFlour } from 'react-icons/gi';
import { MdGrain, MdLocalDrink, MdRestaurant, MdCake } from 'react-icons/md';
import { IoMdIceCream } from 'react-icons/io';
import { BiLeaf } from 'react-icons/bi';
import { RiPlantLine } from 'react-icons/ri';

export function getFoodCategoryIcon(category: string, size = 22) {
    // Catégories principales
    switch (category) {
        case 'legume':
            return <FaCarrot size={size} className="text-green-400" />;
        case 'fruit':
            return <FaAppleAlt size={size} className="text-red-400" />;
        case 'viande':
            return <FaDrumstickBite size={size} className="text-pink-400" />;
        case 'poisson':
            return <FaFish size={size} className="text-blue-400" />;
        case 'produit_laitier':
            return <FaCheese size={size} className="text-yellow-400" />;
        case 'oleagineux':
            return <FaSeedling size={size} className="text-amber-700" />;
        case 'oeuf':
            return <FaEgg size={size} className="text-yellow-300" />;
        case 'cereal':
            return <MdGrain size={size} className="text-orange-400" />;
        case 'autre':
            return <IoMdIceCream size={size} className="text-gray-400" />;
        case 'huile':
            return <GiOlive size={size} className="text-lime-500" />;
    }

    // Sous-catégories de fruits
    if (category.startsWith('fruits_')) {
        switch (category) {
            case 'fruits_pepins':
                return <FaAppleAlt size={size} className="text-red-400" />;
            case 'fruits_agrumes':
                return <GiOrange size={size} className="text-orange-400" />;
            case 'fruits_baies':
                return <FaPeace size={size} className="text-purple-400" />;
            case 'fruits_exotiques':
                return <FaGlobe size={size} className="text-yellow-400" />;
            case 'fruits_secs':
                return <FaAppleAlt size={size} className="text-amber-600" />;
            case 'fruits_olives':
                return <GiOlive size={size} className="text-green-600" />;
            case 'fruits_graines':
                return <FaSeedling size={size} className="text-amber-700" />;
            case 'fruits_alcoolises':
                return <FaWineGlassAlt size={size} className="text-red-600" />;
            case 'fruits_conserve':
                return <FaWater size={size} className="text-blue-400" />;
            case 'fruits_noyau':
                return <FaAppleAlt size={size} className="text-pink-400" />;
        }
    }

    // Sous-catégories de viandes
    if (category.startsWith('viande_')) {
        switch (category) {
            case 'viande_boeuf':
            case 'viande_veau':
                return <GiCow size={size} className="text-pink-400" />;
            case 'viande_porc':
                return <FaPiggyBank size={size} className="text-pink-400" />;
            case 'viande_agneau':
            case 'viande_chevre':
                return <GiSheep size={size} className="text-pink-400" />;
            case 'viande_cheval':
                return <FaHorse size={size} className="text-pink-400" />;
            case 'viande_gibier':
                return <GiRabbit size={size} className="text-pink-400" />;
            case 'viande_morceaux':
                return <GiMeatCleaver size={size} className="text-pink-400" />;
            case 'viande_volaille':
                return <FaDrumstickBite size={size} className="text-pink-400" />;
            case 'viande_abats':
                return <FaBrain size={size} className="text-pink-400" />;
            case 'viande_charcuterie_crue':
                return <GiMeat size={size} className="text-pink-400" />;
            case 'viande_charcuterie_cuite':
                return <FaUtensils size={size} className="text-pink-400" />;
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
                return <GiButter size={size} className="text-yellow-400" />;
            case 'fromage':
                return <FaCheese size={size} className="text-yellow-400" />;
            case 'yaourt':
                return <FaUtensils size={size} className="text-yellow-400" />;
            case 'glace':
                return <IoMdIceCream size={size} className="text-yellow-400" />;
        }
    }

    // Sous-catégories de boulangerie
    if (category.startsWith('boulangerie_')) {
        switch (category) {
            case 'boulangerie_viennoiserie':
                return <GiCroissant size={size} className="text-orange-400" />;
            case 'boulangerie_patisserie':
                return <GiCakeSlice size={size} className="text-orange-400" />;
            case 'boulangerie_biscuits':
                return <FaCookie size={size} className="text-orange-400" />;
            case 'boulangerie_pain_traditionnel':
                return <FaBreadSlice size={size} className="text-orange-400" />;
            case 'boulangerie_pain_special':
                return <FaGlobe size={size} className="text-orange-400" />;
            case 'boulangerie_pain_sucre':
                return <FaCookieBite size={size} className="text-orange-400" />;
        }
    }

    // Sous-catégories de légumes
    if (category.startsWith('legume_')) {
        switch (category) {
            case 'legume_feuille':
                return <FaLeaf size={size} className="text-green-400" />;
            case 'legume_racine':
                return <GiCarrot size={size} className="text-green-400" />;
            case 'legume_bulbe':
            case 'legume_tubercule':
                return <FaCircle size={size} className="text-green-400" />;
            case 'legume_fruit':
                return <FaAppleAlt size={size} className="text-green-400" />;
            case 'legume_legumineuse':
                return <BiLeaf size={size} className="text-green-400" />;
            case 'legume_tige':
                return <RiPlantLine size={size} className="text-green-400" />;
            case 'legume_champignon':
                return <GiMushroom size={size} className="text-green-400" />;
            case 'legume_aromatique':
                return <GiHerbsBundle size={size} className="text-green-400" />;
        }
    }

    // Sous-catégories de poissons
    if (category.startsWith('poisson_') || category === 'crustace' || category === 'mollusque') {
        switch (category) {
            case 'poisson_maigre':
            case 'poisson_gras':
                return <FaFish size={size} className="text-blue-400" />;
            case 'poisson_plat':
                return <GiFlatfish size={size} className="text-blue-400" />;
            case 'poisson_eau_douce':
                return <GiFishBucket size={size} className="text-blue-400" />;
            case 'poisson_tropical':
                return <GiTropicalFish size={size} className="text-blue-400" />;
            case 'poisson_transforme':
                return <GiCannedFish size={size} className="text-blue-400" />;
            case 'oeufs_poisson':
                return <GiFishEggs size={size} className="text-blue-400" />;
            case 'crustace':
                return <GiCrab size={size} className="text-blue-400" />;
            case 'mollusque':
                return <GiOctopus size={size} className="text-blue-400" />;
        }
    }

    // Sous-catégories de céréales
    if (category.startsWith('cereal_')) {
        switch (category) {
            case 'cereal_ble':
                return <GiWheat size={size} className="text-orange-400" />;
            case 'cereal_riz':
                return <MdGrain size={size} className="text-orange-400" />;
            case 'cereal_mais':
                return <GiCorn size={size} className="text-orange-400" />;
            case 'cereal_quinoa':
                return <MdGrain size={size} className="text-orange-400" />;
            case 'cereal_orge':
                return <GiOre size={size} className="text-orange-400" />;
            case 'cereal_seigle':
                return <GiOre size={size} className="text-orange-400" />;
            case 'cereal_sarrasin':
                return <MdGrain size={size} className="text-orange-400" />;
            case 'cereal_amarante':
                return <MdGrain size={size} className="text-orange-400" />;
            case 'cereal_epeautre':
                return <GiWheat size={size} className="text-orange-400" />;
            case 'cereal_farine':
                return <GiFlour size={size} className="text-orange-400" />;
        }
    }

    // Sous-catégories d'autres aliments
    if (category.startsWith('autre_')) {
        switch (category) {
            case 'autre_miel':
                return <MdLocalDrink size={size} className="text-amber-400" />;
            case 'autre_vinaigre':
                return <FaWineGlass size={size} className="text-gray-400" />;
            case 'autre_sel':
                return <FaAt size={size} className="text-gray-400" />;
            case 'autre_epice':
                return <FaPepperHot size={size} className="text-red-600" />;
            case 'autre_gingembre':
                return <MdRestaurant size={size} className="text-amber-600" />;
            case 'autre_cacao':
                return <MdCake size={size} className="text-brown-600" />;
            case 'autre_algue':
                return <BiLeaf size={size} className="text-green-600" />;
        }
    }

    // Icône par défaut si aucune catégorie ne correspond
    return <FaQuestion size={size} className="text-gray-400" />;
} 