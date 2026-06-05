"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

type Artwork = {
  id: number;
  title: string;
  category: string;
  medium: string;
  year: string;
  dimensions: string;
  image: string;
  description: string;
};

type LightboxProps = {
  artwork: Artwork | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export default function Lightbox({ artwork, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (!artwork) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [artwork, onClose, onPrev, onNext]);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
      >
        {/* Background Click Close */}
        <div className="absolute inset-0 cursor-default" onClick={onClose} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-gray-400 hover:text-gold p-3 hover:bg-gold/10 rounded-full transition-all duration-300 cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X size={24} />
        </button>

        {/* Navigation Buttons */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-gray-400 hover:text-gold p-3 hover:bg-gold/10 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Previous artwork"
          >
            <ChevronLeft size={30} />
          </button>
        )}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-gray-400 hover:text-gold p-3 hover:bg-gold/10 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Next artwork"
          >
            <ChevronRight size={30} />
          </button>
        )}

        {/* Content Box */}
        <div className="relative max-w-6xl w-full h-full max-h-[85vh] grid grid-cols-1 lg:grid-cols-3 gap-8 items-center z-10 pointer-events-none">
          {/* Image Pane */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="lg:col-span-2 relative w-full h-full min-h-[300px] flex items-center justify-center pointer-events-auto"
          >
            <div className="relative w-full h-full max-h-[75vh] w-full">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-contain"
                priority
                quality={100}
              />
            </div>
          </motion.div>

          {/* Details Pane */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-brand-card/95 backdrop-blur-md border border-brand-border p-6 md:p-8 rounded-lg space-y-6 pointer-events-auto text-left shadow-2xl"
          >
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                {artwork.category}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-white">
                {artwork.title}
              </h2>
            </div>

            <hr className="border-zinc-800" />

            <div className="space-y-4">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-gray-500">Medium</span>
                <span className="text-sm font-light text-gray-300">{artwork.medium}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-gray-500">Dimensions</span>
                <span className="text-sm font-light text-gray-300">{artwork.dimensions}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-gray-500">Description</span>
                <p className="text-sm font-light text-gray-400 leading-relaxed mt-1">
                  {artwork.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
