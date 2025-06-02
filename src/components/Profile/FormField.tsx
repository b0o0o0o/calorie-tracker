import React from 'react';
import Input from '../common/Input';

interface FormFieldProps {
    id: string;
    label: string;
    type?: React.HTMLInputTypeAttribute;
    value: string | number;
    placeholder?: string;
    options?: { value: string; label: string }[];  // pour <select>
    onChange: (value: string) => void;
    min?: number;
    max?: number;
    step?: number;
}

export default function FormField({
    id,
    label,
    type = 'text',
    value,
    placeholder,
    options,
    onChange,
    min,
    max,
    step,
}: FormFieldProps) {
    // Convertit la valeur en string pour l'affichage
    const displayValue = value === 0 ? '' : String(value);
    
    const handleChange = (newValue: string) => {
        if (type === 'number') {
            // Si le champ est vide, on envoie une chaîne vide
            if (newValue === '') {
                onChange('');
                return;
            }
            // Sinon on convertit en nombre et on vérifie les limites
            const numValue = Number(newValue);
            if (!isNaN(numValue)) {
                if (min !== undefined && numValue < min) {
                    onChange(String(min));
                    return;
                }
                if (max !== undefined && numValue > max) {
                    onChange(String(max));
                    return;
                }
                onChange(newValue); // On garde la valeur en string pour garder la précision
            }
        } else {
            onChange(newValue);
        }
    };

    return (
        <Input
            id={id}
            label={label}
            type={type}
            value={displayValue}
            placeholder={placeholder}
            options={options}
            onChange={handleChange}
            required={true}
            min={min}
            max={max}
            step={step}
        />
    );
}
