import { Outfit, Plus_Jakarta_Sans } from "next/font/google"; // Modern, bold fonts
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Heading Font - Bolder, Geometric
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Body Font - Clean, Modern
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://codexea.com'),
  title: {
    default: "Codexea | Digital Marketing & Web Development",
    template: "%s | Codexea"
  },
  description: "Codexea is a premier digital agency specializing in Web Development, Social Media Marketing, SEO, and Business Automation. We build digital experiences that convert.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codexea.com',
    siteName: 'Codexea',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jakarta.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
