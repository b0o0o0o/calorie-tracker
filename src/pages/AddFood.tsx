// src/pages/AddFood.tsx
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUserProfileState } from '../hooks/useUserProfileState';
import { useDate } from '../context/DateContext';
import { IoCloseSharp, IoAddOutline } from 'react-icons/io5';
import type { FoodItem } from '../data/baseIngredients';
import { addCustomIngredient } from '../data/customIngredients';
import type { MealType } from '../config/theme';
import type { FoodFormData } from '../types/food';
import { calculateNutritionValues, createNewIngredient } from '../utils/nutritionCalculations';
import { searchFood as searchFoodUtil, getDefaultQuantity } from '../utils/foodSearch';

import MealSelector from '../components/AddFood/MealSelector';
import SearchBar from '../components/AddFood/SearchBar';
import SearchResults from '../components/AddFood/SearchResults';
import QuantityForm from '../components/AddFood/QuantityForm';
import ManualFoodForm from '../components/AddFood/ManualFoodForm';
import ActionButton from '../components/common/ActionButton';

export default function AddFoodPage() {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    let mealType = params.get('meal') as MealType | null;
    let dateParam = params.get('date');
    const [selectedMeal, setSelectedMeal] = useState<MealType | null>(mealType);
    const { addEntry } = useUserProfileState();
    const { selectedDate, setSelectedDate } = useDate();

    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
    const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
    const [quantity, setQuantity] = useState<number>(100);
    const [showManualForm, setShowManualForm] = useState(false);
    const [pendingManualIngredient, setPendingManualIngredient] = useState<FoodItem | null>(null);
    const [quantityToAdd, setQuantityToAdd] = useState<number>(100);

    const [manualEntry, setManualEntry] = useState<FoodFormData>({
        name: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
        unit: 'g',
        category: 'autre',
    });

    const handleSearch = (query: string) => {
        setSearch(query);
        setSearchResults(searchFoodUtil(query));
    };

    const handleAddSelectedFood = async () => {
        if (!selectedFood) return;
        const nutritionValues = calculateNutritionValues(selectedFood, quantity);
        await addEntry({
            mealType: selectedMeal!,
            name: selectedFood.label,
            ...nutritionValues
        });
        navigate('/diary');
    };

    useEffect(() => {
        if (selectedFood) {
            setQuantity(getDefaultQuantity(selectedFood));
        }
    }, [selectedFood]);

    useEffect(() => {
        if (mealType && mealType !== selectedMeal) {
            setSelectedMeal(mealType);
        }
    }, [mealType]);

    useEffect(() => {
        if (dateParam && dateParam !== selectedDate) {
            setSelectedDate(dateParam);
        }
    }, [dateParam, selectedDate, setSelectedDate]);

    if (!selectedMeal && !showManualForm) {
        return (
            <MealSelector
                onMealSelect={(meal) => {
                    setParams({ meal });
                    setSelectedMeal(meal);
                }}
                onManualAdd={() => {
                    setSelectedMeal(null);
                    setParams({});
                    setShowManualForm(true);
                }}
            />
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-2">
            <div className="flex flex-col h-full text-[#4D9078]">
                {!(showManualForm && selectedMeal === null) && (
                    <div className="flex items-center justify-between px-4 py-3 rounded-lg mb-4">
                        <div className="w-[24px]"></div>
                        <h1 className="text-lg font-semibold">Ajouter un aliment au journal</h1>
                        <button 
                            className="cursor-pointer"
                            onClick={() => navigate('/diary')} 
                            aria-label="Retour">
                            <IoCloseSharp size={24} />
                        </button>
                    </div>
                )}

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
                        <ActionButton
                            onClick={() => {
                                setPendingManualIngredient(null);
                                setQuantityToAdd(100);
                            }}
                            label="Annuler"
                            variant="secondary"
                        />
                    </div>
                )}

                {!pendingManualIngredient && showManualForm && (
                    <ManualFoodForm
                        manualEntry={manualEntry}
                        onManualEntryChange={(field, value) => 
                            setManualEntry(prev => ({ ...prev, [field]: value }))
                        }
                        onSubmit={() => {
                            if (!manualEntry.name) return;
                            const newIngredient = createNewIngredient(
                                manualEntry.name,
                                manualEntry.calories,
                                manualEntry.protein,
                                manualEntry.carbs,
                                manualEntry.fat,
                                manualEntry.unit,
                                manualEntry.category
                            );
                            addCustomIngredient(newIngredient);
                            if (selectedMeal) {
                                addEntry({
                                    mealType: selectedMeal,
                                    name: manualEntry.name,
                                    ...calculateNutritionValues(newIngredient, 100)
                                });
                                navigate('/diary');
                            }
                            setShowManualForm(false);
                        }}
                        onCancel={() => setShowManualForm(false)}
                        submitLabel={selectedMeal ? "Ajouter au Journal" : "Enregistrer dans la base"}
                    />
                )}

                {!pendingManualIngredient && !showManualForm && (
                    <>
                        <ActionButton
                            onClick={() => setShowManualForm(true)}
                            label="Ajouter un aliment"
                            icon={IoAddOutline}
                            fullWidth
                            className="mb-4"
                        />

                        <SearchBar
                            value={search}
                            onChange={handleSearch}
                        />

                        <SearchResults
                            results={searchResults}
                            selectedFood={selectedFood}
                            onFoodSelect={setSelectedFood}
                            onSearch={() => handleSearch(search)}
                        />

                        {selectedFood && (
                            <QuantityForm
                                selectedFood={selectedFood}
                                quantity={quantity}
                                onQuantityChange={setQuantity}
                                onAdd={handleAddSelectedFood}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
