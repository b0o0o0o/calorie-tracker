import React from 'react';
import { FOOD_CATEGORIES } from '../../config/constants';
import type { FoodFormData } from '../../types/food';
import type { FoodCategoryValue } from '../../types/food';
import { FoodUnit } from '../../types/common';
import Input from '../common/Input';

interface ManualFoodFormProps {
    manualEntry: FoodFormData;
    onManualEntryChange: (field: keyof FoodFormData, value: string | number) => void;
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
            <Input
                id="name"
                type="text"
                value={manualEntry.name}
                onChange={value => onManualEntryChange('name', value)}
                placeholder="Ex: Pomme de terre vapeur"
                label="Nom de l'aliment"
            />
            <div className="flex gap-2">
                <div className="flex-1">
                    <Input
                        id="calories"
                        type="number"
                        value={manualEntry.calories === 0 ? '' : manualEntry.calories}
                        onChange={value => onManualEntryChange('calories', value === '' ? 0 : Number(value))}
                        placeholder="0"
                        label="Calories"
                    />
                </div>
                <div className="flex-1">
                    <Input
                        id="protein"
                        type="number"
                        value={manualEntry.protein === 0 ? '' : manualEntry.protein}
                        onChange={value => onManualEntryChange('protein', value === '' ? 0 : Number(value))}
                        placeholder="0"
                        label="Protéines (g)"
                    />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex-1">
                    <Input
                        id="carbs"
                        type="number"
                        value={manualEntry.carbs === 0 ? '' : manualEntry.carbs}
                        onChange={value => onManualEntryChange('carbs', value === '' ? 0 : Number(value))}
                        placeholder="0"
                        label="Glucides (g)"
                    />
                </div>
                <div className="flex-1">
                    <Input
                        id="fat"
                        type="number"
                        value={manualEntry.fat === 0 ? '' : manualEntry.fat}
                        onChange={value => onManualEntryChange('fat', value === '' ? 0 : Number(value))}
                        placeholder="0"
                        label="Lipides (g)"
                    />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex-1">
                    <Input
                        id="unit"
                        value={manualEntry.unit}
                        onChange={value => onManualEntryChange('unit', value as FoodUnit)}
                        options={[
                            { value: FoodUnit.GRAM, label: 'Grammes (g)' },
                            { value: FoodUnit.MILLILITER, label: 'Millilitres (ml)' }
                        ]}
                        label="Unité"
                    />
                </div>
                <div className="flex-1">
                    <Input
                        id="category"
                        value={manualEntry.category}
                        onChange={value => onManualEntryChange('category', value as FoodCategoryValue)}
                        options={FOOD_CATEGORIES}
                        label="Catégorie"
                    />
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