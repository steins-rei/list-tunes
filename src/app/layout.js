import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import { Inter } from "next/font/google";

// CSS
import "./globals.css";
import "./components/comp.module.css"

// CONTAINERS
import TopBar from "./components/topBar";
import MiddleContainer from "./components/middleContainer";
import BottomBar from "./components/bottomBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable:"--font-inter",
  subsets: ["latin"],
})

export const metadata = {
  title: "List Tunes",
  description: "Music Streaming website",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <TopBar />
        <MiddleContainer />
        <BottomBar />
        {children}
      </body>
    </html>
  );
}