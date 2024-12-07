"use client";

import { StudentsChart } from "./charts/students-chart";
import { AttendanceChart } from "./charts/attendance-chart";
import { FinanceChart } from "./charts/finance-chart";

export function MainSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StudentsChart />
        <AttendanceChart />
      </div>
      <FinanceChart />
    </div>
  );
}