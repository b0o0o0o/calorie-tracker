import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Recipe } from '../types/Recipe';
import { recipeService } from '../services/recipeService';
import { RecipeCard } from '../components/recipes/RecipeCard';

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await recipeService.getAllRecipes();
        setRecipes(data);
      } catch (err) {
        setError('Erreur lors du chargement des recettes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette recette ?')) {
      try {
        await recipeService.deleteRecipe(id);
        setRecipes(recipes.filter(recipe => recipe.id !== id));
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

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#4D9078]">Mes Recettes</h1>
        <Link 
          to="/recipes/new" 
          className="px-4 py-2 bg-[#4D9078] text-white rounded-xl hover:bg-[#3d7a65] transition-colors shadow-sm hover:shadow-md"
        >
          Nouvelle Recette
        </Link>
      </div>

      {recipes.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 mb-4">Aucune recette trouvée. Commencez par en créer une !</p>
          <Link 
            to="/recipes/new" 
            className="inline-block px-4 py-2 bg-[#4D9078] text-white rounded-xl hover:bg-[#3d7a65] transition-colors shadow-sm hover:shadow-md"
          >
            Créer ma première recette
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
} 