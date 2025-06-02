// src/pages/AddFood.tsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDate } from '../contexts/DateContext';
import type { MealType } from '../config/theme';
import MealSelector from '../components/AddFood/MealSelector';
import AddFoodComponent from '../components/AddFood/AddFood';

const AddFood = () => {
    const [params] = useSearchParams();
    let mealType = params.get('meal') as MealType | null;
    let dateParam = params.get('date');
    const [selectedMeal, setSelectedMeal] = useState<MealType | null>(mealType);
    const { selectedDate, setSelectedDate } = useDate();

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

    return <AddFoodComponent />;
};

export default AddFood;
