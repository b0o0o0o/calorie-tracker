import { useState, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import type { FoodItem } from '../../data/baseIngredients';
import type { SearchableRecipe } from '../../types/Recipe';
import { searchFood } from '../../utils/foodSearch';
import { useAddMealEntry } from '../../hooks/data/useAddMealEntry';
import { useFoodManagement } from '../../hooks/useFoodManagement';
import type { MealType } from '../../config/theme';
import type { FoodCategoryValue, FoodFormData } from '../../types/food';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import ManualFoodForm from './ManualFoodForm';
import FoodList from './FoodList';
import ActionButton from '../common/ActionButton';
import { IoAddOutline } from 'react-icons/io5';
import { FoodUnit } from '../../types/common';
import { toast } from 'react-toastify';

interface FoodListItem {
    food: FoodItem | SearchableRecipe;
    quantity: number;
}

const AddFood: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const meal = searchParams.get('meal') as MealType;
    const addMealEntry = useAddMealEntry();

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState<(FoodItem | SearchableRecipe)[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedFood, setSelectedFood] = useState<(FoodItem | SearchableRecipe) | null>(null);
    const [quantity, setQuantity] = useState<number | ''>(100);
    const [showManualForm, setShowManualForm] = useState(false);
    const [selectedItems, setSelectedItems] = useState<FoodListItem[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [manualEntry, setManualEntry] = useState<FoodFormData>({
        name: '',
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        unit: FoodUnit.GRAM,
        category: 'autre',
    });

    const { addManualFood } = useFoodManagement();

    const handleSearch = useCallback(async (query: string) => {
        setSearch(query);
        if (query.trim() === '') {
            setSearchResults([]);
            return;
        }
        
        setIsSearching(true);
        try {
            const results = await searchFood(query, false);
            setSearchResults(results);
        } catch (error) {
            console.error('Erreur lors de la recherche:', error);
            toast.error('Erreur lors de la recherche des aliments');
            setSearchResults([]);
        } finally {
            setIsSearching(false);
        }
    }, []);

    const handleAddToList = () => {
        if (!selectedFood || quantity === '' || Number(quantity) < 1) return;
        setSelectedItems(prev => [...prev, { food: selectedFood, quantity: Number(quantity) }]);
        setSelectedFood(null);
        setQuantity(100);
        setSearch('');
        setSearchResults([]);
    };

    const handleRemoveItem = (index: number) => {
        setSelectedItems(prev => prev.filter((_, i) => i !== index));
    };

    const handleManualEntryChange = useCallback((field: keyof FoodFormData, value: string | number) => {
        setManualEntry(prev => ({
            ...prev,
            [field]: value
        }));
    }, []);

    const handleManualSubmit = useCallback(async () => {
        if (!meal) return;
        
        try {
            // Vérifier que le nom n'est pas vide
            if (!manualEntry.name.trim()) {
                toast.error('Veuillez saisir un nom pour l\'aliment');
                return;
            }

            // Créer l'objet FoodItem compatible avec le type attendu
            const foodItem: FoodItem = {
                foodId: `manual-${Date.now()}`,
                label: manualEntry.name.trim(),
                nutrients: {
                    calories: manualEntry.calories,
                    protein: manualEntry.protein,
                    carbs: manualEntry.carbs,
                    fat: manualEntry.fat
                },
                unit: manualEntry.unit,
                category: manualEntry.category
            };

            // Ajouter l'aliment à Firestore via le hook useFoodManagement
            await addManualFood({
                ...foodItem,
                createdAt: new Date(),
                updatedAt: new Date()
            });

            // Ajouter l'aliment à la liste des aliments sélectionnés
            setSelectedItems(prev => [...prev, { 
                food: foodItem, 
                quantity: 100 // Quantité par défaut
            }]);

            // Réinitialiser le formulaire
            setManualEntry({
                name: '',
                calories: 0,
                protein: 0,
                carbs: 0,
                fat: 0,
                unit: FoodUnit.GRAM,
                category: 'autre',
            });

            // Afficher un message de succès
            toast.success('Aliment ajouté avec succès !');
            
            // Revenir à la vue normale
            setShowManualForm(false);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'aliment:', error);
            toast.error('Erreur lors de l\'ajout de l\'aliment');
        }
    }, [manualEntry, meal, addManualFood]);

    const handleSubmitAll = async () => {
        if (selectedItems.length === 0 || !meal) return;
        
        setIsSubmitting(true);
        try {
            for (const item of selectedItems) {
                const foodData: FoodFormData = {
                    name: item.food.label,
                    calories: item.food.nutrients.calories,
                    protein: item.food.nutrients.protein,
                    carbs: item.food.nutrients.carbs,
                    fat: item.food.nutrients.fat,
                    unit: ('unit' in item.food ? item.food.unit : FoodUnit.GRAM) as FoodUnit,
                    category: ('category' in item.food ? item.food.category : 'autre') as FoodCategoryValue
                };

                await addMealEntry({
                    food: foodData,
                    quantity: item.quantity,
                    mealType: meal
                });
            }
            // Rediriger vers la page du journal après l'ajout
            navigate('/diary');
            toast.success('Aliments ajoutés au journal !');
        } catch (error) {
            console.error('Erreur lors de l\'ajout des aliments:', error);
            toast.error('Erreur lors de l\'ajout des aliments');
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

                        {isSearching ? (
                            <div className="flex justify-center py-4">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#4D9078]"></div>
                            </div>
                        ) : (
                            <SearchResults
                                results={searchResults}
                                selectedFood={selectedFood}
                                onFoodSelect={setSelectedFood}
                                quantity={quantity}
                                onQuantityChange={setQuantity}
                                onAdd={handleAddToList}
                            />
                        )}

                        <FoodList
                            items={selectedItems}
                            onRemoveItem={handleRemoveItem}
                        />

                        <div className="flex gap-4 mt-6">
                            <ActionButton
                                onClick={() => setShowManualForm(true)}
                                label="Créer un aliment"
                                icon={IoAddOutline}
                                variant="secondary"
                                fullWidth
                                className="cursor-pointer"
                            />
                            {selectedItems.length > 0 && (
                                <ActionButton
                                    onClick={handleSubmitAll}
                                    label={isSubmitting ? "Ajout en cours..." : "Ajouter"}
                                    fullWidth
                                    className="bg-[#4D9078] hover:bg-[#3D7A68] cursor-pointer disabled:opacity-50"
                                    disabled={isSubmitting}
                                />
                            )}
                        </div>
                    </>
                )}

                {showManualForm && (
                    <ManualFoodForm
                        manualEntry={manualEntry}
                        onManualEntryChange={handleManualEntryChange}
                        onSubmit={handleManualSubmit}
                        onCancel={() => {
                            setShowManualForm(false);
                            // Réinitialiser le formulaire si on annule
                            setManualEntry({
                                name: '',
                                calories: 0,
                                protein: 0,
                                carbs: 0,
                                fat: 0,
                                unit: FoodUnit.GRAM,
                                category: 'autre',
                            });
                        }}
                        submitLabel="Ajouter l'aliment"
                    />
                )}
            </div>
        </div>
    );
};

export default AddFood; 