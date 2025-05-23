import React from 'react';
import { Link } from 'react-router-dom';
import type { Recipe } from '../../types/Recipe';
import { IoRestaurantOutline } from 'react-icons/io5';

interface RecipeCardProps {
  recipe: Recipe;
  onDelete: (id: string) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <IoRestaurantOutline className="text-lg text-[#4D9078]" />
          <h3 className="text-lg font-semibold text-[#4D9078]">{recipe.name}</h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>⏱️ {recipe.preparationTime} min</span>
          <span>•</span>
          <span>👥 {recipe.servings} pers.</span>
        </div>
        <div className="grid grid-cols-4 text-center text-xs text-gray-400 mt-2">
          <span className="text-[#4D9078]">{recipe.totalCalories.toFixed(1)} cal</span>
          <span className="text-[#B4436C]">P {recipe.totalProtein.toFixed(1)}g</span>
          <span className="text-[#F2C14E]">C {recipe.totalCarbs.toFixed(1)}g</span>
          <span className="text-[#F78154]">L {recipe.totalFat.toFixed(1)}g</span>
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
    </div>
  );
}; 