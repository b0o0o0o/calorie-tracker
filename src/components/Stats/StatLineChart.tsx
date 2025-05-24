import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';

interface StatLineChartProps {
  data: Array<{ [key: string]: number | string; date: string }>;
  dataKey: string;
  label: string;
  color: string;
  goal?: number;
  unit?: string;
}

export const StatLineChart: React.FC<StatLineChartProps> = ({ data, dataKey, label, color, goal, unit }) => {
  return (
    <div className="mb-8">
      <h3 className="font-semibold mb-2">{label}</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(v: number) => `${v}${unit ? ' ' + unit : ''}`} />
          <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
          {goal && (
            <ReferenceLine y={goal} label="Objectif" stroke="#B4436C" strokeDasharray="4 4" />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}; 