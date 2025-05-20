// src/components/ProfileForm.tsx
import React from 'react';
import FormField from './FormField';
import type { InputField, SelectField } from '../hooks/useProfileFields';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

interface ProfileFormProps {
    inputFields: InputField[];
    selectFields: SelectField[];
    error: string | null;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    submitLabel?: string;
}

export default function ProfileForm({
                                        inputFields,
                                        selectFields,
                                        error,
                                        onSubmit,
                                        submitLabel = 'Generate',
                                    }: ProfileFormProps) {
    // Extraction des champs pour un placement précis
    const ageField = inputFields.find(f => f.id === 'age');
    const heightField = inputFields.find(f => f.id === 'height');
    const weightField = inputFields.find(f => f.id === 'weight');
    const waistField = inputFields.find(f => f.id === 'waist');
    const sexField = selectFields.find(f => f.id === 'sex');
    const activityField = selectFields.find(f => f.id === 'activity');
    const goalField = selectFields.find(f => f.id === 'goal');

    return (
        <form
            onSubmit={onSubmit}
            className="bg-white rounded-2xl shadow-xl px-8 py-10 max-w-lg w-full mx-auto flex flex-col gap-6"
        >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Informations</h2>
            <div className="border-b border-gray-200 mb-4" />
            {error && <p className="mb-4 text-red-500 text-center">{error}</p>}

            {/* Sexe en haut, boutons radio stylés */}
            {sexField && (
                <div className="flex justify-center gap-6 mb-2">
                    {sexField.options.map(opt => (
                        <label key={opt.value} className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer border transition-colors
                            ${sexField.value === opt.value ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-100 text-gray-900 border-gray-300 hover:border-gray-400'}`}
                        >
                            <input
                                type="radio"
                                name="sex"
                                value={opt.value}
                                checked={sexField.value === opt.value}
                                onChange={() => sexField.onChange(opt.value)}
                                className="hidden"
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            )}

            {/* Age et taille sur deux colonnes (toujours deux colonnes, même sur mobile) */}
            <div className="grid grid-cols-2 gap-4">
                {ageField && <FormField {...ageField} />}
                {heightField && <FormField {...heightField} />}
            </div>

            {/* Poids et tour de taille sur deux colonnes (toujours deux colonnes, même sur mobile) */}
            <div className="grid grid-cols-2 gap-4">
                {weightField && <FormField {...weightField} />}
                {waistField && <FormField {...waistField} />}
            </div>

            {/* Niveau d'activité */}
            {activityField && (
                <div>
                    <FormField {...activityField} />
                </div>
            )}

            {/* Objectif */}
            {goalField && (
                <div>
                    <FormField {...goalField} />
                </div>
            )}

            <div className="mt-2 text-xs text-gray-500 text-center">
                Veuillez être réaliste avec vos objectifs. Une perte de poids saine est de 0,5 kg par semaine.
            </div>

            <button
                type="submit"
                className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-lg shadow"
            >
                Generate
                <Cog6ToothIcon className="w-6 h-6 ml-1" />
            </button>
        </form>
    );
}
