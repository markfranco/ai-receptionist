import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Dashboard | Your Virtual Receptionist',
  description: 'Manage your virtual receptionist, calls, leads, and appointments.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  );
}