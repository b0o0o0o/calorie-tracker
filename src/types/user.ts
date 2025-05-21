import type { User as FirebaseUser } from 'firebase/auth';

export interface User extends FirebaseUser {
    caloricGoal?: number;
    weight?: number;
    height?: number;
    age?: number;
    sex?: 'male' | 'female';
    activity?: number;
    goal?: 'lose' | 'maintain' | 'gain';
    waist?: number | null;
} 