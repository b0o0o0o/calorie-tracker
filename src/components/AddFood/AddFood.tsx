import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { FoodItem } from '../../data/baseIngredients';
import type { SearchableRecipe } from '../../types/Recipe';
import { searchFood } from '../../utils/foodSearch';
import { getRecentItems, addRecentItem } from '../../services/recentItemsService';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import RecentItems from './RecentItems';
import QuantityForm from './QuantityForm';
import ManualFoodForm from './ManualFoodForm';
import ActionButton from '../common/ActionButton';
import { IoAddOutline } from 'react-icons/io5';

const AddFood: React.FC = () => {
    const [searchParams] = useSearchParams();
    const meal = searchParams.get('meal') as string;

    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<(FoodItem | SearchableRecipe)[]>([]);
    const [selectedFood, setSelectedFood] = useState<(FoodItem | SearchableRecipe) | null>(null);
    const [quantity, setQuantity] = useState<number>(100);
    const [showManualForm, setShowManualForm] = useState(false);
    const [recentItems, setRecentItems] = useState<(FoodItem | SearchableRecipe)[]>([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    useEffect(() => {
        const items = getRecentItems();
        console.log('Recent items loaded:', items);
        setRecentItems(items);
    }, []);

    const handleSearch = async (query: string) => {
        setSearch(query);
        const results = await searchFood(query);
        setSearchResults(results);
    };

    const handleFoodSelect = (food: FoodItem | SearchableRecipe) => {
        if (selectedFood?.foodId === food.foodId) {
            setSelectedFood(null);
        } else {
            setSelectedFood(food);
        }
    };

    const handleAddFood = () => {
        if (!selectedFood) return;
        console.log('Adding food to recent items:', selectedFood);
        addRecentItem(selectedFood);
        const updatedItems = getRecentItems();
        console.log('Updated recent items:', updatedItems);
        setRecentItems(updatedItems);
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
                            onFocus={() => {
                                console.log('Search focused');
                                setIsSearchFocused(true);
                            }}
                            onBlur={() => {
                                console.log('Search blurred');
                                setIsSearchFocused(false);
                            }}
                        />

                        <RecentItems
                            items={recentItems}
                            selectedFood={selectedFood}
                            onFoodSelect={handleFoodSelect}
                            isVisible={!isSearchFocused && search === ''}
                        />

                        <SearchResults
                            results={searchResults}
                            selectedFood={selectedFood}
                            onFoodSelect={handleFoodSelect}
                            onSearch={() => handleSearch(search)}
                        />

                        {selectedFood && (
                            <QuantityForm
                                selectedFood={selectedFood}
                                quantity={quantity}
                                onQuantityChange={setQuantity}
                                onAdd={handleAddFood}
                            />
                        )}

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
                            calories: '',
                            protein: '',
                            carbs: '',
                            fat: '',
                            unit: 'g',
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