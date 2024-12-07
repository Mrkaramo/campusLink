"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddTeacherModal } from "./add-teacher-modal";

export function TeachersHeader() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Professeurs</h1>
        <p className="text-sm text-gray-500 mt-1">
          Gérez les informations des professeurs et leurs attributions
        </p>
      </div>
      <Button 
        onClick={() => setShowAddModal(true)} 
        className="gap-2 bg-violet-600 hover:bg-violet-700"
      >
        <Plus className="h-4 w-4" />
        Ajouter un professeur
      </Button>
      <AddTeacherModal open={showAddModal} onClose={() => setShowAddModal(false)} />
    </div>
  );
}