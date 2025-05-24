import { useEffect, useState } from 'react';
import { useNutritionHistory } from '../hooks/useNutritionHistory';
import { useWaterHistory } from '../hooks/useWaterHistory';
import { format, subDays } from 'date-fns';
import { StatLineChart } from '../components/Stats/StatLineChart';
import { StatComparison } from '../components/Stats/StatComparison';

const PERIODS = [
  { label: '7 derniers jours', value: 7 },
  { label: '30 derniers jours', value: 30 },
];

export default function StatsPage() {
  const [period, setPeriod] = useState(7);
  const { history: nutritionHistory, getHistory, getStats: getNutritionStats } = useNutritionHistory();
  const { history: waterHistory, getStats: getWaterStats } = useWaterHistory();

  // Calcul des bornes de la période
  const endDate = format(new Date(), 'yyyy-MM-dd');
  const startDate = format(subDays(new Date(), period - 1), 'yyyy-MM-dd');

  useEffect(() => {
    getHistory(period);
  }, [period]);

  // Stats nutritionnelles
  const nutritionStats = getNutritionStats(startDate, endDate);
  // Stats eau
  const waterStats = getWaterStats ? getWaterStats(new Date(startDate), new Date(endDate)) : null;

  // Préparation des données pour les graphiques
  const nutritionData = nutritionHistory
    .filter(e => e.date >= startDate && e.date <= endDate)
    .map(e => ({
      date: e.date.slice(5), // MM-DD
      calories: e.calories,
      protein: e.protein,
      carbs: e.carbs,
      fat: e.fat,
    }));

  const waterData = waterHistory
    .filter(e => e.date >= new Date(startDate) && e.date <= new Date(endDate))
    .map(e => ({
      date: e.date.toISOString().slice(5, 10), // MM-DD
      consumed: e.consumed,
      goal: e.goal,
    }));

  // Objectifs (à adapter dynamiquement si besoin)
  const userGoals = {
    calories: 2000,
    protein: 120,
    carbs: 250,
    fat: 60,
    water: 2000,
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-[#4D9078] mb-6">Statistiques</h1>
      {/* Sélecteur de période */}
      <div className="mb-6 flex gap-4">
        {PERIODS.map(p => (
          <button
            key={p.value}
            className={`px-4 py-2 rounded-lg font-medium ${period === p.value ? 'bg-[#4D9078] text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setPeriod(p.value)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Graphiques nutritionnels */}
      {nutritionData.length === 0 ? (
        <div className="text-center text-gray-400 mb-8">Aucune donnée nutritionnelle sur la période.</div>
      ) : (
        <>
          <StatLineChart
            data={nutritionData}
            dataKey="calories"
            label="Calories (kcal)"
            color="#B4436C"
            goal={userGoals.calories}
            unit="kcal"
          />
          <StatLineChart
            data={nutritionData}
            dataKey="protein"
            label="Protéines (g)"
            color="#4D9078"
            goal={userGoals.protein}
            unit="g"
          />
          <StatLineChart
            data={nutritionData}
            dataKey="carbs"
            label="Glucides (g)"
            color="#F4B942"
            goal={userGoals.carbs}
            unit="g"
          />
          <StatLineChart
            data={nutritionData}
            dataKey="fat"
            label="Lipides (g)"
            color="#3D7A63"
            goal={userGoals.fat}
            unit="g"
          />

          {/* Comparaisons aux objectifs (moyennes sur la période) */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <StatComparison label="Calories moy./jour" value={Math.round(nutritionStats?.avgCalories ?? 0)} goal={userGoals.calories} unit="kcal" />
            <StatComparison label="Protéines moy./jour" value={Math.round(nutritionStats?.avgProtein ?? 0)} goal={userGoals.protein} unit="g" />
            <StatComparison label="Glucides moy./jour" value={Math.round(nutritionStats?.avgCarbs ?? 0)} goal={userGoals.carbs} unit="g" />
            <StatComparison label="Lipides moy./jour" value={Math.round(nutritionStats?.avgFat ?? 0)} goal={userGoals.fat} unit="g" />
          </div>
        </>
      )}

      {/* Graphique et stats eau */}
      {waterData.length === 0 ? (
        <div className="text-center text-gray-400 mb-8">Aucune donnée d'hydratation sur la période.</div>
      ) : (
        <>
          <StatLineChart
            data={waterData}
            dataKey="consumed"
            label="Eau (ml)"
            color="#4D9078"
            goal={userGoals.water}
            unit="ml"
          />
          <StatComparison label="Eau moy./jour" value={Math.round(waterStats?.averageConsumed ?? 0)} goal={userGoals.water} unit="ml" />
        </>
      )}
    </div>
  );
} 