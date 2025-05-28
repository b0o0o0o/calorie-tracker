import React from 'react';
import Input from './common/Input';

interface FormFieldProps {
    id: string;
    label: string;
    type?: React.HTMLInputTypeAttribute;
    value: string | number;
    placeholder?: string;
    options?: { value: string; label: string }[];  // pour <select>
    onChange: (value: string) => void;
}

export default function FormField({
    id,
    label,
    type = 'text',
    value,
    placeholder,
    options,
    onChange,
}: FormFieldProps) {
    return (
        <Input
            id={id}
            label={label}
            type={type}
            value={value}
            placeholder={placeholder}
            options={options}
            onChange={onChange}
            required={true}
        />
    );
}
