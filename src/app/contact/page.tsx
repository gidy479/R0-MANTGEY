"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Acquisition",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  // Prefilled WhatsApp message
  const waMessage = encodeURIComponent(
    "Hello, I am interested in scheduling a private advisory meeting regarding the R.O. Mantey sustainable collections."
  );
  const waUrl1 = `https://wa.me/233244614485?text=${waMessage}`;
  const waUrl2 = `https://wa.me/447404338126?text=${waMessage}`;

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 bg-brand-dark min-h-screen">
        {/* Header Title */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12 border-b border-brand-border/40">
          <AnimateIn direction="up" className="space-y-4 text-left">
            <span className="text-gold tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold block">
              Prestige Consultations
            </span>
            <h1 className="font-serif text-4xl md:text-7xl font-light tracking-wide text-white uppercase leading-none">
              INQUIRIES
            </h1>
          </AnimateIn>
        </section>

        {/* Contact/Booking Columns Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Studio details & WhatsApp bubble */}
            <div className="lg:col-span-5 space-y-10 text-left">
              <AnimateIn direction="right" className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold block">
                  Studio Advisory
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide uppercase">
                  INITIATE DIALOGUE
                </h2>
                <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                  Whether you are an established global collector, museum curator, or sustainable architect, our representatives are ready to facilitate your advisory requirements.
                </p>
              </AnimateIn>

              {/* Detail Cards */}
              <AnimateIn direction="right" delay={0.2} className="space-y-6">
                {/* Email Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gray border border-brand-border p-3 text-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                      Electronic Inquiries
                    </span>
                    <a
                      href="mailto:rorichess@yahoo.com"
                      className="text-sm font-light text-zinc-300 hover:text-gold transition-colors duration-300"
                    >
                      rorichess@yahoo.com
                    </a>
                  </div>
                </div>

                {/* Direct WhatsApp Callout */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gray border border-brand-border p-3 text-gold">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                      Direct WhatsApp Concierge
                    </span>
                    <div className="flex flex-col space-y-2">
                      <a
                        href={waUrl1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-light text-gold hover:text-gold-light transition-colors duration-300"
                      >
                        <MessageCircle size={14} className="fill-gold" />
                        <span>+233 24 461 4485</span>
                      </a>
                      <a
                        href={waUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-light text-gold hover:text-gold-light transition-colors duration-300"
                      >
                        <MessageCircle size={14} className="fill-gold" />
                        <span>+44 7404 338126</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Studio Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gray border border-brand-border p-3 text-gold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                      Studio Location
                    </span>
                    <span className="text-sm font-light text-zinc-300 block">
                      Accra Mall
                    </span>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Right: Booking Form with Submit State */}
            <div className="lg:col-span-7">
              <AnimateIn direction="left" delay={0.3} className="bg-brand-gray border border-brand-border/60 p-8 md:p-12 rounded-lg">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <h3 className="font-serif text-2xl text-white font-light tracking-wide uppercase mb-6">
                      Advisory Request Form
                    </h3>
                    
                    {/* Full Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        Full Name / Organization
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full rounded-md"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        Electronic Mail Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full rounded-md"
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Subject/Inquiry Category */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        Nature of Inquiry
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full cursor-pointer rounded-md"
                      >
                        <option value="Acquisition" className="bg-brand-card text-white">Artwork Acquisition</option>
                        <option value="Commission" className="bg-brand-card text-white">Private Commission Advisory</option>
                        <option value="Exhibition" className="bg-brand-card text-white">Gallery Booking Inquiry</option>
                        <option value="Press" className="bg-brand-card text-white">Press / Media Inquiries</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        Inquiry narrative / details
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full resize-none rounded-md"
                        placeholder="Briefly describe your interest or dynamic inquiry details"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group flex items-center justify-center space-x-3 bg-gold text-brand-dark hover:bg-gold-light hover:text-brand-dark px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 w-full cursor-pointer rounded-md shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_25px_rgba(243,229,171,0.25)]"
                    >
                      <span>Submit Inquiry</span>
                      <Send size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </form>
                ) : (
                  // Submitted success screen with gold circles
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 bg-gold/15 rounded-full border border-gold/45 flex items-center justify-center mx-auto text-gold animate-[pulse_2s_infinite]">
                      <Check size={28} />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                        Transmission Successful
                      </span>
                      <h3 className="font-serif text-3xl text-white font-light tracking-wider uppercase">
                        CONSULTATION INITIATED
                      </h3>
                      <p className="text-zinc-350 font-light text-sm max-w-sm mx-auto leading-relaxed pt-2">
                        Thank you, <span className="text-white font-medium">{formData.name}</span>. Your request has been securely routed to our gallery relations director. An advisory specialist will contact you at <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", subject: "Acquisition", message: "" });
                      }}
                      className="text-xs uppercase tracking-widest text-gold hover:text-white transition-colors duration-300 border-b border-gold/45 pb-0.5 pt-4 cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                )}
              </AnimateIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
