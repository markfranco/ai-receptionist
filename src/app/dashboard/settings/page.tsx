"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SetupProgress from "./components/setup-progress";
import WelcomeScreen from "./components/welcome-screen";
import BusinessInfoStep from "./components/business-info-step";
import PhoneSetupStep from "./components/phone-setup-step";
import PersonalizationStep from "./components/personalization-step";
import CallHandlingStep from "./components/call-handling-step";
import IntegrationsStep from "./components/integrations-step";
import TestCallStep from "./components/test-call-step";
import SuccessScreen from "./components/success-screen";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DashboardSidebar from "../components/dashboard-sidebar";
import { motion, AnimatePresence } from "framer-motion";

export default function SetupPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [setupData, setSetupData] = useState({
    // Business Info
    businessName: "",
    industry: "",
    businessHours: {
      weekdays: { start: "09:00", end: "17:00" },
      saturday: { start: "10:00", end: "15:00" },
      sunday: { start: "", end: "" }
    },
    serviceArea: "",
    
    // Phone Setup
    phoneNumber: "",
    forwardingOption: "always", // always, after-hours, never
    
    // Personalization
    voiceType: "female",
    greetingScript: "Hello, thank you for calling {businessName}. How may I assist you today?",
    
    // Call Handling
    appointmentBooking: true,
    leadCapture: true,
    callTranscription: true,
    
    // Integrations
    calendarType: "",
    crmType: "",
    notificationsEmail: "",
    notificationsSMS: "",
  });
  
  const steps = [
    { name: "Welcome", component: WelcomeScreen },
    { name: "Business Info", component: BusinessInfoStep },
    { name: "Phone Setup", component: PhoneSetupStep },
    { name: "Personalization", component: PersonalizationStep },
    { name: "Call Handling", component: CallHandlingStep },
    { name: "Integrations", component: IntegrationsStep },
    { name: "Test Call", component: TestCallStep },
    { name: "Complete", component: SuccessScreen },
  ];
  
  const handleUpdateSetupData = (data: any) => {
    setSetupData(prev => ({ ...prev, ...data }));
  };
  
  const CurrentStepComponent = steps[currentStep].component;
  
  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      window.scrollTo(0, 0);
      setCurrentStep(prev => prev + 1);
    } else {
      // If on last step, redirect to dashboard
      router.push("/dashboard");
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      window.scrollTo(0, 0);
      setCurrentStep(prev => prev - 1);
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="sticky top-0 bg-background border-b z-10 px-6 py-3">
          <SetupProgress currentStep={currentStep} steps={steps} />
        </header>
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CurrentStepComponent 
                  setupData={setupData} 
                  updateSetupData={handleUpdateSetupData} 
                />
              </motion.div>
            </AnimatePresence>
            
          <div className="flex justify-between mt-12 pt-6 border-t">
              <Button
                variant="outline"
                onClick={goToPreviousStep}
                disabled={currentStep === 0}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              <div className="flex space-x-3">
                {currentStep < steps.length - 1 && (
                  <Button
                    variant="ghost"
                    onClick={goToNextStep}
                    className="text-muted-foreground"
                  >
                    Skip this step
                  </Button>
                )}
                
                <Button
                  onClick={goToNextStep}
                  className="flex items-center"
                >
                  {currentStep === steps.length - 1 ? "Finish Setup" : "Continue"}
                  {currentStep < steps.length - 1 && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}