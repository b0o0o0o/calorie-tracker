// src/pages/Diary.tsx
import React, { useState } from 'react';
import { format, parseISO, addDays, subDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import { useUserProfileState } from '../hooks/useUserProfileState';
import FormPageLayout from '../components/FormPageLayout';
import MealEntryList from '../components/Diary/MealEntryList';
import type { MealEntry } from '../components/Diary/MealEntryList';
import WaterTracker from '../components/Diary/WaterTracker';

import {
    IoFastFoodOutline,
    IoChevronUpOutline,
    IoChevronDownOutline,
    IoChevronBackOutline,
    IoChevronForwardOutline,
    IoAddOutline,
    IoRestaurantOutline,
    IoCafeOutline,
    IoPizzaOutline,
} from 'react-icons/io5';

type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

const MEALS: {
    key: MealType;
    label: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
}[] = [
    { key: 'breakfast', label: 'Breakfast', Icon: IoCafeOutline },
    { key: 'lunch',     label: 'Lunch',     Icon: IoRestaurantOutline },
    { key: 'dinner',    label: 'Dinner',    Icon: IoPizzaOutline },
    { key: 'snack',     label: 'Snack',     Icon: IoFastFoodOutline },
];

// Utilitaire pour afficher un nombre avec 1 décimale seulement si nécessaire
function formatMacro(val: number) {
    return Number.isInteger(val) ? val : val.toFixed(1);
}

// Palette personnalisée
const PALETTE = {
    green: '#5FAD56',
    yellow: '#F2C14E',
    orange: '#F78154',
    teal: '#4D9078',
    pink: '#B4436C',
};

const COLORS = {
    protein: PALETTE.pink,
    carbs: PALETTE.yellow,
    fat: PALETTE.orange,
};

const Diary: React.FC = () => {
    const {
        loading,
        error,
        selectedDate,
        setSelectedDate,
        diaryEntries,
        waterIntake,
        updateEntry,
        deleteEntry,
        addWater,
    } = useUserProfileState();

    const [expanded, setExpanded] = useState<Record<MealType, boolean>>({
        breakfast: true,
        lunch:     false,
        dinner:    false,
        snack:     false,
    });

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

    const goPrev = () => {
        const prev = subDays(isoDate, 1);
        setSelectedDate(format(prev, 'yyyy-MM-dd'));
    };
    const goNext = () => {
        const next = addDays(isoDate, 1);
        setSelectedDate(format(next, 'yyyy-MM-dd'));
    };

    return (
        <div className="flex flex-col items-center w-full min-h-screen">
            <div className="max-w-3xl w-full p-2">
                {loading && <p className="text-center">Chargement...</p>}
                {error   && <p className="text-center text-red-500">{error}</p>}

                {!loading && !error && (
                    <>
                        {/* Sélecteur de date via calendrier */}
                        <div className="flex items-center justify-center mt-4 mb-6 space-x-4">
                            <button onClick={goPrev} aria-label="Jour précédent">
                                <IoChevronBackOutline size={24} />
                            </button>
                            <DatePicker
                                selected={isoDate}
                                onChange={(date: Date | null) => {
                                    if (date) {
                                        setSelectedDate(format(date, 'yyyy-MM-dd'));
                                    }
                                }}
                                dateFormat="dd.MM.yy"
                                className="text-center bg-white text-[#4D9078] border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
                                calendarClassName="bg-white text-[#4D9078] rounded shadow-lg"
                                popperClassName="z-50"
                                showPopperArrow={false}
                            />
                            <button onClick={goNext} aria-label="Jour suivant">
                                <IoChevronForwardOutline size={24} />
                            </button>
                        </div>

                        {/* Résumé macros */}
                        <div className="grid grid-cols-4 text-center text-xs text-gray-500 mb-2">
                            <div>
                                <p className="uppercase" style={{color:COLORS.protein}}>Protein</p>
                                <p className="mt-1 font-bold" style={{color:COLORS.protein}}>{formatMacro(totals.protein)}</p>
                            </div>
                            <div>
                                <p className="uppercase" style={{color:COLORS.fat}}>Fats</p>
                                <p className="mt-1 font-bold" style={{color:COLORS.fat}}>{formatMacro(totals.fat)}</p>
                            </div>
                            <div>
                                <p className="uppercase" style={{color:COLORS.carbs}}>Carbs</p>
                                <p className="mt-1 font-bold" style={{color:COLORS.carbs}}>{formatMacro(totals.carbs)}</p>
                            </div>
                            <div>
                                <p className="uppercase text-[#4D9078]">Calories</p>
                                <p className="mt-1 font-bold text-[#4D9078]">{Math.round(totals.calories)}</p>
                            </div>
                        </div>
                        <hr className="border-gray-200 mb-6" />

                        {/* Cartes repas */}
                        <div className="space-y-4 px-4">
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
                                    <div key={key} className="bg-white rounded-xl p-4 border border-gray-100 shadow">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <Icon size={20} className="text-[#5FAD56]" />
                                                <span className="font-semibold text-[#4D9078]">{label}</span>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <span className="text-sm font-bold text-[#F78154]">
                                                    {Math.round(mealTotals.calories)} cal
                                                </span>
                                                <Link
                                                    to={`/add-food?meal=${key}`}
                                                    className="p-1.5 rounded-xl hover:bg-[#F2C14E]/30 transition-all duration-200"
                                                    aria-label={`Ajouter au ${label}`}
                                                >
                                                    <IoAddOutline
                                                        size={20}
                                                        className=""
                                                        style={{color:PALETTE.yellow}}
                                                    />
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        setExpanded(prev => ({
                                                            ...prev,
                                                            [key]: !prev[key],
                                                        }))
                                                    }
                                                    className="p-1.5 rounded-xl hover:bg-[#5FAD56]/20 transition-all duration-200"
                                                >
                                                    {isOpen ? (
                                                        <IoChevronUpOutline size={20} className="text-gray-400" />
                                                    ) : (
                                                        <IoChevronDownOutline size={20} className="text-gray-400" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 text-center text-xs text-gray-400 mb-2">
                                            <span style={{color:COLORS.protein}}>{formatMacro(mealTotals.protein)}</span>
                                            <span style={{color:COLORS.fat}}>{formatMacro(mealTotals.fat)}</span>
                                            <span style={{color:COLORS.carbs}}>{formatMacro(mealTotals.carbs)}</span>
                                        </div>

                                        {isOpen && (
                                            <MealEntryList
                                                entries={items}
                                                onUpdate={updateEntry}
                                                onDelete={deleteEntry}
                                            />
                                        )}
                                    </div>
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
