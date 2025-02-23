"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

function MenuItem({ icon, href, text }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 text-body-3 transition-all hover:text-primary"
    >
      <div className="relative h-9 w-9">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
      <span>{text}</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

      {/* Dialog Menu inside Left Section */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
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
        </DialogTrigger>

        <DialogContent
          className="max-w-screen-md top-48 mx-auto p-6 bg-white shadow-lg rounded-sm"
        >
          <div className="relative">
            {/* Close Button */}
            <DialogClose asChild>
            </DialogClose>

            <div className="grid grid-cols-3 gap-8">
              {/* Startups Column */}
              <div>
                <h3 className="mb-6 text-body-2 font-semibold">Startups</h3>
                <div className="space-y-6">
                  <MenuItem
                    icon="/images/icons/vision-crafting.svg"
                    href=""
                    text="Vision Crafting"
                  />
                  <MenuItem
                    icon="/images/icons/exit.svg"
                    href=""
                    text="Breakthrough to Exit"
                  />
                  <MenuItem
                    icon="/images/icons/scaling.svg"
                    href=""
                    text="Scaling Fuel"
                  />
                </div>
              </div>

              {/* Investors Column */}
              <div>
                <h3 className="mb-6 text-body-2 font-semibold">Investors</h3>
                <div className="space-y-6">
                  <MenuItem
                    icon="/images/icons/exit-strategy.svg"
                    href=""
                    text="Exit Strategy"
                  />
                  <MenuItem
                    icon="/images/icons/portfolio-pulse.svg"
                    href=""
                    text="Portfolio Pulse"
                  />
                  <MenuItem
                    icon="/images/icons/liquidity-move.svg"
                    href=""
                    text="Liquidity Move"
                  />
                </div>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="mb-6 text-body-2 font-semibold">Company</h3>
                <div className="space-y-6">
                  <MenuItem
                    icon="/images/icons/contact-us.svg"
                    href=""
                    text="Contact Us"
                  />
                  <MenuItem
                    icon="/images/icons/about-us.svg"
                    href=""
                    text="About Us"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
