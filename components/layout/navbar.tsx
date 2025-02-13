"use client"

import { useEffect, useRef, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 flex w-full items-center justify-between bg-white px-10 py-14 transition-all duration-300 ${
        scrolled ? "-translate-y-2" : ""
      }`}
    >
      <div className="">
        <Link href={'/'}>
        <Image 
            src={'/images/logo/ampvc-logo.png'}       
            alt="AMPVC logo"
            width={100}
            height={100}
            priority
            quality={75}
            className="object-contain w-16 h-auto" 
        />
        </Link>
      </div>
      <Button variant="ghost" size="icon">
        <Menu className="h-6 w-6" />
      </Button>
    </nav>
  )
}

