import React from 'react';
import type { Ingredient } from '../../types/Recipe';

interface IngredientFormProps {
  ingredients: Ingredient[];
  onChange: (ingredients: Ingredient[]) => void;
}

export const IngredientForm: React.FC<IngredientFormProps> = ({ ingredients, onChange }) => {
  const handleAdd = () => {
    onChange([...ingredients, { name: '', quantity: 0, unit: 'g', calories: 0 }]);
  };

  const handleRemove = (index: number) => {
    onChange(ingredients.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Ingredient, value: string | number) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = { ...newIngredients[index], [field]: value };
    onChange(newIngredients);
  };

  return (
    <div className="space-y-4">
      {ingredients.map((ingredient, index) => (
        <div key={index} className="flex gap-2 items-start">
          <div className="flex-1 grid grid-cols-2 gap-2">
            <div>
              <input
                type="text"
                value={ingredient.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                placeholder="Nom de l'ingrédient"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4D9078] focus:border-[#4D9078] outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                value={ingredient.quantity}
                onChange={(e) => handleChange(index, 'quantity', Number(e.target.value))}
                placeholder="Quantité"
                min="0"
                step="0.1"
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4D9078] focus:border-[#4D9078] outline-none transition-colors"
              />
              <select
                value={ingredient.unit}
                onChange={(e) => handleChange(index, 'unit', e.target.value)}
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4D9078] focus:border-[#4D9078] outline-none transition-colors"
              >
                <option value="g">g</option>
                <option value="ml">ml</option>
                <option value="pcs">pcs</option>
              </select>
              <input
                type="number"
                value={ingredient.calories}
                onChange={(e) => handleChange(index, 'calories', Number(e.target.value))}
                placeholder="Calories"
                min="0"
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4D9078] focus:border-[#4D9078] outline-none transition-colors"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="p-2 text-[#B4436C] hover:bg-[#ffebeb] rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAdd}
        className="w-full px-4 py-2 bg-white border border-[#4D9078] text-[#4D9078] rounded-lg hover:bg-[#e7f2e5] transition-colors shadow-sm hover:shadow-md"
      >
        + Ajouter un ingrédient
      </button>
    </div>
  );
}; 