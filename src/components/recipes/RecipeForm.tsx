import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { RecipeFormData, Ingredient } from '../../types/Recipe';
import type { FoodItem } from '../../data/baseIngredients';
import type { FoodCategoryValue } from '../../types/food';
import { recipeService } from '../../services/recipeService';
import { searchFood, getDefaultQuantity } from '../../utils/foodSearch';
import { calculateNutritionValues } from '../../utils/nutritionCalculations';
import SearchBar from '../AddFood/SearchBar';
import SearchResults from '../AddFood/SearchResults';
import QuantityForm from '../AddFood/QuantityForm';
import ManualFoodForm from '../AddFood/ManualFoodForm';
import ActionButton from '../common/ActionButton';
import { IoAddOutline } from 'react-icons/io5';

const initialFormData: RecipeFormData = {
  name: '',
  ingredients: [],
  totalCalories: 0,
  totalProtein: 0,
  totalCarbs: 0,
  totalFat: 0,
  preparationTime: 0,
  servings: 1,
};

export const RecipeForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RecipeFormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [quantity, setQuantity] = useState<number>(100);
  const [showManualForm, setShowManualForm] = useState(false);
  const [manualEntry, setManualEntry] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    unit: 'g' as const,
    category: 'autre' as FoodCategoryValue,
  });

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const recipe = await recipeService.getRecipe(id);
          if (recipe) {
            setFormData({
              name: recipe.name,
              ingredients: recipe.ingredients,
              totalCalories: recipe.totalCalories,
              totalProtein: recipe.totalProtein,
              totalCarbs: recipe.totalCarbs,
              totalFat: recipe.totalFat,
              preparationTime: recipe.preparationTime ?? 0,
              servings: recipe.servings ?? 1,
            });
          }
        } catch (err) {
          setError('Erreur lors du chargement de la recette');
          console.error(err);
        }
      };
      fetchRecipe();
    }
  }, [id]);

  useEffect(() => {
    if (selectedFood) {
      setQuantity(getDefaultQuantity(selectedFood));
    }
  }, [selectedFood]);

  useEffect(() => {
    if (search === '') {
      setSelectedFood(null);
    }
  }, [search]);

  const handleSearch = async (query: string) => {
    setSearch(query);
    const results = await searchFood(query, true);
    setSearchResults(results);
  };

  const handleAddIngredient = () => {
    if (!selectedFood) return;
    const nutritionValues = calculateNutritionValues(selectedFood, quantity);
    const newIngredient: Ingredient = {
      foodId: selectedFood.foodId,
      label: selectedFood.label,
      quantity,
      unit: selectedFood.unit,
      calories: Number(nutritionValues.calories.toFixed(1)),
      protein: Number(nutritionValues.protein.toFixed(1)),
      carbs: Number(nutritionValues.carbs.toFixed(1)),
      fat: Number(nutritionValues.fat.toFixed(1)),
    };
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, newIngredient],
      totalCalories: Number((prev.totalCalories + newIngredient.calories).toFixed(1)),
      totalProtein: Number((prev.totalProtein + newIngredient.protein).toFixed(1)),
      totalCarbs: Number((prev.totalCarbs + newIngredient.carbs).toFixed(1)),
      totalFat: Number((prev.totalFat + newIngredient.fat).toFixed(1)),
    }));
    setSelectedFood(null);
    setQuantity(100);
    setSearch('');
    setSearchResults([]);
  };

  const handleRemoveIngredient = (index: number) => {
    const ingredient = formData.ingredients[index];
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
      totalCalories: Number((prev.totalCalories - ingredient.calories).toFixed(1)),
      totalProtein: Number((prev.totalProtein - ingredient.protein).toFixed(1)),
      totalCarbs: Number((prev.totalCarbs - ingredient.carbs).toFixed(1)),
      totalFat: Number((prev.totalFat - ingredient.fat).toFixed(1)),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      setError('Le nom de la recette est requis');
      return;
    }
    if (formData.ingredients.length === 0) {
      setError('Ajoutez au moins un ingrédient');
      return;
    }
    if (!formData.preparationTime || formData.preparationTime < 0) {
      setError('Le temps de préparation doit être positif');
      return;
    }
    if (!formData.servings || formData.servings < 1) {
      setError('Le nombre de portions doit être au moins 1');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      if (id) {
        await recipeService.updateRecipe(id, formData);
      } else {
        await recipeService.createRecipe(formData);
      }
      navigate('/recipes');
    } catch (err) {
      setError('Erreur lors de la sauvegarde de la recette');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-[#4D9078] mb-6">
          {id ? 'Modifier la recette' : 'Nouvelle recette'}
        </h2>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-500 rounded-xl border border-red-100">
            {error}
          </div>
        )}

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom de la recette
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#4D9078] focus:border-[#4D9078] outline-none transition-colors"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="preparationTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Temps de préparation (min)
                </label>
                <input
                  type="number"
                  id="preparationTime"
                  value={formData.preparationTime}
                  onChange={(e) => setFormData({ ...formData, preparationTime: Number(e.target.value) })}
                  min={0}
                  onFocus={e => e.target.value = ''}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#4D9078] focus:border-[#4D9078] outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="servings" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre de personnes
                </label>
                <input
                  type="number"
                  id="servings"
                  value={formData.servings}
                  onChange={(e) => setFormData({ ...formData, servings: Number(e.target.value) })}
                  min={1}
                  onFocus={e => e.target.value = ''}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#4D9078] focus:border-[#4D9078] outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-[#4D9078] mb-4">Ingrédients</h3>
            
            {formData.ingredients.length > 0 && (
              <div className="mb-4 space-y-2">
                {formData.ingredients.map((ingredient, index) => (
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
                        onClick={() => handleRemoveIngredient(index)}
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
                  onFoodSelect={(food) => {
                    if (selectedFood?.foodId === food.foodId) {
                      setSelectedFood(null);
                    } else {
                      setSelectedFood(food);
                    }
                  }}
                  onSearch={() => handleSearch(search)}
                />

                {selectedFood && (
                  <QuantityForm
                    selectedFood={selectedFood}
                    quantity={quantity}
                    onQuantityChange={setQuantity}
                    onAdd={handleAddIngredient}
                  />
                )}

                <ActionButton
                  onClick={() => setShowManualForm(true)}
                  label="Ajouter un aliment"
                  icon={IoAddOutline}
                  fullWidth
                  className="mb-4 mt-5 cursor-pointer"
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
                  const newIngredient = {
                    foodId: manualEntry.name.toLowerCase().replace(/\s+/g, '_'),
                    label: manualEntry.name,
                    quantity: 100,
                    unit: manualEntry.unit,
                    calories: Number(manualEntry.calories),
                    protein: Number(manualEntry.protein),
                    carbs: Number(manualEntry.carbs),
                    fat: Number(manualEntry.fat),
                  };
                  setFormData(prev => ({
                    ...prev,
                    ingredients: [...prev.ingredients, newIngredient],
                    totalCalories: Number((prev.totalCalories + newIngredient.calories).toFixed(1)),
                    totalProtein: Number((prev.totalProtein + newIngredient.protein).toFixed(1)),
                    totalCarbs: Number((prev.totalCarbs + newIngredient.carbs).toFixed(1)),
                    totalFat: Number((prev.totalFat + newIngredient.fat).toFixed(1)),
                  }));
                  setShowManualForm(false);
                  setManualEntry({
                    name: '',
                    calories: '',
                    protein: '',
                    carbs: '',
                    fat: '',
                    unit: 'g',
                    category: 'autre',
                  });
                }}
                onCancel={() => setShowManualForm(false)}
                submitLabel="Ajouter à la recette"
              />
            )}
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-[#4D9078] mb-4">Résumé nutritionnel</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-sm text-gray-500">Calories</div>
                <div className="text-lg font-semibold text-[#4D9078]">{formData.totalCalories.toFixed(1)} cal</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-sm text-gray-500">Protéines</div>
                <div className="text-lg font-semibold text-[#B4436C]">{formData.totalProtein.toFixed(1)}g</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-sm text-gray-500">Glucides</div>
                <div className="text-lg font-semibold text-[#F2C14E]">{formData.totalCarbs.toFixed(1)}g</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-sm text-gray-500">Lipides</div>
                <div className="text-lg font-semibold text-gray-600">{formData.totalFat.toFixed(1)}g</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-3 bg-[#4D9078] text-white rounded-xl hover:bg-[#3d7a65] transition-colors shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Enregistrement...' : id ? 'Mettre à jour' : 'Créer'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/recipes')}
            className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors shadow-sm hover:shadow-md"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}; 