"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/app/components/ui/select";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { 
  Share2, 
  Calendar, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  Plus,
  Loader2
} from "lucide-react";

interface IntegrationsStepProps {
  setupData: any;
  updateSetupData: (data: any) => void;
}

export default function IntegrationsStep({ setupData, updateSetupData }: IntegrationsStepProps) {
  const [calendarConnecting, setCalendarConnecting] = useState(false);
  const [crmConnecting, setCrmConnecting] = useState(false);
  const [calendarConnected, setCalendarConnected] = useState(false);
  const [crmConnected, setCrmConnected] = useState(false);
  
  const handleCalendarTypeChange = (value: string) => {
    updateSetupData({ calendarType: value });
  };
  
  const handleCrmTypeChange = (value: string) => {
    updateSetupData({ crmType: value });
  };
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSetupData({ notificationsEmail: e.target.value });
  };
  
  const handleSmsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSetupData({ notificationsSMS: e.target.value });
  };
  
  const connectCalendar = () => {
    if (!setupData.calendarType) return;
    
    setCalendarConnecting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setCalendarConnecting(false);
      setCalendarConnected(true);
    }, 2000);
  };
  
  const connectCrm = () => {
    if (!setupData.crmType) return;
    
    setCrmConnecting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setCrmConnecting(false);
      setCrmConnected(true);
    }, 2000);
  };
  
  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <Share2 className="h-6 w-6 text-blue-500" />
        <h2 className="text-2xl font-bold">Integrations</h2>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Connect your existing tools to enhance your virtual receptionist's capabilities.
      </p>
      
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-4 border-b">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 h-10 w-10 rounded-full flex items-center justify-center shrink-0 mr-3">
                  <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Calendar Integration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Connect your calendar for appointment booking
                  </p>
                </div>
                
                {calendarConnected && (
                  <Badge className="ml-auto bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-800">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Connected
                  </Badge>
                )}
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="calendar-type">Calendar Provider</Label>
                  <Select 
                    value={setupData.calendarType} 
                    onValueChange={handleCalendarTypeChange}
                    disabled={calendarConnected}
                  >
                    <SelectTrigger id="calendar-type">
                      <SelectValue placeholder="Select your calendar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Calendar</SelectItem>
                      <SelectItem value="outlook">Microsoft Outlook</SelectItem>
                      <SelectItem value="apple">Apple Calendar</SelectItem>
                      <SelectItem value="other">Other (Generic iCal)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {!calendarConnected ? (
                  <Button 
                    onClick={connectCalendar}
                    disabled={!setupData.calendarType || calendarConnecting}
                    className="w-full"
                  >
                    {calendarConnecting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 mr-2" />
                        Connect Calendar
                      </>
                    )}
                  </Button>
                ) : (
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md text-sm text-green-800 dark:text-green-200 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Calendar connected successfully
                  </div>
                )}
                
                {!setupData.calendarType && !calendarConnected && (
                  <div className="text-xs text-gray-500 mt-2">
                    <span className="flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Required for appointment booking
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 p-4 border-b">
              <div className="flex items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 h-10 w-10 rounded-full flex items-center justify-center shrink-0 mr-3">
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">CRM Integration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Connect your CRM to automatically add leads
                  </p>
                </div>
                
                {crmConnected && (
                  <Badge className="ml-auto bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-800">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Connected
                  </Badge>
                )}
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="crm-type">CRM Provider</Label>
                  <Select 
                    value={setupData.crmType} 
                    onValueChange={handleCrmTypeChange}
                    disabled={crmConnected}
                  >
                    <SelectTrigger id="crm-type">
                      <SelectValue placeholder="Select your CRM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salesforce">Salesforce</SelectItem>
                      <SelectItem value="hubspot">HubSpot</SelectItem>
                      <SelectItem value="zoho">Zoho CRM</SelectItem>
                      <SelectItem value="pipedrive">Pipedrive</SelectItem>
                      <SelectItem value="other">Other (API Integration)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {!crmConnected ? (
                  <Button 
                    onClick={connectCrm}
                    disabled={!setupData.crmType || crmConnecting}
                    className="w-full"
                    variant="outline"
                  >
                    {crmConnecting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 mr-2" />
                        Connect CRM
                      </>
                    )}
                  </Button>
                ) : (
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md text-sm text-green-800 dark:text-green-200 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    CRM connected successfully
                  </div>
                )}
                
                <div className="text-xs text-gray-500 mt-2">
                  <span className="flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Optional: Connect later in Settings if needed
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="pt-6 border-t">
          <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="notifications-email">
                Email for Notifications
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="notifications-email"
                type="email"
                value={setupData.notificationsEmail}
                onChange={handleEmailChange}
                placeholder="you@example.com"
              />
              <p className="text-xs text-gray-500">
                You&apos;ll receive summaries and important alerts here
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notifications-sms">
                Mobile for SMS Alerts (Optional)
              </Label>
              <Input
                id="notifications-sms"
                type="tel"
                value={setupData.notificationsSMS}
                onChange={handleSmsChange}
                placeholder="e.g. 0412 345 678"
              />
              <p className="text-xs text-gray-500">
                For urgent notifications only (e.g., new hot leads)
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-100 dark:border-amber-800/30">
          <h3 className="font-medium text-lg mb-2">Skip Now, Setup Later</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            You can always set up these integrations later from the Settings page. At minimum, we recommend connecting your calendar if you want to use appointment booking.
          </p>
        </div>
      </div>
    </div>
  );
}