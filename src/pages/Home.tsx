// src/pages/Home.tsx
import { useMemo, useState, useEffect } from 'react';
import { useUserProfileState } from '../hooks/useUserProfileState';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

// Palette personnalisée
const PALETTE = {
  green: '#5FAD56',
  yellow: '#F2C14E',
  orange: '#F78154',
  teal: '#4D9078',
  pink: '#B4436C',
};

// Couleurs macros adaptées à la palette
const COLORS = {
  protein: PALETTE.pink,
  carbs: PALETTE.yellow,
  fat: PALETTE.orange,
};

// Utilitaire pour générer un arc SVG partiel

export default function Home() {
  const {
    diaryEntries,
    waterIntake,
    user,
  } = useUserProfileState();

  // Objectif calorique depuis le profil
  const [caloricGoal, setCaloricGoal] = useState(2000);

  useEffect(() => {
    if (!user) return;
    const userDoc = doc(db, 'users', user.uid);
    const unsub = onSnapshot(userDoc, (snap) => {
      if (snap.exists()) {
        setCaloricGoal(snap.data().caloricGoal ?? 2000);
      }
    });
    return () => unsub();
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

      <div className="flex flex-col items-center w-full min-h-screen">
        <h1 className="text-xl sm:text-2xl tracking-widest text-[#4D9078] text-center my-8 font-bold opacity-90 drop-shadow" style={{letterSpacing:'0.15em'}}>CALORIES COUNTER</h1>
        <div className="flex flex-col items-center w-full max-w-xs gap-10">
          {/* Cercle principal */}
          <div className="relative flex items-center justify-center mb-6" style={{ width: 260, height: 260 }}>
            <svg width={260} height={260} className="block" role="img" aria-label="Progression des calories">
              {/* Cercle de fond */}
              <circle cx={130} cy={130} r={110} fill="none" stroke="#E5E7EB" strokeWidth={18} />
              {/* Cercle de progression */}
              <circle
                cx={130}
                cy={130}
                r={110}
                fill="none"
                stroke={PALETTE.green}
                strokeWidth={18}
                strokeDasharray={2 * Math.PI * 110}
                strokeDashoffset={2 * Math.PI * 110 - 2 * Math.PI * 110 * Math.min(1, totals.calories / caloricGoal)}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(.4,2,.6,1)' }}
                filter="drop-shadow(0 0 5px #5FAD5688)"
              />
            </svg>
            {/* Texte central */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-5xl font-extrabold text-[#B4436C] mb-0.5 tracking-widest drop-shadow-lg">{percent}%</div>
              <div className="text-base sm:text-xl font-bold" style={{color:PALETTE.yellow}}>{calLeft > 0 ? `${calLeft} cal left` : `${-calLeft} cal over`}</div>
            </div>
          </div>
          {/* Jauges macros */}
          <div className="flex w-full justify-between gap-2 mb-4">
            {(['protein', 'carbs', 'fat'] as const).map(macro => {
              const value = totals[macro];
              const goal = macroGoals[macro];
              const percentMacro = goal ? Math.min(1, value / goal) : 0;
              return (
                <div key={macro} className="flex-1 bg-white rounded-2xl p-2 flex flex-col items-center shadow-md border border-gray-100">
                  <div className="relative mb-0.5">
                    <svg width={80} height={80} role="img" aria-label={`Progression des ${macro}`}>
                      <circle cx={40} cy={40} r={33} fill="none" stroke="#E5E7EB" strokeWidth={7} />
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
                    <span className="absolute inset-0 flex items-center justify-center font-bold" style={{fontSize:'0.7rem', color:COLORS[macro]}}>{value.toFixed(1)} g</span>
                  </div>
                  <div className="uppercase text-[10px] tracking-widest mt-0.5 font-semibold" style={{ color: COLORS[macro] }}>{macro.toUpperCase()}</div>
                </div>
              );
            })}
          </div>
          {/* Eau */}
          <div className="w-full bg-white rounded-2xl p-3 flex flex-col gap-1 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[#4D9078] text-xs font-medium flex items-center gap-1">
                <span role="img" aria-label="eau">💧</span> Water Balance
              </span>
              <span className="text-gray-500 text-xs">{waterIntake} / {waterGoal} ml</span>
            </div>
            <div className="w-full h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden" role="progressbar" aria-valuenow={waterIntake} aria-valuemin={0} aria-valuemax={waterGoal}>
              <div className="h-full" style={{ width: `${Math.min(100, (waterIntake / waterGoal) * 100)}%`, background: PALETTE.teal }} />
            </div>
          </div>
        </div>
      </div>
  );
}
