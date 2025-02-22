"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { X } from "lucide-react";

interface MenuItemProps {
  icon: string;
  href: string;
  text: string;
}

function MenuItem({ icon, href, text }: MenuItemProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-lg transition-colors hover:text-primary"
    >
      <div className="relative h-8 w-8">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
      <span>{text}</span>
    </a>
  );
}

export default function Navbar() {
  return (
    <nav
      className={`top-0 z-50 px-[40px] flex w-full items-center bg-transparent justify-between`}
    >
      <div>
        <Link href={"/"}>
          <Image
            src={"/images/logo/ampvc-logo.png"}
            alt="AMPVC logo"
            width={100}
            height={100}
            priority
            quality={75}
            className="object-contain w-16 h-auto"
          />
        </Link>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="border border-[#434343]/10 bg-transparent hover:bg-transparent shadow-none w-14 h-14"
            size="icon"
          >
            <Image
              src={"/images/menu.svg"}
              alt="menu-icon"
              width={100}
              height={100}
              priority
              quality={75}
              className="w-5 h-5"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[800px] p-6">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="grid grid-cols-3 gap-8">
              {/* Startups Column */}
              <div>
                <h3 className="mb-6 text-2xl font-medium">Startups</h3>
                <div className="space-y-6">
                  <MenuItem
                    icon="/images/icons/vision-crafting.svg"
                    href="/"
                    text="Vision Crafting"
                  />
                  <MenuItem
                    icon="/images/icons/exit.svg"
                    href="/"
                    text="Breakthrough to Exit"
                  />
                  <MenuItem
                    icon="/images/icons/scaling.svg"
                    href="/"
                    text="Scaling Fuel"
                  />
                </div>
              </div>

              {/* Investors Column */}
              <div>
                <h3 className="mb-6 text-2xl font-medium">Investors</h3>
                <div className="space-y-6">
                  <MenuItem
                    icon="/images/icons/exit-strategy.svg"
                    href="/"
                    text="Exit Strategy"
                  />
                  <MenuItem
                    icon="/images/icons/portfolio-pulse.svg"
                    href="/"
                    text="Portfolio Pulse"
                  />
                  <MenuItem
                    icon="/images/icons/liquidity-move.svg"
                    href="/"
                    text="Liquidity Move"
                  />
                </div>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="mb-6 text-2xl font-medium">Company</h3>
                <div className="space-y-6">
                  <MenuItem
                    icon="/images/logo/ampvc-logo.png"
                    href="/"
                    text="Contact Us"
                  />
                  <MenuItem
                    icon="/images/logo/ampvc-logo.png"
                    href="/"
                    text="About Us"
                  />
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
