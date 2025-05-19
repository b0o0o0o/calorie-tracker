// src/pages/Home.tsx
import { useMemo } from 'react';
import { useUserProfileState } from '../hooks/useUserProfileState';
import FormPageLayout from '../components/FormPageLayout';

// Couleurs macros
const COLORS = {
  protein: '#7B61FF',
  carbs: '#FFB43A',
  fat: '#FF4D67',
};

// Utilitaire pour générer un arc SVG partiel

export default function Home() {
  const {
    diaryEntries,
    waterIntake,
    user,
  } = useUserProfileState();

  // Objectif calorique (par défaut 2000)
  const caloricGoal = useMemo(() => {
    if (!user) return 2000;
    return 2000;
  }, [user]);

  // Totaux du jour
  const totals = useMemo(() =>
    diaryEntries.reduce(
      (acc, e) => ({
        calories: acc.calories + e.calories,
        protein: acc.protein + (e.protein || 0),
        carbs: acc.carbs + (e.carbs || 0),
        fat: acc.fat + (e.fat || 0),
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 }
    ),
    [diaryEntries]
  );

  // Pourcentage de calories consommées
  const percent = caloricGoal ? Math.min(100, Math.round((totals.calories / caloricGoal) * 100)) : 0;
  const calLeft = caloricGoal - totals.calories;

  // Objectifs macros (à adapter si tu veux des cibles personnalisées)
  const macroGoals = {
    protein: Math.round((caloricGoal * 0.2) / 4), // 20% des calories, 4kcal/g
    carbs: Math.round((caloricGoal * 0.5) / 4),   // 50% des calories, 4kcal/g
    fat: Math.round((caloricGoal * 0.3) / 9),     // 30% des calories, 9kcal/g
  };

  // Eau (objectif 2000ml par défaut)
  const waterGoal = 2000;

  return (
    <FormPageLayout>
      <div className="flex flex-col items-center w-full">
        <h1 className="text-xl sm:text-2xl tracking-widest text-white text-center my-8 font-semibold opacity-80">CALORIES COUNTER</h1>
        <div className="flex flex-col items-center w-full max-w-xs gap-10">
          {/* Cercle principal */}
          <div className="relative flex items-center justify-center mb-6" style={{ width: 260, height: 260 }}>
            <svg width={260} height={260} className="block" role="img" aria-label="Progression des calories">
              {/* Cercle de fond */}
              <circle cx={130} cy={130} r={110} fill="none" stroke="#23272f" strokeWidth={18} />
              {/* Cercle de progression */}
              <circle
                cx={130}
                cy={130}
                r={110}
                fill="none"
                stroke="#fff200"
                strokeWidth={18}
                strokeDasharray={2 * Math.PI * 110}
                strokeDashoffset={2 * Math.PI * 110 - 2 * Math.PI * 110 * Math.min(1, totals.calories / caloricGoal)}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(.4,2,.6,1)' }}
                filter="drop-shadow(0 0 5px #fff20088)"
              />
            </svg>
            {/* Texte central */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-5xl font-extrabold text-white mb-0.5 tracking-widest drop-shadow-lg">{percent}%</div>
              <div className="text-base sm:text-xl font-bold text-yellow-300 drop-shadow-lg">{calLeft > 0 ? `${calLeft} cal left` : `${-calLeft} cal over`}</div>
            </div>
          </div>
          {/* Jauges macros */}
          <div className="flex w-full justify-between gap-2 mb-4">
            {(['protein', 'carbs', 'fat'] as const).map(macro => {
              const value = totals[macro];
              const goal = macroGoals[macro];
              const percentMacro = goal ? Math.min(1, value / goal) : 0;
              return (
                <div key={macro} className="flex-1 bg-[#181A20] rounded-2xl p-2 flex flex-col items-center shadow-md">
                  <div className="relative mb-0.5">
                    <svg width={80} height={80} role="img" aria-label={`Progression des ${macro}`}>
                      <circle cx={40} cy={40} r={33} fill="none" stroke="#23272f" strokeWidth={7} />
                      <circle
                        cx={40}
                        cy={40}
                        r={33}
                        fill="none"
                        stroke={COLORS[macro]}
                        strokeWidth={6}
                        strokeDasharray={2 * Math.PI * 33}
                        strokeDashoffset={2 * Math.PI * 33 - 2 * Math.PI * 33 * percentMacro}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(.4,2,.6,1)' }}
                        filter="drop-shadow(0 0 2px #ffffff88)"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-bold text-white" style={{fontSize:'0.7rem'}}>{value.toFixed(1)} g</span>
                  </div>
                  <div className="uppercase text-[10px] tracking-widest text-white/80 mt-0.5" style={{ color: COLORS[macro] }}>{macro.toUpperCase()}</div>
                </div>
              );
            })}
          </div>
          {/* Eau */}
          <div className="w-full bg-[#181A20] rounded-2xl p-3 flex flex-col gap-1 shadow-md">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-white/80 text-xs font-medium flex items-center gap-1">
                <span role="img" aria-label="eau">💧</span> Water Balance
              </span>
              <span className="text-white/60 text-xs">{waterIntake} / {waterGoal} ml</span>
            </div>
            <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden" role="progressbar" aria-valuenow={waterIntake} aria-valuemin={0} aria-valuemax={waterGoal}>
              <div className="h-full bg-blue-400" style={{ width: `${Math.min(100, (waterIntake / waterGoal) * 100)}%` }} />
            </div>
          </div>
        </div>
      </div>
    </FormPageLayout>
  );
}
