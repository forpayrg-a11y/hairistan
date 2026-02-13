"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-40">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2 text-primary-dark transition-colors duration-300">
            <span className="material-symbols-outlined text-accent-teal text-3xl">content_cut</span>
            <Link href="/" className="text-xl font-black uppercase tracking-tight">
              Hairistan
            </Link>
          </div>

          
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link href="#home" className="text-xs font-black tracking-widest text-foreground/80 hover:text-accent-teal transition-colors uppercase">
              Home  
            </Link>
            <Link href="#treatments" className="text-xs font-black tracking-widest text-foreground/80 hover:text-accent-teal transition-colors uppercase">
              Treatments
            </Link>
            <Link href="#before-after" className="text-xs font-black tracking-widest text-foreground/80 hover:text-accent-teal transition-colors uppercase">
              Before & After
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <button className="rounded-lg bg-primary-dark px-8 py-3 text-sm font-bold text-white hover:bg-accent-teal transition-all shadow-md uppercase tracking-wide">
              Free Consultation
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-dark hover:text-accent-teal focus:outline-none transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-white animate-in slide-in-from-top duration-300">
          <div className="space-y-4 px-6 py-8">
            <Link
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-black tracking-widest text-foreground hover:text-accent-teal transition-colors uppercase"
            >
              Services
            </Link>
            <Link
              href="#gallery"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-black tracking-widest text-foreground hover:text-accent-teal transition-colors uppercase"
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-black tracking-widest text-foreground hover:text-accent-teal transition-colors uppercase"
            >
              Testimonials
            </Link>
            <button className="w-full mt-4 rounded-lg bg-primary-dark py-4 text-sm font-bold text-white hover:bg-accent-teal transition-all shadow-md uppercase tracking-wide">
              Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
