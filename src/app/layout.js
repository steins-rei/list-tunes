import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import { Inter } from "next/font/google";

// CSS
import "./globals.css";
import "./components/ui/ui.module.css"

// CONTAINERS
import TopBar from "./components/ui/Topbar";
import MiddleContainer from "./components/ui/MiddleContainer";
import BottomBar from "./components/ui/BottomBar";

// MIDDLE CONTAINERS
import ContentPane from "./components/ui/ContentPane";
import SidebarLeft from "./components/ui/SidebarLeft";
import SidebarRight from "./components/ui/SidebarRight";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <TopBar />
        <MiddleContainer>
          <SidebarLeft />
          <ContentPane>{children}</ContentPane>
          <SidebarRight />
        </MiddleContainer>
        <BottomBar />
      </body>
    </html>
  );
}