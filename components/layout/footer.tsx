"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FooterSection {
  title: string;
  links: { text: string; href: string }[];
}

const footerData: FooterSection[] = [
  {
    title: "Startups",
    links: [
      { text: "Aliquet nec", href: "#" },
      { text: "Diam hac", href: "#" },
      { text: "Eu libero", href: "#" },
      { text: "Massa aliquet", href: "#" },
      { text: "Aliquet vitae", href: "#" },
      { text: "Odio volutpat", href: "#" },
    ],
  },
  {
    title: "Investors",
    links: [
      { text: "Consectetur at", href: "#" },
      { text: "Dignissim viverra", href: "#" },
      { text: "Mauris tellus", href: "#" },
      { text: "Augue convallis", href: "#" },
      { text: "Urna iaculis", href: "#" },
      { text: "Nisl enim", href: "#" },
    ],
  },
  {
    title: "Ampersand",
    links: [
      { text: "Strategic Advisory", href: "#" },
      { text: "Fast Exit", href: "#" },
      { text: "Growth Capital", href: "#" },
      { text: "Portfolio Exit", href: "#" },
      { text: "Monitoring & Reporting", href: "#" },
      { text: "Secondary Buyouts", href: "#" },
    ],
  },
  {
    title: "FynarAI",
    links: [
      { text: "Consectetur at", href: "#" },
      { text: "Dignissim viverra", href: "#" },
      { text: "Mauris tellus", href: "#" },
      { text: "Augue convallis", href: "#" },
      { text: "Urna iaculis", href: "#" },
      { text: "Nisl enim", href: "#" },
    ],
  },
];

export default function Footer() {
  const [hoveredSection, setHoveredSection] = React.useState<string | null>(
    null
  );
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);

  return (
    <footer className="relative bg-[#1C1D1C] p-8 text-gray-400">
      {/* Header Text */}
      <div className="mb-8 flex">
        <h2 className="text-h6 font-normal leading-tight flex gap-6">
          <div className="h-full w-2 text-[#AFB6B4] rounded-sm bg-gradient-to-b from-[#FCEC3B] from-5% via-[#FFAFDF] via-30% to-[#99DBE0] to-50%" />
          <div className="flex-wrap indent-8">
            <span className=" text-white leading-tight">Ampersand</span> offers
            expert advisory services to well-funded startups, guiding them
            through critical growth stages. Leverage our expertise for
            exponential growth and unlock your business&apos;s full potential.
          </div>
        </h2>
      </div>

      <div className="bg-[#313534] my-8 w-full h-[1px]"></div>
      {/* Navigation Grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {footerData.map((section) => (
          <div
            key={section.title}
            onMouseEnter={() => setHoveredSection(section.title)}
            onMouseLeave={() => setHoveredSection(null)}
            className={`transition-opacity duration-300 ${
              hoveredSection && hoveredSection !== section.title
                ? "opacity-30"
                : "opacity-100"
            }`}
          >
            <h3
              className={`text-label-2 font-medium ${
                section.title === "FynarAI"
                  ? "bg-gradient-to-r from-[#99DBE0] via-[#FFAFDF] to-[#FCEC3B] to-50% bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              {section.title}
            </h3>
            <div className="w-full h-[1px] bg-[#313534] my-3"></div>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li
                  key={link.text}
                  onMouseEnter={() => setHoveredLink(link.text)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group relative"
                >
                  <AnimatePresence>
                    {hoveredLink === link.text && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -left-6 top-1"
                      >
                        <ArrowRight className="h-4 w-4 text-white" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:opacity-100 text-[#798682] text-body-3"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Logo and Bottom Links */}
      <div className="border-gray-800">
        <div className="">
          <Image
            src="/images/ampersand-footer.svg"
            alt="Ampersand"
            width={1000}
            height={100}
            className="w-full h-auto object-contain py-8"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex font-light text-[#798682] text-caption gap-8">
            <Link href="#" className="hover:text-white">
              Terms of use
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              GDPR
            </Link>
          </div>
          <div className="">

          </div>
          <div className="text-[#798682] font-light text-caption flex items-center gap-2">
            <span>All rights reserved. Ampersand VC</span>
          </div>
          <div className="flex">
            <Image
              src="/images/logo/ampvc-footer.svg"
              alt="Ampersand Logo"
              width={100}
              height={100}
              className="w-6 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
