import React from 'react';
import { Link } from 'react-router-dom';
import type { Recipe } from '../../types/Recipe';
import { IoTimeOutline, IoPeopleOutline } from 'react-icons/io5';
import Card from '../common/Card';

interface RecipeCardProps {
  recipe: Recipe;
  onDelete: (id: string) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onDelete }) => {
  return (
    <Card variant="recipe" className="p-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-[#4D9078]">{recipe.name}</h3>
        </div>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <IoTimeOutline className="text-[#4D9078]" />
            <span>{recipe.preparationTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <IoPeopleOutline className="text-[#4D9078]" />
            <span>{recipe.servings} portions</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Calories</label>
            <p className="mt-1 text-lg font-semibold text-[#4D9078]">{recipe.calories} kcal</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Protéines</label>
            <p className="mt-1 text-lg font-semibold text-[#4D9078]">{recipe.protein}g</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Glucides</label>
            <p className="mt-1 text-lg font-semibold text-[#4D9078]">{recipe.carbs}g</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Lipides</label>
            <p className="mt-1 text-lg font-semibold text-[#4D9078]">{recipe.fat}g</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Link 
          to={`/recipes/${recipe.id}/edit`}
          className="flex-1 px-3 py-2 bg-white border border-[#4D9078] text-[#4D9078] rounded-lg hover:bg-[#e7f2e5] transition-colors text-sm text-center font-medium shadow-sm hover:shadow-md"
        >
          Modifier
        </Link>
        <button
          onClick={() => onDelete(recipe.id)}
          className="flex-1 px-3 py-2 bg-white border border-[#B4436C] text-[#B4436C] rounded-lg hover:bg-[#ffebeb] transition-colors text-sm font-medium shadow-sm hover:shadow-md cursor-pointer"
        >
          Supprimer
        </button>
      </div>
    </Card>
  );
}; 