"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  MessageSquare, 
  Database, 
  Calendar, 
  MessagesSquare,
  BadgeCheck,
  Clock,
  UserPlus
} from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";

const features = [
  {
    title: "24/7 Voice Answering",
    description: "Never miss a call again. Your AI receptionist answers calls professionally any time of day or night.",
    icon: Phone,
  },
  {
    title: "Call Recording + Transcripts",
    description: "Every call is recorded and transcribed, giving you perfect records and actionable insights.",
    icon: MessageSquare,
  },
  {
    title: "Firestore Lead Database",
    description: "Automatically capture and store lead information in a secure database you can access anytime.",
    icon: Database,
  },
  {
    title: "Booking + Calendar Sync",
    description: "Let callers book appointments directly into your calendar with seamless integration.",
    icon: Calendar,
  },
  {
    title: "Optional CRM & SMS Follow-ups",
    description: "Automatically enter leads into your CRM and send follow-up SMS messages to boost conversions.",
    icon: MessagesSquare,
  },
];

const businessTypes = [
  { id: "real-estate", label: "Real Estate", icon: "🏠" },
  { id: "fitness", label: "Fitness Coach", icon: "💪" },
  { id: "health", label: "Allied Health", icon: "🩺" },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground">
              Your Virtual Receptionist comes packed with everything you need to capture leads, book appointments, and grow your business.
            </p>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="h-full bg-card hover:shadow-md transition-shadow rounded-lg p-6 border border-border/50">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business type specific features */}
        <div className="mt-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">Tailored for Your Business</h3>
            <p className="text-muted-foreground">
              See how Your Virtual Receptionist helps different businesses in NSW.
            </p>
          </motion.div>

          <Tabs defaultValue="real-estate" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
              {businessTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id} className="flex items-center">
                  <span className="mr-2">{type.icon}</span>
                  <span>{type.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Real Estate Tab */}
            <TabsContent value="real-estate" className="mt-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-muted rounded-lg overflow-hidden shadow-md">
                  <div className="aspect-video relative bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 opacity-60 bg-cover bg-center" 
                             style={{ backgroundImage: `url('/api/placeholder/600/400')` }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4">Perfect for Real Estate Agents</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Never miss a potential buyer's call, even during open houses</span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Schedule property viewings automatically without phone tag</span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Qualify leads with property-specific questions</span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Send automatic SMS with property details after calls</span>
                    </li>
                  </ul>
                  <Link href="/early-access">
                    <Button className="mt-6">Join Early Access</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* Fitness Coach Tab */}
            <TabsContent value="fitness" className="mt-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-muted rounded-lg overflow-hidden shadow-md">
                  <div className="aspect-video relative bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 opacity-60 bg-cover bg-center" 
                             style={{ backgroundImage: `url('/api/placeholder/600/400')` }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4">Ideal for Fitness Coaches</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Answer calls while you're training clients</span>
                    </li>
                    <li className="flex items-start">
                      <UserPlus className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Convert more inquiries into paying clients</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Let clients book and manage sessions 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <MessagesSquare className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Send automatic session reminders and follow-ups</span>
                    </li>
                  </ul>
                  <Link href="/early-access">
                    <Button className="mt-6">Join Early Access</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* Health Clinic Tab */}
            <TabsContent value="health" className="mt-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-muted rounded-lg overflow-hidden shadow-md">
                  <div className="aspect-video relative bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 opacity-60 bg-cover bg-center" 
                             style={{ backgroundImage: `url('/api/placeholder/600/400')` }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4">Essential for Health Clinics</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Provide 24/7 appointment booking for patients</span>
                    </li>
                    <li className="flex items-start">
                      <MessageSquare className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Answer common questions about services and insurance</span>
                    </li>
                    <li className="flex items-start">
                      <Database className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Securely capture and store patient information</span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span>Reduce no-shows with automatic reminders</span>
                    </li>
                  </ul>
                  <Link href="/early-access">
                    <Button className="mt-6">Join Early Access</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}