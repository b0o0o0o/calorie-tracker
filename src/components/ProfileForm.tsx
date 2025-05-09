// src/components/ProfileForm.tsx
import React from 'react';
import FormField from './FormField';
import type { InputField, SelectField } from '../hooks/useProfileFields';

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
                                        submitLabel = 'Enregistrer',
                                    }: ProfileFormProps) {
    return (
        <form onSubmit={onSubmit} className="space-y-6">
            {error && <p className="mb-4 text-red-500 text-center">{error}</p>}

            {inputFields.map(f => (
                <FormField
                    key={f.id}
                    id={f.id}
                    label={f.label}
                    type={f.type}
                    value={f.value}
                    placeholder={f.placeholder}
                    onChange={f.onChange}
                />
            ))}

            {selectFields.map(f => (
                <FormField
                    key={f.id}
                    id={f.id}
                    label={f.label}
                    value={f.value}
                    options={f.options}
                    onChange={f.onChange}
                />
            ))}

            <button
                type="submit"
                className="
          w-full py-3
          bg-yellow-400 text-gray-900 font-semibold
          rounded-lg hover:bg-yellow-500
          transition-colors
        "
            >
                {submitLabel}
            </button>
        </form>
    );
}
