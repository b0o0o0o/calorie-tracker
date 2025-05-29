import React, { useState, useEffect } from 'react';
import { doc, updateDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { calcWaterGoal } from '../../utils/nutrition';
import { useWaterHistory } from '../../hooks/data';
import Input from '../common/Input';
import Card from '../common/Card';


interface WaterGoalSettingsProps {
    weight: number;
    activity: number;
}

const WaterGoalSettings: React.FC<WaterGoalSettingsProps> = ({ weight, activity }) => {
    const user = useAuth();
    const [useCustomGoal, setUseCustomGoal] = useState(false);
    const [customGoal, setCustomGoal] = useState(2000);
    const [calculatedGoal, setCalculatedGoal] = useState(2000);
    const [loading, setLoading] = useState(true);
    const { addEntry } = useWaterHistory();

    useEffect(() => {
        const fetchWaterPreferences = async () => {
            if (!user) return;
            
            try {
                const userDocRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);
                
                if (userDoc.exists()) {
                    const data = userDoc.data();
                    setUseCustomGoal(data.waterPreferences?.useCustomGoal ?? false);
                    setCustomGoal(data.waterPreferences?.customGoal ?? 2000);
                }
                
                // Calculer l'objectif basé sur le poids et l'activité
                const calculated = calcWaterGoal(weight, activity);
                setCalculatedGoal(calculated);
            } catch (error) {
                console.error('Error fetching water preferences:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWaterPreferences();
    }, [user, weight, activity]);

    const handleSave = async () => {
        if (!user) return;

        try {
            const userDocRef = doc(db, 'users', user.uid);
            const newPreferences = {
                useCustomGoal,
                customGoal: useCustomGoal ? customGoal : null
            };

            await updateDoc(userDocRef, {
                waterPreferences: newPreferences
            });

            // Enregistrer le changement dans l'historique
            const waterRef = collection(db, 'water');
            const q = query(
                waterRef,
                where('userId', '==', user.uid),
                where('date', '==', new Date().toISOString().split('T')[0])
            );
            
            const querySnapshot = await getDocs(q);
            const currentAmount = querySnapshot.empty ? 0 : querySnapshot.docs[0].data().amount;

            await addEntry({
                goal: useCustomGoal ? customGoal : calculatedGoal,
                consumed: currentAmount,
                goalType: useCustomGoal ? 'custom' : 'calculated',
                preferences: newPreferences
            });
        } catch (error) {
            console.error('Error saving water preferences:', error);
        }
    };

    if (loading) {
        return (
            <div className="bg-white rounded-xl p-4 shadow animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
        );
    }

    return (
        <Card className="p-4">
            <h3 className="text-lg font-semibold text-[#4D9078] mb-4">Objectif d'eau quotidien</h3>
            
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-gray-700">Objectif calculé</span>
                    <span className="font-medium text-gray-900">{calculatedGoal} ml</span>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="useCustomGoal"
                        checked={useCustomGoal}
                        onChange={(e) => setUseCustomGoal(e.target.checked)}
                        className="rounded border-gray-300 text-[#4D9078] focus:ring-[#4D9078]"
                    />
                    <label htmlFor="useCustomGoal" className="text-gray-700">
                        Utiliser un objectif personnalisé
                    </label>
                </div>

                {useCustomGoal && (
                    <div className="flex items-center space-x-2">
                        <Input
                            id="customGoal"
                            type="number"
                            value={customGoal}
                            onChange={value => setCustomGoal(Number(value))}
                            min={0}
                            step={100}
                        />
                        <span className="text-gray-700">ml</span>
                    </div>
                )}

                <button
                    onClick={handleSave}
                    className="w-full px-4 py-2 bg-[#4D9078] text-white rounded-lg hover:bg-[#3D7A63] transition-colors"
                >
                    Enregistrer
                </button>
            </div>
        </Card>
    );
};

export default WaterGoalSettings; 