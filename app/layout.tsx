import type { Metadata } from "next";
import "./globals.css";
import { Fustat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const fustat = Fustat({ subsets: ['latin'], weight: ['200','300','400','500','600','700','800'] });

export const metadata: Metadata = {
  title: "Ampersand",
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
        className={`${fustat.className} antialiased`}
      >
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
