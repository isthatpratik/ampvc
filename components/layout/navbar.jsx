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
} from "@/components/ui/dropdown-menu";
import ContactUS from "../forms/contact-us";
import AnimatedButton from "../ui/animated-button";
import Preregister from "../forms/pre-register";

function MenuItem({ icon, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-shrink-0 items-center gap-4 text-body-3 transition-all hover:text-primary w-full text-left"
    >
      <div className="aspect-square relative h-11 w-11 flex-shrink-0">
        <Image
          src={icon}
          alt=""
          fill
          className="object-contain aspect-square flex-shrink-0"
        />
      </div>
      <span>{text}</span>
    </button>
  );
}

export default function Navbar({
  setSelectedService,
  setSelectedSolution,
  setSelectedAboutUs,
}) {
  const [open, setOpen] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);
  const [openPreRegisterForm, setOpenPreRegisterForm] = useState(false);

  // Function to handle menu clicks
  const handleSelection = (type, title, subtitle) => {
    if (type === "service") {
      setSelectedService({ title, subtitle });
      setSelectedSolution(null);
    } else if (type === "solution") {
      setSelectedSolution({ title, subtitle });
      setSelectedService(null);
    }
    setOpen(false);
  };

  const resetSite = () => {
    setSelectedService(null);
    setSelectedSolution(null);
    setSelectedAboutUs(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="top-0 z-50 lg:px-10 px-5 flex w-full items-center bg-transparent justify-between">
        <div>
          <Link href={"/"} onClick={resetSite}>
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

          <DialogContent className="p-6 fixed lg:left-[3vw] overflow-y-auto 2xl:max-w-[35vw] 2xl:left-[8vw] top-[5vh] lg:max-w-[45vw] max-w-[90vw] max-h-fit bg-white shadow-lg rounded-md border-r border-gray-200">
            <div className="relative pt-4">
              <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-8 gap-4 ">
                {/* Startups Column */}
                <div className="grid space-y-6 transition-all duration-300 p-4">
                  <h3 className="text-body-2 font-semibold">Startups</h3>
                  <div className="space-y-6">
                    <MenuItem
                      icon="/images/icons/vision-crafting.svg"
                      text="Vision Crafting"
                      onClick={() =>
                        handleSelection("service", "Vision Crafting", "Strategic Advisory")
                      }
                    />
                    <MenuItem
                      icon="/images/icons/exit.svg"
                      text="Exit Breakthrough"
                      onClick={() =>
                        handleSelection("service", "Exit Breakthrough", "Fast Exit")
                      }
                    />
                    <MenuItem
                      icon="/images/icons/scaling.svg"
                      text="Scaling Fuel"
                      onClick={() => handleSelection("service", "Scaling Fuel", "Growth Capital")}
                    />
                  </div>
                </div>

                {/* Investors Column */}
                <div className="grid space-y-6 p-4 transition-all duration-300">
                  <h3 className="text-body-2 font-semibold">Investors</h3>
                  <div className="space-y-6">
                    <MenuItem
                      icon="/images/icons/exit-strategy.svg"
                      text="Exit Strategy"
                      onClick={() =>
                        handleSelection("solution", "Exit Strategy", "Portfolio Exit")
                      }
                    />
                    <MenuItem
                      icon="/images/icons/portfolio-pulse.svg"
                      text="Portfolio Pulse"
                      onClick={() =>
                        handleSelection("solution", "Portfolio Pulse", "Monitoring & Reporting")
                      }
                    />
                    <MenuItem
                      icon="/images/icons/liquidity-move.svg"
                      text="Liquidity Move"
                      onClick={() =>
                        handleSelection("solution", "Liquidity Move", "Secondary Buyouts")
                      }
                    />
                  </div>
                </div>

                {/* Company Column */}
                <div className="flex flex-col p-4 gap-6 bg-[#F7F8F8] rounded-sm transition-all duration-300">
                  <h3 className="text-body-2 font-semibold">Company</h3>
                  <div className="space-y-6">
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
                    <MenuItem
                      icon="/images/icons/contact-us.svg"
                      text="Contact Us"
                      onClick={() => {
                        setOpenContactForm(false); // Reset state first
                        setTimeout(() => setOpenContactForm(true), 100); // Small delay to re-trigger opening
                        setOpen(false);
                      }}
                    />
                    <MenuItem
                      icon="/images/icons/careers.svg"
                      text="Careers"
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
              <div className="bg-[#1D1D1D] rounded-md mt-6 py-6 px-8 flex justify-between items-center">
                <div className="grid gap-4">
                  <Image
                    src={"/images/logo/fynar-logo.svg"}
                    alt="Fynar AI logo"
                    width={200}
                    height={200}
                    className="object-contain w-[130px] h-auto"
                  />
                  <p>
                    <span className="text-body-2 bg-gradient-to-br from-[#99DBE0] from-10% via-[#FFAFDF] via-67% to-[#FCEC3B] to-98% bg-clip-text text-transparent">
                      The Simple, Intuitive CRM That Gets Things Done
                    </span>
                  </p>
                </div>
                <div className="text-white">
                  <AnimatedButton
                    onClick={() => {
                      setOpen(false); // Close the Navbar menu
                      setTimeout(() => setOpenPreRegisterForm(true), 100); // Delay opening Pre-Register form
                    }}
                  >
                    Pre-Register Now
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </nav>

      {openContactForm && (
        <ContactUS open={openContactForm} setOpen={setOpenContactForm} />
      )}
      {openPreRegisterForm && (
        <Preregister
          open={openPreRegisterForm}
          setOpen={setOpenPreRegisterForm}
        />
      )}
    </>
  );
}
