import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { FoodItem } from '../../data/baseIngredients';
import type { SearchableRecipe } from '../../types/Recipe';
import { searchFood } from '../../utils/foodSearch';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import ManualFoodForm from './ManualFoodForm';
import ActionButton from '../common/ActionButton';
import { IoAddOutline } from 'react-icons/io5';
import { FoodUnit } from '../../types/common';

const AddFood: React.FC = () => {
    const [searchParams] = useSearchParams();
    const meal = searchParams.get('meal') as string;

    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<(FoodItem | SearchableRecipe)[]>([]);
    const [selectedFood, setSelectedFood] = useState<(FoodItem | SearchableRecipe) | null>(null);
    const [quantity, setQuantity] = useState<number>(100);
    const [showManualForm, setShowManualForm] = useState(false);

    const handleSearch = async (query: string) => {
        setSearch(query);
        const results = await searchFood(query);
        setSearchResults(results);
    };

    const handleAddFood = () => {
        if (!selectedFood) return;
        // TODO: Add food to journal
        setSelectedFood(null);
        setQuantity(100);
        setSearch('');
        setSearchResults([]);
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
                            onAdd={handleAddFood}
                        />

                        <ActionButton
                            onClick={() => setShowManualForm(true)}
                            label="Ajouter un aliment"
                            icon={IoAddOutline}
                            fullWidth
                            className="mb-4 mt-5 cursor-pointer"
                        />
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