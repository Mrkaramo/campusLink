"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  GraduationCap,
  UserCog,
  BookOpen,
  School,
  PenTool,
  FileText,
  Award,
  Calendar,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  User,
  ChevronRight
} from "lucide-react";

const routes = [
  {
    label: "Accueil",
    icon: Home,
    href: "/",
  },
  {
    label: "Professeurs",
    icon: Users,
    href: "/teachers",
  },
  {
    label: "Étudiants",
    icon: GraduationCap,
    href: "/students",
  },
  {
    label: "Parents",
    icon: UserCog,
    href: "/parents",
  },
  {
    label: "Matières",
    icon: BookOpen,
    href: "/subjects",
  },
  {
    label: "Classes",
    icon: School,
    href: "/classes",
  },
  {
    label: "Leçons",
    icon: PenTool,
    href: "/lessons",
  },
  {
    label: "Examens",
    icon: FileText,
    href: "/exams",
  },
  {
    label: "Résultats",
    icon: Award,
    href: "/results",
  },
  {
    label: "Présence",
    icon: Calendar,
    href: "/attendance",
  },
  {
    label: "Événements",
    icon: Bell,
    href: "/events",
  },
  {
    label: "Messages",
    icon: MessageSquare,
    href: "/messages",
  },
  {
    label: "Annonces",
    icon: Bell,
    href: "/announcements",
  },
];

const otherRoutes = [
  {
    label: "Profil",
    icon: User,
    href: "/profile",
  },
  {
    label: "Paramètres",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "Déconnexion",
    icon: LogOut,
    href: "/logout",
    className: "text-red-500 hover:text-red-600 hover:bg-red-50",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-white border-r">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <School className="h-8 w-8 text-violet-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
            CampusLink
          </span>
        </Link>
      </div>
      <div className="flex-1 px-3 space-y-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
        <div>
          <p className="text-xs font-semibold text-gray-400 mb-4 px-4 tracking-wider">MENU</p>
          <nav className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "group flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === route.href
                    ? "text-violet-600 bg-violet-50"
                    : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
                )}
              >
                <route.icon className={cn("h-4 w-4 mr-3 transition-colors")} />
                {route.label}
                {pathname === route.href && (
                  <ChevronRight className="h-4 w-4 ml-auto text-violet-600" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 mb-4 px-4 tracking-wider">AUTRE</p>
          <nav className="space-y-1">
            {otherRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "group flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                  route.className,
                  pathname === route.href
                    ? "text-violet-600 bg-violet-50"
                    : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
                )}
              >
                <route.icon className={cn("h-4 w-4 mr-3 transition-colors")} />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}