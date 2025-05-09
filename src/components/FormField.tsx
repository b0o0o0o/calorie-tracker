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
    bg-gray-700 border border-gray-600
    rounded-lg text-white placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-yellow-400
    transition
  `;

    return (
        <div>
            <label htmlFor={id} className="block mb-2 font-medium text-gray-200">
                {label}
            </label>

            {options ? (
                <select
                    id={id}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    required
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
                    required
                    className={baseClasses}
                />
            )}
        </div>
    );
}
