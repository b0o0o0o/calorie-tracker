import React from 'react';
import QuantityInput from '../common/QuantityInput';

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
  <QuantityInput
    label={selectedFood.name}
    value={quantity}
    unit={selectedFood.unit}
    onChange={onQuantityChange}
    onAdd={onAdd}
  />
);

export default QuantityForm; 