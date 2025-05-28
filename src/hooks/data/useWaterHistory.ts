import { useState, useEffect } from 'react';
import { 
    collection, 
    query, 
    where, 
    orderBy, 
    getDocs,
    doc,
    setDoc,
    Timestamp 
} from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useDate } from '../../contexts/DateContext';

export interface WaterHistoryEntry {
    date: Date;
    goal: number;
    consumed: number;
    goalType: 'calculated' | 'custom';
    preferences: {
        useCustomGoal: boolean;
        customGoal: number | null;
    };
}

export function useWaterHistory() {
    const user = useAuth();
    const { selectedDate } = useDate();
    const [history, setHistory] = useState<WaterHistoryEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Charger l'historique
    useEffect(() => {
        if (!user) return;

        const fetchHistory = async () => {
            setLoading(true);
            try {
                const waterHistoryRef = collection(db, 'waterHistory');
                const q = query(
                    waterHistoryRef,
                    where('userId', '==', user.uid),
                    orderBy('date', 'desc')
                );

                const querySnapshot = await getDocs(q);
                const entries: WaterHistoryEntry[] = [];
                
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    entries.push({
                        date: data.date.toDate(),
                        goal: data.goal,
                        consumed: data.consumed,
                        goalType: data.goalType,
                        preferences: data.preferences
                    });
                });

                setHistory(entries);
            } catch (err) {
                console.error('[useWaterHistory] Error fetching history:', err);
                setError('Erreur lors du chargement de l\'historique');
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, [user]);

    // Enregistrer une nouvelle entrée
    const addEntry = async (entry: Omit<WaterHistoryEntry, 'date'>) => {
        if (!user) return;

        try {
            const waterHistoryRef = collection(db, 'waterHistory');
            const newDocRef = doc(waterHistoryRef);
            
            const entryDate = new Date(selectedDate);
            
            await setDoc(newDocRef, {
                userId: user.uid,
                date: Timestamp.fromDate(entryDate),
                goal: entry.goal,
                consumed: entry.consumed,
                goalType: entry.goalType,
                preferences: entry.preferences
            });

            // Mettre à jour l'état local
            setHistory(prev => [{
                ...entry,
                date: entryDate
            }, ...prev]);

            return true;
        } catch (err) {
            console.error('[useWaterHistory] Error adding entry:', err);
            setError('Erreur lors de l\'enregistrement');
            return false;
        }
    };

    // Obtenir les statistiques pour une période donnée
    const getStats = (startDate: Date, endDate: Date) => {
        const periodEntries = history.filter(entry => 
            entry.date >= startDate && entry.date <= endDate
        );

        if (periodEntries.length === 0) return null;

        const totalConsumed = periodEntries.reduce((sum, entry) => sum + entry.consumed, 0);
        const totalGoal = periodEntries.reduce((sum, entry) => sum + entry.goal, 0);
        const averageConsumed = totalConsumed / periodEntries.length;
        const averageGoal = totalGoal / periodEntries.length;
        const completionRate = (totalConsumed / totalGoal) * 100;

        return {
            totalConsumed,
            totalGoal,
            averageConsumed,
            averageGoal,
            completionRate,
            daysTracked: periodEntries.length
        };
    };

    return {
        history,
        loading,
        error,
        addEntry,
        getStats
    };
} 