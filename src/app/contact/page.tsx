"use client";

import { useState } from "react";
import { Mail, MapPin, Send, MessageCircle, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Artwork Purchase",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const waMessage = encodeURIComponent(
    "Hello, I am interested in R.O. Mantey's sustainable artwork."
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
              Inquiries &amp; Commissions
            </span>
            <h1 className="font-serif text-4xl md:text-7xl font-light tracking-wide text-white uppercase leading-none">
              GET IN TOUCH
            </h1>
          </AnimateIn>
        </section>

        {/* Contact Page Grid Layout */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Contact Info & Guidelines */}
            <div className="lg:col-span-5 space-y-10 text-left">
              <AnimateIn direction="right" className="space-y-6">
                <p className="text-zinc-300 font-light text-base leading-relaxed">
                  Thank you for your interest in my work. For commissions, exhibitions, collaborations, artwork purchases, or general inquiries, please use the contact form or reach out through my email and social media channels.
                </p>
                <p className="text-zinc-400 font-light text-sm italic leading-relaxed border-l border-gold/45 pl-4">
                  I welcome opportunities that promote art, sustainability, environmental awareness, and community engagement.
                </p>
              </AnimateIn>

              {/* Essential Contact Details */}
              <AnimateIn direction="right" delay={0.1} className="space-y-6 pt-6 border-t border-brand-border/30">
                {/* Professional Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gray border border-brand-border p-3 text-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                      Email Address
                    </span>
                    <a
                      href="mailto:rorichess@yahoo.com"
                      className="text-sm font-light text-zinc-300 hover:text-gold transition-colors duration-300"
                    >
                      rorichess@yahoo.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Concierge */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gray border border-brand-border p-3 text-gold">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                      WhatsApp Concierge
                    </span>
                    <div className="flex flex-col space-y-2">
                      <a
                        href={waUrl1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-light text-gold hover:text-gold-light transition-colors duration-300"
                      >
                        <span>+233 24 461 4485</span>
                      </a>
                      <a
                        href={waUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-light text-gold hover:text-gold-light transition-colors duration-300"
                      >
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

              {/* Social Media Channels */}
              <AnimateIn direction="right" delay={0.2} className="space-y-3 pt-6 border-t border-brand-border/30">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Social Channels
                </span>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/ro_mantey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-gold transition-colors duration-300"
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <span className="text-zinc-600">|</span>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-gold transition-colors duration-300"
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </AnimateIn>

              {/* Guidelines / Optional Info cards */}
              <AnimateIn direction="right" delay={0.3} className="space-y-6 pt-6 border-t border-brand-border/30">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-1">
                    Commission Information
                  </h4>
                  <p className="text-zinc-400 font-light text-xs leading-relaxed">
                    Currently accepting commissions. Please include project details, dimensions, timeline, and budget in your message.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-1">
                    Exhibition &amp; Collaboration Requests
                  </h4>
                  <p className="text-zinc-400 font-light text-xs leading-relaxed">
                    Galleries, curators, brands, and organizations are welcome to contact me regarding exhibitions and collaborative projects.
                  </p>
                </div>
              </AnimateIn>
            </div>

            {/* Right: Modern Contact Form */}
            <div className="lg:col-span-7">
              <AnimateIn direction="left" delay={0.2} className="bg-brand-gray border border-brand-border/60 p-8 md:p-12 rounded-lg">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <h3 className="font-serif text-2xl text-white font-light tracking-wide uppercase mb-6">
                      Send a Message
                    </h3>
                    
                    {/* Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full rounded-md"
                        placeholder="Your Name"
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
                        placeholder="yourname@domain.com"
                      />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        Subject
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full cursor-pointer rounded-md"
                      >
                        <option value="Artwork Purchase" className="bg-brand-card text-white">Artwork Purchase</option>
                        <option value="Commission" className="bg-brand-card text-white">Commission Inquiries</option>
                        <option value="Exhibition" className="bg-brand-card text-white">Exhibitions &amp; Collaborations</option>
                        <option value="General" className="bg-brand-card text-white">General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-brand-card border border-brand-border/60 focus:border-gold px-4 py-3 text-sm text-white font-light tracking-wide focus:outline-none transition-colors duration-300 w-full resize-none rounded-md"
                        placeholder="Write your message here..."
                      />
                    </div>

                    {/* Send Button */}
                    <button
                      type="submit"
                      className="group flex items-center justify-center space-x-3 bg-gold text-brand-dark hover:bg-gold-light hover:text-brand-dark px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 w-full cursor-pointer rounded-md shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_25px_rgba(243,229,171,0.25)]"
                    >
                      <span>Send Message</span>
                      <Send size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </form>
                ) : (
                  // Success State
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 bg-gold/15 rounded-full border border-gold/45 flex items-center justify-center mx-auto text-gold animate-[pulse_2s_infinite]">
                      <Check size={28} />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                        Message Sent
                      </span>
                      <h3 className="font-serif text-3xl text-white font-light tracking-wider uppercase">
                        THANK YOU
                      </h3>
                      <p className="text-zinc-350 font-light text-sm max-w-sm mx-auto leading-relaxed pt-2">
                        Your message has been received. I will review your inquiry and get back to you at <span className="text-white font-medium">{formData.email}</span> shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", subject: "Artwork Purchase", message: "" });
                      }}
                      className="text-xs uppercase tracking-widest text-gold hover:text-white transition-colors duration-300 border-b border-gold/45 pb-0.5 pt-4 cursor-pointer"
                    >
                      Send another message
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
