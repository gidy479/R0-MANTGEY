"use client";

import Link from "next/link";
import { Calendar, MapPin, User, ArrowUpRight, BookOpen, Newspaper, Landmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";

export default function Publications() {
  const mediaFeatures = [
    {
      source: "The Mirror",
      location: "Accra, Ghana",
      date: "Thursday, April 6, 2023",
      title: "Richard Okyere Mantey focuses on sustainable art",
      author: "Efia Akese",
      type: "Cover Feature",
      page: "Page 12",
      description:
        "An in-depth profile detailing Mantey's two-decade-long career, his eco-conscious transition to sustainable art, and his process of incorporating wood scraps, e-waste, and glass into custom relief canvases.",
    },
    {
      source: "The Finder",
      location: "Accra, Ghana",
      date: "Wednesday, April 12, 2023",
      title: "Richard Okyere Mantey showcases Sustainable Art",
      author: "Efia Akese",
      type: "Exhibition Review",
      page: "Page 13",
      description:
        "Critical coverage detailing the physical showcases and public reception of R.O. Mantey's sustainable art catalog, highlighting his environmental advocacy.",
    },
    {
      source: "Corriere della Sera",
      location: "Milan, Italy",
      date: "Monday, March 16, 2020",
      title: "Interwoven Systems at Ikonica Art Gallery",
      author: "Tempo Libero Section",
      type: "Exhibition Feature",
      page: "Page 14",
      description:
        "Milanese exhibition chronicle highlighting R.O. Mantey's solo showcase 'Interwoven Systems' at Ikonica Art Gallery, marking his debut on the Italian fine art scene.",
    },
    {
      source: "Modernghana.com",
      location: "Accra / Online",
      date: "18 June, 2024",
      title: "R.O. Mantey: A Visionary Maestro of Sustainable Artistry",
      author: "Francis Ameyibor",
      type: "Digital Editorial",
      page: "Arts & Culture",
      description:
        "A highly acclaimed profile detailing the philosophical depth of R.O. Mantey's sustainable methodology, mapping Adinkra symbolism to contemporary eco-artistry.",
    },
    {
      source: "The Finder",
      location: "Accra, Ghana",
      date: "Friday, June 21, 2024",
      title: "R.O. Mantey: The Maestro of Sustainability and Artistic Brilliance",
      author: "Elvis Darko",
      type: "Feature Article",
      page: "Page 13",
      description:
        "A prominent profile examining the synthesis of structural woodwork, traditional kente fabric, and industrial waste in R.O. Mantey's signature style.",
    },
    {
      source: "Daily Graphic",
      location: "Accra, Ghana",
      date: "June 28, 2024",
      title: "R.O. Mantey holds exhibition in London",
      author: "News Desk Report",
      type: "News Chronicle",
      page: "Page 13",
      description:
        "Coverage of R.O. Mantey's international exhibition footprint, documenting his London summer show detailing sustainable African fine art to global collectors.",
    },
    {
      source: "Ourhomelandghana.com",
      location: "Accra / Online",
      date: "17 June, 2024",
      title: "African Art and the Impact on our Economy",
      author: "Arts & Lifestyle",
      type: "Economic Insight",
      page: "Lifestyle Editorial",
      description:
        "An analytical look at how sustainable Pan-African fine art creates economic impact through global exports, referencing I-M Rich Art Gallery.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 bg-brand-dark min-h-screen text-foreground selection:bg-gold/30 selection:text-white">
        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16">
          <div className="border-b border-brand-border/40 pb-8">
            <AnimateIn direction="up" className="space-y-4 text-left">
              <span className="text-gold tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold block">
                Press Archive & Chronicles
              </span>
              <h1 className="font-serif text-4xl md:text-7xl font-light tracking-wide text-white uppercase leading-none">
                PUBLICATIONS & NEWS
              </h1>
              <p className="text-zinc-400 font-light text-xs md:text-sm tracking-wider uppercase pt-2 max-w-xl">
                Archived features, reviews, and exhibition critiques documenting R.O. Mantey&apos;s contributions to sustainable fine art.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Featured Newspaper Article: The Mirror */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <AnimateIn direction="up" className="mb-12">
            <div className="flex items-center space-x-3 text-gold mb-3">
              <Newspaper size={18} />
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold">
                Cover Feature &bull; The Mirror
              </span>
            </div>
          </AnimateIn>

          {/* Editorial Newspaper Block */}
          <div className="border border-brand-border bg-brand-gray/30 p-6 md:p-12 gold-border-glow rounded-lg">
            {/* Newspaper Masthead */}
            <div className="border-b-2 border-brand-border pb-8 mb-8 text-center md:text-left">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
                <AnimateIn direction="right" className="space-y-2">
                  <span className="font-serif text-5xl md:text-6xl tracking-wider text-white font-medium italic">
                    The Mirror
                  </span>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[10px] tracking-[0.15em] text-zinc-400 uppercase font-light">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-gold" /> Thursday, April 6, 2023
                    </span>
                    <span className="hidden md:inline text-zinc-700">|</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-gold" /> Accra, Ghana
                    </span>
                    <span className="hidden md:inline text-zinc-700">|</span>
                    <span className="flex items-center gap-1.5">
                      <User size={12} className="text-gold" /> By Efia Akese
                    </span>
                  </div>
                </AnimateIn>
                <AnimateIn direction="left" className="text-center md:text-right">
                  <span className="text-[9px] border border-gold/45 text-gold px-3 py-1 uppercase tracking-[0.2em] rounded-sm font-semibold">
                    Page 12 feature
                  </span>
                </AnimateIn>
              </div>
            </div>

            {/* Article Heading */}
            <div className="max-w-4xl mb-10 text-left">
              <AnimateIn direction="up" delay={0.1}>
                <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white uppercase leading-tight">
                  Richard Okyere Mantey focuses on sustainable art
                </h2>
              </AnimateIn>
            </div>

            {/* Three-Column Newspaper Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 text-zinc-300 font-light text-sm md:text-[15px] leading-relaxed text-justify border-b border-brand-border/40 pb-12">
              {/* Column 1 */}
              <div className="space-y-4">
                <p>
                  <span className="float-left text-5xl md:text-6xl font-serif font-medium text-gold pr-3 pt-1 leading-none">
                    G
                  </span>
                  lobally, there is a growing concern on climate change and environmental degradation and how businesses and individuals can contribute to reducing the negative impacts their activities have on the environment.
                </p>
                <p>
                  Artists communicate different messages with their pieces and for artist Richard Okyere Mantey, his current focus is to use his works to convey messages that highlight the importance of sustainability.
                </p>
                <p>
                  Sustainable art is the creative practice of making artwork that are not harmful to the environment as well as works that address topics such as climate change, waste and social issues.
                </p>
                <p>
                  Mr Mantey is not new to the art space as he has spent close to two decades creating different pieces in different forms — sculpturing, painting and woodwork.
                </p>
                <p>
                  However, recently, for most of his works, he uses waste wood from construction sites and other waste materials from the environment to convey his messages and also to drum home the importance of recycling.
                </p>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <p>
                  In an interview with <em>The Mirror</em> Tuesday, he said he believes no matter how small, every person must make a conscious effort to contribute to saving the environment.
                </p>
                <p>
                  One of his early sustainable arts was incorporating outmoded models of mobile phones, which are usually burnt at some dump sites in Accra, into different shapes of waste wood to create an art piece.
                </p>
                <p>
                  For that commissioned work, the message was connectivity, proper use of mobile phones and how young people could create the world they want with the phones in their hands.
                </p>
                <p>
                  These outmoded mobile phones form a huge part of electronic waste that are crushed and burnt in search of copper and other metals.
                </p>
                <p>
                  Incorporating them in his pieces thus reduces the toxic smoke that rises from burning at these dump sites, saving the environment and the people who live and work nearby.
                </p>
                <p>
                  He moved on to using pieces of pine wood which is common and known to be environmentally friendly.
                </p>
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                <p>
                  &ldquo;Anytime I visit a friend, I look around for waste wood and gather them for my work. Currently, most Ghanaians do not appreciate these kinds of pieces but I believe these are the little ways artists can help protect the earth and hopefully with time, we will build a market around that,&rdquo; he said.
                </p>
                <p>
                  Mr Mantey also has pieces created with wood and old liquor bottles which are left at dump sites.
                </p>
                <p>
                  Most of these pieces he does are for close friends or on commission basis but now, he is ready to expand his collection and also actively promote sustainable art.
                </p>
                <p>
                  He establish the <strong>I-M RICH ART GALLERY</strong> in Accra in 2017, realising the importance of Ghanaian art and the impact it could have on the economy through exports.
                </p>
                <p>
                  The gallery&apos;s main objective is to create artworks that highlight the rich cultural values of Ghanaians and also collaborate with artists who believe in this vision.
                </p>
              </div>
            </div>

            {/* Quote Block & Artworks Grid */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Quote Card */}
              <div className="lg:col-span-5 border-l-2 border-gold pl-6 py-2 space-y-4">
                <h4 className="text-[10px] tracking-[0.2em] text-gold uppercase font-bold">
                  Core Statement
                </h4>
                <blockquote className="font-serif text-xl md:text-2xl text-white italic leading-relaxed">
                  &ldquo;I know that as artists, we like to patent our works, but for the collective good of the environment, I don&apos;t mind if other artists follow the trend and use waste materials in their works too.&rdquo;
                </blockquote>
                <p className="text-xs uppercase tracking-wider text-zinc-500 font-light">
                  &mdash; Richard Okyere Mantey, Interview
                </p>
              </div>

              {/* Mentioned Works Catalog */}
              <div className="lg:col-span-7 space-y-6">
                <h4 className="text-xs tracking-[0.2em] text-white uppercase font-semibold border-b border-brand-border/40 pb-2">
                  Featured Creations Sourced from the Article
                </h4>
                
                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex gap-4 p-4 bg-brand-card/50 border border-brand-border rounded-md hover:border-gold/30 transition-all duration-300">
                    <div className="h-12 w-12 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold rounded-sm shrink-0">
                      <Landmark size={20} />
                    </div>
                    <div>
                      <h5 className="font-serif text-white text-base tracking-wide uppercase">
                        That They All May Be One, Are They?
                      </h5>
                      <p className="text-xs text-zinc-400 font-light mt-1">
                        A collaborative wood relief sculpture showcasing connected human figures carved entirely from salvaged timber blocks, emphasizing unity and community resource preservation.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4 p-4 bg-brand-card/50 border border-brand-border rounded-md hover:border-gold/30 transition-all duration-300">
                    <div className="h-12 w-12 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold rounded-sm shrink-0">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h5 className="font-serif text-white text-base tracking-wide uppercase">
                        Alcohol is Life
                      </h5>
                      <p className="text-xs text-zinc-400 font-light mt-1">
                        An intricate mixed-medium canvas integrating glass fragments from discarded liquor bottles and reclaimed construction timbers.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4 p-4 bg-brand-card/50 border border-brand-border rounded-md hover:border-gold/30 transition-all duration-300">
                    <div className="h-12 w-12 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold rounded-sm shrink-0">
                      <Newspaper size={20} />
                    </div>
                    <div>
                      <h5 className="font-serif text-white text-base tracking-wide uppercase">
                        Eco-Sustainable Lamp Holder
                      </h5>
                      <p className="text-xs text-zinc-400 font-light mt-1">
                        Functional fine-art design converting discarded geometric construction logs into luxury ceiling-mounted light fixtures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exhibition Listing: Corriere della Sera */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
          <AnimateIn direction="up" className="mb-12">
            <div className="flex items-center space-x-3 text-gold mb-3">
              <Landmark size={18} />
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold">
                European Chronology &bull; Corriere della Sera
              </span>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Italian Clipping Mockup Card */}
            <div className="lg:col-span-5 flex">
              <div className="w-full border border-brand-border bg-brand-gray/30 p-8 rounded-lg flex flex-col justify-between gold-border-glow">
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline border-b border-brand-border/40 pb-4">
                    <h3 className="font-serif text-2xl text-white tracking-wide font-medium italic">
                      Corriere della Sera
                    </h3>
                    <span className="text-[9px] tracking-wider text-zinc-400 uppercase font-light">
                      Milano, IT
                    </span>
                  </div>

                  <div className="space-y-4">
                    <span className="text-gold tracking-[0.15em] uppercase text-[10px] font-semibold block">
                      Mostre &bull; Tempo Libero
                    </span>

                    {/* Original Italian Text */}
                    <div className="bg-brand-dark/50 border border-brand-border p-4 rounded-md font-mono text-xs text-zinc-400 leading-relaxed relative">
                      <div className="absolute top-2 right-2 text-[8px] text-zinc-600 uppercase">Original Italian Listing</div>
                      &ldquo;IKONICA ART GALLERY, via Nicola Antonio Porpora 16a, tel. 335 6185927. Interwoven Systems. Opere dell&apos;artista ghanese R.O. Mantey. Fino al 20 marzo. Orario: lunedì sabato 16.30 19.30. Ingresso libero.&rdquo;
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-border/40 mt-8 text-xs text-zinc-500 font-light flex justify-between items-center">
                  <span>Published: March 16, 2020</span>
                  <span className="uppercase text-[9px] text-gold">Tempo Libero &bull; Page 14</span>
                </div>
              </div>
            </div>

            {/* Translation & Exhibition Details */}
            <div className="lg:col-span-7 flex">
              <div className="w-full border border-brand-border bg-brand-card/50 p-8 rounded-lg flex flex-col justify-between">
                <div className="space-y-6 text-left">
                  <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-bold block">
                    Exhibition Translation &amp; Highlights
                  </span>
                  
                  <h3 className="font-serif text-3xl text-white font-light uppercase tracking-wide">
                    Interwoven Systems
                  </h3>
                  
                  <div className="h-[1px] w-16 bg-gold" />

                  <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                    Extended and showcased at the <strong>Ikonica Art Gallery</strong> in Milan, Italy, <em>Interwoven Systems</em> presented R.O. Mantey&apos;s early sculptural explorations. The exhibit examined the intersection of organic African timber structures with discarded electronics hardware, forming a visual commentary on global tech consumption and traditional hand-craftsmanship.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs font-light text-zinc-400">
                    <div className="space-y-1">
                      <span className="block text-[10px] uppercase tracking-[0.15em] text-gold font-medium">Gallery Location</span>
                      <span className="text-white">Ikonica Art Gallery</span>
                      <span className="block text-zinc-400">Via Nicola Antonio Porpora 16a, Milan, Italy</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] uppercase tracking-[0.15em] text-gold font-medium">Duration &amp; Access</span>
                      <span className="text-white">Closed March 20, 2020</span>
                      <span className="block text-zinc-400">Monday &ndash; Saturday (16:30 &ndash; 19:30) &bull; Free Entry</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-brand-border/40 flex justify-end">
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center space-x-2 text-xs tracking-[0.2em] text-gold uppercase hover:text-white transition-colors duration-300 font-medium"
                  >
                    <span>View Exhibition Art</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Press Clippings Archive Directory */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-28 border-t border-brand-border/40 pt-24">
          <AnimateIn direction="up" className="mb-16 text-center md:text-left space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold block">
              Press Archive &bull; Publications Catalog
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-white uppercase tracking-wide">
              THE MEDIA DIRECTORY
            </h2>
            <div className="h-[1px] w-20 bg-gold mx-auto md:mx-0 mt-4" />
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaFeatures.map((item, idx) => (
              <AnimateIn
                key={idx}
                direction="up"
                delay={0.03 * idx}
                className="group border border-brand-border bg-brand-gray/30 p-6 flex flex-col justify-between gold-border-glow rounded-md hover:translate-y-[-4px] transition-all duration-500"
              >
                <div className="space-y-4">
                  {/* Category and Page */}
                  <div className="flex justify-between items-center text-[9px] tracking-wider text-zinc-500 uppercase font-semibold">
                    <span className="text-gold">{item.source}</span>
                    <span>{item.page}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-lg text-white font-medium group-hover:text-gold transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-zinc-400 font-light text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer details */}
                <div className="pt-6 border-t border-brand-border/20 mt-6 flex flex-col space-y-2">
                  <div className="flex justify-between text-[9px] text-zinc-500 font-light uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={10} className="text-gold/80" /> {item.date}</span>
                    {item.author && <span className="flex items-center gap-1"><User size={10} className="text-gold/80" /> {item.author}</span>}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* Media Inquiries Section */}
        <section className="bg-brand-gray/30 border-t border-brand-border/40 py-24 text-center">
          <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-6">
            <AnimateIn direction="up">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
                Press &amp; Media Kit
              </span>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.2}>
              <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white uppercase">
                Media Inquiries &amp; Materials
              </h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.4}>
              <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                For high-resolution photography, catalogs, artist interviews, and official press releases for R.O. Mantey exhibitions, please contact our studio communications team.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6} className="pt-4">
              <a
                href="mailto:rorichess@yahoo.com"
                className="group inline-flex items-center space-x-3 bg-transparent border border-gold hover:border-gold-light text-gold hover:text-gold-light px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gold/5"
              >
                <span>Email Press Relations</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </AnimateIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
