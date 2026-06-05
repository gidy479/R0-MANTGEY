"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import AnimateIn from "@/components/AnimateIn";
import { artworks, Artwork } from "@/data/artworks";

export default function Portfolio() {
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  // Next / Prev logic for the Lightbox
  const handlePrev = () => {
    if (!activeArtwork) return;
    const currentIndex = artworks.findIndex((art) => art.id === activeArtwork.id);
    const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    setActiveArtwork(artworks[prevIndex]);
  };

  const handleNext = () => {
    if (!activeArtwork) return;
    const currentIndex = artworks.findIndex((art) => art.id === activeArtwork.id);
    const nextIndex = (currentIndex + 1) % artworks.length;
    setActiveArtwork(artworks[nextIndex]);
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 bg-brand-dark min-h-screen">
        {/* Page Title */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12">
          <div className="border-b border-brand-border/40 pb-8">
            <AnimateIn direction="up" className="space-y-4 text-left">
              <span className="text-gold tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold block">
                Sustainable Catalog
              </span>
              <h1 className="font-serif text-4xl md:text-7xl font-light tracking-wide text-white uppercase leading-none">
                THE GALLERY
              </h1>
            </AnimateIn>
          </div>
        </section>

        {/* Dynamic Masonry Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {artworks.map((art, idx) => {
                // Determine staggered heights for dynamic editorial masonry look
                const aspectRatios = [
                  "aspect-[3/4]",   // Stately tall
                  "aspect-square",  // Structured square
                  "aspect-[4/5]",   // Standard vertical
                  "aspect-[3/4]",
                  "aspect-[4/3]",   // Sleek landscape
                  "aspect-[3/4]"
                ];
                const ratioClass = aspectRatios[idx % aspectRatios.length];

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    key={art.id}
                    className="group flex flex-col justify-start cursor-pointer"
                    onClick={() => setActiveArtwork(art)}
                  >
                    {/* Image Block */}
                    <div className={`relative ${ratioClass} w-full mb-4 overflow-hidden border border-brand-border bg-brand-gray gold-border-glow`}>
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover scale-100 group-hover:scale-104 transition-transform duration-700"
                        quality={95}
                      />
                      
                      {/* Luxury Blackout & Gold Glow Hover Overlay */}
                      <div className="absolute inset-0 bg-black/75 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          className="bg-zinc-900/90 backdrop-blur-sm p-4 rounded-full border border-gold/45 mb-4 text-gold"
                        >
                          <Eye size={20} />
                        </motion.div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold mb-1 block">
                          {art.category}
                        </span>
                        <h3 className="font-serif text-xl text-white font-light tracking-wide uppercase">
                          {art.title}
                        </h3>
                        <span className="text-[9px] uppercase tracking-[0.1em] text-gray-300 font-light block mt-2">
                          View details &amp; dimensions
                        </span>
                      </div>
                    </div>

                    {/* Standard Text Footer */}
                    <div className="flex justify-between items-baseline pt-2 px-1">
                      <span className="font-serif text-lg tracking-wide text-white group-hover:text-gold transition-colors duration-300">
                        {art.title}
                      </span>
                      <span className="text-[10px] tracking-wider text-zinc-400 font-light uppercase">
                        {art.year}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>

      {/* Shared Lightbox Overlay Portal */}
      <Lightbox
        artwork={activeArtwork}
        onClose={() => setActiveArtwork(null)}
        onPrev={artworks.length > 1 ? handlePrev : undefined}
        onNext={artworks.length > 1 ? handleNext : undefined}
      />

      <Footer />
    </>
  );
}
