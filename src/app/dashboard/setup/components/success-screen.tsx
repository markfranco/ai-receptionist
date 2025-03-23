"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Video, 
  FileText, 
  Settings
} from "lucide-react";

interface SuccessScreenProps {
  setupData: any;
  updateSetupData: (data: any) => void;
}

export default function SuccessScreen({ setupData }: SuccessScreenProps) {
  useEffect(() => {
    // Mark setup as complete in localStorage
    localStorage.setItem("setupComplete", "true");
  }, []);
  
  return (
    <div className="text-center">
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="animate-ping absolute h-32 w-32 rounded-full bg-green-400 opacity-20"></div>
          <div className="relative flex items-center justify-center h-32 w-32 rounded-full bg-green-100 dark:bg-green-900/30">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-4">Setup Complete!</h2>
      
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Your virtual receptionist is now active and ready to handle calls. You've successfully set up everything needed to start capturing leads automatically.
      </p>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-12 max-w-2xl mx-auto">
        <div className="flex items-center mb-4">
          <Phone className="h-5 w-5 text-blue-500 mr-2" />
          <h3 className="font-medium text-lg">Your New Virtual Number</h3>
        </div>
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          (02) 8052 9348
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Share this number with your clients or forward your existing business number to this number.
        </p>
        <Button variant="outline" size="sm">
          Copy Number
        </Button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-medium">Watch Tutorial</h3>
            <p className="text-sm text-gray-500 mb-4">
              Learn how to get the most out of your new virtual receptionist
            </p>
            <Button variant="outline" className="w-full" size="sm">
              View Tutorials
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="font-medium">Setup Guide</h3>
            <p className="text-sm text-gray-500 mb-4">
              Download detailed instructions for call forwarding setup
            </p>
            <Button variant="outline" className="w-full" size="sm">
              Download PDF
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-medium">Advanced Settings</h3>
            <p className="text-sm text-gray-500 mb-4">
              Customize your AI's behavior for specific call scenarios
            </p>
            <Button variant="outline" className="w-full" size="sm">
              Configure
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link href="/dashboard">
          <Button size="lg" className="px-8">
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="mt-12 pt-6 border-t text-sm text-gray-500 max-w-md mx-auto">
        <p>
          Need help? Our team is ready to assist you.
          <a href="#" className="text-blue-600 dark:text-blue-400 ml-1 hover:underline">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}