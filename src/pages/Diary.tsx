// src/pages/Diary.tsx
import React, { useState } from 'react';
import { useUserProfileState } from '../hooks/useUserProfileState';
import {
    IoFastFoodOutline,
    IoRestaurantOutline,
    IoCafeOutline,
    IoPizzaOutline,
} from 'react-icons/io5';
import DateSelector from '../components/Diary/DateSelector';
import MacroSummary from '../components/Diary/MacroSummary';
import MealCard from '../components/Diary/MealCard';
import WaterTracker from '../components/Diary/WaterTracker';
import { MEALS, type MealType } from '../config/theme';
import { calculateDailyTotals, filterEntriesByMealType } from '../utils/mealCalculations';

const MEAL_ICONS = {
    breakfast: IoCafeOutline,
    lunch: IoRestaurantOutline,
    dinner: IoPizzaOutline,
    snack: IoFastFoodOutline,
} as const;

const Diary: React.FC = () => {
    const {
        loading,
        error,
        selectedDate,
        diaryEntries,
        waterIntake,
        updateEntry,
        deleteEntry,
        addWater,
    } = useUserProfileState();

    const [expanded, setExpanded] = useState<Record<MealType, boolean>>({
        breakfast: false,
        lunch: false,
        dinner: false,
        snack: false,
    });

    // Totaux journaliers
    const totals = calculateDailyTotals(diaryEntries);

    return (
        <div className="flex flex-col items-center w-full min-h-screen">
            <h1 className="text-xl sm:text-2xl tracking-widest text-[#4D9078] text-center mt-6 font-bold opacity-90 drop-shadow" style={{letterSpacing:'0.15em'}}>
                JOURNAL
            </h1>
            <div className="max-w-3xl w-full p-2">
                {loading && <p className="text-center">Chargement...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {!loading && !error && (
                    <>
                        <DateSelector />

                        <MacroSummary totals={totals} />
                        <hr className="border-gray-200 mb-6" />

                        {/* Cartes repas */}
                        <div className="space-y-4 px-4">
                            {MEALS.map(({ key, label }) => {
                                const Icon = MEAL_ICONS[key];
                                const items = filterEntriesByMealType(diaryEntries, key);

                                return (
                                    <MealCard
                                        key={key}
                                        type={key}
                                        label={label}
                                        Icon={Icon}
                                        entries={items}
                                        isExpanded={expanded[key]}
                                        onToggle={() =>
                                            setExpanded(prev => ({
                                                ...prev,
                                                [key]: !prev[key],
                                            }))
                                        }
                                        onUpdate={updateEntry}
                                        onDelete={deleteEntry}
                                        selectedDate={selectedDate}
                                    />
                                );
                            })}

                            {/* WaterTracker */}
                            <WaterTracker
                                amount={waterIntake}
                                onAdd={addWater}
                                onReset={() => addWater(-waterIntake)}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Diary;
