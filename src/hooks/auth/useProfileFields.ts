// src/hooks/useProfileFields.ts
import type { Dispatch, SetStateAction } from 'react';
import { GoalType, Sex, ActivityLevel } from '../../types/common';

export type InputField = {
    id: string;
    label: string;
    type: 'number';
    value: number | string;
    placeholder: string;
    onChange: (val: string) => void;
};

export type SelectField = {
    id: string;
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (val: string) => void;
};

export function useProfileFields(
    weight: number,    setWeight: Dispatch<SetStateAction<number>>,
    height: number,    setHeight: Dispatch<SetStateAction<number>>,
    age: number,       setAge: Dispatch<SetStateAction<number>>,
    sex: Sex,          setSex: Dispatch<SetStateAction<Sex>>,
    activity: ActivityLevel, setActivity: Dispatch<SetStateAction<ActivityLevel>>,
    goal: GoalType,    setGoal: Dispatch<SetStateAction<GoalType>>): { inputFields: InputField[]; selectFields: SelectField[] } {
    const inputFields: InputField[] = [
        {
            id: 'weight', label: 'Poids (kg)', type: 'number',
            value: weight, placeholder: 'Ex. 70',
            onChange: v => setWeight(parseFloat(v) || 0),
        },
        {
            id: 'height', label: 'Taille (cm)', type: 'number',
            value: height, placeholder: 'Ex. 175',
            onChange: v => setHeight(parseFloat(v) || 0),
        },
        {
            id: 'age', label: 'Âge (ans)', type: 'number',
            value: age, placeholder: 'Ex. 30',
            onChange: v => setAge(parseInt(v, 10) || 0),
        },
    ];

    const selectFields: SelectField[] = [
        {
            id: 'sex', label: 'Sexe', value: String(sex),
            options: [
                { value: String(Sex.MALE),   label: 'Homme' },
                { value: String(Sex.FEMALE), label: 'Femme' },
            ],
            onChange: v => setSex(v as Sex),
        },
        {
            id: 'activity', label: "Niveau d'activité", value: String(activity),
            options: [
                { value: String(ActivityLevel.SEDENTARY),      label: 'Sédentaire' },
                { value: String(ActivityLevel.LIGHTLY_ACTIVE), label: 'Légèrement actif' },
                { value: String(ActivityLevel.MODERATELY_ACTIVE), label: 'Modérément actif' },
                { value: String(ActivityLevel.VERY_ACTIVE),    label: 'Très actif' },
                { value: String(ActivityLevel.EXTREMELY_ACTIVE), label: 'Extrêmement actif' },
            ],
            onChange: v => setActivity(v as unknown as ActivityLevel),
        },
        {
            id: 'goal', label: 'Objectif', value: String(goal),
            options: [
                { value: String(GoalType.LOSS),     label: 'Perte de poids' },
                { value: String(GoalType.MAINTAIN), label: 'Maintien' },
                { value: String(GoalType.GAIN),     label: 'Prise de masse' },
            ],
            onChange: v => setGoal(v as GoalType),
        },
    ];

    return { inputFields, selectFields };
}
