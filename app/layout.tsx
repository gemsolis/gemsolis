import { Navbar, NavMobile, TopButton, Footer } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gem Solis | Personal Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          <NavMobile />
          {children}
          <Footer />
          <TopButton />
        </div>
      </body>
    </html>
  );
}
