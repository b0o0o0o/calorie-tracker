import type { NutritionGoals, WaterPreferences } from './common';
import { GoalType, ActivityLevel, Sex } from './common';

export interface User extends NutritionGoals {
    weight: number;
    height: number;
    age: number;
    sex: Sex;
    activity: ActivityLevel;
    goal: GoalType;
    tdee: number;
    targetWeight: number;
    waterPreferences?: WaterPreferences;
    email: string;
    updatedAt: Date;
    lastProfileUpdate: Date;
} 