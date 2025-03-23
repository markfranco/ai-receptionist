"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Phone className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Your Virtual Receptionist</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
            How It Works
          </Link>
          <Link href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
          
          <div className="flex items-center space-x-3">
            <ModeToggle />
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Link href="/early-access">
              <Button 
                size="sm" 
                className="bg-primary relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Early Access
                  <span className="ml-1.5 px-1.5 py-0.5 text-xs bg-white/20 rounded-full font-medium">New</span>
                </span>
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-3 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <nav className="container py-4 flex flex-col space-y-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" size="sm">
                Log In
              </Button>
              <Link href="/early-access" className="w-full">
                <Button size="sm" className="w-full relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    Early Access
                    <span className="ml-1.5 px-1.5 py-0.5 text-xs bg-white/20 rounded-full font-medium">New</span>
                  </span>
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}