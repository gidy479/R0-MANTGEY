"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";

export default function Home() {

  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: "https://www.instagram.com/ro_mantey/",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.48 1.966 14.022.935 11.39.934c-5.437 0-9.861 4.371-9.864 9.799-.001 1.77.472 3.498 1.372 5.02L1.879 21.75l6.088-1.596z" />
        </svg>
      ),
      href: "https://wa.me/233244614485",
    },
  ];


  return (
    <>
      <Navbar />

      <main className="flex-grow">
        {/* Fullscreen Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
          {/* Background Image with elegant overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg-v2.png"
              alt="Luxury Fine Art Background"
              fill
              className="object-cover opacity-20 scale-105 animate-[pulse_8s_infinite_alternate]"
              priority
            />
            {/* Elegant Radial Light Gradient for dramatic gallery lighting */}
            <div className="absolute inset-0 bg-radial-gradient bg-gradient-to-t from-brand-dark via-brand-dark/85 to-transparent" />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Left Vertical Social Bar */}
          <div className="hidden md:flex absolute left-8 bottom-12 flex-col items-center space-y-6 z-10">
            <div className="h-20 w-[1px] bg-gold/40" />
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors duration-300 transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center select-none">
            <AnimateIn direction="none" delay={0.2} duration={1.2}>
              <span className="text-gold tracking-[0.4em] uppercase text-[10px] md:text-xs font-semibold mb-4 block luxury-text-glow">
                Pan-African Visionary & Sustainable Fine Art
              </span>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.4} duration={1}>
              <h1 className="font-serif text-5xl md:text-8xl tracking-[0.2em] font-medium text-white mb-6 uppercase leading-none">
                R.O. MANTEY
              </h1>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.6} duration={1}>
              <p className="text-zinc-300 font-light text-sm md:text-lg tracking-[0.15em] max-w-2xl mb-10 leading-relaxed">
                Synthesizing organic soils, volcanic basalt, traditional barkcloth, and raw gold leaf ores into eternal Afrocentric statements.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.8} duration={1}>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link
                  href="/portfolio"
                  className="group relative flex items-center justify-center space-x-3 bg-gold text-brand-dark hover:bg-gold-light hover:text-brand-dark px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 w-52 sm:w-auto shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_25px_rgba(243,229,171,0.25)]"
                >
                  <span>Explore Gallery</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center justify-center space-x-3 border border-gold/45 hover:border-gold-light px-8 py-3.5 text-xs font-light tracking-[0.2em] text-zinc-300 hover:text-gold-light uppercase bg-transparent hover:bg-gold/5 transition-all duration-300 w-52 sm:w-auto"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight size={14} className="text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Bottom Scroll Down Bar */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-10 select-none animate-bounce">
            <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-light">Scroll Down</span>
            <ArrowDown size={14} className="text-gold" />
          </div>
        </section>

        {/* Artistic Statement / Manifesto */}
        <section className="bg-brand-dark py-24 md:py-32 border-b border-brand-border/40 relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none"
            style={{ backgroundImage: "url('/images/artist-statement-bg.jpg')" }}
          />
          {/* Subtle dark radial/linear overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-transparent to-brand-dark/95 pointer-events-none" />
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
            <AnimateIn className="space-y-8 text-center" direction="up">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
               Artist Statement
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-wide text-white italic max-w-4xl mx-auto leading-normal">
                &ldquo;My practice is grounded in the exploration of two interwoven realities: the environmental landscapes we inhabit and the psychological
landscapes we internalize. Working across sculpture and painting, I investigate both the visible and invisible structures that shape
human experience, focusing on how systems form, interact, and transform over time.
In my sculptural work, I engage with environmental sustainability, particularly the themes of afforestation and deforestation. Using
reclaimed materials such as wood and discarded mobile phones, I transform remnants of contemporary life into sculptural forms that
reflect the consequences of consumption, technological excess, and ecological imbalance. These works function as both critique and
renewal. By repurposing waste, I construct narratives of resilience that emphasize reconstruction rather than destruction, proposing
sustainable creation as an act of responsibility and hope.
Alongside this, my painting practice explores what I describe as the unseen. These works examine neurological and psychological
processes that shape our internal worlds. Through abstract compositions inspired by cartography, urban transit systems, and
subconscious associations, I visualize thought patterns, memory structures, emotional pathways, and life journeys. Lines, textures, and
layered marks become tools for mapping mental terrains, revealing what is felt yet rarely visible. Each painting operates as a cognitive
landscape, an imagined imprint of the mind in motion.
Although these two bodies of work differ in material and visual language, they are united by a central inquiry into connection. Whether
addressing the relationship between humanity and nature or the dialogue between the conscious and unconscious self, my work
examines how systems, both organic and psychological, evolve, intersect, and sometimes fracture.
Rooted in my Ghanaian context yet resonant across global spaces, my practice speaks to audiences invested in ecological awareness,
material innovation, and the relationship between environmental and mental wellbeing. Ultimately, my aim is to contribute meaningfully
to ongoing conversations around sustainability and mental health, using art as a site for reflection, transformation, and collective
responsibility. &rdquo;
              </h2>
              <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
              <p className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-light">
                &mdash; R.O. Mantey
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Creative Process Section */}
        <section className="bg-brand-gray py-24 md:py-32 border-b border-brand-border/40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <AnimateIn direction="right" className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold block">
                    Process Documentation
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide uppercase leading-tight">
                    SCULPTING GEOLOGICAL MEMORY
                  </h2>
                  <div className="h-[1px] w-20 bg-gold my-4" />
                </AnimateIn>
                <AnimateIn direction="right" delay={0.2} className="space-y-6">
                  <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                    Our studio practice is built upon a sensory connection to the Earth. Sourcing organic Volta clays, volcanic basalt slabs, and natural binders is a meditative excavation of Pan-African legacy. We bypass digital artificiality to engage with the tactile weight of raw geologic materials.
                  </p>
                  <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                    Watch the visual documentation of R.O. Mantey hand-carving monolithic structures, binding raw laterite aggregate, and laying pure gold leaf veins into volcanic fissures.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/portfolio"
                      className="group inline-flex items-center space-x-3 bg-transparent border border-gold hover:border-gold-light text-gold hover:text-gold-light px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gold/5"
                    >
                      <span>Explore Masterpieces</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </AnimateIn>
              </div>

              {/* Right Column: Embedded Portrait Video */}
              <div className="lg:col-span-5 flex justify-center w-full">
                <AnimateIn direction="left" className="relative w-full max-w-[360px] aspect-[9/16] border border-brand-border bg-brand-dark/40 shadow-[0_8px_30px_rgba(212,175,55,0.1)] gold-border-glow overflow-hidden rounded-lg">
                  <iframe
                    allow="fullscreen"
                    allowFullScreen
                    src="https://drive.google.com/file/d/1GwERTvve_mp7-y0_JBVcrQVTjvF_kHv_/preview"
                    className="absolute inset-0 w-full h-full border-none"
                  />
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Narrative Booking Call to Action */}
        <section className="bg-brand-dark py-24 md:py-32 border-t border-brand-border/40 relative">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8">
            <AnimateIn direction="up">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
                Private Showings & Acquisitions
              </span>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.2}>
              <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-wide text-white">
                ACQUIRE A PIECE OF THE VISION
              </h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.4}>
              <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                R.O. Mantey is open for private collections acquisition, museum consultations, and site-specific sustainable installations. Schedule an advisory call with our studio representatives.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6} className="pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-transparent border border-gold hover:border-gold-light text-gold hover:text-gold-light px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gold/5"
              >
                <span>Initiate Consultation</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </AnimateIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
