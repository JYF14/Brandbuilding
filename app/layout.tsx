import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { UIProvider } from "@/lib/ui-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MONTREVE — Made for Higher Places",
  description:
    "MONTREVE is a luxury fashion house inspired by the French and Swiss Alps. Timeless design, exceptional materials and understated elegance come together in collections for men and women.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-snow text-espresso font-sans antialiased">
        <CartProvider>
          <UIProvider>
            <Header />
            <CartDrawer />
            <SearchOverlay />
            <main className="flex-1">{children}</main>
            <Footer />
          </UIProvider>
        </CartProvider>
      </body>
    </html>
  );
}
