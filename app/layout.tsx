import type { Metadata } from "next";
import "./globals.css";
import { Fustat } from "next/font/google";

const fustat = Fustat({ subsets: ['latin'], weight: ['200','300','400','500','600','700','800'] });

export const metadata: Metadata = {
  title: "AMPVC",
  description: "Empowering Startups - Elevating Outcomes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fustat.className} antialiased bg-[url('/images/background/pattern.svg')] bg-no-repeat bg-center bg-cover`}
      >
        {children}
      </body>
    </html>
  );
}
