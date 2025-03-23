import DashboardOverview from "./components/dashboard-overview";
import DashboardSidebar from "./components/dashboard-sidebar";
import UserHeader from "./components/user-header";

export const metadata = {
  title: 'Dashboard | Your Virtual Receptionist',
  description: 'Manage your calls, leads, and appointments with Your Virtual Receptionist dashboard.',
}

export default function DashboardPage() {
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