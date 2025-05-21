import React from 'react';
import { FOOD_CATEGORIES } from '../../config/constants';
import type { FoodFormData } from '../../types/food';

interface ManualFoodFormProps {
    manualEntry: FoodFormData;
    onManualEntryChange: (field: keyof FoodFormData, value: string) => void;
    onSubmit: () => void;
    onCancel: () => void;
    submitLabel: string;
}

const ManualFoodForm: React.FC<ManualFoodFormProps> = ({
    manualEntry,
    onManualEntryChange,
    onSubmit,
    onCancel,
    submitLabel
}) => {
    return (
        <div className="flex flex-col gap-3 px-4 py-2">
            <div className="text-lg font-semibold mb-2 text-center">Nouvel ingrédient (pour 100g/ml)</div>
            <div>
                <label className="block text-sm mb-1">Nom de l'aliment</label>
                <input
                    type="text"
                    value={manualEntry.name}
                    onChange={e => onManualEntryChange('name', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                    placeholder="Ex: Pomme de terre vapeur"
                />
            </div>
            <div className="flex gap-2">
                <div className="flex-1">
                    <label className="block text-sm mb-1">Calories</label>
                    <input
                        type="number"
                        value={manualEntry.calories}
                        onChange={e => onManualEntryChange('calories', e.target.value)}
                        onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                        placeholder="0"
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-sm mb-1">Protéines (g)</label>
                    <input
                        type="number"
                        value={manualEntry.protein}
                        onChange={e => onManualEntryChange('protein', e.target.value)}
                        onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                        placeholder="0"
                    />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex-1">
                    <label className="block text-sm mb-1">Glucides (g)</label>
                    <input
                        type="number"
                        value={manualEntry.carbs}
                        onChange={e => onManualEntryChange('carbs', e.target.value)}
                        onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                        placeholder="0"
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-sm mb-1">Lipides (g)</label>
                    <input
                        type="number"
                        value={manualEntry.fat}
                        onChange={e => onManualEntryChange('fat', e.target.value)}
                        onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                        placeholder="0"
                    />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex-1">
                    <label className="block text-sm mb-1">Unité</label>
                    <select
                        value={manualEntry.unit}
                        onChange={e => onManualEntryChange('unit', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                    >
                        <option value="g">Grammes (g)</option>
                        <option value="ml">Millilitres (ml)</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="block text-sm mb-1">Catégorie</label>
                    <select
                        value={manualEntry.category}
                        onChange={e => onManualEntryChange('category', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                    >
                        {FOOD_CATEGORIES.map(cat => (
                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex gap-2 mt-2">
                <button
                    className="flex-1 px-3 py-2 rounded-md bg-green-600 hover:bg-green-500 text-white font-medium"
                    onClick={onSubmit}
                >
                    {submitLabel}
                </button>
                <button
                    className="flex-1 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white font-medium"
                    onClick={onCancel}
                >
                    Annuler
                </button>
            </div>
        </div>
    );
};

export default ManualFoodForm; 