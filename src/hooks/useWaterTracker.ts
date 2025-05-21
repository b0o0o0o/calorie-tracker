import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useDate } from '../context/DateContext';
import { db } from '../firebase';
import { 
    doc, 
    collection, 
    query, 
    where, 
    getDocs, 
    setDoc, 
    updateDoc,
    serverTimestamp 
} from 'firebase/firestore';
import type { WaterEntry } from '../types/water';

export function useWaterTracker() {
    const user = useAuth();
    const { selectedDate } = useDate();
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(true);

    // Charger les données d'eau pour la date sélectionnée
    useEffect(() => {
        if (!user) return;

        const fetchWaterData = async () => {
            setLoading(true);
            try {
                const waterRef = collection(db, 'water');
                const q = query(
                    waterRef,
                    where('userId', '==', user.uid),
                    where('date', '==', selectedDate)
                );
                
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0];
                    setAmount(doc.data().amount);
                } else {
                    setAmount(0);
                }
            } catch (err) {
                console.error('[useWaterTracker] Error fetching water data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchWaterData();
    }, [user, selectedDate]);

    // Mettre à jour la quantité d'eau
    const updateWater = async (newAmount: number) => {
        if (!user) return;

        try {
            const waterRef = collection(db, 'water');
            const q = query(
                waterRef,
                where('userId', '==', user.uid),
                where('date', '==', selectedDate)
            );
            
            const querySnapshot = await getDocs(q);
            const now = new Date();

            if (querySnapshot.empty) {
                // Créer une nouvelle entrée
                const newDocRef = doc(waterRef);
                await setDoc(newDocRef, {
                    userId: user.uid,
                    date: selectedDate,
                    amount: newAmount,
                    createdAt: now,
                    updatedAt: now
                });
            } else {
                // Mettre à jour l'entrée existante
                const docRef = doc(db, 'water', querySnapshot.docs[0].id);
                await updateDoc(docRef, {
                    amount: newAmount,
                    updatedAt: now
                });
            }

            setAmount(newAmount);
        } catch (err) {
            console.error('[useWaterTracker] Error updating water data:', err);
            throw err;
        }
    };

    // Ajouter ou soustraire de l'eau
    const handleAdd = async (value: number) => {
        const newAmount = Math.max(0, amount + value);
        await updateWater(newAmount);
    };

    return {
        amount,
        loading,
        handleAdd
    };
} 