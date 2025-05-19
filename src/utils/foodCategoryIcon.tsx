import { FaCarrot, FaAppleAlt, FaDrumstickBite, FaFish, FaCheese, FaSeedling, FaEgg, FaQuestion } from 'react-icons/fa';
import { GiOlive } from 'react-icons/gi';
import { MdGrain } from 'react-icons/md';
import { IoMdIceCream } from 'react-icons/io';
import React from 'react';

export function getFoodCategoryIcon(category: string, size = 22) {
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
        default:
            return <FaQuestion size={size} className="text-gray-400" />;
    }
} 