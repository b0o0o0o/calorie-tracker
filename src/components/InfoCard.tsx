import React from 'react';

interface InfoCardProps {
    label: string;
    value: string | number;
    unit?: string;
    className?: string;
}

export default function InfoCard({ label, value, unit = '', className = '' }: InfoCardProps) {
    return (
        <div className={`bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 ${className}`}>
            <p className="text-gray-900 text-sm">{label}</p>
            <p className="text-gray-600 font-medium text-xs">
                {value}{unit}
            </p>
        </div>
    );
} 