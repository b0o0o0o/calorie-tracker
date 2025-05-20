// src/pages/AddFood.tsx
import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUserProfileState } from '../hooks/useUserProfileState';
import { IoCloseSharp, IoSearchOutline, IoAddOutline, IoCafeOutline, IoRestaurantOutline, IoFastFoodOutline, IoPizzaOutline } from 'react-icons/io5';
import { FaLeaf } from 'react-icons/fa';
import { BASE_INGREDIENTS } from '../data/baseIngredients';
import type { FoodItem } from '../data/baseIngredients';
import { getCustomIngredients, addCustomIngredient, removeCustomIngredient } from '../data/customIngredients';

type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

// Calcul des valeurs nutritionnelles en fonction de la quantité

// Liste des catégories disponibles
const FOOD_CATEGORIES = [
    { value: 'legume', label: 'Légume' },
    { value: 'fruit', label: 'Fruit' },
    { value: 'viande', label: 'Viande' },
    { value: 'poisson', label: 'Poisson' },
    { value: 'produit_laitier', label: 'Produit laitier' },
    { value: 'oleagineux', label: 'Oléagineux' },
    { value: 'oeuf', label: 'Oeuf' },
    { value: 'cereal', label: 'Céréale / légumineuse' },
    { value: 'huile', label: 'Huile' },
    { value: 'autre', label: 'Autre' },
];

const MEAL_OPTIONS = [
    { value: 'breakfast', label: 'Matin', icon: IoCafeOutline },
    { value: 'lunch', label: 'Midi', icon: IoRestaurantOutline },
    { value: 'dinner', label: 'Soir', icon: IoPizzaOutline },
    { value: 'snack', label: 'Snack', icon: IoFastFoodOutline },
];

// Palette personnalisée

