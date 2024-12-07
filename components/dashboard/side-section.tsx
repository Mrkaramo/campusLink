"use client";

import { CalendarSection } from "./calendar-section";
import { EventsList } from "./events-list";
import { Announcements } from "./announcements";

export function SideSection() {
  return (
    <div className="lg:col-span-4">
      <CalendarSection />
      <div className="space-y-6 mt-6">
        <EventsList />
        <Announcements />
      </div>
    </div>
  );
}