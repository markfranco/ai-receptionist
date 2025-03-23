"use client";

import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/app/components/ui/select";
import { Switch } from "@/app/components/ui/switch";
import { useState } from "react";
import { Building, Clock, MapPin, InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/components/ui/tooltip";

interface BusinessInfoStepProps {
  setupData: any;
  updateSetupData: (data: any) => void;
}

const industries = [
  { value: "real-estate", label: "Real Estate" },
  { value: "fitness", label: "Fitness & Personal Training" },
  { value: "health", label: "Health & Medical" },
  { value: "professional", label: "Professional Services" },
  { value: "trades", label: "Trades & Home Services" },
  { value: "retail", label: "Retail & Shopping" },
  { value: "hospitality", label: "Hospitality" },
  { value: "other", label: "Other" },
];

export default function BusinessInfoStep({ setupData, updateSetupData }: BusinessInfoStepProps) {
  const [openWeekends, setOpenWeekends] = useState({
    saturday: setupData.businessHours.saturday.start !== "",
    sunday: setupData.businessHours.sunday.start !== "",
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateSetupData({ [name]: value });
  };
  
  const handleIndustryChange = (value: string) => {
    updateSetupData({ industry: value });
  };
  
  const handleHoursChange = (day: string, type: 'start' | 'end', value: string) => {
    updateSetupData({
      businessHours: {
        ...setupData.businessHours,
        [day]: {
          ...setupData.businessHours[day],
          [type]: value
        }
      }
    });
  };
  
  const toggleWeekend = (day: 'saturday' | 'sunday', checked: boolean) => {
    setOpenWeekends(prev => ({ ...prev, [day]: checked }));
    
    if (!checked) {
      updateSetupData({
        businessHours: {
          ...setupData.businessHours,
          [day]: { start: "", end: "" }
        }
      });
    } else {
      const defaultHours = day === 'saturday' 
        ? { start: "10:00", end: "15:00" } 
        : { start: "12:00", end: "16:00" };
      
      updateSetupData({
        businessHours: {
          ...setupData.businessHours,
          [day]: defaultHours
        }
      });
    }
  };
  
  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <Building className="h-6 w-6 text-blue-500" />
        <h2 className="text-2xl font-bold">Business Information</h2>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Let's start with some basic information about your business. This helps your AI receptionist represent your business accurately.
      </p>
      
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="businessName">
              Business Name
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="businessName"
              name="businessName"
              value={setupData.businessName}
              onChange={handleInputChange}
              placeholder="e.g. Smith Real Estate"
              className="w-full"
            />
            <p className="text-xs text-gray-500">This is how your receptionist will identify your business to callers</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="industry">
              Industry
              <span className="text-red-500">*</span>
            </Label>
            <Select onValueChange={handleIndustryChange} value={setupData.industry}>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry.value} value={industry.value}>
                    {industry.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">Helps us optimize your receptionist for your specific needs</p>
          </div>
        </div>
        
        <div className="pt-4 pb-2 border-t">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="h-5 w-5 text-blue-500" />
            <h3 className="text-lg font-medium">Business Hours</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-help">
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    Your AI receptionist can answer calls 24/7, but setting business hours helps it provide accurate information to callers.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="weekdaysStart">
                  Weekdays (Monday - Friday)
                </Label>
                <div className="flex space-x-2">
                  <div>
                    <Input
                      id="weekdaysStart"
                      type="time"
                      value={setupData.businessHours.weekdays.start}
                      onChange={(e) => handleHoursChange('weekdays', 'start', e.target.value)}
                    />
                    <span className="text-xs text-gray-500">Open</span>
                  </div>
                  <div>
                    <Input
                      id="weekdaysEnd"
                      type="time"
                      value={setupData.businessHours.weekdays.end}
                      onChange={(e) => handleHoursChange('weekdays', 'end', e.target.value)}
                    />
                    <span className="text-xs text-gray-500">Close</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="saturdayOpen"
                  checked={openWeekends.saturday}
                  onCheckedChange={(checked) => toggleWeekend('saturday', checked)}
                />
                <Label htmlFor="saturdayOpen">Open on Saturdays</Label>
              </div>
              
              {openWeekends.saturday && (
                <div className="ml-8">
                  <div className="flex space-x-2">
                    <div>
                      <Input
                        type="time"
                        value={setupData.businessHours.saturday.start}
                        onChange={(e) => handleHoursChange('saturday', 'start', e.target.value)}
                      />
                      <span className="text-xs text-gray-500">Open</span>
                    </div>
                    <div>
                      <Input
                        type="time"
                        value={setupData.businessHours.saturday.end}
                        onChange={(e) => handleHoursChange('saturday', 'end', e.target.value)}
                      />
                      <span className="text-xs text-gray-500">Close</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="sundayOpen"
                  checked={openWeekends.sunday}
                  onCheckedChange={(checked) => toggleWeekend('sunday', checked)}
                />
                <Label htmlFor="sundayOpen">Open on Sundays</Label>
              </div>
              
              {openWeekends.sunday && (
                <div className="ml-8">
                  <div className="flex space-x-2">
                    <div>
                      <Input
                        type="time"
                        value={setupData.businessHours.sunday.start}
                        onChange={(e) => handleHoursChange('sunday', 'start', e.target.value)}
                      />
                      <span className="text-xs text-gray-500">Open</span>
                    </div>
                    <div>
                      <Input
                        type="time"
                        value={setupData.businessHours.sunday.end}
                        onChange={(e) => handleHoursChange('sunday', 'end', e.target.value)}
                      />
                      <span className="text-xs text-gray-500">Close</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="pt-4 pb-2 border-t">
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="h-5 w-5 text-blue-500" />
            <h3 className="text-lg font-medium">Service Area</h3>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="serviceArea">
              Service Area (Optional)
            </Label>
            <Input
              id="serviceArea"
              name="serviceArea"
              value={setupData.serviceArea}
              onChange={handleInputChange}
              placeholder="e.g. Sydney, NSW or North Shore area"
            />
            <p className="text-xs text-gray-500">
              Help your AI receptionist inform callers about the areas you serve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}