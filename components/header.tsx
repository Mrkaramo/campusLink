"use client";

import { Search, Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <div className="h-14 px-6 border-b bg-white flex items-center justify-between">
      <div className="flex-1 flex items-center">
        <div className="relative w-72">
          <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-8 pr-3 py-1.5 text-sm bg-gray-50/80 border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button className="p-1.5 hover:bg-gray-50 rounded-md transition-colors">
            <ChevronLeft className="h-4 w-4 text-gray-500" />
          </button>
          <button className="p-1.5 hover:bg-gray-50 rounded-md transition-colors">
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        <button className="relative p-1.5 hover:bg-gray-50 rounded-md transition-colors">
          <Bell className="h-4 w-4 text-gray-500" />
          <span className="absolute top-1 right-1 h-1.5 w-1.5 bg-violet-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2 pl-2">
          <Avatar className="h-7 w-7">
            <AvatarImage src="/avatar-placeholder.png" alt="Karamo Sylla" />
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-none">Karamo Sylla</span>
            <span className="text-xs text-gray-500 leading-none mt-0.5">administrateur</span>
          </div>
        </div>
      </div>
    </div>
  );
}