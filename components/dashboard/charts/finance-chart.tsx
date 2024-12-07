"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const financeData = [
  { month: "Jan", revenue: 2500, expenses: 2000 },
  { month: "Fév", revenue: 3500, expenses: 2200 },
  { month: "Mar", revenue: 3000, expenses: 2400 },
  { month: "Avr", revenue: 4000, expenses: 2800 },
  { month: "Mai", revenue: 4200, expenses: 3000 },
];

export function FinanceChart() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Finances</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-sky-400" />
            <span className="text-sm text-gray-600">Revenus</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="text-sm text-gray-600">Dépenses</span>
          </div>
        </div>
      </div>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={financeData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tickFormatter={(value) => `${value} MAD`}
            />
            <Tooltip
              contentStyle={{ 
                background: 'white',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              formatter={(value) => [`${value} MAD`, '']}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#38BDF8"
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="expenses" 
              stroke="#34D399"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}