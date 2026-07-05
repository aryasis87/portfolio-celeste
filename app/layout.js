import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], style: ["normal", "italic"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Celeste","jobTitle":"Brand Designer & Art Director","url":"https://celeste.pintuweb.com","inLanguage":"en"}};

export const metadata = {
  metadataBase: new URL("https://celeste.pintuweb.com"),
  title: "Celeste — Brand Designer & Art Director",
  description: "Portfolio of Celeste: timeless, editorial brand identity & art direction for premium and lifestyle brands.",
  applicationName: "Celeste",
  keywords: ["brand designer", "art director", "editorial design", "brand identity", "portfolio"],
  authors: [{ name: "Celeste" }],
  creator: "Celeste",
  publisher: "Celeste",
  alternates: { canonical: "https://celeste.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://celeste.pintuweb.com",
    siteName: "Celeste",
    title: "Celeste — Brand Designer & Art Director",
    description: "Portfolio of Celeste: timeless, editorial brand identity & art direction for premium and lifestyle brands.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Celeste — Brand Designer & Art Director" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celeste — Brand Designer & Art Director",
    description: "Portfolio of Celeste: timeless, editorial brand identity & art direction for premium and lifestyle brands.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider>
          <div className="grain" aria-hidden="true" />
          <Navbar />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
