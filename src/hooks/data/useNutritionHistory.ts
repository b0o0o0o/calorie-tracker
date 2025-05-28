import { useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, orderBy, getDocs, doc, setDoc, limit, startAfter } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';

export interface NutritionHistoryEntry {
  userId: string;
  date: string; // format YYYY-MM-DD
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export function useNutritionHistory() {
  const user = useAuth();
  const [history, setHistory] = useState<NutritionHistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Récupérer l'historique paginé (ex: 30 derniers jours)
  const getHistory = async (pageSize = 30, lastDate?: string) => {
    if (!user) return;
    setLoading(true);
    const ref = collection(db, 'nutritionHistory');
    let q = query(
      ref,
      where('userId', '==', user.uid),
      orderBy('date', 'desc'),
      limit(pageSize)
    );
    if (lastDate) {
      q = query(q, startAfter(lastDate));
    }
    const snap = await getDocs(q);
    const entries = snap.docs.map(doc => doc.data() as NutritionHistoryEntry);
    setHistory(entries);
    setLoading(false);
    return entries;
  };

  // Ajouter ou mettre à jour l'entrée du jour
  const addOrUpdateEntry = async (entry: Omit<NutritionHistoryEntry, 'userId'>) => {
    if (!user) return;
    const docId = `${user.uid}_${entry.date}`;
    const ref = doc(db, 'nutritionHistory', docId);
    await setDoc(ref, {
      userId: user.uid,
      ...entry,
    }, { merge: true });
  };

  // Statistiques sur une période (côté client)
  const getStats = (start: string, end: string) => {
    const filtered = history.filter(e => e.date >= start && e.date <= end);
    if (filtered.length === 0) return null;
    const sum = (key: keyof NutritionHistoryEntry) => filtered.reduce((acc, e) => acc + (e[key] as number), 0);
    return {
      days: filtered.length,
      totalCalories: sum('calories'),
      avgCalories: sum('calories') / filtered.length,
      totalProtein: sum('protein'),
      avgProtein: sum('protein') / filtered.length,
      totalCarbs: sum('carbs'),
      avgCarbs: sum('carbs') / filtered.length,
      totalFat: sum('fat'),
      avgFat: sum('fat') / filtered.length,
    };
  };

  return { history, loading, getHistory, addOrUpdateEntry, getStats };
} 