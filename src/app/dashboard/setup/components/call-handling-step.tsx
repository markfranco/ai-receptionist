"use client";

import { Label } from "@/app/components/ui/label";
import { Switch } from "@/app/components/ui/switch";
import { Card, CardContent } from "@/app/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { 
  MessageSquare, 
  Calendar, 
  UserPlus, 
  FileText, 
  AlertCircle,
  Bell
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/app/components/ui/alert";

interface CallHandlingStepProps {
  setupData: {
    appointmentBooking: boolean;
    leadCapture: boolean;
    callTranscription: boolean;
    [key: string]: boolean;
  };
  updateSetupData: (data: Partial<{ [key: string]: boolean }>) => void;
}

export default function CallHandlingStep({ setupData, updateSetupData }: CallHandlingStepProps) {
  const handleSwitchChange = (key: string, checked: boolean) => {
    updateSetupData({ [key]: checked });
  };
  
  return (
    <div className="pb-10">
      <div className="flex items-center space-x-2 mb-6">
        <MessageSquare className="h-6 w-6 text-blue-500" />
        <h2 className="text-2xl font-bold">Call Handling Rules</h2>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Configure how your AI receptionist handles different types of calls and what information it collects.
      </p>
      
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className={`border-2 ${setupData.appointmentBooking ? 'border-blue-500' : 'border-transparent'}`}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <Label className="text-lg font-medium">Appointment Booking</Label>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Allow your AI to schedule appointments directly in your calendar
                    </p>
                  </div>
                </div>
                <Switch
                  checked={setupData.appointmentBooking}
                  onCheckedChange={(checked) => handleSwitchChange('appointmentBooking', checked)}
                />
              </div>
              
              {setupData.appointmentBooking && (
                <div className="mt-4 border-t pt-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="booking-details">
                      <AccordionTrigger className="text-sm">
                        How appointment booking works
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                            Your AI checks your calendar for availability
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                            Offers callers available time slots
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                            Collects necessary appointment details
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                            Books the appointment and sends confirmation
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className={`border-2 ${setupData.leadCapture ? 'border-blue-500' : 'border-transparent'}`}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900/30 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <UserPlus className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <Label className="text-lg font-medium">Lead Capture</Label>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Collect contact details and requirements from potential customers
                    </p>
                  </div>
                </div>
                <Switch
                  checked={setupData.leadCapture}
                  onCheckedChange={(checked) => handleSwitchChange('leadCapture', checked)}
                />
              </div>
              
              {setupData.leadCapture && (
                <div className="mt-4 border-t pt-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="lead-details">
                      <AccordionTrigger className="text-sm">
                        Information collected from leads
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                            Name and contact information
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                            Specific interests or requirements
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                            Budget range (if applicable)
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                            Preferred contact method and time
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <Card className={`border-2 ${setupData.callTranscription ? 'border-blue-500' : 'border-transparent'}`}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <Label className="text-lg font-medium">Call Recording & Transcription</Label>
                  <p className="text-sm text-gray-500 mt-1 mb-2">
                    Record calls and generate text transcripts for your records
                  </p>
                  <Alert className="mt-3">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle className="text-xs font-medium">Legal notice</AlertTitle>
                    <AlertDescription className="text-xs">
                      Your AI receptionist will automatically inform callers that calls may be recorded for quality and training purposes.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
              <Switch
                checked={setupData.callTranscription}
                onCheckedChange={(checked) => handleSwitchChange('callTranscription', checked)}
              />
            </div>
            
            {setupData.callTranscription && (
              <div className="mt-4 border-t pt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="transcription-details">
                    <AccordionTrigger className="text-sm">
                      Call recording benefits
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                          Review conversations to improve customer service
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                          Search transcripts by keyword to find important information
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                          Train your AI to handle specific scenarios better
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                          Keep records for compliance and quality assurance
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <Bell className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <Label className="text-lg font-medium">Notification Preferences</Label>
                  <p className="text-sm text-gray-500 mt-1 mb-4">
                    Choose how you want to be notified about new calls and leads
                  </p>
                  
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-notification" className="flex items-center cursor-pointer">
                        <span className="mr-1">Email notifications</span>
                      </Label>
                      <Switch
                        id="email-notification"
                        checked={true}
                        onCheckedChange={() => {}}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-notification" className="flex items-center cursor-pointer">
                        <span className="mr-1">SMS notifications</span>
                      </Label>
                      <Switch
                        id="sms-notification"
                        checked={false}
                        onCheckedChange={() => {}}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-notification" className="flex items-center cursor-pointer">
                        <span className="mr-1">In-app notifications</span>
                      </Label>
                      <Switch
                        id="app-notification"
                        checked={true}
                        onCheckedChange={() => {}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800/30">
          <h3 className="font-medium text-lg mb-2">Pro Tip: Train Your AI</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            After setup, you can further customize how your AI handles specific questions by adding FAQs and special instructions in the Settings area.
          </p>
        </div>
      </div>
    </div>
  );
}