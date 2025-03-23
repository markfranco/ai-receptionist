"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { 
  Phone, 
  CheckCircle, 
  XCircle,
  Play,
  Pause, 
  Loader2
} from "lucide-react";

interface TestCallStepProps {
  setupData: any;
  updateSetupData: (data: any) => void;
}

export default function TestCallStep({ setupData, updateSetupData }: TestCallStepProps) {
  const [testStatus, setTestStatus] = useState<'idle' | 'connecting' | 'simulating' | 'completed' | 'failed'>('idle');
  const [progress, setProgress] = useState(0);
  const [playingAudio, setPlayingAudio] = useState(false);
  
  const startTest = () => {
    setTestStatus('connecting');
    setProgress(10);
    
    // Simulate test call
    setTimeout(() => {
      setTestStatus('simulating');
      setProgress(30);
      
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            setTimeout(() => {
              setTestStatus('completed');
              setProgress(100);
            }, 1000);
            return 90;
          }
          return prev + 10;
        });
      }, 800);
    }, 2000);
  };
  
  const playAudio = () => {
    setPlayingAudio(!playingAudio);
    
    // Simulate audio ending after 5 seconds
    if (!playingAudio) {
      setTimeout(() => {
        setPlayingAudio(false);
      }, 5000);
    }
  };
  
  const renderTestContent = () => {
    switch (testStatus) {
      case 'idle':
        return (
          <div className="text-center space-y-6">
            <p className="text-gray-600 dark:text-gray-300">
              Ready to test your virtual receptionist? We'll simulate a call to ensure everything is working correctly.
            </p>
            <Button
              size="lg"
              onClick={startTest}
              className="flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Start Test Call
            </Button>
          </div>
        );
        
      case 'connecting':
      case 'simulating':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                {testStatus === 'connecting' ? 'Connecting...' : 'Testing your setup...'}
              </span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="w-full" />
            
            <div className="flex justify-center">
              <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
            </div>
            
            <div className="text-center text-sm text-gray-500">
              {testStatus === 'connecting' 
                ? "Connecting to test environment..." 
                : "Simulating a call to your AI receptionist..."
              }
            </div>
          </div>
        );
        
      case 'completed':
        return (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="bg-green-100 dark:bg-green-900/30 h-16 w-16 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
                Test Successful!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your virtual receptionist is set up correctly and ready to handle calls.
              </p>
              
              <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-medium mb-2">Test Call Recording</h4>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    00:38 • Just now
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center"
                    onClick={playAudio}
                  >
                    {playingAudio ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Play
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'failed':
        return (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="bg-red-100 dark:bg-red-900/30 h-16 w-16 rounded-full flex items-center justify-center">
                <XCircle className="h-8 w-8 text-red-500" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
                Test Failed
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We encountered an issue while testing your virtual receptionist.
              </p>
              
              <Card className="max-w-md mx-auto border-red-200 dark:border-red-800">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Error Details</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Unable to connect to your selected calendar. Please check your integration settings.
                  </p>
                  <Button variant="outline" size="sm">
                    Try Again
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <Phone className="h-6 w-6 text-blue-500" />
        <h2 className="text-2xl font-bold">Test Your AI Receptionist</h2>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Let's make a test call to ensure your virtual receptionist is working as expected.
      </p>
      
      <Card className="border-2 border-blue-100 dark:border-blue-900/30">
        <CardContent className="p-8">
          {renderTestContent()}
        </CardContent>
      </Card>
      
      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-medium">What happens during the test?</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
            <div className="flex items-center mb-2">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                Step 1
              </Badge>
            </div>
            <p className="text-sm">
              We'll verify your business information and AI voice settings.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
            <div className="flex items-center mb-2">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                Step 2
              </Badge>
            </div>
            <p className="text-sm">
              We'll test your integrations (calendar, CRM) if configured.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
            <div className="flex items-center mb-2">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                Step 3
              </Badge>
            </div>
            <p className="text-sm">
              We'll simulate a real call to test your AI receptionist's responses.
            </p>
          </div>
        </div>
        
        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-100 dark:border-amber-800/30 mt-6">
          <h3 className="font-medium text-lg mb-2">Not ready to test?</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            You can still continue with setup and test your AI receptionist later from the dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}