export default function AddFoodPage() {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    let mealType = params.get('meal') as MealType | null;
    let dateParam = params.get('date');
    const [selectedMeal, setSelectedMeal] = useState<MealType | null>(mealType);
    const { addEntry, selectedDate, setSelectedDate } = useUserProfileState();

    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
    const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
    const [quantity, setQuantity] = useState<number>(100);
    const [showManualForm, setShowManualForm] = useState(false);
    const [pendingManualIngredient, setPendingManualIngredient] = useState<FoodItem | null>(null);
    const [quantityToAdd, setQuantityToAdd] = useState<number>(100);

    // États pour l'ajout manuel
    const [manualEntry, setManualEntry] = useState({
        name: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
        unit: 'g' as 'g' | 'ml',
        category: 'autre',
    });

    // Recherche locale dans la base statique + custom
    const searchFood = (query: string) => {
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }
        const customs = getCustomIngredients();
        const allIngredients = [...customs, ...BASE_INGREDIENTS];
        const results = allIngredients.filter(item =>
            item.label.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
    };

    // Lors de l'ajout manuel, ajouter à la base locale puis demander la quantité

    // Valider l'ajout au journal après saisie de la quantité

    // Ajouter un aliment sélectionné au journal
    const handleAddSelectedFood = async () => {
        if (!selectedFood) return;
        const isEgg = selectedFood.foodId.startsWith('oeuf');
        const ratio = isEgg ? quantity : quantity / selectedFood.servingSize;
        await addEntry({
            mealType: selectedMeal!,
            name: selectedFood.label,
            calories: Math.round(selectedFood.nutrients.calories * ratio),
            protein: Math.round(selectedFood.nutrients.protein * ratio * 10) / 10,
            carbs: Math.round(selectedFood.nutrients.carbs * ratio * 10) / 10,
            fat: Math.round(selectedFood.nutrients.fat * ratio * 10) / 10
        });
        navigate('/diary');
    };

    // Réinitialiser la quantité selon l'aliment sélectionné
    useEffect(() => {
        if (selectedFood) {
            if (selectedFood.foodId.startsWith('oeuf')) {
                setQuantity(1);
            } else {
                setQuantity(100);
            }
        }
    }, [selectedFood]);

    useEffect(() => {
        if (mealType && mealType !== selectedMeal) {
            setSelectedMeal(mealType);
        }
    }, [mealType]);

    // Synchronise la date sélectionnée avec l'URL si besoin
    useEffect(() => {
        if (dateParam && dateParam !== selectedDate) {
            setSelectedDate(dateParam);
        }
    }, [dateParam, selectedDate, setSelectedDate]);

    // Si aucun repas n'est sélectionné, afficher le choix du repas
    if (!selectedMeal && !showManualForm) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB]">
                <div className="bg-white rounded-2xl shadow-xl px-8 py-8 max-w-lg w-full mx-auto flex flex-col gap-6">
                    <h2 className="text-2xl font-extrabold mb-2 tracking-tight text-[#4D9078]">Dans quel repas ?</h2>
                    <div className="flex flex-col gap-4 w-full">
                        {MEAL_OPTIONS.map(opt => (
                            <button
                                key={opt.value}
                                className="w-full flex items-center justify-center gap-4 py-4 rounded-2xl bg-[#e7f2e5] hover:bg-[#5FAD56]/20 text-[#4D9078] font-semibold text-lg shadow-md transition-all duration-200 border border-[#5FAD56]/30 hover:border-[#5FAD56] group"
                                onClick={() => {
                                    setParams({ meal: opt.value });
                                    setSelectedMeal(opt.value as MealType);
                                }}
                            >
                                <opt.icon size={28} className="text-[#5FAD56] group-hover:scale-110 transition-transform" />
                                <span className="tracking-wide text-xl">{opt.label}</span>
                            </button>
                        ))}
                        <button
                            className="w-full flex items-center justify-center gap-4 py-4 rounded-2xl bg-gradient-to-r from-[#5FAD56] via-[#F2C14E] to-[#B4436C] text-white font-bold text-lg shadow-xl border-2 border-[#5FAD56] hover:from-[#4D9078] hover:to-[#B4436C] transition-all duration-200 mt-2"
                            onClick={() => {
                                setSelectedMeal(null);
                                setParams({});
                                setShowManualForm(true);
                            }}
                        >
                            <FaLeaf size={28} className="text-white drop-shadow-lg" />
                            <span className="tracking-wide text-xl">+ Ingrédient</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-2">
        <div className="flex flex-col h-full text-[#4D9078]">
            {/* Header affiché uniquement si on n'est PAS en ajout manuel feuille verte */}
            {!(showManualForm && selectedMeal === null) && (
                <div className="flex items-center justify-between px-4 py-3 rounded-lg mb-4">
                    <div className="w-[24px]"></div>
                    <h1 className="text-lg font-semibold">Ajouter un aliment au journal</h1>
                    <button 
                        className="cursor-pointer"
                        onClick={() => {
                            navigate('/diary');
                        }} 
                        aria-label="Retour">
                        <IoCloseSharp size={24} />
                    </button>
                </div>
                
            )}

            {/* Saisie de quantité après ajout manuel */}
            {pendingManualIngredient && (
                <div className="flex flex-col items-center justify-center flex-1">
                    <div className="mb-4 text-center">
                        <div className="text-lg font-semibold mb-2">Quantité à ajouter au journal</div>
                        <div className="mb-2">{pendingManualIngredient.label} (valeurs pour 100{pendingManualIngredient.unit})</div>
                        <div className="flex items-center justify-center gap-2">
                        <input
                                type="number"
                                value={quantityToAdd}
                                onChange={e => setQuantityToAdd(Number(e.target.value))}
                                min={1}
                                className="w-24 bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 text-center"
                            />
                            <span>{pendingManualIngredient.unit}</span>
                        </div>
                    </div>
                    <button
                        className="mt-2 px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white"
                        onClick={() => {
                            setPendingManualIngredient(null);
                            setQuantityToAdd(100);
                        }}
                    >Annuler</button>
                </div>
            )}

            {/* Formulaire manuel d'ajout d'aliment */}
            {!pendingManualIngredient && showManualForm && (
                <div className="flex flex-col gap-3 px-4 py-2">
                    <div className="text-lg font-semibold mb-2 text-center">Nouvel ingrédient (pour 100g/ml)</div>
                    <div>
                        <label className="block text-sm mb-1">Nom de l'aliment</label>
                        <input
                            type="text"
                            value={manualEntry.name}
                            onChange={e => setManualEntry(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                            placeholder="Ex: Pomme de terre vapeur"
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <label className="block text-sm mb-1">Calories</label>
                            <input
                                type="number"
                                value={manualEntry.calories}
                                onChange={e => setManualEntry(prev => ({ ...prev, calories: e.target.value }))}
                                onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                                placeholder="0"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm mb-1">Protéines (g)</label>
                        <input
                                type="number"
                                value={manualEntry.protein}
                                onChange={e => setManualEntry(prev => ({ ...prev, protein: e.target.value }))}
                                onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                                placeholder="0"
                            />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <label className="block text-sm mb-1">Glucides (g)</label>
                            <input
                                type="number"
                                value={manualEntry.carbs}
                                onChange={e => setManualEntry(prev => ({ ...prev, carbs: e.target.value }))}
                                onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                                placeholder="0"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm mb-1">Lipides (g)</label>
                        <input
                                type="number"
                                value={manualEntry.fat}
                                onChange={e => setManualEntry(prev => ({ ...prev, fat: e.target.value }))}
                                onFocus={e => { if (e.target.value === '0') e.target.value = ''; }}
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                                placeholder="0"
                            />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <label className="block text-sm mb-1">Unité</label>
                            <select
                                value={manualEntry.unit}
                                onChange={e => setManualEntry(prev => ({ ...prev, unit: e.target.value as 'g' | 'ml' }))}
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                            >
                                <option value="g">Grammes (g)</option>
                                <option value="ml">Millilitres (ml)</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm mb-1">Catégorie</label>
                            <select
                                value={manualEntry.category}
                                onChange={e => setManualEntry(prev => ({ ...prev, category: e.target.value }))}
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2"
                            >
                                {FOOD_CATEGORIES.map(cat => (
                                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                        {selectedMeal === null && (
                            <button
                                className="flex-1 px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium"
                                onClick={() => {
                                    if (!manualEntry.name) return;
                                    const newIngredient: FoodItem = {
                                        foodId: manualEntry.name.toLowerCase().replace(/\s+/g, '_'),
                                        label: manualEntry.name,
                                        nutrients: {
                                            calories: Number(manualEntry.calories) || 0,
                                            protein: Number(manualEntry.protein) || 0,
                                            carbs: Number(manualEntry.carbs) || 0,
                                            fat: Number(manualEntry.fat) || 0
                                        },
                                        servingSize: 100,
                                        unit: manualEntry.unit,
                                        category: manualEntry.category,
                                    };
                                    addCustomIngredient(newIngredient);
                                    setShowManualForm(false);
                                }}
                            >Enregistrer dans la base</button>
                        )}
                        {selectedMeal !== null && (
                            <button
                                className="flex-1 px-3 py-2 rounded-md bg-green-600 hover:bg-green-500 text-white font-medium"
                                onClick={async () => {
                                    if (!manualEntry.name) return;
                                    const newIngredient: FoodItem = {
                                        foodId: manualEntry.name.toLowerCase().replace(/\s+/g, '_'),
                                        label: manualEntry.name,
                                        nutrients: {
                                            calories: Number(manualEntry.calories) || 0,
                                            protein: Number(manualEntry.protein) || 0,
                                            carbs: Number(manualEntry.carbs) || 0,
                                            fat: Number(manualEntry.fat) || 0
                                        },
                                        servingSize: 100,
                                        unit: manualEntry.unit,
                                        category: manualEntry.category,
                                    };
                                    addCustomIngredient(newIngredient);
                                    await addEntry({
                                        mealType: selectedMeal,
                                        name: manualEntry.name,
                                        calories: Number(manualEntry.calories) || 0,
                                        protein: Number(manualEntry.protein) || 0,
                                        carbs: Number(manualEntry.carbs) || 0,
                                        fat: Number(manualEntry.fat) || 0
                                    });
                                    setShowManualForm(false);
                                    navigate('/diary');
                                }}
                            >Ajouter au Journal</button>
                        )}
                        <button
                            className="flex-1 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white font-medium"
                            onClick={() => setShowManualForm(false)}
                        >Annuler</button>
                    </div>
                </div>
            )}

            {/* Recherche et résultats (par défaut) */}
            {!pendingManualIngredient && !showManualForm && (
                <>
                    <div className="flex mb-4">
                        <button
                            className="flex-1 py-3 text-center bg-green-700 hover:bg-green-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200"
                            onClick={() => setShowManualForm(true)}
                        >
                            <IoAddOutline size={20} />
                            Ajouter un aliment
                        </button>
                    </div>
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Rechercher un aliment..."
                            value={search}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setSearch(e.target.value);
                                searchFood(e.target.value);
                            }}
                            className="w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-lg px-4 py-2 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 px-10"
                        />
                        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>

                    {/* Résultats de recherche */}
                    <div className="space-y-2">
                        {searchResults.map(food => (
                            <div
                                key={food.foodId}
                                className={`flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4 transition-all duration-200 ${selectedFood?.foodId === food.foodId ? 'ring-2 ring-green-500' : ''}`}
                                onClick={() => setSelectedFood(food)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        checked={selectedFood?.foodId === food.foodId}
                                        readOnly
                                        className="form-radio text-green-400 focus:ring-green-500"
                                    />
                                    <span className="text-gray-900 text-sm font-medium">{food.label}</span>
                                </div>
                                {Boolean(getCustomIngredients().find(i => i.foodId === food.foodId)) && (
                                    <button
                                        type="button"
                                        className="ml-2 text-red-400 hover:text-red-600 text-xs border border-red-400 rounded px-2 py-1 transition-all duration-200"
                                        onClick={e => {
                                            e.stopPropagation();
                                            removeCustomIngredient(food.foodId);
                                            searchFood(search);
                                        }}
                                    >
                                        Supprimer
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Quantité et validation pour l'aliment sélectionné */}
                    {selectedFood && (
                        <div className="mt-4 bg-gray-800 rounded-xl p-6">
                            <div className="mb-4">
                                <label className="block text-sm mb-2 text-gray-300">
                                    {selectedFood.foodId.startsWith('oeuf') ? 'Nombre d\'œufs' : `Quantité (${selectedFood.unit})`}
                                </label>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={e => setQuantity(Number(e.target.value))}
                                    min={1}
                                    step={selectedFood.foodId.startsWith('oeuf') ? 1 : 1}
                                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
                                />
                                {selectedFood.foodId.startsWith('oeuf') && (
                                    <div className="text-sm text-gray-400 mt-1">
                                        {quantity} œuf{quantity > 1 ? 's' : ''} = {quantity * selectedFood.servingSize}g
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={handleAddSelectedFood}
                                className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold text-sm transition-all duration-200"
                            >
                                Ajouter au journal
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    </div>
);
}
