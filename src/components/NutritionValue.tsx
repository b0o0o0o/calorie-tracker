
interface NutritionValueProps {
    label: string;
    value: number;
    unit: string;
    color?: string;
    previousValue?: number;
    showDiff?: boolean;
}

export default function NutritionValue({ 
    label, 
    value, 
    unit, 
    color = 'text-gray-600',
    previousValue,
    showDiff = false 
}: NutritionValueProps) {
    const hasChanged = showDiff && previousValue !== undefined && previousValue !== value;
    const diff = hasChanged ? value - previousValue : 0;

    return (
        <div>
            <span className="text-gray-600">{label} :</span>
            <span className={`ml-2 ${hasChanged ? color + ' font-medium' : ''}`}>
                {value}{unit}
                {hasChanged && (
                    <span className="text-xs text-gray-500 ml-1">
                        ({diff > 0 ? '+' : ''}{diff})
                    </span>
                )}
            </span>
        </div>
    );
} 