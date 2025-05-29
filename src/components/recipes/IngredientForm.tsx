import React from 'react';
import type { Ingredient } from '../../types/Recipe';
import { FoodUnit } from '../../types/common';
import Input from '../common/Input';

interface IngredientFormProps {
  onAdd: (ingredient: Ingredient) => void;
}

const IngredientForm: React.FC<IngredientFormProps> = ({ onAdd }) => {
  const [ingredient, setIngredient] = React.useState<Omit<Ingredient, 'quantity' | 'calories'> & { quantity: number | ''; calories: number | '' }>({
    foodId: '',
    label: '',
    quantity: 0,
    unit: FoodUnit.GRAM,
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  });

  const handleChange = (field: keyof typeof ingredient, value: string | number) => {
    setIngredient(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof ingredient.quantity === 'string' && ingredient.quantity === '') return;
    if (typeof ingredient.calories === 'string' && ingredient.calories === '') return;
    onAdd({
      ...ingredient,
      quantity: Number(ingredient.quantity),
      calories: Number(ingredient.calories)
    });
    setIngredient({
      foodId: '',
      label: '',
      quantity: 0,
      unit: FoodUnit.GRAM,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    });
  };

  const isDisabled = (typeof ingredient.quantity === 'string' && ingredient.quantity === '') || (typeof ingredient.calories === 'string' && ingredient.calories === '');

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2 items-start">
        <div className="flex-1 grid grid-cols-2 gap-2">
          <div>
            <Input
              id="ingredient-label"
              type="text"
              value={ingredient.label}
              onChange={value => handleChange('label', value)}
              placeholder="Nom de l'ingrédient"
            />
          </div>
          <div className="flex gap-2">
            <Input
              id="ingredient-quantity"
              type="number"
              value={ingredient.quantity}
              onChange={value => handleChange('quantity', value)}
              placeholder="Quantité"
              min={0}
              step={0.1}
            />
            <Input
              id="ingredient-unit"
              value={ingredient.unit}
              onChange={value => handleChange('unit', value as FoodUnit)}
              options={[
                { value: FoodUnit.GRAM, label: 'g' },
                { value: FoodUnit.MILLILITER, label: 'ml' }
              ]}
            />
            <Input
              id="ingredient-calories"
              type="number"
              value={ingredient.calories}
              onChange={value => handleChange('calories', value)}
              placeholder="Calories"
              min={0}
            />
          </div>
        </div>
        <button
          type="submit"
          className="p-2 text-[#4D9078] hover:bg-[#e7f2e5] rounded-lg transition-colors"
          disabled={isDisabled}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default IngredientForm; 