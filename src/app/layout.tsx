import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "R.O. MANTEY | Pan-African Visionary & Sustainable Fine Art",
  description: "Explore the immersive sustainable portfolio of R.O. Mantey. Afrocentric fine arts, raw earth pigments, natural textiles, and high-end sculpture.",
  metadataBase: new URL("https://romantey.com"),
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-brand-dark text-foreground flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

