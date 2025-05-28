import Card from './common/Card';

interface InfoCardProps {
    label: string;
    value: string | number;
    unit?: string;
    className?: string;
}

export default function InfoCard({ label, value, unit = '', className = '' }: InfoCardProps) {
    return (
        <Card variant="info" className={`px-4 py-2 ${className}`}>
            <p className="text-gray-900 text-sm">{label}</p>
            <p className="text-gray-600 font-medium text-xs">
                {value}{unit}
            </p>
        </Card>
    );
} 