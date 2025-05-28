import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Recipe } from '../types/Recipe';
import { recipeService } from '../services/recipeService';

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) return;
      
      try {
        const data = await recipeService.getRecipe(id);
        if (data) {
          setRecipe(data);
        } else {
          setError('Recette non trouvée');
        }
      } catch (err) {
        setError('Erreur lors du chargement de la recette');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;
    
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette recette ?')) {
      try {
        await recipeService.deleteRecipe(id);
        navigate('/recipes');
      } catch (err) {
        setError('Erreur lors de la suppression de la recette');
        console.error(err);
      }
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#4D9078]"></div>
    </div>
  );
  
  if (error) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-red-500 text-center p-4 bg-red-50 rounded-xl border border-red-100">
        {error}
      </div>
    </div>
  );
  
  if (!recipe) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-gray-500 text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
        Recette non trouvée
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-bold text-[#4D9078]">{recipe.name}</h1>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/recipes/${id}/edit`)}
              className="px-4 py-2 bg-white border border-[#4D9078] text-[#4D9078] rounded-xl hover:bg-[#e7f2e5] transition-colors shadow-sm hover:shadow-md"
            >
              Modifier
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-white border border-[#B4436C] text-[#B4436C] rounded-xl hover:bg-[#ffebeb] transition-colors shadow-sm hover:shadow-md"
            >
              Supprimer
            </button>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{recipe.description}</p>

        <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <span role="img" aria-label="temps">⏱️</span>
            {recipe.preparationTime} minutes
          </span>
          <span className="flex items-center gap-1">
            <span role="img" aria-label="calories">🔥</span>
            {recipe.totalCalories} calories
          </span>
          <span className="flex items-center gap-1">
            <span role="img" aria-label="portions">👥</span>
            {recipe.servings} portions
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-[#4D9078] mb-4">Ingrédients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index: number) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-[#4D9078] rounded-full"></span>
                  <span>
                    {ingredient.quantity} {ingredient.unit} de {ingredient.label}
                    <span className="text-gray-400 text-sm ml-2">
                      ({ingredient.calories} cal)
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#4D9078] mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction: string, index: number) => (
                <li key={index} className="flex gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#4D9078] text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate('/recipes')}
            className="px-6 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors shadow-sm hover:shadow-md"
          >
            Retour à la liste
          </button>
        </div>
      </div>
    </div>
  );
} 