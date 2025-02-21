"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

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
      {/* <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </nav>
  );
}
