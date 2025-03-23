"use client";

import { ModeToggle } from "@/app/components/ui/mode-toggle";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/app/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { Bell, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";

export default function UserHeader() {
  // In a real app, you would get this data from your auth system
  const user = {
    name: "Jane Realtor",
    email: "jane@realestate.com",
    initials: "JR"
  };
  
  return (
    <header className="sticky top-0 flex items-center justify-between h-16 px-6 border-b bg-background dark:border-gray-700 z-10">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Dashboard Overview
      </h1>
      
      <div className="flex items-center space-x-4">
        <ModeToggle />
        
        <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          <Bell className="h-6 w-6 text-gray-500" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-3 focus:outline-none">
              <Avatar className="h-10 w-10 bg-gray-300 dark:bg-gray-600">
                <AvatarFallback className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
                  {user.initials}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {user.name}
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href="/">
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}