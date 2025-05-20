// src/hooks/useUserProfileState.ts
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import {
    doc,
    collection,
    onSnapshot,
    setDoc,
    addDoc,
    updateDoc,
    deleteDoc,
} from 'firebase/firestore';
import type { MealEntry } from '../components/Diary/MealEntryList';
import type { GoalType } from '../utils/nutrition';

export function useUserProfileState(initialLoading = false) {
    const user = useAuth();
    const navigate = useNavigate();

    // Profil
    const [weight, setWeight]     = useState<number>(0);
    const [height, setHeight]     = useState<number>(0);
    const [age, setAge]           = useState<number>(0);
    const [sex, setSex]           = useState<'male' | 'female'>('male');
    const [activity, setActivity] = useState<number>(1.2);
    const [goal, setGoal]         = useState<GoalType>('maintain');
    const [waist, setWaist]       = useState<number | null>(null);
    const [error, setError]       = useState<string | null>(null);
    const [loading, setLoading]   = useState<boolean>(initialLoading);

    // Journal
    const [selectedDate, setSelectedDate] = useState(
        format(new Date(), 'yyyy-MM-dd')
    );
    const [diaryEntries, setDiaryEntries] = useState<MealEntry[]>([]);
    const [waterIntake, setWaterIntake]   = useState<number>(0);

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
                    setWaist(data.waist ?? null);
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

    // — sync diary & water —
    useEffect(() => {
        if (!user) return;

        const diaryDocRef = doc(db, 'users', user.uid, 'diary', selectedDate);
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

        const unsubWater = onSnapshot(diaryDocRef, snap => {
            setWaterIntake(snap.exists() ? snap.data().waterIntake ?? 0 : 0);
        });

        return () => {
            unsubEntries();
            unsubWater();
        };
    }, [user, selectedDate]);

    // — update profile —
    const updateProfile = async () => {
        if (!user) return;
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(
            userDocRef,
            { weight, height, age, sex, activity, goal, waist },
            { merge: true }
        );
    };

    // — diary actions —
    const addEntry = async (entry: Omit<MealEntry, 'id'>) => {
        // entry doit contenir mealType
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
    };

    const addWater = async (qty: number) => {
        if (!user) return;
        const diaryDocRef = doc(db, 'users', user.uid, 'diary', selectedDate);
        await setDoc(
            diaryDocRef,
            { waterIntake: waterIntake + qty },
            { merge: true }
        );
    };

    return {
        user, navigate,
        weight, setWeight,
        height, setHeight,
        age, setAge,
        sex, setSex,
        activity, setActivity,
        goal, setGoal,
        waist, setWaist,
        error, setError,
        loading, setLoading,
        updateProfile,
        selectedDate, setSelectedDate,
        diaryEntries, waterIntake,
        addEntry, updateEntry, deleteEntry, addWater,
    };
}
