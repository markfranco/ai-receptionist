import { 
  Phone, 
  MessageSquare, 
  Database, 
  Calendar, 
  MessagesSquare,
  Sparkles
} from "lucide-react";
import { Feature, BusinessType, FAQ } from "../types";

export const FEATURES: Feature[] = [
  {
    title: "24/7 Voice Answering",
    description: "Never miss a call again. Your AI receptionist answers calls professionally any time of day or night.",
    icon: Phone,
  },
  {
    title: "Call Recording + Transcripts",
    description: "Every call is recorded and transcribed, giving you perfect records and actionable insights.",
    icon: MessageSquare,
  },
  {
    title: "Secure Lead Management",
    description: "Automatically capture and store lead information in a secure database you can access anytime.",
    icon: Database,
  },
  {
    title: "Booking + Calendar Sync",
    description: "Let callers book appointments directly into your calendar with seamless integration.",
    icon: Calendar,
  },
  {
    title: "Optional CRM & SMS Follow-ups",
    description: "Automatically enter leads into your CRM and send follow-up SMS messages to boost conversions.",
    icon: MessagesSquare,
  },
  {
    title: "Smart Call Routing",
    description: "Direct calls to the right team member based on caller needs or transfer to you when appropriate.",
    icon: Sparkles,
  },
];

export const BUSINESS_TYPES: BusinessType[] = [
  { id: "real-estate", label: "Real Estate", icon: "🏠" },
  { id: "fitness", label: "Fitness Coach", icon: "💪" },
  { id: "health", label: "Allied Health", icon: "🩺" },
];

export const FAQS: FAQ[] = [
  {
    question: "How many calls are included in each plan?",
    answer: "Our Starter plan includes up to 100 minutes per month, Pro includes 300 minutes, and Business includes 1,000 minutes. Additional minutes can be purchased if needed. Unused minutes don't roll over to the next month."
  },
  {
    question: "Can I use my own phone number?",
    answer: "Yes! Your Virtual Receptionist works with your existing business phone number. We can port your number to our system, or use call forwarding to direct calls to our service when you're unavailable."
  },
  {
    question: "What happens after hours?",
    answer: "With the Pro and Business plans, Your Virtual Receptionist continues to answer calls 24/7, just as it would during business hours. The Starter plan switches to voicemail mode after your specified business hours."
  },
  {
    question: "How does the calendar integration work?",
    answer: "We integrate with Google Calendar, Microsoft Outlook, and most major calendar services. Your Virtual Receptionist can check your availability in real-time and book appointments directly into your calendar while on a call with your client."
  },
  {
    question: "Will clients know they're talking to an AI?",
    answer: "Your Virtual Receptionist uses advanced natural-sounding voice technology that most callers can't distinguish from a human. However, you can choose to disclose that it's an AI assistant if you prefer. The service is designed to handle calls professionally either way."
  },
  {
    question: "What kind of businesses is this suitable for?",
    answer: "Your Virtual Receptionist is perfect for small businesses in NSW that rely on phone inquiries, including real estate agents, fitness coaches, allied health providers, professional services, trades, and small retail businesses. It's especially valuable for businesses where staff are often unavailable to answer the phone."
  },
  {
    question: "How are leads stored and can I access them?",
    answer: "All lead information is securely stored in a database. You can access your leads through our web dashboard, export them to CSV, or integrate with your CRM system (available on Pro and Business plans)."
  },
  {
    question: "How long does it take to set up?",
    answer: "With our self-setup option, you can be up and running in as little as 15 minutes. Our Standard and Premium setup services typically take 1-3 business days, depending on your specific requirements and customizations."
  },
]; 