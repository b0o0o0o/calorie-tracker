// src/hooks/useProfileFields.ts
import type { Dispatch, SetStateAction } from 'react';
import type { GoalType } from '../utils/nutrition';

export type InputField = {
    id: string;
    label: string;
    type: 'number';
    value: number;
    placeholder: string;
    onChange: (val: string) => void;
};

export type SelectField = {
    id: string;
    label: string;
    value: string | number;
    options: { value: string; label: string }[];
    onChange: (val: string) => void;
};

export function useProfileFields(
    weight: number,    setWeight: Dispatch<SetStateAction<number>>,
    height: number,    setHeight: Dispatch<SetStateAction<number>>,
    age: number,       setAge: Dispatch<SetStateAction<number>>,
    sex: 'male'|'female', setSex: Dispatch<SetStateAction<'male'|'female'>>,
    activity: number,  setActivity: Dispatch<SetStateAction<number>>,
    goal: GoalType,    setGoal: Dispatch<SetStateAction<GoalType>>
): { inputFields: InputField[]; selectFields: SelectField[] } {
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
                { value: 'male',   label: 'Homme' },
                { value: 'female', label: 'Femme' },
            ],
            onChange: v => setSex(v as 'male'|'female'),
        },
        {
            id: 'activity', label: 'Niveau d’activité', value: activity,
            options: [
                { value: '1.2',   label: 'Sédentaire' },
                { value: '1.375', label: 'Légèrement actif' },
                { value: '1.55',  label: 'Modérément actif' },
                { value: '1.725', label: 'Très actif' },
                { value: '1.9',   label: 'Extrêmement actif' },
            ],
            onChange: v => setActivity(parseFloat(v) || 1.2),
        },
        {
            id: 'goal', label: 'Objectif', value: goal,
            options: [
                { value: 'loss',     label: 'Perte de poids' },
                { value: 'maintain', label: 'Maintien' },
                { value: 'gain',     label: 'Prise de masse' },
            ],
            onChange: v => setGoal(v as GoalType),
        },
    ];

    return { inputFields, selectFields };
}
