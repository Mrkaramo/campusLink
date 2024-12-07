"use client";

import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export function CalendarSection() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Calendar</h2>
        <div className="text-sm text-muted-foreground">September 2024</div>
      </div>
      <Calendar 
        mode="single"
        selected={new Date()}
        className="rounded-md border shadow-sm"
      />
    </Card>
  );
}