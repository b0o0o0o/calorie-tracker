// src/components/Diary/AddFoodModal.tsx
import React, { useState } from 'react';
import type { MealEntry, MealType } from './MealEntryList';

interface AddFoodModalProps {
    mealType: MealType;
    onAdd: (entry: Omit<MealEntry, 'id'>) => void;
}

const AddFoodModal: React.FC<AddFoodModalProps> = ({ mealType, onAdd }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [calories, setCalories] = useState<number>(0);
    const [protein, setProtein] = useState<number>(0);
    const [carbs, setCarbs] = useState<number>(0);
    const [fat, setFat] = useState<number>(0);

    const handleSubmit = () => {
        onAdd({ mealType, name, calories, protein, carbs, fat });
        setIsOpen(false);
        setName('');
        setCalories(0);
        setProtein(0);
        setCarbs(0);
        setFat(0);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
                + Aliment
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md">
                        <div className="px-6 py-4 border-b">
                            <h2 className="text-lg font-semibold text-gray-900">Nouvel aliment</h2>
                        </div>
                        <div className="px-6 py-4 space-y-4">
                            {/* Nom */}
                            <div>
                                <label htmlFor="food-name" className="block text-sm font-medium text-gray-700">
                                    Nom de l'aliment
                                </label>
                                <input
                                    id="food-name"
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-black"
                                />
                            </div>

                            {/* Calories */}
                            <div>
                                <label htmlFor="food-calories" className="block text-sm font-medium text-gray-700">
                                    Calories (kcal)
                                </label>
                                <input
                                    id="food-calories"
                                    type="text"
                                    value={calories || ''}
                                    onChange={e => setCalories(Number(e.target.value))}
                                    onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-black"
                                />
                            </div>

                            {/* Protéines / Glucides / Lipides */}
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="food-protein" className="block text-sm font-medium text-gray-700">
                                        Protéines (g)
                                    </label>
                                    <input
                                        id="food-protein"
                                        type="text"
                                        value={protein || ''}
                                        onChange={e => setProtein(Number(e.target.value))}
                                        onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-black"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="food-carbs" className="block text-sm font-medium text-gray-700">
                                        Glucides (g)
                                    </label>
                                    <input
                                        id="food-carbs"
                                        type="text"
                                        value={carbs || ''}
                                        onChange={e => setCarbs(Number(e.target.value))}
                                        onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-black"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="food-fat" className="block text-sm font-medium text-gray-700">
                                        Lipides (g)
                                    </label>
                                    <input
                                        id="food-fat"
                                        type="text"
                                        value={fat || ''}
                                        onChange={e => setFat(Number(e.target.value))}
                                        onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-black"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Ajouter
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddFoodModal;
