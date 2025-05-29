import React from 'react';

interface InputProps {
    id: string;
    type?: React.HTMLInputTypeAttribute;
    value: string | number;
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
    required?: boolean;
    options?: readonly { readonly value: string; readonly label: string }[];
    className?: string;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
    step?: number;
}

const Input: React.FC<InputProps> = ({
    id,
    type = 'text',
    value,
    onChange,
    label,
    placeholder,
    required = false,
    options,
    className = '',
    onFocus,
    onBlur,
    min,
    max,
    step
}) => {
    const baseClasses = `
        w-full px-4 py-3
        bg-gray-100 border border-gray-300
        rounded-xl text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-[#4D9078]
        transition-all duration-200
        text-base
    `;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (type === 'number') {
            if (newValue === '') {
                onChange('');
                return;
            }
            const numValue = Number(newValue);
            if (numValue < 0) {
                onChange('0');
                return;
            }
        }
        onChange(newValue);
    };

    return (
        <div className={`mb-2 ${className}`}>
            {label && (
                <label htmlFor={id} className="block mb-2 text-base font-medium text-gray-700">
                    {label}
                </label>
            )}

            {options ? (
                <select
                    id={id}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    className={baseClasses}
                    required={required}
                >
                    {options.map(opt => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    className={baseClasses}
                    required={required}
                    min={min}
                    max={max}
                    step={step}
                />
            )}
        </div>
    );
};

export default Input; 