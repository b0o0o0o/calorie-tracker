import React from 'react';
import type { FoodItem } from '../../data/baseIngredients';
import QuantityInput from '../forms/QuantityInput';
import ActionButton from '../common/ActionButton';
import { getDefaultQuantity, formatEggQuantity } from '../../utils/foodSearch';

interface QuantityFormProps {
    selectedFood: FoodItem;
    quantity: number;
    onQuantityChange: (quantity: number) => void;
    onAdd: () => void;
}

const QuantityForm: React.FC<QuantityFormProps> = ({
    selectedFood,
    quantity,
    onQuantityChange,
    onAdd
}) => {
    const isEgg = selectedFood.foodId.startsWith('oeuf');
    const label = isEgg ? 'Nombre d\'œufs' : `Quantité (${selectedFood.unit})`;
    const additionalInfo = isEgg ? (
        <div className="text-sm text-gray-400 mt-1">
            {formatEggQuantity(quantity, selectedFood.servingSize)}
        </div>
    ) : null;

    return (
        <div className="mt-4 bg-[#F9FAFB] border border-gray-200 shadow-md rounded-xl p-6">
            <QuantityInput
                value={quantity}
                onChange={onQuantityChange}
                label={label}
                defaultValue={getDefaultQuantity(selectedFood)}
                additionalInfo={additionalInfo}
            />
            <ActionButton
                onClick={onAdd}
                label="Ajouter à la recette"
                fullWidth
                className="cursor-pointer"
            />
        </div>
    );
};

export default QuantityForm; 