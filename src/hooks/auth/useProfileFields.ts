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
    value: string | number;
    options: { value: string | number; label: string }[];
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
            id: 'sex', label: 'Sexe', value: sex,
            options: [
                { value: Sex.MALE,   label: 'Homme' },
                { value: Sex.FEMALE, label: 'Femme' },
            ],
            onChange: v => setSex(v as Sex),
        },
        {
            id: 'activity', label: "Niveau d'activité", value: activity,
            options: [
                { value: ActivityLevel.SEDENTARY,      label: 'Sédentaire' },
                { value: ActivityLevel.LIGHTLY_ACTIVE, label: 'Légèrement actif' },
                { value: ActivityLevel.MODERATELY_ACTIVE, label: 'Modérément actif' },
                { value: ActivityLevel.VERY_ACTIVE,    label: 'Très actif' },
                { value: ActivityLevel.EXTREMELY_ACTIVE, label: 'Extrêmement actif' },
            ],
            onChange: v => setActivity(parseFloat(v) as ActivityLevel),
        },
        {
            id: 'goal', label: 'Objectif', value: goal,
            options: [
                { value: GoalType.LOSS,     label: 'Perte de poids' },
                { value: GoalType.MAINTAIN, label: 'Maintien' },
                { value: GoalType.GAIN,     label: 'Prise de masse' },
            ],
            onChange: v => setGoal(v as GoalType),
        },
    ];

    return { inputFields, selectFields };
}
