"use client";

import { motion } from "framer-motion";
import { StatCard } from "@/components/stat-card";
import { Users, UserCog, GraduationCap, ShieldCheck } from "lucide-react";

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

const stats = [
  {
    title: "Administrateurs",
    value: "2",
    icon: ShieldCheck,
    color: "bg-violet-50",
    iconColor: "text-violet-600"
  },
  {
    title: "Professeurs",
    value: "24",
    icon: Users,
    color: "bg-amber-50",
    iconColor: "text-amber-500"
  },
  {
    title: "Étudiants",
    value: "460",
    icon: GraduationCap,
    color: "bg-violet-50",
    iconColor: "text-violet-600"
  },
  {
    title: "Parents",
    value: "382",
    icon: UserCog,
    color: "bg-amber-50",
    iconColor: "text-amber-500"
  }
];

export function StatCards() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6"
    >
      {stats.map((stat, index) => (
        <motion.div key={stat.title} variants={item}>
          <StatCard
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            className={`${stat.color} hover:shadow-lg transition-shadow duration-200 transform hover:-translate-y-1`}
            iconClassName={stat.iconColor}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}