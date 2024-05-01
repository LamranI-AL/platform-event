import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quark events-platform",
  description:
    "Dans un monde où chaque moment est une opportunité de célébrer, de se divertir ou de se surpasser, l'industrie des festivals au Maroc se révèle être un moteur économique et culturel dynamique. Avec plus de 50 festivals par an, ces événements offrent des opportunités économiques considérables, revitalisant des secteurs clés tels que l'hôtellerie, la restauration et l'artisanat local. Dans ce contexte, notre entreprise, Quark Events, organise le Moroccan Groove Fest, contribuant ainsi à soutenir la scène artistique marocaine tout en dynamisant le secteur du tourisme.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
