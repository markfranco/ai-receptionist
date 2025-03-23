import Image from "next/image";
import { Phone, Calendar, MessageSquare, Clock } from "lucide-react";

interface WelcomeScreenProps {
  setupData: any;
  updateSetupData: (data: any) => void;
}

export default function WelcomeScreen({ setupData, updateSetupData }: WelcomeScreenProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="mb-8 relative h-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl"></div>
        <div className="relative flex items-center justify-center space-x-2">
          <div className="bg-blue-500 h-16 w-16 rounded-full flex items-center justify-center shadow-lg">
            <Phone className="h-8 w-8 text-white transform -rotate-90" />
          </div>
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            Your Virtual Receptionist
          </h1>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Welcome to Your AI Receptionist Setup</h2>
      
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        We'll guide you through setting up your AI receptionist in just a few minutes. Once complete, your virtual receptionist will be ready to answer calls, capture leads, and book appointments 24/7.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-1">Quick Setup</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get your AI receptionist running in less than 10 minutes with our guided setup process.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-1">Calendar Integration</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Connect your calendar to allow your AI to book and manage appointments automatically.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-1">Professional Voice</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Choose from high-quality AI voices that sound natural and represent your business professionally.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-1">Lead Capture</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Your AI will intelligently gather information from callers and organize it in your dashboard.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-6">
        <h3 className="font-semibold text-lg mb-2">Ready to begin?</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Click &quot;Continue&quot; below to start configuring your AI receptionist. You&apos;ll be up and running in just a few minutes!
        </p>
      </div>
    </div>
  );
}