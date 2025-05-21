import React from 'react';

interface QuantityInputProps {
    value: number;
    onChange: (value: number) => void;
    label: string;
    unit?: string;
    min?: number;
    step?: number;
    defaultValue?: number;
    additionalInfo?: React.ReactNode;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
    value,
    onChange,
    label,
    unit,
    min = 1,
    step = 1,
    defaultValue,
    additionalInfo
}) => {
    return (
        <div className="mb-4">
            <label className="block text-sm mb-2 text-gray-300">
                {label}
            </label>
            <input
                type="number"
                value={value}
                onChange={e => onChange(Number(e.target.value))}
                onFocus={e => {
                    if (defaultValue && e.target.value === defaultValue.toString()) {
                        e.target.value = '';
                    }
                }}
                min={min}
                step={step}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
            />
            {additionalInfo}
        </div>
    );
};

export default QuantityInput; 