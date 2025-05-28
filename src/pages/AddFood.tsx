// src/pages/AddFood.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDate } from '../contexts/DateContext';
import type { MealType } from '../config/theme';
import type { FoodFormData } from '../types/food';
import type { FoodCategoryValue } from '../types/food';
import { FoodUnit } from '../types/common';
import { FOOD_CATEGORIES } from '../config/constants';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import MealSelector from '../components/AddFood/MealSelector';

const AddFood = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    let mealType = params.get('meal') as MealType | null;
    let dateParam = params.get('date');
    const [selectedMeal, setSelectedMeal] = useState<MealType | null>(mealType);
    const { selectedDate, setSelectedDate } = useDate();

    const [formData, setFormData] = useState<FoodFormData>({
        name: '',
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        unit: FoodUnit.GRAM,
        category: 'autre'
    });

    const handleInputChange = (field: keyof FoodFormData, value: string | number) => {
        setFormData(prev => ({
            ...prev,
            [field]: field === 'name' || field === 'category' || field === 'unit' ? value : Number(value)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'foods'), {
                ...formData,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            navigate('/foods');
        } catch (error) {
            console.error('Error adding food:', error);
        }
    };

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
            />
        );
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={value => handleInputChange('name', value)}
                        label="Nom de l'aliment"
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Input
                            id="calories"
                            type="number"
                            value={formData.calories}
                            onChange={value => handleInputChange('calories', value)}
                            label="Calories"
                            min={0}
                            required
                        />
                    </div>
                    <div>
                        <Input
                            id="protein"
                            type="number"
                            value={formData.protein}
                            onChange={value => handleInputChange('protein', value)}
                            label="Protéines (g)"
                            min={0}
                            required
                        />
                    </div>
                    <div>
                        <Input
                            id="carbs"
                            type="number"
                            value={formData.carbs}
                            onChange={value => handleInputChange('carbs', value)}
                            label="Glucides (g)"
                            min={0}
                            required
                        />
                    </div>
                    <div>
                        <Input
                            id="fat"
                            type="number"
                            value={formData.fat}
                            onChange={value => handleInputChange('fat', value)}
                            label="Lipides (g)"
                            min={0}
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Input
                            id="unit"
                            value={formData.unit}
                            onChange={value => handleInputChange('unit', value as FoodUnit)}
                            options={[
                                { value: FoodUnit.GRAM, label: 'g' },
                                { value: FoodUnit.MILLILITER, label: 'ml' }
                            ]}
                            label="Unité"
                            required
                        />
                    </div>
                    <div>
                        <Input
                            id="category"
                            value={formData.category}
                            onChange={value => handleInputChange('category', value as FoodCategoryValue)}
                            options={FOOD_CATEGORIES}
                            label="Catégorie"
                            required
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    <Button type="submit" variant="primary" fullWidth>
                        Ajouter l'aliment
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() => navigate('/foods')}
                        fullWidth
                    >
                        Annuler
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;
