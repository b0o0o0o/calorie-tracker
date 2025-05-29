import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { RecipeFormData, Ingredient } from '../../types/Recipe';
import { recipeService } from '../../services/recipeService';
import { RecipeBasicInfo } from './RecipeBasicInfo';
import { RecipeNutritionSummary } from './RecipeNutritionSummary';
import { RecipeIngredientsList } from './RecipeIngredientsList';
import { InstructionForm } from './InstructionForm';

const initialFormData: RecipeFormData = {
  name: '',
  description: '',
  ingredients: [],
  instructions: [],
  totalCalories: 0,
  totalProtein: 0,
  totalCarbs: 0,
  totalFat: 0,
  preparationTime: 0,
  servings: 1,
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0
};

export const RecipeForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RecipeFormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const recipe = await recipeService.getRecipe(id);
          if (recipe) {
            setFormData({
              name: recipe.name,
              description: recipe.description,
              ingredients: recipe.ingredients,
              instructions: recipe.instructions,
              totalCalories: recipe.totalCalories,
              totalProtein: recipe.totalProtein,
              totalCarbs: recipe.totalCarbs,
              totalFat: recipe.totalFat,
              preparationTime: recipe.preparationTime ?? 0,
              servings: recipe.servings ?? 1,
              calories: recipe.calories,
              protein: recipe.protein,
              carbs: recipe.carbs,
              fat: recipe.fat
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

  const handleAddIngredient = (ingredient: Ingredient) => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, ingredient],
      totalCalories: Number((prev.totalCalories + ingredient.calories).toFixed(1)),
      totalProtein: Number((prev.totalProtein + ingredient.protein).toFixed(1)),
      totalCarbs: Number((prev.totalCarbs + ingredient.carbs).toFixed(1)),
      totalFat: Number((prev.totalFat + ingredient.fat).toFixed(1)),
      calories: Number((prev.calories + ingredient.calories).toFixed(1)),
      protein: Number((prev.protein + ingredient.protein).toFixed(1)),
      carbs: Number((prev.carbs + ingredient.carbs).toFixed(1)),
      fat: Number((prev.fat + ingredient.fat).toFixed(1))
    }));
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
      calories: Number((prev.calories - ingredient.calories).toFixed(1)),
      protein: Number((prev.protein - ingredient.protein).toFixed(1)),
      carbs: Number((prev.carbs - ingredient.carbs).toFixed(1)),
      fat: Number((prev.fat - ingredient.fat).toFixed(1))
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
          <RecipeBasicInfo
            name={formData.name}
            preparationTime={formData.preparationTime}
            servings={formData.servings}
            onNameChange={value => setFormData({ ...formData, name: value })}
            onPreparationTimeChange={value => setFormData({ ...formData, preparationTime: value })}
            onServingsChange={value => setFormData({ ...formData, servings: value })}
          />

          <RecipeIngredientsList
            ingredients={formData.ingredients}
            onAddIngredient={handleAddIngredient}
            onRemoveIngredient={handleRemoveIngredient}
          />

          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-[#4D9078] mb-4">Instructions</h3>
            <InstructionForm
              instructions={formData.instructions}
              onChange={instructions => setFormData({ ...formData, instructions })}
            />
          </div>

          <RecipeNutritionSummary
            totalCalories={formData.totalCalories}
            totalProtein={formData.totalProtein}
            totalCarbs={formData.totalCarbs}
            totalFat={formData.totalFat}
          />
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