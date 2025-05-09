// src/hooks/useUserProfileState.ts
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { GoalType } from '../utils/nutrition';

export function useUserProfileState(initialLoading = false) {
    const user = useAuth();
    const navigate = useNavigate();
    const [weight, setWeight]     = useState<number>(0);
    const [height, setHeight]     = useState<number>(0);
    const [age, setAge]           = useState<number>(0);
    const [sex, setSex]           = useState<'male' | 'female'>('male');
    const [activity, setActivity] = useState<number>(1.2);
    const [goal, setGoal]         = useState<GoalType>('maintain');
    const [error, setError]       = useState<string | null>(null);
    const [loading, setLoading]   = useState<boolean>(initialLoading);

    return {
        user,
        navigate,
        weight, setWeight,
        height, setHeight,
        age, setAge,
        sex, setSex,
        activity, setActivity,
        goal, setGoal,
        error, setError,
        loading, setLoading,
    };
}
