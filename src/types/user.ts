import type { User as FirebaseUser } from 'firebase/auth';

export interface User {
    weight: number;
    height: number;
    age: number;
    sex: 'male' | 'female';
    activity: number;
    goal: 'loss' | 'maintain' | 'gain';
    tdee: number;
    caloricGoal: number;
    targetWeight: number;
    proteinGoal: number;
    fatGoal: number;
    carbGoal: number;
    waterGoal: number;
    waterPreferences?: {
        customGoal?: number;
        useCustomGoal: boolean;
    };
    email: string;
    updatedAt: Date;
    lastProfileUpdate: Date;
} 