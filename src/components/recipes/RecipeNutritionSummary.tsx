import React from 'react';

interface RecipeNutritionSummaryProps {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
}

export const RecipeNutritionSummary: React.FC<RecipeNutritionSummaryProps> = ({
  totalCalories,
  totalProtein,
  totalCarbs,
  totalFat,
}) => {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <h3 className="text-lg font-semibold text-[#4D9078] mb-4">Résumé nutritionnel</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-3 border border-gray-100">
          <div className="text-sm text-gray-500">Calories</div>
          <div className="text-lg font-semibold text-[#4D9078]">{totalCalories.toFixed(1)} cal</div>
        </div>
        <div className="bg-white rounded-lg p-3 border border-gray-100">
          <div className="text-sm text-gray-500">Protéines</div>
          <div className="text-lg font-semibold text-[#B4436C]">{totalProtein.toFixed(1)}g</div>
        </div>
        <div className="bg-white rounded-lg p-3 border border-gray-100">
          <div className="text-sm text-gray-500">Glucides</div>
          <div className="text-lg font-semibold text-[#F2C14E]">{totalCarbs.toFixed(1)}g</div>
        </div>
        <div className="bg-white rounded-lg p-3 border border-gray-100">
          <div className="text-sm text-gray-500">Lipides</div>
          <div className="text-lg font-semibold text-gray-600">{totalFat.toFixed(1)}g</div>
        </div>
      </div>
    </div>
  );
}; 