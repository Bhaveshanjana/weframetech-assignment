"use client";

import { ResponsiveContainer, RadialBar, RadialBarChart } from "recharts";

type Props = {
  value: number; // 0-100
};

export default function CircularProgress({ value }: Props) {
  const data = [{ name: "Progress", value: Math.max(0, Math.min(100, value)) }];
  return (
    <div className="h-44 w-44">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          barSize={14}
          data={data}
          startAngle={90}
          endAngle={-200}
        >
          <RadialBar
            dataKey="value"
            cornerRadius={14}
            fill="#0EA5E9"
            background
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-semibold text-slate-800">{value}%</div>
        </div>
      </div>
    </div>
  );
}
