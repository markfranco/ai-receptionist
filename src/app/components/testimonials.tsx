"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const testimonials = [
  {
    id: 1,
    content: "Your Virtual Receptionist has completely transformed how we handle inquiries. We never miss a potential buyer now, even during open houses. It's paid for itself many times over.",
    author: "Sarah Thompson",
    position: "Principal Agent, Thompson Real Estate",
    type: "real-estate",
    rating: 5,
  },
  {
    id: 2,
    content: "As a fitness coach, I'm always training clients and couldn't answer calls. Now I have a 24/7 receptionist that books consultations while I focus on my current clients. My business has grown 30% since implementing this.",
    author: "Mark Davidson",
    position: "Owner, Elite Fitness Training",
    type: "fitness",
    rating: 5,
  },
  {
    id: 3,
    content: "Our clinic needed a solution for after-hours booking and inquiries. Your Virtual Receptionist has reduced our no-shows by 40% and our staff can focus on patients instead of the phone.",
    author: "Dr. Lisa Chen",
    position: "Director, Wellness Allied Health",
    type: "health",
    rating: 4,
  },
  {
    id: 4,
    content: "I was skeptical about an AI answering my calls, but the voice sounds completely natural. My clients can't tell the difference, and I'm capturing leads I would have missed.",
    author: "James Wilson",
    position: "Independent Realtor",
    type: "real-estate",
    rating: 5,
  },
  {
    id: 5,
    content: "The integration with my calendar and CRM is seamless. I love that I get transcripts of every call so I can follow up effectively with potential clients.",
    author: "Amy Rodriguez",
    position: "Personal Trainer & Nutritionist",
    type: "fitness",
    rating: 4,
  },
  {
    id: 6,
    content: "I was skeptical about an AI answering my calls, but the voice sounds completely natural. My clients can't tell the difference, and I'm capturing leads I would have missed.",
    author: "James Wilson",
    position: "Independent Realtor",
    type: "real-estate",
    rating: 5,
  }
];

export default function Testimonials() {
  const [activeType, setActiveType] = useState<string | null>(null);
  
  const filteredTestimonials = activeType
    ? testimonials.filter((t) => t.type === activeType)
    : testimonials;

  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">
              Businesses across NSW are transforming their operations with Your Virtual Receptionist.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveType(null)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-colors",
                activeType === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              All
            </button>
            <button
              onClick={() => setActiveType("real-estate")}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-colors",
                activeType === "real-estate"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              Real Estate
            </button>
            <button
              onClick={() => setActiveType("fitness")}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-colors",
                activeType === "fitness"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              Fitness
            </button>
            <button
              onClick={() => setActiveType("health")}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-colors",
                activeType === "health"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              Health
            </button>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-muted-foreground/40 mb-2" />

                  {/* Content */}
                  <p className="text-muted-foreground mb-6">{testimonial.content}</p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card border rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Ready to try it yourself?</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of NSW businesses that have transformed their customer service with Your Virtual Receptionist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start Your Free Trial</Button>
              <Button size="lg" variant="outline">Book a Demo</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}