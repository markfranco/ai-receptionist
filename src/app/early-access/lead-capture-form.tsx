"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";

const businessTypes = [
  { value: "real-estate", label: "Real Estate" },
  { value: "fitness", label: "Fitness/Personal Training" },
  { value: "health", label: "Allied Health/Medical" },
  { value: "professional", label: "Professional Services" },
  { value: "retail", label: "Retail" },
  { value: "trades", label: "Trades/Construction" },
  { value: "other", label: "Other" },
];

export default function LeadCaptureForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    businessName: "",
    businessType: "",
    phone: "",
    callVolume: "",
    consent: false,
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelect = (value: string) => {
    setFormState(prev => ({ ...prev, businessType: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormState(prev => ({ ...prev, consent: checked }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formState.name || !formState.email || !formState.businessName || !formState.businessType || !formState.consent) {
      alert("Please fill out all required fields");
      return;
    }
    
    setFormStatus("submitting");
    
    // In a real implementation, you would submit to your API here
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success!
      setFormStatus("success");
      
      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        businessName: "",
        businessType: "",
        phone: "",
        callVolume: "",
        consent: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };
  
  if (formStatus === "success") {
    return (
      <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
        <svg 
          className="w-12 h-12 text-green-500 mx-auto mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
        <p className="mb-4">
          Thank you for joining our waitlist. We'll be in touch soon with updates about early access.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setFormStatus("idle")}
        >
          Submit another response
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
          <Input
            id="name"
            name="name"
            placeholder="John Smith"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="businessName">Business Name <span className="text-red-500">*</span></Label>
          <Input
            id="businessName"
            name="businessName"
            placeholder="Your Business"
            value={formState.businessName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="businessType">Business Type <span className="text-red-500">*</span></Label>
          <Select 
            onValueChange={handleSelect}
            value={formState.businessType}
          >
            <SelectTrigger id="businessType">
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent>
              {businessTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="0400 123 456"
            value={formState.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="callVolume">Approximate Monthly Call Volume</Label>
          <Select 
            onValueChange={(value) => setFormState(prev => ({ ...prev, callVolume: value }))}
            value={formState.callVolume}
          >
            <SelectTrigger id="callVolume">
              <SelectValue placeholder="Select volume" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Less than 50 calls</SelectItem>
              <SelectItem value="medium">50-200 calls</SelectItem>
              <SelectItem value="high">200-500 calls</SelectItem>
              <SelectItem value="very-high">500+ calls</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-start space-x-2 pt-2">
        <Checkbox 
          id="consent" 
          checked={formState.consent}
          onCheckedChange={handleCheckboxChange}
          required
        />
        <Label htmlFor="consent" className="text-xs leading-tight">
          I agree to receive updates about Your Virtual Receptionist. I understand I can unsubscribe at any time. <span className="text-red-500">*</span>
        </Label>
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={formStatus === "submitting"}
      >
        {formStatus === "submitting" ? "Submitting..." : "Join the Waitlist"}
      </Button>
      
      {formStatus === "error" && (
        <p className="text-red-500 text-sm text-center">
          There was an error submitting the form. Please try again.
        </p>
      )}
    </form>
  );
}