import "./globals.css";
import { Inter } from "next/font/google";
import { SITE_NAME, SITE_URL, SITE_IMG } from "@/lib/constants";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { BooksContextProvider } from "@/context/itemsContext";

export const metadata = {
  title: SITE_NAME,
  description: "Descubre la galería de obras artísticas curadas por Hugo Londoño D'Antonio, un espacio donde la creatividad y emoción se entrelazan, invitando a la admiración y la inspiración.",
  keywords: "galeria de arte, librería Mazuren, curación de arte, Trastalleres, arte contemporáneo Bogotá, exhibiciones artísticas, arte Mazuren",
  author: "Incuantaq",
  robots: "index, follow",
  og: { // Open Graph tags para Facebook
    title: SITE_NAME,
    description: "Descubre la galería de obras artísticas curadas por Hugo Londoño D'Antonio, un espacio donde la creatividad y emoción se entrelazan.",
    url: SITE_URL,
    image: SITE_IMG,
    type: "website",
    site_name: SITE_NAME,
    fb: { // Facebook specific property 
      app_id: "Trastalleresgaleria", 
      profile: "https://www.facebook.com/Trastalleresgaleria/", 
    },
  },
  twitter: { // Meta tags para Twitter
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Explora la creatividad en la galería curada por nuestro director de arte Hugo Londoño D'Antonio.",
    image: SITE_IMG,
  }
};
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen relative min-h-screen">
        <Navbar />
          <BooksContextProvider>
            <main>{children}</main>
          </BooksContextProvider>
        <Footer />
      </body>
    </html>
  );
}
