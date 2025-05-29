import React from 'react';
import Card from '../common/Card';

interface InfoCardProps {
    label: string;
    value: string | number;
    unit?: string;
    className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value, unit = '', className = '' }) => {
    return (
        <Card variant="info" className={`px-4 py-2 ${className}`}>
            <div className="text-sm text-gray-500">{label}</div>
            <div className="text-lg font-semibold text-gray-900">{value}{unit}</div>
        </Card>
    );
};

export default InfoCard; 