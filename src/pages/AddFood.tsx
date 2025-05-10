// src/pages/AddFood.tsx
import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUserProfileState } from '../hooks/useUserProfileState';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { IoChevronBackOutline, IoCheckmarkOutline } from 'react-icons/io5';

type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

interface Ingredient {
    id: string;
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}

export default function AddFoodPage() {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const mealType = params.get('meal') as MealType;
    const user = useAuth();
    const { addEntry } = useUserProfileState();

    const [tab, setTab] = useState<'manual' | 'existing'>('manual');

    /*** États pour manuel ***/
    const [name, setName] = useState<string>('');
    const [calories, setCalories] = useState<number>(0);
    const [protein, setProtein] = useState<number>(0);
    const [carbs, setCarbs] = useState<number>(0);
    const [fat, setFat] = useState<number>(0);

    /*** États pour existant ***/
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [search, setSearch] = useState<string>('');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    // Charge la liste des ingrédients en base (users/{uid}/ingredients)
    useEffect(() => {
        if (!user) return;
        return onSnapshot(
            collection(db, 'users', user.uid, 'ingredients'),
            snaps => {
                setIngredients(
                    snaps.docs.map(d => ({
                        id: d.id,
                        ...(d.data() as Omit<Ingredient, 'id'>),
                    }))
                );
            }
        );
    }, [user]);

    const filtered = ingredients.filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase())
    );

    // Valider l’ajout (manuel ou existant) et retourner
    const handleConfirm = async () => {
        if (tab === 'manual') {
            if (user) {
                await addDoc(
                    collection(db, 'users', user.uid, 'ingredients'),
                    { name, calories, protein, carbs, fat }
                );
            }
            await addEntry({ mealType, name, calories, protein, carbs, fat });
        } else {
            const sel = ingredients.find(i => i.id === selectedId);
            if (sel) {
                await addEntry({
                    mealType,
                    name: sel.name,
                    calories: sel.calories,
                    protein: sel.protein,
                    carbs: sel.carbs,
                    fat: sel.fat,
                });
            }
        }
        navigate('/diary');
    };

    return (
        <div className="flex flex-col h-full bg-black text-white">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
                <button onClick={() => navigate(-1)} aria-label="Retour">
                    <IoChevronBackOutline size={24} />
                </button>
                <h1 className="text-lg font-semibold">Ajouter un aliment</h1>
                <button
                    onClick={handleConfirm}
                    disabled={tab === 'existing' && !selectedId}
                    aria-label="Valider"
                >
                    <IoCheckmarkOutline
                        size={24}
                        className={tab === 'existing' && !selectedId ? 'opacity-50' : ''}
                    />
                </button>
            </div>

            {/* Onglets */}
            <div className="flex mt-4 mx-4 space-x-2">
                {(['manual', 'existing'] as const).map(mode => (
                    <button
                        key={mode}
                        onClick={() => setTab(mode)}
                        className={`flex-1 py-2 rounded-lg ${
                            tab === mode ? 'bg-white text-black' : 'bg-gray-700 text-white'
                        }`}
                    >
                        {mode === 'manual' ? 'Manuel' : 'Existant'}
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-auto px-4 py-4">
                {tab === 'manual' ? (
                    /* FORMULAIRE MANUEL */
                    <div className="space-y-4">
                        {/* Nom aliment */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Nom aliment</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setName(e.target.value)
                                }
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2"
                            />
                        </div>

                        {/* Calories */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Calories (kcal)</label>
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={calories || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setCalories(Number(e.target.value) || 0)
                                }
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2"
                            />
                        </div>

                        {/* Protéines */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Protéines (g)</label>
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={protein || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setProtein(Number(e.target.value) || 0)
                                }
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2"
                            />
                        </div>

                        {/* Glucides */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Glucides (g)</label>
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={carbs || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setCarbs(Number(e.target.value) || 0)
                                }
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2"
                            />
                        </div>

                        {/* Lipides */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Lipides (g)</label>
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={fat || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setFat(Number(e.target.value) || 0)
                                }
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2"
                            />
                        </div>
                    </div>
                ) : (
                    /* LISTE EXISTANTE */
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Rechercher…"
                            value={search}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setSearch(e.target.value)
                            }
                            className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 mb-4"
                        />
                        {filtered.map(item => (
                            <div
                                key={item.id}
                                onClick={() =>
                                    setSelectedId(prev => (prev === item.id ? null : item.id))
                                }
                                className={`flex items-center justify-between p-3 bg-gray-800 rounded-lg cursor-pointer ${
                                    selectedId === item.id ? 'ring-2 ring-green-400' : ''
                                }`}
                            >
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-xs text-gray-400">
                                        {item.calories} kcal • {item.protein} / {item.carbs} / {item.fat}
                                    </p>
                                </div>
                                <input
                                    type="radio"
                                    checked={selectedId === item.id}
                                    readOnly
                                    className="form-radio text-green-400"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
