"use client";

import { ParentsList } from "@/components/parents/parents-list";
import { ParentsHeader } from "@/components/parents/parents-header";

export default function ParentsPage() {
  return (
    <div className="p-8 space-y-8">
      <ParentsHeader />
      <ParentsList />
    </div>
  );
} 