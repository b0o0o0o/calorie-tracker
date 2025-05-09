import React, { useState } from 'react';
import {
    WiSunrise,
    WiDaySunny,
    WiMoonAltNew as WiMoonAlt,
    WiHot,
    WiRaindrop,
} from 'react-icons/wi';
import {
    AiOutlinePlus,
    AiOutlineDown,
    AiOutlineUp,
    AiOutlineMinus,
} from 'react-icons/ai';
import { FaSlidersH, FaSave } from 'react-icons/fa';

interface FoodItem {
    name: string;
    qty: number;           // en grammes
    calories: number;
    protein: number;
    fats: number;
    carbs: number;
}

interface Meal {
    name: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
    items: FoodItem[];
}

const meals: Meal[] = [
    {
        name: 'Breakfast',
        Icon: WiSunrise,
        items: [
            { name: 'Food Name', qty: 250, calories: 308, protein: 7, fats: 1, carbs: 65 },
            { name: 'Avocado',   qty: 50,  calories:  80, protein: 1, fats: 7, carbs:  4 },
            { name: 'Chicken',   qty: 100, calories: 207, protein: 26, fats: 11, carbs:  0 },
        ],
    },
    {
        name: 'Lunch',
        Icon: WiDaySunny,
        items: [], // on remplira plus tard
    },
    {
        name: 'Dinner',
        Icon: WiMoonAlt,
        items: [],
    },
    {
        name: 'Snack',
        Icon: WiHot,
        items: [],
    },
];

export default function Diary() {
    const [openMeals, setOpenMeals] = useState<Record<string, boolean>>({});

    const toggleMeal = (mealName: string) => {
        setOpenMeals(prev => ({
            ...prev,
            [mealName]: !prev[mealName],
        }));
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white pb-16">
            {/* Date */}
            <div className="flex justify-center py-4">
                <span className="text-gray-400 text-lg">12.07.24</span>
            </div>

            {/* Macro summary */}
            <div className="flex justify-around text-center text-sm text-gray-400 px-4 mb-2">
                <div>
                    <div className="text-white font-medium">104</div>
                    Protein
                </div>
                <div>
                    <div className="text-white font-medium">70</div>
                    Fats
                </div>
                <div>
                    <div className="text-white font-medium">230</div>
                    Carbs
                </div>
                <div>
                    <div className="text-white font-medium">1978</div>
                    Calories
                </div>
            </div>

            <hr className="border-gray-700 mx-4"/>

            {/* Meal cards */}
            <div className="space-y-3 px-4 mt-4">
                {meals.map(({ name, Icon, items }) => {
                    const isOpen = openMeals[name];
                    return (
                        <div
                            key={name}
                            className="bg-gray-800 rounded-2xl overflow-hidden"
                        >
                            {/* Entête du meal */}
                            <div className="flex items-center justify-between p-4">
                                <div className="flex items-center space-x-2">
                                    <Icon size={20} className="text-yellow-400" />
                                    <span className="text-base font-medium">{name}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-base font-medium">667 cal</span>
                                    <button className="p-1 bg-gray-700 rounded-full">
                                        <AiOutlinePlus size={16} />
                                    </button>
                                    <button
                                        onClick={() => toggleMeal(name)}
                                        className="p-1 bg-gray-700 rounded-full"
                                    >
                                        {isOpen
                                            ? <AiOutlineUp size={16} />
                                            : <AiOutlineDown size={16} />
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* Macros résumé */}
                            <div className="flex justify-between text-sm text-gray-400 px-6 pb-2">
                                <span>34</span>
                                <span>27</span>
                                <span>17</span>
                                <span className="w-6" /> {/* placeholder sous la flèche */}
                            </div>

                            {/* Détails à l’ouverture */}
                            {isOpen && (
                                <div className="border-t border-gray-700">
                                    {items.map((it, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between px-4 py-3"
                                        >
                                            {/* Nom + qty */}
                                            <div className="flex flex-col">
                                                <span className="font-medium">{it.name}</span>
                                                <span className="text-sm text-green-400">
                          {it.qty} g
                        </span>
                                            </div>
                                            {/* Calories + sliders */}
                                            <div className="flex items-center space-x-2">
                                                <span className="font-medium">{it.calories} cal</span>
                                                <FaSlidersH className="text-gray-400" />
                                            </div>
                                            {/* Macros */}
                                            <div className="flex items-center space-x-4 text-sm text-gray-400 ml-4">
                                                <span>{it.protein}</span>
                                                <span>{it.fats}</span>
                                                <span>{it.carbs}</span>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Bouton enregistrer */}
                                    <div className="flex justify-center py-3 border-t border-gray-700">
                                        <button className="p-2 bg-gray-700 rounded-full">
                                            <FaSave className="text-gray-400" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Water Balance (idem avant) */}
            <div className="bg-gray-800 rounded-2xl p-4 m-4 flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <WiRaindrop size={20} className="text-blue-400" />
                        <span className="font-medium">Water Balance</span>
                    </div>
                    <span className="text-sm text-gray-400">0 / 2000 ml</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-400"
                        style={{ width: '0%' }}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-sm">
                            300
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-sm">
                            500
                        </button>
                    </div>
                    <div className="flex space-x-4">
                        <button className="p-2 bg-gray-700 rounded-full">
                            <AiOutlineMinus size={20} />
                        </button>
                        <button className="p-2 bg-gray-700 rounded-full">
                            <AiOutlinePlus size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}