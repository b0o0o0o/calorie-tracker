// src/components/Diary/MealEntryList.tsx
import React, { useState, useEffect } from 'react';
import { getFoodCategoryIcon } from '../../utils/foodCategoryIcon';
import { BASE_INGREDIENTS } from '../../data/baseIngredients';
import { getCustomIngredients } from '../../data/customIngredients';

// on définit le type de repas
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface MealEntry {
    id: string;
    mealType: MealType;
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}

interface MealEntryListProps {
    entries: MealEntry[];
    onUpdate: (entry: MealEntry) => void;
    onDelete: (id: string) => void;
}

// Palette personnalisée
const PALETTE = {
  green: '#5FAD56',
  yellow: '#F2C14E',
  orange: '#F78154',
  teal: '#4D9078',
  pink: '#B4436C',
};
const COLORS = {
  protein: PALETTE.pink,
  carbs: PALETTE.yellow,
  fat: PALETTE.orange,
};

const MealEntryList: React.FC<MealEntryListProps> = ({ entries, onUpdate, onDelete }) => {
    const [editingEntry, setEditingEntry] = useState<MealEntry | null>(null);
    const [quantity, setQuantity] = useState(100);
    const [previewValues, setPreviewValues] = useState({
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0
    });

    const handleEdit = (entry: MealEntry) => {
        setEditingEntry(entry);
        // On calcule la quantité initiale en fonction des valeurs actuelles
        const baseFood = [...BASE_INGREDIENTS, ...getCustomIngredients()]
            .find(i => i.label === entry.name);
        if (baseFood) {
            const ratio = entry.calories / baseFood.nutrients.calories;
            setQuantity(Math.round(ratio * 100));
        }
    };

    // Calcul des valeurs prévisualisées quand la quantité change
    useEffect(() => {
        if (editingEntry) {
            const baseFood = [...BASE_INGREDIENTS, ...getCustomIngredients()]
                .find(i => i.label === editingEntry.name);
            if (baseFood) {
                const ratio = quantity / 100;
                setPreviewValues({
                    calories: Math.round(baseFood.nutrients.calories * ratio),
                    protein: Math.round(baseFood.nutrients.protein * ratio * 10) / 10,
                    carbs: Math.round(baseFood.nutrients.carbs * ratio * 10) / 10,
                    fat: Math.round(baseFood.nutrients.fat * ratio * 10) / 10
                });
            }
        }
    }, [quantity, editingEntry]);

    const handleSave = () => {
        if (editingEntry) {
            onUpdate({
                ...editingEntry,
                ...previewValues
            });
            setEditingEntry(null);
        }
    };

    const handleCancel = () => {
        setEditingEntry(null);
    };

    if (entries.length === 0) {
        return (
            <p className="text-center text-gray-500">
                Aucun aliment enregistré pour ce repas.
            </p>
        );
    }

    return (
        <ul className="space-y-2">
            {entries.map(entry => (
                <li
                    key={entry.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-100 rounded-xl p-3 bg-white shadow"
                >
                    {editingEntry?.id === entry.id ? (
                        // Mode édition
                        <div className="w-full">
                            <div className="flex items-center gap-2 mb-4">
                                {getFoodCategoryIcon(
                                    [...BASE_INGREDIENTS, ...getCustomIngredients()]
                                        .find(i => i.label === entry.name)?.category || 'autre',
                                    22
                                )}
                                <span className="font-semibold text-[#4D9078]">{entry.name}</span>
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-sm text-gray-600 mb-2">Quantité (g)</label>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={e => setQuantity(Number(e.target.value))}
                                    min={1}
                                    className="w-full border border-gray-200 rounded px-2 py-1 bg-[#F9FAFB] focus:border-[#4D9078] focus:ring-1 focus:ring-[#4D9078]"
                                    onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                                />
                            </div>

                            <div className="bg-[#F9FAFB] rounded p-3 mb-4">
                                <p className="text-sm text-[#4D9078] mb-2">Aperçu des modifications :</p>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                        <span className="text-gray-600">Calories :</span>
                                        <span className={`ml-2 ${previewValues.calories !== entry.calories ? 'text-[#4D9078] font-medium' : ''}`}>
                                            {previewValues.calories} kcal
                                            {previewValues.calories !== entry.calories && (
                                                <span className="text-xs text-gray-500 ml-1">
                                                    ({previewValues.calories > entry.calories ? '+' : ''}{previewValues.calories - entry.calories})
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Protéines :</span>
                                        <span className={`ml-2 ${previewValues.protein !== entry.protein ? 'text-[#B4436C] font-medium' : ''}`}>
                                            {previewValues.protein}g
                                            {previewValues.protein !== entry.protein && (
                                                <span className="text-xs text-gray-500 ml-1">
                                                    ({previewValues.protein > entry.protein ? '+' : ''}{previewValues.protein - entry.protein})
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Glucides :</span>
                                        <span className={`ml-2 ${previewValues.carbs !== entry.carbs ? 'text-[#F2C14E] font-medium' : ''}`}>
                                            {previewValues.carbs}g
                                            {previewValues.carbs !== entry.carbs && (
                                                <span className="text-xs text-gray-500 ml-1">
                                                    ({previewValues.carbs > entry.carbs ? '+' : ''}{previewValues.carbs - entry.carbs})
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Lipides :</span>
                                        <span className={`ml-2 ${previewValues.fat !== entry.fat ? 'text-[#F78154] font-medium' : ''}`}>
                                            {previewValues.fat}g
                                            {previewValues.fat !== entry.fat && (
                                                <span className="text-xs text-gray-500 ml-1">
                                                    ({previewValues.fat > entry.fat ? '+' : ''}{previewValues.fat - entry.fat})
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={handleSave}
                                    className="px-3 py-1 bg-[#5FAD56] text-white rounded hover:bg-[#4D9078]"
                                >
                                    Enregistrer
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="px-3 py-1 bg-gray-300 text-[#4D9078] rounded hover:bg-gray-400"
                                >
                                    Annuler
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Mode affichage
                        <>
                            <div>
                                <p className="font-medium text-lg flex items-center gap-2 text-[#4D9078]">
                                    {getFoodCategoryIcon(
                                        [...BASE_INGREDIENTS, ...getCustomIngredients()]
                                            .find(i => i.label === entry.name)?.category || 'autre',
                                        22
                                    )}
                                    {entry.name}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {entry.calories} kcal &middot; <span className="text-[#B4436C]">P {entry.protein} g</span> &middot; <span className="text-[#F2C14E]">C {entry.carbs} g</span> &middot; <span className="text-[#F78154]">L {entry.fat} g</span>
                                </p>
                            </div>
                            <div className="mt-2 sm:mt-0 flex space-x-3">
                                <button
                                    onClick={() => handleEdit(entry)}
                                    className="text-[#4D9078] hover:underline text-sm font-semibold"
                                >
                                    Modifier
                                </button>
                                <button
                                    onClick={() => onDelete(entry.id)}
                                    className="text-[#B4436C] hover:underline text-sm font-semibold"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MealEntryList;
