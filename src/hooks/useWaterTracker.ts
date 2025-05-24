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
    getDoc} from 'firebase/firestore';
import { calcWaterGoal } from '../utils/nutrition';
import { useWaterHistory } from './useWaterHistory';

export function useWaterTracker() {
    const user = useAuth();
    const { selectedDate } = useDate();
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [waterGoal, setWaterGoal] = useState(2000); // Valeur par défaut
    const { addEntry } = useWaterHistory();

    // Charger les données d'eau et l'objectif pour la date sélectionnée
    useEffect(() => {
        if (!user) return;

        const fetchWaterData = async () => {
            setLoading(true);
            try {
                // Charger les données d'eau
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

                // Charger l'objectif d'eau depuis le profil utilisateur
                const userDocRef = doc(db, 'users', user.uid);
                const userDocSnap = await getDoc(userDocRef);
                
                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data();
                    if (userData.waterPreferences?.useCustomGoal && userData.waterPreferences?.customGoal) {
                        setWaterGoal(userData.waterPreferences.customGoal);
                    } else {
                        // Calculer l'objectif basé sur le poids et l'activité
                        const calculatedGoal = calcWaterGoal(userData.weight, userData.activity);
                        setWaterGoal(calculatedGoal);
                    }
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

            // Enregistrer dans l'historique
            const userDocRef = doc(db, 'users', user.uid);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                await addEntry({
                    goal: waterGoal,
                    consumed: newAmount,
                    goalType: userData.waterPreferences?.useCustomGoal ? 'custom' : 'calculated',
                    preferences: userData.waterPreferences || {
                        useCustomGoal: false,
                        customGoal: null
                    }
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
        handleAdd,
        waterGoal
    };
} 