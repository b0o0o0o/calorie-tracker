// src/components/Diary/MealEntryList.tsx
import React from 'react';

// on définit le type de repas
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface MealEntry {
    id: string;
    mealType: MealType;      // ← ajouté
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

const MealEntryList: React.FC<MealEntryListProps> = ({ entries, onUpdate, onDelete }) => {
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
                    className="flex flex-col sm:flex-row sm:items-center justify-between border rounded p-3"
                >
                    <div>
                        <p className="font-medium text-lg">{entry.name}</p>
                        <p className="text-sm text-gray-600">
                            {entry.calories} kcal &middot; P {entry.protein} g &middot; C {entry.carbs} g &middot; L {entry.fat} g
                        </p>
                    </div>
                    <div className="mt-2 sm:mt-0 flex space-x-3">
                        <button
                            onClick={() => onUpdate(entry)}
                            className="text-blue-500 hover:underline text-sm"
                        >
                            Modifier
                        </button>
                        <button
                            onClick={() => onDelete(entry.id)}
                            className="text-red-500 hover:underline text-sm"
                        >
                            Supprimer
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MealEntryList;
