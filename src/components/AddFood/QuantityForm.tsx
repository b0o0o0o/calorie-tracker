import React from 'react';
import ActionButton from '../common/ActionButton';

interface QuantityFormProps {
  selectedFood: { name: string; unit: string };
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAdd: () => void;
}

const QuantityForm: React.FC<QuantityFormProps> = ({
  selectedFood,
  quantity,
  onQuantityChange,
  onAdd
}) => (
  <div className="flex items-center justify-center gap-4 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm mt-2">
    <span className="font-medium text-gray-700 whitespace-nowrap">{selectedFood.name}</span>
    <input
      type="number"
      min={1}
      value={quantity}
      onChange={e => onQuantityChange(Number(e.target.value))}
      className="w-20 px-2 py-1 border border-gray-300 rounded-lg text-center focus:ring-[#4D9078] focus:border-[#4D9078] mx-2"
    />
    <span className="text-gray-500 whitespace-nowrap">{selectedFood.unit}</span>
    <ActionButton onClick={onAdd} label="Ajouter" />
  </div>
);

export default QuantityForm; 