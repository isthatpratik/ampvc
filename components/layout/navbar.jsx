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
import { motion } from "motion/react";

function MenuItem({ defaultIcon, hoverIcon, text, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      className="flex flex-shrink-0 items-center gap-4 text-body-3 transition-all hover:text-primary w-full text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="aspect-square relative h-11 w-11 flex-shrink-0">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut", stiffness: 100 }}
          className="absolute inset-0"
        >
          <Image
            src={defaultIcon}
            alt={text}
            fill
            className="object-contain aspect-square"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", stiffness: 100 }}
          className="absolute inset-0"
        >
          <Image
            src={hoverIcon}
            alt={text}
            fill
            className="object-contain aspect-square"
          />
        </motion.div>
      </div>
      <span>{text}</span>
    </motion.button>
  );
}

export default function Navbar({
  setSelectedService,
  setSelectedSolution,
  setSelectedAboutUs,
  setSelectedCareers
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
    setSelectedCareers(null);
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

          <DialogContent className="p-6 fixed lg:left-[10vw] left-[5vw] overflow-y-auto 2xl:max-w-[35vw] 2xl:left-[8vw] top-[5vh] lg:max-w-[45vw] max-w-[90vw] max-h-[90vh] bg-white shadow-lg rounded-md border-r border-gray-200">
            <div className="relative pt-4">
              <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-8 gap-4 ">
                {/* Startups Column */}
                <div className="grid space-y-6 transition-all duration-300 p-4">
                  <h3 className="text-body-2 font-semibold">Startups</h3>
                  <div className="space-y-6">
                    <MenuItem
                      defaultIcon="/images/icons/vision-crafting.svg"
                      hoverIcon="/images/icons/vision-crafting-hover.svg"
                      text="Vision Crafting"
                      onClick={() =>
                        handleSelection(
                          "service",
                          "Vision Crafting",
                          "Strategic Advisory"
                        )
                      }
                    />
                    <MenuItem
                      defaultIcon="/images/icons/exit.svg"
                      hoverIcon="/images/icons/exit-breakthrough-hover.svg"
                      text="Exit Breakthrough"
                      onClick={() =>
                        handleSelection(
                          "service",
                          "Exit Breakthrough",
                          "Fast Exit"
                        )
                      }
                    />
                    <MenuItem
                      defaultIcon="/images/icons/scaling.svg"
                      hoverIcon="/images/icons/scaling-fuel-hover.svg"
                      text="Scaling Fuel"
                      onClick={() =>
                        handleSelection(
                          "service",
                          "Scaling Fuel",
                          "Growth Capital"
                        )
                      }
                    />
                  </div>
                </div>

                {/* Investors Column */}
                <div className="grid space-y-6 p-4 transition-all duration-300">
                  <h3 className="text-body-2 font-semibold">Investors</h3>
                  <div className="space-y-6">
                    <MenuItem
                      defaultIcon="/images/icons/exit-strategy.svg"
                      hoverIcon="/images/icons/exit-strategy-hover.svg"
                      text="Exit Strategy"
                      onClick={() =>
                        handleSelection(
                          "solution",
                          "Exit Strategy",
                          "Portfolio Exit"
                        )
                      }
                    />
                    <MenuItem
                      defaultIcon="/images/icons/portfolio-pulse.svg"
                      hoverIcon="/images/icons/portfolio-pulse-hover.svg"
                      text="Portfolio Pulse"
                      onClick={() =>
                        handleSelection(
                          "solution",
                          "Portfolio Pulse",
                          "Monitoring & Reporting"
                        )
                      }
                    />
                    <MenuItem
                      defaultIcon="/images/icons/liquidity-move.svg"
                      hoverIcon="/images/icons/liquidity-move-hover.svg"
                      text="Liquidity Move"
                      onClick={() =>
                        handleSelection(
                          "solution",
                          "Liquidity Move",
                          "Secondary Buyouts"
                        )
                      }
                    />
                  </div>
                </div>

                {/* Company Column */}
                <div className="flex flex-col p-4 gap-6 bg-[#F7F8F8] rounded-sm transition-all duration-300">
                  <h3 className="text-body-2 font-semibold">Ampersand</h3>
                  <div className="space-y-6">
                    <MenuItem
                      defaultIcon="/images/icons/about-us.svg"
                      hoverIcon="/images/icons/about-us-hover.svg"
                      text="About Us"
                      onClick={() => {
                        setSelectedSolution(null);
                        setSelectedService(null);
                        setSelectedAboutUs(true);
                        setSelectedCareers(null);
                        setOpen(false);
                      }}
                    />
                    <MenuItem
                      defaultIcon="/images/icons/careers.svg"
                      hoverIcon="/images/icons/careers-hover.svg"
                      text="Careers"
                      onClick={() => {
                        setSelectedService(null);
                        setSelectedSolution(null);
                        setSelectedAboutUs(false);
                        setSelectedCareers(true);
                        setOpen(false);
                      }}
                    />

                    <MenuItem
                      defaultIcon="/images/icons/contact-us.svg"
                      hoverIcon="/images/icons/contact-us-hover.svg"
                      text="Contact Us"
                      onClick={() => {
                        setOpenContactForm(false); // Reset state first
                        setTimeout(() => setOpenContactForm(true), 100); // Small delay to re-trigger opening
                        setOpen(false);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#1D1D1D] hidden rounded-md mt-6 py-6 px-8 lg:flex justify-between items-center">
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
                    Get Early Access
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