import React from 'react';
import type { Ingredient } from '../../types/Recipe';
import SearchBar from '../AddFood/SearchBar';
import SearchResults from '../AddFood/SearchResults';
import ManualFoodForm from '../AddFood/ManualFoodForm';
import ActionButton from '../common/ActionButton';
import { IoAddOutline } from 'react-icons/io5';
import type { FoodItem } from '../../data/baseIngredients';
import { FoodUnit } from '../../types/common';
import { searchFood } from '../../utils/foodSearch';
import { calculateNutritionValues } from '../../utils/nutritionCalculations';

interface RecipeIngredientsListProps {
  ingredients: Ingredient[];
  onAddIngredient: (ingredient: Ingredient) => void;
  onRemoveIngredient: (index: number) => void;
}

export const RecipeIngredientsList: React.FC<RecipeIngredientsListProps> = ({
  ingredients,
  onAddIngredient,
  onRemoveIngredient,
}) => {
  const [search, setSearch] = React.useState<string>('');
  const [searchResults, setSearchResults] = React.useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = React.useState<FoodItem | null>(null);
  const [quantity, setQuantity] = React.useState<number>(100);
  const [showManualForm, setShowManualForm] = React.useState(false);
  const [manualEntry, setManualEntry] = React.useState({
    name: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    unit: FoodUnit.GRAM,
    category: 'autre' as const,
  });

  const handleSearch = async (query: string) => {
    setSearch(query);
    const results = await searchFood(query, true);
    setSearchResults(results);
  };

  const handleQuantityChange = (quantity: number | '') => {
    setQuantity(quantity === '' ? 0 : quantity);
  };

  const handleAddIngredient = () => {
    if (!selectedFood) return;
    const nutritionValues = calculateNutritionValues(selectedFood, quantity);
    const newIngredient: Ingredient = {
      foodId: selectedFood.foodId,
      label: selectedFood.label,
      quantity,
      unit: selectedFood.unit as FoodUnit,
      calories: Number(nutritionValues.calories.toFixed(1)),
      protein: Number(nutritionValues.protein.toFixed(1)),
      carbs: Number(nutritionValues.carbs.toFixed(1)),
      fat: Number(nutritionValues.fat.toFixed(1)),
    };
    onAddIngredient(newIngredient);
    setSelectedFood(null);
    setQuantity(100);
    setSearch('');
    setSearchResults([]);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <h3 className="text-lg font-semibold text-[#4D9078] mb-4">Ingrédients</h3>
      
      {ingredients.length > 0 && (
        <div className="mb-4 space-y-2">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-100">
              <div>
                <span className="font-medium text-gray-500">{ingredient.label}</span>
                <span className="text-sm text-gray-500 ml-2">
                  {ingredient.quantity} {ingredient.unit}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-500">
                  {ingredient.calories} cal
                </div>
                <button
                  type="button"
                  onClick={() => onRemoveIngredient(index)}
                  className="text-[#B4436C] hover:bg-[#ffebeb] p-1 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!showManualForm && (
        <>
          <SearchBar
            value={search}
            onChange={handleSearch}
          />

          <SearchResults
            results={searchResults}
            selectedFood={selectedFood}
            onFoodSelect={setSelectedFood}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onAdd={handleAddIngredient}
          />

          <ActionButton
            onClick={() => setShowManualForm(true)}
            label="Créer un aliment"
            icon={IoAddOutline}
            className="mb-4 mt-5 ml-auto cursor-pointer"
          />
        </>
      )}

      {showManualForm && (
        <ManualFoodForm
          manualEntry={manualEntry}
          onManualEntryChange={(field, value) => 
            setManualEntry(prev => ({ ...prev, [field]: value }))
          }
          onSubmit={() => {
            if (!manualEntry.name) return;
            const newIngredient: Ingredient = {
              foodId: manualEntry.name.toLowerCase().replace(/\s+/g, '_'),
              label: manualEntry.name,
              quantity: 100,
              unit: manualEntry.unit,
              calories: Number(manualEntry.calories),
              protein: Number(manualEntry.protein),
              carbs: Number(manualEntry.carbs),
              fat: Number(manualEntry.fat),
            };
            onAddIngredient(newIngredient);
            setShowManualForm(false);
            setManualEntry({
              name: '',
              calories: 0,
              protein: 0,
              carbs: 0,
              fat: 0,
              unit: FoodUnit.GRAM,
              category: 'autre',
            });
          }}
          onCancel={() => setShowManualForm(false)}
          submitLabel="Ajouter à la recette"
        />
      )}
    </div>
  );
}; 