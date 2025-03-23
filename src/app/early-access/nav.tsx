"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Phone, Menu, X, ArrowLeft } from "lucide-react";
import { ModeToggle } from "../components/ui/mode-toggle";

export default function EarlyAccessNav() {
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
        <nav className="hidden md:flex items-center space-x-3">
          <ModeToggle />
          <Link href="/">
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
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
            <Link href="/">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full flex items-center justify-center gap-1"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 