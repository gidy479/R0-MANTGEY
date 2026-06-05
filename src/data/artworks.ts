export type Artwork = {
  id: number;
  title: string;
  category: string;
  medium: string;
  year: string;
  dimensions: string;
  image: string;
  description: string;
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "THE WATCHER IN THE WOODS",
    category: "Sculpture",
    medium: "Aged Cedar, Reclaimed Video Dome & Wire Harness on Basalt Pedestal",
    year: "2026",
    dimensions: "45 x 45 x 115 cm",
    image: "/images/artwork-1.png",
    description: "A striking multi-disciplinary sculpture juxtaposing centuries-old hand-carved cedar wood with modern technological surveillance elements, exploring themes of memory, nature, and systemic monitoring.",
    featured: true,
  },
  {
    id: 2,
    title: "OBSIDIAN GAZE (STUDIO DETAIL)",
    category: "Sculpture",
    medium: "Carved Teak, Recycled Mobile Parts & Gold Leaf Foil",
    year: "2026",
    dimensions: "80 x 60 cm",
    image: "/images/artwork-2.png",
    description: "A detailed studio carving of an ancestral eye, inlaid with discarded mobile phone hardware and bounded by warm metallic gold foil accents, capturing a synthesis of techno-waste and sacred geometry.",
    featured: true,
  },
  {
    id: 3,
    title: "MONOCHROME DIALOGUE",
    category: "Canvas",
    medium: "Organic Ochre Clay, Gesso & Carbon Black on Double Jute Panels",
    year: "2025",
    dimensions: "120 x 120 cm (Diptych)",
    image: "/images/artwork-3.png",
    description: "A bold, minimalist diptych canvas utilizing coarse white clay sweeps across a dark obsidian carbon background, signifying the dualities of ancestral speech and silent gravity.",
    featured: true,
  },
  {
    id: 4,
    title: "PURPLE CONVERSATION (TERRA MEMORY)",
    category: "Canvas",
    medium: "Clay Pigments, Fermented Plant Dye & Resin on Double Cotton Panel",
    year: "2025",
    dimensions: "140 x 140 cm (Diptych)",
    image: "/images/artwork-4.png",
    description: "An abstract expressionist diptych exploring geological colors. Coarse clay sweeps in deep purples and white lines represent the mineral seams running through raw West African soils.",
    featured: false,
  },
  {
    id: 5,
    title: "THE SECULAR EYE (ANCIENT GAZE)",
    category: "Textile & Earth",
    medium: "Salvaged Timber Frame, E-Waste hardware, Jute Cloth & Bronze ores",
    year: "2026",
    dimensions: "120 x 95 cm",
    image: "/images/artwork-5.png",
    description: "A monumental collage representing the collision of African hand-craftsmanship and global electronics waste. Dozens of discarded mobile phone motherboards, screens, and keypads are meticulously framed around a carved wooden eye.",
    featured: true,
  },
  {
    id: 6,
    title: "ABSTRACT EXCURSIONS (STUDIO GRID)",
    category: "Canvas",
    medium: "Acrylic & Charcoal on Paper Panels",
    year: "2025",
    dimensions: "Grid of 8 Panels, 40 x 50 cm each",
    image: "/images/gallery-new-1.jpg",
    description: "A comprehensive grid series of black, white, and primary-toned abstract gestural paintings on paper, exploring raw emotion and organic shapes.",
    featured: true,
  },
  {
    id: 7,
    title: "ECHOES OF THE VALLEYS",
    category: "Textile & Earth",
    medium: "Volta Clays, Acrylic & Mixed Media on Reclaimed Timber Planks",
    year: "2026",
    dimensions: "120 x 140 cm",
    image: "/images/gallery-new-2.jpg",
    description: "A monumental painted panel of vertical reclaimed timber planks, depicting vibrant abstract symbols and traditional patterns in clay pigments and acrylic.",
    featured: true,
  },
  {
    id: 8,
    title: "THE EAGLE'S VIGIL",
    category: "Sculpture",
    medium: "Carved Reclaimed Pine, Hand-woven Textile & Vintage Speedometer",
    year: "2026",
    dimensions: "90 x 135 cm",
    image: "/images/gallery-new-3.jpg",
    description: "An exquisite wood-carving on vertical timber planks featuring an eagle perched on a stump, embellished with salvaged mechanical parts (a speedometer) and traditional hand-woven textile patches.",
    featured: true,
  },
  {
    id: 9,
    title: "SOLAR CHRONICLES (DIPTYCH)",
    category: "Canvas",
    medium: "Volta Ochre Clay, White Gesso & Resin on Double Cotton Panel",
    year: "2025",
    dimensions: "Diptych, 110 x 160 cm each",
    image: "/images/gallery-new-4.jpg",
    description: "A vibrant abstract diptych utilizing rich Ghanaian solar ochre clay and textured white gesso swirls on cotton panels, exploring the warmth and kinetic energy of the West African landscape.",
    featured: true,
  },
  {
    id: 10,
    title: "THE SILENT CONTEMPLATION",
    category: "Textile & Earth",
    medium: "Carved Reclaimed Cedar, Discarded Mobile Phones & Acrylic",
    year: "2026",
    dimensions: "100 x 145 cm",
    image: "/images/gallery-new-5.jpg",
    description: "A powerful ecological statement featuring a carved contemplative primate figure on vertical timber panels, topped with mounted obsolete mobile phones, highlighting the overlap of wildlife habitats and industrial e-waste.",
    featured: true,
  },
];
