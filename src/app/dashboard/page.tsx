"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardOverview from "./components/dashboard-overview";
import DashboardSidebar from "./components/dashboard-sidebar";
import UserHeader from "./components/user-header";

export default function DashboardPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if user has completed setup
    // In a real app, you would check this from your backend or local storage
    const hasCompletedSetup = localStorage.getItem("setupComplete") === "true";
    
    // For demo purposes, if setup is not complete, redirect to setup
    if (!hasCompletedSetup) {
      router.push("/dashboard/setup");
    }
  }, [router]);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <UserHeader />
        
        <main className="flex-1 overflow-y-auto py-6 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
          <DashboardOverview />
        </main>
      </div>
    </div>
  );
}