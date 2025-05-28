// src/hooks/useUserProfileState.ts
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useDate } from '../../contexts/DateContext';
import { db } from '../../firebase';
import {
    doc,
    collection,
    query,
    where,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    addDoc,
    Timestamp
} from 'firebase/firestore';
import type { MealEntry } from '../../components/Diary/MealEntryList';
import {
    calcTDEE,
    calcCaloricGoal,
    calcProteinGoal,
    calcFatGoal,
    calcCarbGoal,
    type GoalType
} from '../../utils/nutrition';
import { useNutritionHistory } from '../data/useNutritionHistory';
import { calculateDailyTotals } from '../../utils/mealCalculations';

export function useUserProfileState(initialLoading = false) {
    const user = useAuth();
    const navigate = useNavigate();
    const { selectedDate } = useDate();
    const { addOrUpdateEntry } = useNutritionHistory();

    // Profil
    const [weight, setWeight]     = useState<number>(0);
    const [height, setHeight]     = useState<number>(0);
    const [age, setAge]           = useState<number>(0);
    const [sex, setSex]           = useState<'male' | 'female'>('male');
    const [activity, setActivity] = useState<number>(1.2);
    const [goal, setGoal]         = useState<GoalType>('maintain');
    const [error, setError]       = useState<string | null>(null);
    const [loading, setLoading]   = useState<boolean>(initialLoading);

    // Journal
    const [diaryEntries, setDiaryEntries] = useState<MealEntry[]>([]);

    // — chargé / guard profile —
    useEffect(() => {
        if (user === undefined) return;
        if (user === null) {
            navigate('/signin');
            return;
        }
        const userDocRef = doc(db, 'users', user.uid);
        setLoading(true);
        return onSnapshot(
            userDocRef,
            snap => {
                if (snap.exists()) {
                    const data = snap.data();
                    setWeight(data.weight ?? 0);
                    setHeight(data.height ?? 0);
                    setAge(data.age ?? 0);
                    setSex(data.sex ?? 'male');
                    setActivity(data.activity ?? 1.2);
                    setGoal(data.goal ?? 'maintain');
                } else {
                    navigate('/profile');
                }
                setLoading(false);
            },
            err => {
                setError(err.message);
                setLoading(false);
            }
        );
    }, [user, navigate]);

    // — sync diary —
    useEffect(() => {
        if (!user) return;

        const entriesColRef = collection(
            db,
            'users',
            user.uid,
            'diary',
            selectedDate,
            'entries'
        );

        const unsubEntries = onSnapshot(entriesColRef, snap => {
            const entries = snap.docs.map(d => ({
                id: d.id,
                ...(d.data() as Omit<MealEntry, 'id'>), // inclut mealType
            }));
            setDiaryEntries(entries);
        });

        return () => {
            unsubEntries();
        };
    }, [user, selectedDate]);

    // — update profile —
    const updateProfile = async () => {
        if (!user) return;
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(
            userDocRef,
            { weight, height, age, sex, activity, goal },
            { merge: true }
        );
    };

    // Fonction utilitaire pour mettre à jour l'historique nutritionnel
    const updateNutritionHistory = async (entries: MealEntry[], date: string) => {
        const totals = calculateDailyTotals(entries);
        await addOrUpdateEntry({
            date,
            calories: totals.calories,
            protein: totals.protein,
            carbs: totals.carbs,
            fat: totals.fat,
        });
    };

    // — diary actions —
    const addEntry = async (entry: Omit<MealEntry, 'id'>) => {
        if (!user) return;
        const entriesColRef = collection(
            db,
            'users',
            user.uid,
            'diary',
            selectedDate,
            'entries'
        );
        await addDoc(entriesColRef, entry);
        // Mettre à jour l'historique nutritionnel après ajout
        await updateNutritionHistory([...diaryEntries, { ...entry, id: 'temp' }], selectedDate);
    };

    const updateEntry = async (entry: MealEntry) => {
        if (!user) return;
        const entryRef = doc(
            db,
            'users',
            user.uid,
            'diary',
            selectedDate,
            'entries',
            entry.id
        );
        await updateDoc(entryRef, {
            name: entry.name,
            calories: entry.calories,
            protein: entry.protein,
            carbs: entry.carbs,
            fat: entry.fat,
            // mealType inchangé
        });
        // Mettre à jour l'historique nutritionnel après modification
        const updatedEntries = diaryEntries.map(e => e.id === entry.id ? entry : e);
        await updateNutritionHistory(updatedEntries, selectedDate);
    };

    const deleteEntry = async (id: string) => {
        if (!user) return;
        const entryRef = doc(
            db,
            'users',
            user.uid,
            'diary',
            selectedDate,
            'entries',
            id
        );
        await deleteDoc(entryRef);
        // Mettre à jour l'historique nutritionnel après suppression
        const updatedEntries = diaryEntries.filter(e => e.id !== id);
        await updateNutritionHistory(updatedEntries, selectedDate);
    };

    return {
        user, navigate,
        weight, setWeight,
        height, setHeight,
        age, setAge,
        sex, setSex,
        activity, setActivity,
        goal, setGoal,
        error, setError,
        loading, setLoading,
        updateProfile,
        selectedDate,
        diaryEntries,
        addEntry, updateEntry, deleteEntry,
    };
}
