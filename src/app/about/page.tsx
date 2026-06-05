"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";

export default function About() {
  const exhibitions = [
    {
      year: "2025",
      title: "A Solo Exhibition by R.O. Mantey",
      location: "Athens, Greece",
      date: "8 – 12 December 2025",
    },
    {
      year: "2025",
      title: "Soundout @ Africa Prosperity Dialogues 2025",
      location: "Accra, Ghana",
      date: "30 January – 1 February 2025",
    },
    {
      year: "2024",
      title: "A Solo Exhibition by R.O. Mantey",
      location: "Athens, Greece",
      date: "18 – 22 November 2024",
    },
    {
      year: "2024",
      title: "A Real Focus on Sustainability Art",
      location: "London, UK",
      date: "15 – 21 July 2024",
    },
    {
      year: "2024",
      title: "Juneteenth Family Gathering",
      location: "Australia",
      date: "22 June 2024",
      note: "A Celebration of Soul Food, Culture & Freedom",
    },
    {
      year: "2007",
      title: "African Art & Ghana’s Economy @ 50",
      location: "Accra, Ghana",
    },
    {
      year: null,
      title: "Brighter Side of Life",
      location: "African Regent Hotel, Accra, Ghana",
    },
    {
      year: null,
      title: "Vibe FM Street Art Exhibition",
      location: "Accra, Ghana",
    },
    {
      year: null,
      title: "Galleria Africana Exhibition",
      location: "Chicago, USA",
    },
    {
      year: null,
      title: "Exhibition",
      location: "Galleria Africana – Osu, Accra, Ghana",
    },
    {
      year: null,
      title: "Exhibition at Coconut Grove Hotel",
      location: "Accra, Ghana",
    },
  ];

  const commissions = [
    {
      year: "2023",
      artwork: "The Life Path I",
      description: "Commissioned by Mr. Nana Bediatuo Asante – Executive Secretary to the President of Ghana.",
    },
    {
      year: "2023",
      artwork: "Responsible 'Golding'",
      description: "Commissioned work by the Minerals Commission of Ghana.",
    },
    {
      year: "2021",
      artwork: "The Covering",
      description: "Sculpture pieces commissioned by Leda H. Limann – Chief of Staff, UN Missions in South Sudan.",
    },
    {
      year: "2020",
      artwork: "The Shield",
      description: "Commissioned by Major General Thomas Oppong-Peprah – Chief of the Defence Staff of the Ghana Armed Forces.",
    },
    {
      year: "2020",
      artwork: "Your World in Your Palm",
      description: "A large-scale mosaic commissioned by MobileContent.com Limited.",
    },
    {
      year: "2020",
      artwork: "African Money",
      description: "Acquired by Mr. Reginald Yofi Grant – CEO, Ghana Investment Promotion Centre.",
      note: "August 2020",
    },
    {
      year: "2015",
      artwork: "Presidential Portrait Painting",
      description: "Acquired by the Election Campaign Office (Asylum Down, Accra) of H.E. Nana Addo Dankwa Akufo-Addo – President of the Republic of Ghana.",
    },
    {
      year: "2010",
      artwork: "Presidential Portrait Painting",
      description: "Acquired by H.E. John Agyekum Kufuor – Former President of Ghana.",
    },
    {
      year: "2008",
      artwork: "Presidential Portrait Painting",
      description: "Acquired by Prof. John Evans Atta Mills – Former President of Ghana.",
    },
    {
      year: "2007",
      artwork: "Jubilee Airport Artworks",
      description: "Commissioned by the Ghana @ 50 Secretariat to create artworks for the Kotoka International Airport (VIP Lounge & Jubilee Lounge) celebrating Ghana's Golden Jubilee.",
    },
    {
      year: null,
      artwork: "The Life Path II",
      description: "Commissioned by Mr. Awuah-Darko – Vanguard Assurance Ghana.",
    },
    {
      year: null,
      artwork: "Sculpture Pieces",
      description: "Commissioned by Ghana Oil Company Limited (GOIL).",
    },
    {
      year: null,
      artwork: "Presidential Portrait Painting",
      description: "Acquired by Access Bank PLC, Ghana.",
    },
    {
      year: null,
      artwork: "The Root of Information",
      description: "Acquired by Kwami Sefa Kayi – Renowned Broadcast Journalist.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 bg-brand-dark">
        {/* Editorial Heading */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16">
          <AnimateIn direction="up" className="space-y-4 text-left">
            <span className="text-gold tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold block">
              The Artist Profile
            </span>
            <h1 className="font-serif text-4xl md:text-7xl font-light tracking-wide text-white uppercase">
              THE VISIONARY
            </h1>
            <div className="h-[1px] w-24 bg-gold mt-4" />
          </AnimateIn>
        </section>

        {/* Biography & Portrait Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Portrait Column */}
            <div className="lg:col-span-5">
              <AnimateIn direction="right" className="relative group">
                {/* Luxury double frame */}
                <div className="absolute inset-4 border border-gold/40 z-10 pointer-events-none translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative aspect-[3/4] w-full overflow-hidden border border-brand-border bg-brand-gray gold-border-glow">
                  <Image
                    src="/images/artist-profile-v2.png"
                    alt="R.O. Mantey"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover scale-100 group-hover:scale-103 transition-transform duration-700"
                    priority
                  />
                </div>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-light mt-4 text-center">
                  R.O. MANTEY &bull; Pan-African Statement &bull; NYC
                </span>
              </AnimateIn>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <AnimateIn direction="left" delay={0.2} className="space-y-6">
                <h3 className="font-serif text-2xl md:text-3xl text-gold font-light tracking-wide italic">
                  &ldquo;Creativity and sustainability can coexist, creating meaningful works that inspire while preserving the environment.&rdquo;
                </h3>
                <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                  <strong>Richard Okyere Mantey (R.O. Mantey)</strong> is a Ghanaian contemporary artist from Larteh-Akuapem in the Eastern Region of Ghana. Known for his commitment to sustainable art, he transforms salvaged wood, metal, and other reclaimed materials into striking abstract artworks that celebrate creativity, culture, and environmental responsibility.
                </p>
                <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                  His passion for art began at an early age and has evolved into a distinctive practice that blends texture, vibrant colours, symbolism, and mixed media. Deeply inspired by Ghanaian Adinkra symbols particularly <em>Nkyinkyim</em> (initiative and dynamism), his works explore themes of transformation, resilience, and the relationship between humanity and nature.
                </p>
                <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                  R.O. Mantey&apos;s artworks have been collected by notable figures, including former and current Presidents of Ghana and legendary boxer Azuma Nelson. His major commissions include artworks for the Ghana @ 50 Golden Jubilee celebrations at the Jubilee Lounge and VIP Lounge of Kotoka International Airport, as well as projects for international organizations and private collectors.
                </p>
              </AnimateIn>

              {/* Quick details block */}
              <AnimateIn direction="up" delay={0.4} className="grid grid-cols-2 gap-6 pt-6 border-t border-brand-border/40">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gold font-medium mb-1">Origin &amp; Inspiration</span>
                  <span className="text-sm text-zinc-300 font-light">Larteh-Akuapem (Eastern Region, Ghana) &bull; Adinkra Symbols</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gold font-medium mb-1">Key Collections</span>
                  <span className="text-sm text-zinc-300 font-light">Presidents of Ghana, Azuma Nelson, Kotoka Airport VIP Lounges</span>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Exhibitions Section */}
        <section className="bg-brand-gray border-t border-brand-border/40 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <AnimateIn className="text-center space-y-4 mb-20" direction="up">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
                Exhibitions &amp; Showcases
              </span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-medium text-white uppercase">
                EXHIBITIONS
              </h2>
              <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
            </AnimateIn>

            {/* Exhibitions List */}
            <div className="max-w-4xl mx-auto space-y-12">
              {exhibitions.map((item, idx) => (
                <AnimateIn
                  key={idx}
                  direction="up"
                  delay={0.03 * idx}
                  className="flex flex-col md:flex-row items-start md:items-baseline gap-4 md:gap-12 pb-8 border-b border-brand-border/20 last:border-b-0 last:pb-0"
                >
                  {/* Year block */}
                  <div className="w-24 shrink-0 text-left">
                    <span className="font-serif text-2xl font-light text-gold leading-none">
                      {item.year || "—"}
                    </span>
                  </div>

                  {/* Title & Location details */}
                  <div className="flex-grow text-left space-y-1">
                    <h4 className="font-serif text-lg text-white font-medium tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-sm text-zinc-300 font-light leading-relaxed">
                      {item.location} {item.date ? `| ${item.date}` : ""}
                    </p>
                    {item.note && (
                      <span className="block text-[10px] uppercase tracking-wider text-gold font-semibold mt-1">
                        {item.note}
                      </span>
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Commissions & Collections Section */}
        <section className="bg-brand-dark border-t border-brand-border/40 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <AnimateIn className="text-center space-y-4 mb-20" direction="up">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
                Legacy &amp; Patronage
              </span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-medium text-white uppercase">
                COMMISSIONS &amp; COLLECTIONS
              </h2>
              <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
            </AnimateIn>

            {/* Commissions List */}
            <div className="max-w-4xl mx-auto space-y-12">
              {commissions.map((item, idx) => (
                <AnimateIn
                  key={idx}
                  direction="up"
                  delay={0.03 * idx}
                  className="flex flex-col md:flex-row items-start md:items-baseline gap-4 md:gap-12 pb-8 border-b border-brand-border/20 last:border-b-0 last:pb-0"
                >
                  {/* Year block */}
                  <div className="w-24 shrink-0 text-left">
                    <span className="font-serif text-2xl font-light text-gold leading-none">
                      {item.year || "—"}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-grow text-left space-y-1">
                    <h4 className="font-serif text-lg text-white font-medium tracking-wide">
                      {item.artwork}
                    </h4>
                    <p className="text-sm text-zinc-300 font-light leading-relaxed">
                      {item.description}
                    </p>
                    {item.note && (
                      <span className="block text-[10px] uppercase tracking-wider text-gold font-semibold mt-1">
                        {item.note}
                      </span>
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
