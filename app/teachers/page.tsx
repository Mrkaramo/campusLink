"use client";

import { TeachersList } from "@/components/teachers/teachers-list";
import { TeachersHeader } from "@/components/teachers/teachers-header";

export default function TeachersPage() {
  return (
    <div className="p-8 space-y-8">
      <TeachersHeader />
      <TeachersList />
    </div>
  );
}