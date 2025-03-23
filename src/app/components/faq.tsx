"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "How many calls are included in each plan?",
    answer: "Our Starter plan includes up to 100 minutes per month, Pro includes 300 minutes, and Business includes 1,000 minutes. Additional minutes can be purchased if needed. Unused minutes don't roll over to the next month."
  },
  {
    question: "Can I use my own phone number?",
    answer: "Yes! Your Virtual Receptionist works with your existing business phone number. We can port your number to our system, or use call forwarding to direct calls to our service when you're unavailable."
  },
  {
    question: "What happens after hours?",
    answer: "With the Pro and Business plans, Your Virtual Receptionist continues to answer calls 24/7, just as it would during business hours. The Starter plan switches to voicemail mode after your specified business hours."
  },
  {
    question: "How does the calendar integration work?",
    answer: "We integrate with Google Calendar, Microsoft Outlook, and most major calendar services. Your Virtual Receptionist can check your availability in real-time and book appointments directly into your calendar while on a call with your client."
  },
  {
    question: "Will clients know they're talking to an AI?",
    answer: "Your Virtual Receptionist uses advanced natural-sounding voice technology that most callers can't distinguish from a human. However, you can choose to disclose that it's an AI assistant if you prefer. The service is designed to handle calls professionally either way."
  },
  {
    question: "What kind of businesses is this suitable for?",
    answer: "Your Virtual Receptionist is perfect for small businesses in NSW that rely on phone inquiries, including real estate agents, fitness coaches, allied health providers, professional services, trades, and small retail businesses. It's especially valuable for businesses where staff are often unavailable to answer the phone."
  },
  {
    question: "How are leads stored and can I access them?",
    answer: "All lead information is securely stored in a Firestore database. You can access your leads through our web dashboard, export them to CSV, or integrate with your CRM system (available on Pro and Business plans)."
  },
  {
    question: "How long does it take to set up?",
    answer: "With our self-setup option, you can be up and running in as little as 15 minutes. Our Standard and Premium setup services typically take 1-3 business days, depending on your specific requirements and customizations."
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Your Virtual Receptionist.
            </p>
          </motion.div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Additional contact options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-6 bg-muted rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our team is ready to answer any other questions you might have about Your Virtual Receptionist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">Contact Support</Button>
              <Link href="/early-access">
                <Button>Join Early Access</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}