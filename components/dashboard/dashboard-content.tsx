"use client";

import { StatCards } from "@/components/dashboard/stat-cards";
import { MainSection } from "@/components/dashboard/main-section";
import { SideSection } from "@/components/dashboard/side-section";

export function DashboardContent() {
  return (
    <div className="p-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <StatCards />
            <MainSection />
          </div>
          <SideSection />
        </div>
      </div>
    </div>
  );
}