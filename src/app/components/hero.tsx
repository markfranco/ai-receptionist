"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />
      
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Never Miss a Lead Again
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Set up a 24/7 AI voice assistant that answers your calls, books clients, and captures every opportunity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/early-access">
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    Join Early Access
                    <CheckCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Book a Demo
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-4 text-sm"
            >
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Easy 5-min setup</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Local NSW support</span>
              </div>
            </motion.div>
          </div>

          {/* Right content - Video/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-video bg-muted rounded-lg shadow-xl overflow-hidden"
          >
            {isVideoPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="about:blank" // Replace with actual video embed
                title="Product demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="relative w-full h-full bg-gray-800 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {/* Placeholder image */}
                  <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: `url('/api/placeholder/800/450')` }} />
                  
                  {/* Play button */}
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center shadow-lg relative z-10 hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                  </div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-2 rounded text-center">
                    See how Your Virtual Receptionist works in 2 minutes
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}