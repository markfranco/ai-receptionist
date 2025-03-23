"use client";

import { CheckIcon } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface Step {
  name: string;
  component: React.ComponentType<any>;
}

interface SetupProgressProps {
  currentStep: number;
  steps: Step[];
}

export default function SetupProgress({ currentStep, steps }: SetupProgressProps) {
  return (
    <div className="py-3">
      <h1 className="text-xl font-semibold mb-6">Setup Your Virtual Receptionist</h1>
      
      <div className="hidden md:flex items-center justify-between pt-4 pb-8">
        {steps.map((step, index) => {
          const isComplete = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <div key={index} className="relative flex items-center flex-1">
              {/* Line connector */}
              {index > 0 && (
                <div 
                  className={cn(
                    "absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 transform -translate-x-1/2",
                    isComplete 
                      ? "bg-blue-500" 
                      : "bg-gray-200 dark:bg-gray-700"
                  )}
                  style={{ width: "calc(100% - 1.5rem)", left: "-50%" }}
                />
              )}
              
              {/* Circle with number or check */}
              <div 
                className={cn(
                  "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium",
                  isComplete
                    ? "bg-blue-500 text-white"
                    : isCurrent
                      ? "border-2 border-blue-500 bg-white text-blue-500 dark:bg-gray-800"
                      : "border-2 border-gray-200 bg-white text-gray-400 dark:border-gray-700 dark:bg-gray-800"
                )}
              >
                {isComplete ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              
              {/* Step name */}
              <span 
                className={cn(
                  "absolute left-0 top-10 w-max -translate-x-1/2 text-center text-xs font-medium",
                  isComplete
                    ? "text-blue-500"
                    : isCurrent
                      ? "text-blue-500"
                      : "text-gray-400"
                )}
                style={{ left: "50%" }}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Mobile view */}
      <div className="flex md:hidden items-center justify-between">
        <div className="flex items-center">
          <div 
            className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white"
          >
            {currentStep + 1}
          </div>
          <span className="ml-2 font-medium">{steps[currentStep].name}</span>
        </div>
        <div className="text-sm text-gray-500">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>
    </div>
  );
}