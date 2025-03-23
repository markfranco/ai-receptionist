import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Setup Your Virtual Receptionist',
  description: 'Configure your AI-powered virtual receptionist to answer calls, capture leads, and book appointments.',
};

export default function SetupLayout({
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