// src/pages/AddFood.tsx
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDate } from '../contexts/DateContext';
import { IoCloseSharp, IoAddOutline } from 'react-icons/io5';
import type { FoodItem } from '../data/baseIngredients';
import type { SearchableRecipe } from '../types/Recipe';
import type { MealType } from '../config/theme';
import type { FoodFormData } from '../types/food';
import { searchFood as searchFoodUtil, getDefaultQuantity } from '../utils/foodSearch';
import { useAddMealEntry } from '../hooks/data';

import MealSelector from '../components/AddFood/MealSelector';
import SearchBar from '../components/AddFood/SearchBar';
import SearchResults from '../components/AddFood/SearchResults';
import ManualFoodForm from '../components/AddFood/ManualFoodForm';
import ActionButton from '../components/common/ActionButton';

export default function AddFoodPage() {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    let mealType = params.get('meal') as MealType | null;
    let dateParam = params.get('date');
    const [selectedMeal, setSelectedMeal] = useState<MealType | null>(mealType);
    const { selectedDate, setSelectedDate } = useDate();
    const addMealEntry = useAddMealEntry();

    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<(FoodItem | SearchableRecipe)[]>([]);
    const [selectedFood, setSelectedFood] = useState<(FoodItem | SearchableRecipe) | null>(null);
    const [quantity, setQuantity] = useState<number>(100);
    const [showManualForm, setShowManualForm] = useState(false);
    const [pendingManualIngredient] = useState<FoodItem | null>(null);
    const [manualEntry, setManualEntry] = useState<FoodFormData>({
        name: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
        unit: 'g',
        category: 'autre',
    });

    const handleSearch = async (query: string) => {
        setSearch(query);
        const results = await searchFoodUtil(query);
        setSearchResults(results);
    };

    const handleAddSelectedFood = async () => {
        if (!selectedFood || !selectedMeal) return;
        if ('recipeId' in selectedFood) {
            // C'est une recette
            const nutritionValues = {
                calories: selectedFood.nutrients.calories,
                protein: selectedFood.nutrients.protein,
                carbs: selectedFood.nutrients.carbs,
                fat: selectedFood.nutrients.fat
            };
            await addMealEntry({
                food: {
                    name: selectedFood.label,
                    calories: String(nutritionValues.calories),
                    protein: String(nutritionValues.protein),
                    carbs: String(nutritionValues.carbs),
                    fat: String(nutritionValues.fat),
                    unit: 'g',
                    category: 'autre',
                },
                quantity: 100,
                mealType: selectedMeal
            });
        } else {
            // C'est un aliment normal
            const foodItem = selectedFood as FoodItem;
            await addMealEntry({
                food: {
                    name: foodItem.label,
                    calories: String(foodItem.nutrients.calories),
                    protein: String(foodItem.nutrients.protein),
                    carbs: String(foodItem.nutrients.carbs),
                    fat: String(foodItem.nutrients.fat),
                    unit: foodItem.unit || 'g',
                    category: foodItem.category as any, // cast pour FoodCategoryValue
                },
                quantity,
                mealType: selectedMeal
            });
        }
        navigate('/diary');
    };

    useEffect(() => {
        if (selectedFood && !('recipeId' in selectedFood)) {
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

    if (!selectedMeal) {
        return (
            <MealSelector
                onMealSelect={(meal) => setSelectedMeal(meal)}
                onManualAdd={() => setShowManualForm(true)}
            />
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Ajouter un aliment</h1>
                    <button
                        onClick={() => navigate('/diary')}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <IoCloseSharp size={24} />
                    </button>
                </div>

                {!pendingManualIngredient && !showManualForm && (
                    <>
                        <SearchBar
                            value={search}
                            onChange={handleSearch}
                        />
                        <SearchResults
                            results={searchResults}
                            selectedFood={selectedFood}
                            onFoodSelect={setSelectedFood}
                            quantity={quantity}
                            onQuantityChange={setQuantity}
                            onAdd={handleAddSelectedFood}
                        />

                        

                        {selectedFood && 'recipeId' in selectedFood && (
                            <div className="mt-4">
                                <ActionButton
                                    onClick={handleAddSelectedFood}
                                    label="Ajouter au journal"
                                    icon={IoAddOutline}
                                    fullWidth
                                />
                            </div>
                        )}

                        <ActionButton
                            onClick={() => setShowManualForm(true)}
                            label="Ajouter un aliment manuellement"
                            icon={IoAddOutline}
                            fullWidth
                            className="mt-4"
                        />
                    </>
                )}

                {showManualForm && (
                    <ManualFoodForm
                        manualEntry={manualEntry}
                        onManualEntryChange={(field, value) => 
                            setManualEntry(prev => ({ ...prev, [field]: value }))
                        }
                        onSubmit={handleAddSelectedFood}
                        onCancel={() => setShowManualForm(false)}
                        submitLabel="Ajouter au journal"
                    />
                )}
            </div>
        </div>
    );
}
