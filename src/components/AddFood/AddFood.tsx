import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import type { FoodItem } from '../../data/baseIngredients';
import type { SearchableRecipe } from '../../types/Recipe';
import { searchFood } from '../../utils/foodSearch';
import { useAddMealEntry } from '../../hooks/data/useAddMealEntry';
import type { MealType } from '../../config/theme';
import type { FoodCategoryValue } from '../../types/food';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import ManualFoodForm from './ManualFoodForm';
import FoodList from './FoodList';
import ActionButton from '../common/ActionButton';
import { IoAddOutline } from 'react-icons/io5';
import { FoodUnit } from '../../types/common';

interface FoodListItem {
    food: FoodItem | SearchableRecipe;
    quantity: number;
}

const AddFood: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const meal = searchParams.get('meal') as MealType;
    const addMealEntry = useAddMealEntry();

    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<(FoodItem | SearchableRecipe)[]>([]);
    const [selectedFood, setSelectedFood] = useState<(FoodItem | SearchableRecipe) | null>(null);
    const [quantity, setQuantity] = useState<number>(100);
    const [showManualForm, setShowManualForm] = useState(false);
    const [selectedItems, setSelectedItems] = useState<FoodListItem[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSearch = async (query: string) => {
        setSearch(query);
        const results = await searchFood(query);
        setSearchResults(results);
    };

    const handleAddToList = () => {
        if (!selectedFood) return;
        
        setSelectedItems(prev => [...prev, { food: selectedFood, quantity }]);
        setSelectedFood(null);
        setQuantity(100);
        setSearch('');
        setSearchResults([]);
    };

    const handleRemoveItem = (index: number) => {
        setSelectedItems(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmitAll = async () => {
        if (selectedItems.length === 0 || !meal) return;
        
        setIsSubmitting(true);
        try {
            for (const item of selectedItems) {
                await addMealEntry({
                    food: {
                        name: item.food.label,
                        calories: item.food.nutrients.calories,
                        protein: item.food.nutrients.protein,
                        carbs: item.food.nutrients.carbs,
                        fat: item.food.nutrients.fat,
                        unit: FoodUnit.GRAM,
                        category: 'autre' as FoodCategoryValue
                    },
                    quantity: item.quantity,
                    mealType: meal
                });
            }
            // Rediriger vers la page du journal après l'ajout
            navigate('/diary');
        } catch (error) {
            console.error('Erreur lors de l\'ajout des aliments:', error);
            // TODO: Afficher un message d'erreur à l'utilisateur
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl p-6">
                <h1 className="text-2xl font-bold text-[#4D9078] mb-6">
                    Ajouter un aliment
                    {meal && <span className="text-gray-500 ml-2">- {meal}</span>}
                </h1>

                {!showManualForm && (
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
                            onAdd={handleAddToList}
                        />

                        <FoodList
                            items={selectedItems}
                            onRemoveItem={handleRemoveItem}
                        />

                        <div className="flex gap-4 mt-6">
                            <ActionButton
                                onClick={() => setShowManualForm(true)}
                                label="Ajouter un aliment"
                                icon={IoAddOutline}
                                fullWidth
                                className="cursor-pointer"
                            />
                            {selectedItems.length > 0 && (
                                <ActionButton
                                    onClick={handleSubmitAll}
                                    label={isSubmitting ? "Ajout en cours..." : "Valider et ajouter"}
                                    fullWidth
                                    className="bg-[#4D9078] hover:bg-[#3D7A68] text-white cursor-pointer disabled:opacity-50"
                                    disabled={isSubmitting}
                                />
                            )}
                        </div>
                    </>
                )}

                {showManualForm && (
                    <ManualFoodForm
                        manualEntry={{
                            name: '',
                            calories: 0,
                            protein: 0,
                            carbs: 0,
                            fat: 0,
                            unit: FoodUnit.GRAM,
                            category: 'autre',
                        }}
                        onManualEntryChange={(_field) => {
                            // TODO: Handle manual entry changes
                        }}
                        onSubmit={() => {
                            // TODO: Handle manual food submission
                            setShowManualForm(false);
                        }}
                        onCancel={() => setShowManualForm(false)}
                        submitLabel="Ajouter au journal"
                    />
                )}
            </div>
        </div>
    );
};

export default AddFood; 