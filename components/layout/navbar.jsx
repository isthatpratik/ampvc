"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

function MenuItem({ icon, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 text-body-3 transition-all hover:text-primary w-full text-left"
    >
      <div className="relative h-9 w-9">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
      <span>{text}</span>
    </button>
  );
}

export default function Navbar({ setSelectedService, setSelectedSolution, setSelectedAboutUs }) {
  const [open, setOpen] = useState(false);

  // Function to handle menu clicks
  const handleSelection = (type, title) => {
    if (type === "service") {
      setSelectedService({ title });
      setSelectedSolution(null);
    } else if (type === "solution") {
      setSelectedSolution({ title });
      setSelectedService(null);
    }
    setOpen(false); // Close the menu
  };

  return (
    <nav className="top-0 z-50 px-[40px] flex w-full items-center bg-transparent justify-between">
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
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>

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

        <DialogContent className="max-w-screen-md top-48 mx-auto p-6 bg-white shadow-lg rounded-sm">
          <div className="relative">
            <div className="grid grid-cols-3 gap-8">
              {/* Startups Column */}
              <div>
                <h3 className="mb-6 text-body-2 font-semibold">Startups</h3>
                <div className="space-y-6">
                  <MenuItem
                    icon="/images/icons/vision-crafting.svg"
                    text="Vision Crafting"
                    onClick={() =>
                      handleSelection("service", "Vision Crafting")
                    }
                  />
                  <MenuItem
                    icon="/images/icons/exit.svg"
                    text="Breakthrough to Exit"
                    onClick={() =>
                      handleSelection("service", "Breakthrough to Exit")
                    }
                  />
                  <MenuItem
                    icon="/images/icons/scaling.svg"
                    text="Scaling Fuel"
                    onClick={() => handleSelection("service", "Scaling Fuel")}
                  />
                </div>
              </div>

              {/* Investors Column */}
              <div>
                <h3 className="mb-6 text-body-2 font-semibold">Investors</h3>
                <div className="space-y-6">
                  <MenuItem
                    icon="/images/icons/exit-strategy.svg"
                    text="Exit Strategy"
                    onClick={() => handleSelection("solution", "Exit Strategy")}
                  />
                  <MenuItem
                    icon="/images/icons/portfolio-pulse.svg"
                    text="Portfolio Pulse"
                    onClick={() =>
                      handleSelection("solution", "Portfolio Pulse")
                    }
                  />
                  <MenuItem
                    icon="/images/icons/liquidity-move.svg"
                    text="Liquidity Move"
                    onClick={() =>
                      handleSelection("solution", "Liquidity Move")
                    }
                  />
                </div>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="mb-6 text-body-2 font-semibold">Company</h3>
                <div className="space-y-6">
                  <MenuItem
                    icon="/images/icons/contact-us.svg"
                    text="Contact Us"
                    onClick={() => handleSelection("solution", "Contact Us")}
                  />
                  <MenuItem
                    icon="/images/icons/about-us.svg"
                    text="About Us"
                    onClick={() => {
                      setSelectedSolution(null);
                      setSelectedService(null);
                      setSelectedAboutUs(true);
                      setOpen(false);
                    }}
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
