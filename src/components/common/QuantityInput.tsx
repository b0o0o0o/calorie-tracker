import React from 'react';
import ActionButton from './ActionButton';

interface QuantityInputProps {
    label: string;
    value: number;
    unit: string;
    onChange: (value: number) => void;
    onAdd?: () => void;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
    addButtonLabel?: string;
    showAddButton?: boolean;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
    label,
    value,
    unit,
    onChange,
    onAdd,
    min = 1,
    max,
    step = 1,
    className = '',
    addButtonLabel = 'Ajouter',
    showAddButton = true
}) => {
    return (
        <div className={`flex items-center justify-center gap-4 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm ${className}`}>
            <span className="font-medium text-gray-700 whitespace-nowrap">{label}</span>
            <input
                type="number"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={e => onChange(Number(e.target.value))}
                className="w-20 px-2 py-1 border border-gray-300 rounded-lg text-center focus:ring-[#4D9078] focus:border-[#4D9078] mx-2"
            />
            <span className="text-gray-500 whitespace-nowrap">{unit}</span>
            {showAddButton && onAdd && (
                <ActionButton 
                    onClick={onAdd} 
                    label={addButtonLabel}
                    variant="primary"
                />
            )}
        </div>
    );
};

export default QuantityInput; 