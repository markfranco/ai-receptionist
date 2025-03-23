"use client";

import { motion } from "framer-motion";
import { 
  Settings, 
  UserRound, 
  CalendarClock, 
  ChevronRight 
} from "lucide-react";
import { Button } from "./ui/button";

const steps = [
  {
    title: "Setup your business info",
    description: "Enter your business details, working hours, and the types of calls you handle. It only takes 5 minutes.",
    icon: Settings,
  },
  {
    title: "Personalize your voice agent",
    description: "Choose your AI receptionist's voice, customize greetings, and set up your call handling preferences.",
    icon: UserRound,
  },
  {
    title: "Start capturing leads automatically",
    description: "Your virtual receptionist goes live, answering calls 24/7, booking appointments, and storing lead information.",
    icon: CalendarClock,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/50">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Getting started with Your Virtual Receptionist is simple. Follow these three steps to never miss an important call again.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-muted-foreground/20 -z-10">
                  <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground/40" />
                </div>
              )}
              
              {/* Card */}
              <div className="bg-card hover:shadow-md transition-shadow rounded-lg p-6 h-full flex flex-col">
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/5 text-primary-foreground text-xs font-medium mb-2">
                    Step {index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{step.description}</p>
                
                {index === steps.length - 1 && (
                  <Button className="w-full mt-2" variant="outline">
                    Get Started Now
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video or demo preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl shadow-xl"
        >
          <div className="aspect-video bg-gray-800 flex items-center justify-center">
            <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: `url('/api/placeholder/900/500')` }} />
            <div className="relative z-10 text-white text-center p-8">
              <h3 className="text-2xl font-bold mb-2">See it in action</h3>
              <p className="mb-4 max-w-md mx-auto">
                Watch how a real estate agent uses Your Virtual Receptionist to never miss a potential buyer.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90">
                Watch Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}