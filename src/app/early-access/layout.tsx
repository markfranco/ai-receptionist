import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Get Early Access | Your Virtual Receptionist',
  description: 'Join our waiting list for exclusive early access to Your Virtual Receptionist - the AI voice assistant that never misses a lead.',
};

export default function EarlyAccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 