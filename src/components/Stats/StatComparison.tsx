import React from 'react';

interface StatComparisonProps {
  label: string;
  value: number;
  goal: number;
  unit?: string;
}

export const StatComparison: React.FC<StatComparisonProps> = ({ label, value, goal, unit }) => {
  const diff = value - goal;
  const color = diff >= 0 ? 'text-green-600' : 'text-red-600';
  return (
    <div className="flex flex-col items-start mb-2">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-xl font-bold text-gray-900">
        {value} {unit}
        <span className={`ml-2 text-sm ${color}`}>
          ({diff >= 0 ? '+' : ''}{diff} {unit})
        </span>
      </span>
      <span className="text-xs text-gray-400">Objectif : {goal} {unit}</span>
    </div>
  );
}; 