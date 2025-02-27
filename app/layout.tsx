import "./globals.css";
import { Fustat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const fustat = Fustat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Ampersand - AI-Powered Advisory | Investor Database & Simple CRM",
  description:
    "Ampersand offers AI-powered advisory services for startups and investors, including Speedy Exit, Secondary Buyouts, Growth Capital, and a FREE CRM for deal flow and sales management.",
  keywords:
    "Ampersand, AI-powered CRM, Investor Matching, Simple CRM, FREE CRM, Investor Database, Startup Advisory, Secondary Buyouts, Growth Capital, Strategic Advisory, Investment Opportunities, Portfolio Management, Venture Capital, Angel Investors, Business Development, Fundraising Tools, Capital Markets, Deal Flow Management, Startup Growth, Equity Management, Financial Analytics, Investment Tracking, Market Insights, Exit Planning",
  authors: [{ name: "Ampersand Advisory" }],
  robots: "index, follow",
  openGraph: {
    title: "Ampersand - AI-Powered Advisory for Startups & Investors",
    description:
      "Explore AI-powered advisory services from Ampersand with tools like FREE CRM for deal flow and sales management, investor matching, and strategic investment opportunities.",
    url: "https://www.ampvc.co",
    siteName: "Ampersand",
    images: [
      {
        url: "https://www.ampvc.co/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ampersand AI-Powered Advisory",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ampersand - Advisory for Startups & Investors | Investor Database & FREE CRM",
    description:
      "Unlock AI-powered advisory services and a FREE CRM from Ampersand for deal flow and investor management.",
    images: ["https://www.ampvc.co/images/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="maMWNaPvCpL7a7oAcYgbekSgjOAFjNdlXFK_5311fJ0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${fustat.className} antialiased`}>
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
