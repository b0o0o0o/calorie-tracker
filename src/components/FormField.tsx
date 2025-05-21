import React from 'react';

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
    const baseClasses = `
    w-full px-4 py-3
    bg-gray-100 border border-gray-300
    rounded-xl text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-gray-900
    transition-all duration-200
    text-base
  `;

    return (
        <div className="mb-2">
            <label htmlFor={id} className="block mb-2 text-base font-medium text-gray-700">
                {label}
            </label>

            {options ? (
                <select
                    id={id}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    className={baseClasses}
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
                    onChange={e => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={baseClasses}
                    onFocus={e => { if (type === 'number' && e.target.value === '0') e.target.value = ''; }}
                    required={true}
                />
            )}
        </div>
    );
}
