"use client";

import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/app/components/ui/alert";
import { Phone, AlertCircle, CheckCircle, PhoneOff } from "lucide-react";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/app/components/ui/tabs";

interface PhoneSetupStepProps {
  setupData: any;
  updateSetupData: (data: any) => void;
}

export default function PhoneSetupStep({ setupData, updateSetupData }: PhoneSetupStepProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateSetupData({ [name]: value });
  };
  
  const handleForwardingOptionChange = (value: string) => {
    updateSetupData({ forwardingOption: value });
  };
  
  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <Phone className="h-6 w-6 text-blue-500" />
        <h2 className="text-2xl font-bold">Phone Setup</h2>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Configure how your virtual receptionist will handle phone calls for your business.
      </p>
      
      <Tabs defaultValue="existing" className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-lg font-medium mb-2 md:mb-0">Choose a phone number</h3>
          <TabsList>
            <TabsTrigger value="existing">Use My Existing Number</TabsTrigger>
            <TabsTrigger value="new">Get a New Number</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="existing">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>How call forwarding works</AlertTitle>
                  <AlertDescription>
                    You'll keep your existing phone number. When someone calls, it will be forwarded to our system where the AI receptionist will answer.
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">
                    Your existing business phone number
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={setupData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. 0412 345 678"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500">
                    Enter the number you want to forward to your virtual receptionist
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md border border-blue-100 dark:border-blue-800/30 mt-4">
                  <h4 className="text-sm font-medium flex items-center mb-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Simple setup with your current provider
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    After setup is complete, we&apos;ll provide instructions for setting up call forwarding with your current phone provider. Most carriers make this simple with a few clicks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="new">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-800">
                      Recommended
                    </Badge>
                  </div>
                </div>
                
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Get a dedicated number</AlertTitle>
                  <AlertDescription>
                    We'll provide a new dedicated phone number for your business that connects directly to your AI receptionist. You can keep your existing number too.
                  </AlertDescription>
                </Alert>
                
                <div className="grid gap-4 mt-2">
                  <div className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">No need to change your current provider</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Works alongside your existing number</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Simple setup (ready in minutes)</span>
                  </div>
                </div>
                
                <div className="pt-4 mt-2">
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    We'll help you choose a number in the next step. +$5/month included in your plan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 pt-6 border-t">
        <h3 className="text-lg font-medium mb-4">Call Handling Preferences</h3>
        
        <RadioGroup 
          value={setupData.forwardingOption} 
          onValueChange={handleForwardingOptionChange}
          className="space-y-4"
        >
          <div className="flex items-start space-x-2 p-4 rounded-md border bg-white dark:bg-gray-800">
            <RadioGroupItem value="always" id="always" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="always" className="font-medium">
                Always use AI receptionist
              </Label>
              <p className="text-sm text-gray-500">
                The AI receptionist will answer all calls to your business number. Perfect for ensuring you never miss a lead.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2 p-4 rounded-md border bg-white dark:bg-gray-800">
            <RadioGroupItem value="after-hours" id="after-hours" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="after-hours" className="font-medium">
                After hours only
              </Label>
              <p className="text-sm text-gray-500">
                The AI will only answer calls outside your business hours (as configured in the previous step).
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2 p-4 rounded-md border bg-white dark:bg-gray-800">
            <RadioGroupItem value="overflow" id="overflow" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="overflow" className="font-medium">
                Overflow only (when you can&apos;t answer)
              </Label>
              <p className="text-sm text-gray-500">
                The AI will only answer if you don&apos;t pick up within a certain number of rings (usually 4-5 rings).
              </p>
            </div>
          </div>
        </RadioGroup>
        
        <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md border border-yellow-100 dark:border-yellow-800/30">
          <div className="flex">
            <div className="shrink-0">
              <PhoneOff className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                What if the caller needs to speak to a real person?
              </h3>
              <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                <p>
                  Don&apos;t worry - your AI receptionist can transfer calls to your mobile or another number if the caller specifically requests a human, or for urgent matters that require your immediate attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}