import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/app/lib/utils';
import { ThemeProvider } from '@/app/components/theme-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Your Virtual Receptionist | 24/7 AI Call Answering for Small Business',
  description: 'Never miss a lead again. Set up a 24/7 AI voice assistant that answers your calls, books clients, and captures every opportunity.',
  keywords: ['virtual receptionist', 'ai receptionist', 'automated call answering', 'business calls', 'lead capture', 'appointment booking', 'NSW small business'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}