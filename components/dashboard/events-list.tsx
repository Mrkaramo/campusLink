"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CalendarDays, Users, Palette } from "lucide-react";

const events = [
  {
    title: "Foire aux Livres",
    time: "08:00 - 10:00",
    description: "Parcourez et achetez des livres lors de notre foire annuelle",
    icon: CalendarDays,
    color: "text-blue-500",
  },
  {
    title: "Journée Sportive",
    time: "16:00 - 12:00",
    description: "Une journée remplie d'événements sportifs et de compétitions d'équipe",
    icon: Users,
    color: "text-green-500",
  },
  {
    title: "Exposition d'Art",
    time: "12:00 - 16:00",
    description: "Exposez vos œuvres d'art pour que la communauté scolaire puisse les admirer",
    icon: Palette,
    color: "text-purple-500",
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

export function EventsList() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Événements</h2>
        <button className="text-sm text-muted-foreground hover:text-primary">
          Voir tout
        </button>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {events.map((event) => {
          const Icon = event.icon;
          return (
            <motion.div
              key={event.title}
              variants={item}
              className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50/50"
            >
              <div className={`${event.color} p-2 rounded-full bg-white`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.time}</p>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                  {event.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Card>
  );
}