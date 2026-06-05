"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Check, Send, ShieldCheck, Globe, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { artworks, Artwork } from "@/data/artworks";

const countries = [
  { name: "United States", code: "US", dial: "+1" },
  { name: "United Kingdom", code: "GB", dial: "+44" },
  { name: "Ghana", code: "GH", dial: "+233" },
  { name: "Nigeria", code: "NG", dial: "+234" },
  { name: "Germany", code: "DE", dial: "+49" },
  { name: "Canada", code: "CA", dial: "+1" },
  { name: "France", code: "FR", dial: "+33" },
  { name: "South Africa", code: "ZA", dial: "+27" },
  { name: "United Arab Emirates", code: "AE", dial: "+971" },
  { name: "Australia", code: "AU", dial: "+61" },
  { name: "Japan", code: "JP", dial: "+81" },
  { name: "Kenya", code: "KE", dial: "+254" },
  { name: "Italy", code: "IT", dial: "+39" },
  { name: "Netherlands", code: "NL", dial: "+31" },
  { name: "Switzerland", code: "CH", dial: "+41" }
];

function BuyContent() {
  const searchParams = useSearchParams();
  const artworkIdParam = searchParams?.get("artwork") || searchParams?.get("id");
  
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork>(artworks[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "United States"
  });
  const [prevParam, setPrevParam] = useState<string | null | undefined>(undefined);

  if (artworkIdParam !== prevParam) {
    setPrevParam(artworkIdParam);
    if (artworkIdParam) {
      const id = parseInt(artworkIdParam, 10);
      const found = artworks.find((art) => art.id === id);
      if (found) {
        setSelectedArtwork(found);
      }
    } else {
      setSelectedArtwork(artworks[0]);
    }
  }

  const handleArtworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = parseInt(e.target.value, 10);
    const found = artworks.find((art) => art.id === id);
    if (found) {
      setSelectedArtwork(found);
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryName = e.target.value;
    const matched = countries.find(c => c.name === countryName);
    setFormData(prev => ({
      ...prev,
      country: countryName,
      countryCode: matched ? matched.dial : prev.countryCode
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.street ||
      !formData.city ||
      !formData.country
    ) {
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <main className="flex-grow pt-32 bg-brand-dark min-h-screen text-left">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12 border-b border-brand-border/40">
        <AnimateIn direction="up" className="space-y-4">
          <span className="text-gold tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold block">
            Acquisitions Portal
          </span>
          <h1 className="font-serif text-4xl md:text-7xl font-light tracking-wide text-white uppercase leading-none">
            BUY A PAINTING
          </h1>
        </AnimateIn>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <AnimateIn direction="right" className="bg-brand-gray border border-brand-border/60 p-8 md:p-12 rounded-lg">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2 border-b border-brand-border/40 pb-4">
                    <h3 className="font-serif text-2xl text-white font-light tracking-wide uppercase">
                      Acquisition &amp; Shipping Request
                    </h3>
                    <p className="text-zinc-400 font-light text-xs leading-relaxed">
                      Please enter your details below to coordinate private courier shipping and escrow arrangements.
                    </p>
                  </div>

                  {/* Artwork Selection Dropdown */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="artworkSelect" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                      Selected Masterpiece
                    </label>
                    <select
                      id="artworkSelect"
                      value={selectedArtwork.id}
                      onChange={handleArtworkChange}
                      className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full cursor-pointer rounded-md"
                    >
                      {artworks.map((art) => (
                        <option key={art.id} value={art.id} className="bg-brand-card text-white">
                          {art.title} ({art.year}) &mdash; {art.medium.split(" on ")[0]}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Collector Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        Collector Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full rounded-md"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full rounded-md"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* International Phone Section */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="phoneNumber" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                      Contact Phone Number
                    </label>
                    <div className="flex gap-2 w-full">
                      {/* Code selector */}
                      <select
                        id="countryCodeSelect"
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-3 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 rounded-md w-28 md:w-36 cursor-pointer"
                        aria-label="Country dial code"
                      >
                        {countries.map((c) => (
                          <option key={`${c.code}-${c.dial}`} value={c.dial} className="bg-brand-card text-white">
                            {c.code} ({c.dial})
                          </option>
                        ))}
                      </select>
                      {/* Phone input */}
                      <input
                        type="tel"
                        id="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 flex-grow rounded-md"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="space-y-6 pt-4 border-t border-brand-border/40">
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
                      Delivery Address Details
                    </span>

                    {/* Street Address */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="street" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="street"
                        required
                        value={formData.street}
                        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full rounded-md"
                        placeholder="Suite, apartment, street address"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* City */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="city" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full rounded-md"
                          placeholder="City"
                        />
                      </div>

                      {/* State/Region */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="state" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                          State / Province / Region
                        </label>
                        <input
                          type="text"
                          id="state"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full rounded-md"
                          placeholder="State / Region"
                        />
                      </div>

                      {/* ZIP / Postal */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="zip" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                          ZIP / Postal Code
                        </label>
                        <input
                          type="text"
                          id="zip"
                          value={formData.zip}
                          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                          className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full rounded-md"
                          placeholder="Postal code"
                        />
                      </div>
                    </div>

                    {/* Country Selector */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="countrySelect" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        Country
                      </label>
                      <select
                        id="countrySelect"
                        value={formData.country}
                        onChange={handleCountryChange}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full cursor-pointer rounded-md"
                      >
                        {countries.map((c) => (
                          <option key={c.name} value={c.name} className="bg-brand-card text-white">
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Request Button */}
                  <button
                    type="submit"
                    className="group flex items-center justify-center space-x-3 bg-gold text-brand-dark hover:bg-gold-light hover:text-brand-dark px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 w-full cursor-pointer rounded-md shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_25px_rgba(243,229,171,0.25)]"
                  >
                    <span>Request Acquisition Agreement</span>
                    <Send size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </button>
                </form>
              ) : (
                // Success feedback screen
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-gold/15 rounded-full border border-gold/45 flex items-center justify-center mx-auto text-gold animate-[pulse_2s_infinite]">
                    <Check size={28} />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                      Acquisition Intake Logged
                    </span>
                    <h3 className="font-serif text-3xl text-white font-light tracking-wider uppercase">
                      REQUEST SECURED
                    </h3>
                    <div className="text-zinc-350 font-light text-sm max-w-md mx-auto leading-relaxed pt-2 space-y-4">
                      <p>
                        Thank you, <span className="text-white font-medium">{formData.name}</span>. A reserve order hold has been placed on <span className="text-white font-medium italic">{selectedArtwork.title}</span>.
                      </p>
                      <p>
                        Our logistics partner will prepare a shipping quotation and contract to your address in <span className="text-white font-medium">{formData.city}, {formData.country}</span>.
                      </p>
                      <p>
                        We have sent details to <span className="text-white font-medium">{formData.email}</span> and will call your secure line at <span className="text-white font-medium">{formData.countryCode} {formData.phoneNumber}</span> within 12 hours.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        countryCode: "+1",
                        phoneNumber: "",
                        street: "",
                        city: "",
                        state: "",
                        zip: "",
                        country: "United States"
                      });
                    }}
                    className="text-xs uppercase tracking-widest text-gold hover:text-white transition-colors duration-300 border-b border-gold/45 pb-0.5 pt-4 cursor-pointer"
                  >
                    Acquire another piece
                  </button>
                </div>
              )}
            </AnimateIn>
          </div>

          {/* Right Showcase Column */}
          <div className="lg:col-span-5 space-y-8">
            <AnimateIn direction="left" className="border border-brand-border/60 bg-brand-gray p-6 rounded-lg sticky top-36">
              <span className="block text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-bold mb-4">
                Selected Work Specifications
              </span>

              {/* Artwork Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-brand-border bg-brand-dark/40 mb-6 gold-border-glow">
                <Image
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                  priority
                  quality={95}
                />
              </div>

              {/* Artwork Details */}
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-baseline border-b border-brand-border/40 pb-2">
                  <h4 className="font-serif text-xl font-light text-white tracking-wide">
                    {selectedArtwork.title}
                  </h4>
                  <span className="text-xs text-gold font-medium">{selectedArtwork.year}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-light">
                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.15em] text-zinc-500">
                      Category
                    </span>
                    <span className="text-zinc-300">{selectedArtwork.category}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.15em] text-zinc-500">
                      Dimensions
                    </span>
                    <span className="text-zinc-300">{selectedArtwork.dimensions}</span>
                  </div>
                </div>

                <div>
                  <span className="block text-[9px] uppercase tracking-[0.15em] text-zinc-500">
                    Medium and Elements
                  </span>
                  <span className="text-xs text-zinc-300 font-light block mt-0.5 leading-relaxed">
                    {selectedArtwork.medium}
                  </span>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {selectedArtwork.description}
                  </p>
                </div>

                {/* Logistics seals */}
                <div className="pt-6 border-t border-brand-border/40 flex flex-wrap gap-4 text-[10px] text-zinc-500 font-medium">
                  <div className="flex items-center space-x-1.5">
                    <ShieldCheck size={14} className="text-gold" />
                    <span>Insured Escrow</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Globe size={14} className="text-gold" />
                    <span>Global Art Courier</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CreditCard size={14} className="text-gold" />
                    <span>Secure Wire Transfer</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Buy() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen bg-brand-dark flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-t-gold border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
        </div>
      }>
        <BuyContent />
      </Suspense>
      <Footer />
    </>
  );
}
