"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";

const announcements = [
  {
    title: "Rappel Photo de Classe",
    description: "N'oubliez pas votre plus beau sourire demain pour les photos annuelles !",
    priority: "normal",
  },
  {
    title: "Réunion Parents-Professeurs",
    description: "Planifiez votre rendez-vous avec les professeurs pour la réunion de la semaine prochaine.",
    priority: "urgent",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export function Announcements() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Annonces</h2>
        <Bell className="h-5 w-5 text-muted-foreground" />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {announcements.map((announcement) => (
          <motion.div
            key={announcement.title}
            variants={item}
            className={`p-4 rounded-lg border-l-4 ${
              announcement.priority === "urgent"
                ? "border-amber-500 bg-amber-50/50"
                : "border-blue-500 bg-blue-50/50"
            }`}
          >
            <h3 className="font-medium text-sm">{announcement.title}</h3>
            <p className="mt-1 text-sm text-gray-600">
              {announcement.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
}