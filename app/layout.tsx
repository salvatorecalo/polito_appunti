import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
config.autoAddCss = false;
import { LanguageProvider } from "@/app/(utils)/context/language_context/language_context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polito Appunti",
  description: "Condividi, scarica gratuitamente gli appunti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider>
          <main className="app">
            <section>
              <Navbar />
              {children}
            </section>
            <Footer />
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
