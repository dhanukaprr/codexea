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
  title: "Codexea | Digital Marketing & Web Development",
  description: "Results-driven digital solutions specializing in Web Development, Digital Marketing, and UI/UX Design.",
  robots: {
    index: false,
    follow: false,
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
