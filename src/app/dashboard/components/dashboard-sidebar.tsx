"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, BarChart2, Clock, Users, Settings, Share2 } from "lucide-react";
import { cn } from "@/app/lib/utils";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: BarChart2
  },
  {
    name: "Recent Calls",
    href: "/dashboard/calls",
    icon: Clock
  },
  {
    name: "Leads",
    href: "/dashboard/leads",
    icon: Users
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings
  },
  {
    name: "Integrations",
    href: "/dashboard/integrations",
    icon: Share2
  }
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-[#1e2a3b] text-white">
      {/* Logo */}
      <div className="flex items-center justify-start p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center">
            <Phone className="h-6 w-6 text-white transform -rotate-90" />
          </div>
          <span className="text-xl font-semibold">AI Receptionist</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center py-3 px-4 rounded-md transition-colors",
                isActive 
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              )}
            >
              <div className={cn(
                "flex items-center space-x-4",
                isActive ? "" : "opacity-75"
              )}>
                <div className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center",
                  isActive ? "bg-blue-600" : "bg-gray-600"
                )}>
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="font-medium">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}