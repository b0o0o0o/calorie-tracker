// src/pages/Diary.tsx
import React, { useState } from 'react';
import { format, parseISO, addDays, subDays } from 'date-fns';
import { useUserProfileState } from '../hooks/useUserProfileState';
import FormPageLayout from '../components/FormPageLayout';
import MealEntryList from '../components/Diary/MealEntryList';
import type { MealEntry } from '../components/Diary/MealEntryList';
import AddFoodModal from '../components/Diary/AddFoodModal';
import {
    WiSunrise,
    WiDaySunny,
    WiMoonWaningCrescent2,
    WiRaindrop,
} from 'react-icons/wi';
import {
    IoFastFoodOutline,
    IoChevronDownOutline,
    IoChevronUpOutline,
    IoSaveOutline,
} from 'react-icons/io5';

type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

const MEALS: {
    key: MealType;
    label: string;
    Icon: React.ComponentType<{ size?: number }>;
}[] = [
    { key: 'breakfast', label: 'Breakfast', Icon: WiSunrise },
    { key: 'lunch',     label: 'Lunch',     Icon: WiDaySunny },
    { key: 'dinner',    label: 'Dinner',    Icon: WiMoonWaningCrescent2 },
    { key: 'snack',     label: 'Snack',     Icon: IoFastFoodOutline },
];

const Diary: React.FC = () => {
    const {
        loading,
        error,
        selectedDate,
        setSelectedDate,
        diaryEntries,
        waterIntake,
        addEntry,
        updateEntry,
        deleteEntry,
        addWater,
    } = useUserProfileState();

    const [expanded, setExpanded] = useState<Record<MealType, boolean>>({
        breakfast: true,
        lunch: false,
        dinner: false,
        snack: false,
    });

    const today = format(new Date(), 'yyyy-MM-dd');
    const isoDate = parseISO(selectedDate);

    // Totaux journaliers
    const totals = diaryEntries.reduce(
        (acc, e) => ({
            calories: acc.calories + e.calories,
            protein:  acc.protein  + e.protein,
            carbs:    acc.carbs    + e.carbs,
            fat:      acc.fat      + e.fat,
        }),
        { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );

    const goPrev = () =>
        setSelectedDate(format(subDays(isoDate, 1), 'yyyy-MM-dd'));
    const goNext = () =>
        setSelectedDate(format(addDays(isoDate, 1), 'yyyy-MM-dd'));

    return (
        <FormPageLayout>
            {loading && <p className="text-center">Chargement...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && !error && (
                <>
                    {/* Sélecteur de date */}
                    <div className="flex items-center justify-center space-x-4 mb-4">
                        <button onClick={goPrev}>‹</button>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={e => setSelectedDate(e.target.value)}
                            className="text-center bg-transparent border-none"
                            max={today}
                        />
                        <button onClick={goNext}>›</button>
                    </div>

                    {/* Résumé macros/calories */}
                    <div className="grid grid-cols-4 text-center text-sm mb-4">
                        <div>
                            <p className="font-medium">Protein</p>
                            <p>{totals.protein}</p>
                        </div>
                        <div>
                            <p className="font-medium">Fats</p>
                            <p>{totals.fat}</p>
                        </div>
                        <div>
                            <p className="font-medium">Carbs</p>
                            <p>{totals.carbs}</p>
                        </div>
                        <div>
                            <p className="font-medium">Calories</p>
                            <p>{totals.calories}</p>
                        </div>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    {/* Sections repas */}
                    <div className="space-y-4">
                        {MEALS.map(({ key, label, Icon }) => {
                            const items = diaryEntries.filter(
                                (e: MealEntry) => e.mealType === key
                            );
                            const mealTotals = items.reduce(
                                (acc, e) => ({
                                    calories: acc.calories + e.calories,
                                    protein:  acc.protein  + e.protein,
                                    carbs:    acc.carbs    + e.carbs,
                                    fat:      acc.fat      + e.fat,
                                }),
                                { calories: 0, protein: 0, carbs: 0, fat: 0 }
                            );
                            const isOpen = expanded[key];

                            return (
                                <div
                                    key={key}
                                    className="bg-gray-800 text-white rounded-lg p-4"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Icon size={20} />
                                            <span className="font-medium">{label}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span>{mealTotals.calories} cal</span>
                                            {/* + ajoute un aliment avec le bon mealType */}
                                            <AddFoodModal mealType={key} onAdd={addEntry} />
                                            <button
                                                onClick={() =>
                                                    setExpanded(prev => ({
                                                        ...prev,
                                                        [key]: !prev[key],
                                                    }))
                                                }
                                            >
                                                {isOpen ? (
                                                    <IoChevronUpOutline size={20} />
                                                ) : (
                                                    <IoChevronDownOutline size={20} />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {isOpen && (
                                        <>
                                            <div className="grid grid-cols-3 text-center text-xs mt-2">
                                                <span>{mealTotals.protein}</span>
                                                <span>{mealTotals.fat}</span>
                                                <span>{mealTotals.carbs}</span>
                                            </div>

                                            <MealEntryList
                                                entries={items}
                                                onUpdate={updateEntry}
                                                onDelete={deleteEntry}
                                            />

                                            <div className="flex justify-end mt-2">
                                                <button>
                                                    <IoSaveOutline size={20} />
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}

                        {/* Water Balance */}
                        <div className="bg-gray-800 text-white rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                    <WiRaindrop size={20} />
                                    <span className="font-medium">Water Balance</span>
                                </div>
                                <span>
                  {waterIntake} / 2000 ml
                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                {[300, 500].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => addWater(size)}
                                        className="flex flex-col items-center justify-center w-12 h-12 border rounded-full"
                                    >
                                        <span className="text-sm">{size}</span>
                                        <span className="text-xs">ml</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </FormPageLayout>
    );
};

export default Diary;
