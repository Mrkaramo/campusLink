"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, Filter, Edit2, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const parents = [
  {
    id: "P102938",
    name: "Jean Dupont",
    email: "jean@example.com",
    children: "Marie Dupont, Thomas Dupont",
    phone: "737-234-563",
    address: "23 Rue des Lilas, Paris",
    profession: "Ingénieur"
  },
  {
    id: "P293847",
    name: "Sophie Martin",
    email: "sophie@example.com",
    children: "Lucas Martin",
    phone: "644-224-667",
    address: "45 Avenue des Roses, Lyon",
    profession: "Médecin"
  },
  {
    id: "P817364",
    name: "Pierre Dubois",
    email: "pierre@example.com",
    children: "Emma Dubois, Hugo Dubois",
    phone: "433-567-333",
    address: "12 Boulevard des Champs, Marseille",
    profession: "Avocat"
  },
  {
    id: "P456789",
    name: "Marie Lambert",
    email: "marie@example.com",
    children: "Julie Lambert",
    phone: "255-745-245",
    address: "78 Rue du Commerce, Bordeaux",
    profession: "Architecte"
  },
];

export function ParentsList() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher un parent..."
                className="pl-9 bg-white border-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="shrink-0 border-gray-200">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="shrink-0 border-gray-200">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="min-w-full">
        <div className="grid grid-cols-[280px_120px_200px_120px_1fr_120px_100px] border-b border-gray-200 bg-gray-50/50">
          <div className="p-4 text-sm font-medium text-gray-500">Info</div>
          <div className="p-4 text-sm font-medium text-gray-500">ID Parent</div>
          <div className="p-4 text-sm font-medium text-gray-500">Enfants</div>
          <div className="p-4 text-sm font-medium text-gray-500">Téléphone</div>
          <div className="p-4 text-sm font-medium text-gray-500">Adresse</div>
          <div className="p-4 text-sm font-medium text-gray-500">Profession</div>
          <div className="p-4 text-sm font-medium text-gray-500 text-right">Actions</div>
        </div>

        <div className="divide-y divide-gray-200">
          {parents.map((parent) => (
            <div
              key={parent.id}
              className="grid grid-cols-[280px_120px_200px_120px_1fr_120px_100px] items-center hover:bg-gray-50/50 transition-colors"
            >
              <div className="p-4 flex items-center gap-3">
                <Avatar className="h-10 w-10 rounded-full">
                  <AvatarImage src={`https://avatar.vercel.sh/${parent.id}`} />
                  <AvatarFallback>
                    {parent.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-gray-900">{parent.name}</div>
                  <div className="text-sm text-gray-500">{parent.email}</div>
                </div>
              </div>
              <div className="p-4 text-sm text-gray-600">{parent.id}</div>
              <div className="p-4 text-sm text-gray-600">{parent.children}</div>
              <div className="p-4 text-sm text-gray-600">{parent.phone}</div>
              <div className="p-4 text-sm text-gray-600">{parent.address}</div>
              <div className="p-4 text-sm text-gray-600">{parent.profession}</div>
              <div className="p-4 flex justify-end gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 