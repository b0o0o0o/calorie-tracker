// src/pages/Home.tsx
import { useMemo, useState, useEffect } from 'react';
import { useUserProfileState } from '../hooks/useUserProfileState';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { PALETTE } from '../config/theme';
import ProgressCircle from '../components/Home/ProgressCircle';
import MacroGauge from '../components/Home/MacroGauge';
import WaterProgress from '../components/Home/WaterProgress';
import {
    calculateMacroTotals,
    calculateMacroGoals,
    calculateCaloriePercentage,
    calculateCaloriesLeft,
} from '../utils/macroCalculations';

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
    const totals = useMemo(() => calculateMacroTotals(diaryEntries), [diaryEntries]);

  // Pourcentage de calories consommées
    const percent = calculateCaloriePercentage(totals.calories, caloricGoal);
    const calLeft = calculateCaloriesLeft(totals.calories, caloricGoal);

    // Objectifs macros
    const macroGoals = calculateMacroGoals(caloricGoal);

  // Eau (objectif 2000ml par défaut)
  const waterGoal = 2000;

  return (
      <div className="flex flex-col items-center w-full min-h-screen">
            <h1 className="text-xl sm:text-2xl tracking-widest text-[#4D9078] text-center my-8 font-bold opacity-90 drop-shadow" style={{letterSpacing:'0.15em'}}>
                CALORIES COUNTER
            </h1>
        <div className="flex flex-col items-center w-full max-w-xs gap-10">
          {/* Cercle principal */}
                <ProgressCircle value={totals.calories} max={caloricGoal}>
                    <div className="text-3xl sm:text-5xl font-extrabold text-[#B4436C] mb-0.5 tracking-widest drop-shadow-lg">
                        {percent}%
            </div>
                    <div className="text-base sm:text-xl font-bold" style={{color: PALETTE.yellow}}>
                        {calLeft > 0 ? `${calLeft} cal left` : `${-calLeft} cal over`}
          </div>
                </ProgressCircle>

          {/* Jauges macros */}
          <div className="flex w-full justify-between gap-2 mb-4">
                    {(['protein', 'carbs', 'fat'] as const).map(macro => (
                        <MacroGauge
                            key={macro}
                            value={totals[macro]}
                            goal={macroGoals[macro]}
                            label={macro}
                        />
                    ))}
                </div>

          {/* Eau */}
                <WaterProgress current={waterIntake} goal={waterGoal} />
        </div>
      </div>
  );
}
