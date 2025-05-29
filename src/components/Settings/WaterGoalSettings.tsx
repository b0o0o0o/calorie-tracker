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
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
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

    const validateInputs = (): boolean => {
        if (useCustomGoal) {
            if (isNaN(customGoal) || customGoal <= 0) {
                setError('Veuillez entrer une valeur valide (supérieure à 0)');
                return false;
            }
            if (customGoal > 10000) {
                setError('La valeur ne peut pas dépasser 10 000 ml');
                return false;
            }
        }
        return true;
    };

    const handleSave = async () => {
        if (!user) return;
        
        setError(null);
        setSuccess(false);
        
        if (!validateInputs()) {
            return;
        }

        try {
            const userDocRef = doc(db, 'users', user.uid);
            const newPreferences = {
                useCustomGoal,
                customGoal: useCustomGoal ? customGoal : null
            };

            await updateDoc(userDocRef, {
                waterPreferences: newPreferences
            });
            
            setSuccess(true);
            // Cacher le message de succès après 3 secondes
            setTimeout(() => setSuccess(false), 3000);

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
            setError('Une erreur est survenue lors de l\'enregistrement');
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
        <Card variant="info" className="p-4">
            <h3 className="text-lg font-semibold text-gray-500 mb-4">Objectif d'eau quotidien</h3>
            
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-gray-700">Objectif calculé</span>
                    <span className="font-medium text-gray-900">{calculatedGoal} ml</span>
                </div>
<div className="flex flex-row space-x-2">
                <div className="flex items-center space-x-4">
                    <input
                        type="checkbox"
                        id="useCustomGoal"
                        checked={useCustomGoal}
                        onChange={(e) => setUseCustomGoal(e.target.checked)}
                        className="rounded border-gray-300 text-[#4D9078] focus:ring-[#4D9078]"
                    />
                    <label htmlFor="useCustomGoal" className="text-gray-700 text-xs">
                        Utiliser un objectif personnalisé
                    </label>
                </div>

                {useCustomGoal && (
                    <div className="flex items-center space-x-2 ml-auto">
                        <Input
                            id="customGoal"
                            type="number"
                            value={customGoal === 0 ? '' : customGoal}
                            onChange={value => {
                                setCustomGoal(value === '' ? 0 : Number(value));
                                setError(null);
                            }}
                            min={100}
                            max={10000}
                            step={100}
                        />
                        <span className="text-gray-700">ml</span>
                    </div>
                )}
                </div>
                 {error && (
                    <div className="text-red-500 text-sm mb-2">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="text-green-600 text-sm mb-2">
                        Préférences enregistrées avec succès !
                    </div>
                )}
                <button
                    onClick={handleSave}
                    disabled={loading || (useCustomGoal && (customGoal === 0 || customGoal === null))}
                    className={`w-full px-4 py-2 rounded-lg transition-colors ${
                        loading || (useCustomGoal && (customGoal === 0 || customGoal === null))
                            ? 'bg-gray-200 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
                            : 'text-[#4D9078] hover:bg-lime-100 border-2 border-[#4D9078]'
                    }`}
                >
                    {loading ? 'Enregistrement...' : 'Enregistrer'}
                </button>
            </div>
        </Card>
    );
};

export default WaterGoalSettings; 