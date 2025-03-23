"use client";

import { motion } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useState } from "react";

const tiers = [
  {
    name: "Starter",
    id: "starter",
    monthlyPrice: 39,
    annualPrice: 29,
    description: "Perfect for small businesses just getting started with automated reception.",
    features: [
      "Up to 100 minutes of calls per month",
      "Business hours call handling",
      "Basic calendar integration",
      "Email notifications",
      "Simple lead capture",
    ],
    limitations: [
      "After-hours voicemail only",
      "No CRM integration",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    id: "pro",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "The complete package for growing businesses that need full flexibility.",
    features: [
      "Up to 300 minutes of calls per month",
      "24/7 call answering",
      "Advanced calendar integration",
      "SMS notifications",
      "Call recording and transcripts",
      "Full lead management",
      "Basic CRM integration",
    ],
    limitations: [],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Business",
    id: "business",
    monthlyPrice: 199,
    annualPrice: 149,
    description: "Enterprise-level solution for businesses with high call volumes.",
    features: [
      "Up to 1,000 minutes of calls per month",
      "24/7 priority call answering",
      "Advanced calendar management",
      "SMS and email notifications",
      "Advanced analytics dashboard",
      "Full CRM integration",
      "Custom call scripts",
      "Dedicated account manager",
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const setupOptions = [
  {
    name: "Self Setup",
    price: 0,
    description: "Set up your own virtual receptionist with our step-by-step guide.",
  },
  {
    name: "Standard Setup",
    price: 499,
    description: "Our team will help you set up and configure your virtual receptionist.",
  },
  {
    name: "Premium Setup",
    price: 899,
    description: "Full service setup with custom scripts, CRM integration, and training.",
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that works best for your business needs. All plans come with a 14-day free trial.
            </p>
          </motion.div>

          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-8 mb-4 space-x-4">
            <span className={`text-sm ${billingCycle === "monthly" ? "text-foreground font-medium" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <div className="flex items-center">
              <Switch
                checked={billingCycle === "annually"}
                onCheckedChange={(checked) => setBillingCycle(checked ? "annually" : "monthly")}
                id="billing-toggle"
              />
              <Label htmlFor="billing-toggle" className="sr-only">
                Billing cycle toggle
              </Label>
            </div>
            <div className="flex items-center">
              <span className={`text-sm ${billingCycle === "annually" ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                Annually
              </span>
              <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                Save 20%
              </Badge>
            </div>
          </div>
        </div>

        {/* Pricing tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${tier.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <Card className={`flex flex-col h-full relative ${tier.popular ? "border-primary shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      ${billingCycle === "monthly" ? tier.monthlyPrice : tier.annualPrice}
                    </span>
                    <span className="text-muted-foreground ml-2">/ month</span>
                  </div>
                  {billingCycle === "annually" && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      ${tier.monthlyPrice - (billingCycle === "annually" ? tier.annualPrice : 0)} savings per month
                    </p>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {tier.limitations.map((limitation, i) => (
                      <li key={`limitation-${i}`} className="flex items-start text-muted-foreground">
                        <Check className="h-5 w-5 text-muted-foreground/40 shrink-0 mt-0.5 mr-2" />
                        <span className="text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={tier.popular ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Setup options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Setup Options</h3>
            <p className="text-muted-foreground">
              Get help setting up your virtual receptionist or do it yourself.
            </p>
          </div>

          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
              {setupOptions.map((option, index) => (
                <div key={index} className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{option.name}</h4>
                  <div className="mb-2">
                    <span className="text-2xl font-bold">
                      {option.price === 0 ? "Free" : `$${option.price}`}
                    </span>
                    <span className="text-muted-foreground ml-1">one-time</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {option.price === 0 ? "Start Free Trial" : "Book Setup"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ teaser */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Have questions about pricing? Check our
            <a href="#faq" className="text-primary hover:underline mx-1">FAQ section</a>
            or contact our sales team.
          </p>
        </div>
      </div>
    </section>
  );
}