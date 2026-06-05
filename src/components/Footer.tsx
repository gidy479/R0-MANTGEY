"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-border/40 pt-20 pb-12 relative overflow-hidden">
      {/* Massive subtle background logo watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none text-[12vw] font-serif text-white/[0.015] tracking-[0.2em] font-medium leading-none whitespace-nowrap text-center z-0">
        R.O. MANTEY
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.2em] text-white">R.O. MANTEY</span>
              <span className="block text-[8px] tracking-[0.4em] uppercase text-gold font-light -mt-1 pl-0.5">
                Sustainable Fine Art
              </span>
            </Link>
            <p className="text-zinc-400 font-light text-sm max-w-sm leading-relaxed">
              R.O. Mantey art combines texture and vivid colors and blends artistic expression elements to produce exquisite pieces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-gold transition-colors duration-300 font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-gold transition-colors duration-300 font-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-zinc-400 hover:text-gold transition-colors duration-300 font-light">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-zinc-400 hover:text-gold transition-colors duration-300 font-light">
                  Publications
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-gold transition-colors duration-300 font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Connect</h4>
            <ul className="space-y-2 text-sm text-zinc-400 font-light">
              <li>
                <span className="block text-[10px] tracking-[0.1em] text-zinc-500 uppercase">Email Address</span>
                <a href="mailto:rorichess@yahoo.com" className="hover:text-gold transition-colors duration-300">
                  rorichess@yahoo.com
                </a>
              </li>
              <li>
                <span className="block text-[10px] tracking-[0.1em] text-zinc-500 uppercase">Phone / WhatsApp</span>
                <div className="flex flex-col space-y-1">
                  <a href="https://wa.me/233244614485" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">
                    +233 24 461 4485
                  </a>
                  <a href="https://wa.me/447404338126" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">
                    +44 7404 338126
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-4 pt-4">
                <a href="https://www.instagram.com/ro_mantey/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://wa.me/233244614485" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.48 1.966 14.022.935 11.39.934c-5.437 0-9.861 4.371-9.864 9.799-.001 1.77.472 3.498 1.372 5.02L1.879 21.75l6.088-1.596z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="border-t border-brand-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <div>
            &copy; {new Date().getFullYear()} R.O. MANTEY. All rights reserved. Sourced with sustainability.
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 border border-brand-border hover:border-gold px-4 py-2 rounded-full transition-all duration-300 text-zinc-400 hover:text-gold cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
