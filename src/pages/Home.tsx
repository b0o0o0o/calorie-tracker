// src/pages/Home.tsx
import { useMemo, useState, useEffect } from 'react';
import { useUserProfileState } from '../hooks/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { PALETTE } from '../config/theme';
import ProgressCircle from '../components/Home/ProgressCircle';
import MacroGauge from '../components/Home/MacroGauge';
import WaterTracker from '../components/Diary/WaterTracker';
import DateSelector from '../components/Diary/DateSelector';
import {
    calculateMacroTotals,
    calculateMacroGoals,
    calculateCaloriePercentage,
    calculateCaloriesLeft,
} from '../utils/macroCalculations';

export default function Home() {
  const {
    diaryEntries,
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

  return (
      <div className="flex flex-col items-center w-full min-h-screen ">
            <h1 className="text-xl sm:text-2xl tracking-widest text-[#4D9078] text-center my-8 font-bold opacity-90 drop-shadow" style={{letterSpacing:'0.15em'}}>
                CALORIES COUNTER
            </h1>

            <div className="max-w-3xl w-full p-2">
                <DateSelector />

                <div className="flex flex-col items-center w-full gap-10">
                  {/* Cercle principal */}
                        <ProgressCircle value={totals.calories} max={caloricGoal}>
                            {(viewMode) => viewMode === 'percentage' ? (
                                <>
                                    <div className="text-3xl sm:text-5xl font-extrabold text-[#B4436C] mb-0.5 tracking-widest drop-shadow-lg">
                                        {percent}%
                                    </div>
                                    <div className="text-base sm:text-xl font-bold" style={{color: PALETTE.yellow}}>
                                        {calLeft > 0 ? `${calLeft} cal left` : `${-calLeft} cal over`}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="text-3xl sm:text-5xl font-extrabold text-[#B4436C] mb-0.5 tracking-widest drop-shadow-lg">
                                        {Math.round(totals.calories)}
                                    </div>
                                    <div className="text-base sm:text-xl font-bold" style={{color: PALETTE.yellow}}>
                                        / {caloricGoal} cal
                                    </div>
                                </>
                            )}
                        </ProgressCircle>

                  {/* Jauges macros */}
                  <div className="flex w-full justify-between gap-2 mb-4 px-4">
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
                        <div className="w-full px-4">
                          <WaterTracker />
                        </div>
                </div>
            </div>
      </div>
  );
}
