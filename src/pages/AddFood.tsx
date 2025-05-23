// src/pages/AddFood.tsx
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUserProfileState } from '../hooks/useUserProfileState';
import { useDate } from '../context/DateContext';
import { IoCloseSharp, IoAddOutline } from 'react-icons/io5';
import type { FoodItem } from '../data/baseIngredients';
import type { SearchableRecipe } from '../types/Recipe';
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
import RecentItems from '../components/AddFood/RecentItems';
import { getRecentItems, addRecentItem } from '../services/recentItemsService';

export default function AddFoodPage() {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    let mealType = params.get('meal') as MealType | null;
    let dateParam = params.get('date');
    const [selectedMeal, setSelectedMeal] = useState<MealType | null>(mealType);
    const { addEntry } = useUserProfileState();
    const { selectedDate, setSelectedDate } = useDate();

    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<(FoodItem | SearchableRecipe)[]>([]);
    const [selectedFood, setSelectedFood] = useState<(FoodItem | SearchableRecipe) | null>(null);
    const [quantity, setQuantity] = useState<number>(100);
    const [showManualForm, setShowManualForm] = useState(false);
    const [pendingManualIngredient] = useState<FoodItem | null>(null);
    const [] = useState<number>(100);
    const [manualEntry, setManualEntry] = useState<FoodFormData>({
        name: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
        unit: 'g',
        category: 'autre',
    });
    const [recentItems, setRecentItems] = useState<(FoodItem | SearchableRecipe)[]>([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    useEffect(() => {
        setRecentItems(getRecentItems());
    }, []);

    const handleSearch = async (query: string) => {
        setSearch(query);
        const results = await searchFoodUtil(query);
        setSearchResults(results);
    };

    const handleAddSelectedFood = async () => {
        if (!selectedFood) return;
        addRecentItem(selectedFood);
        setRecentItems(getRecentItems());
        if ('recipeId' in selectedFood) {
            // C'est une recette
            const nutritionValues = {
                calories: selectedFood.nutrients.calories,
                protein: selectedFood.nutrients.protein,
                carbs: selectedFood.nutrients.carbs,
                fat: selectedFood.nutrients.fat
            };
            await addEntry({
                mealType: selectedMeal!,
                name: selectedFood.label,
                ...nutritionValues
            });
        } else {
            // C'est un aliment normal
            const nutritionValues = calculateNutritionValues(selectedFood, quantity);
            await addEntry({
                mealType: selectedMeal!,
                name: selectedFood.label,
                ...nutritionValues
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
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                        />
                        <RecentItems
                            items={recentItems}
                            selectedFood={selectedFood}
                            onFoodSelect={(item) => {
                                if (selectedFood?.foodId === item.foodId) {
                                    setSelectedFood(null);
                                } else {
                                    setSelectedFood(item);
                                }
                            }}
                            isVisible={!isSearchFocused && search === ''}
                        />
                        <SearchResults
                            results={searchResults}
                            selectedFood={selectedFood}
                            onFoodSelect={(food) => {
                                if (selectedFood?.foodId === food.foodId) {
                                    setSelectedFood(null);
                                } else {
                                    setSelectedFood(food);
                                }
                            }}
                            onSearch={() => handleSearch(search)}
                        />

                        {selectedFood && !('recipeId' in selectedFood) && (
                            <QuantityForm
                                selectedFood={selectedFood}
                                quantity={quantity}
                                onQuantityChange={setQuantity}
                                onAdd={handleAddSelectedFood}
                            />
                        )}

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
                            label="Créer un Aliment"
                            icon={IoAddOutline}
                            fullWidth
                            className="mb-4 mt-5 cursor-pointer"
                        />
                    </>
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
                        submitLabel="Ajouter au journal"
                    />
                )}
            </div>
        </div>
    );
}
