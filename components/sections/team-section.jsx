"use client";

import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";

export default function TeamSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] mx-auto">
      {teamMembers.map((member, index) => (
        <FollowerPointerCard key={index} title={member.name}>
          <div className="relative bg-[#F3F3F3] group overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
              className="w-full h-auto object-contain object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </FollowerPointerCard>
      ))}
    </div>
  );
}

const teamMembers = [
  { name: "Aniket", image: "/images/about/01.png" },
  { name: "Michael", image: "/images/about/02.png" },
  { name: "Reuben", image: "/images/about/03.png" },
  { name: "Sharon", image: "/images/about/04.png" },
  { name: "Aishwarya", image: "/images/about/05.png" },
  { name: "Abhijeet", image: "/images/about/06.png" },
  { name: "Komal", image: "/images/about/07.png" },
  { name: "Yogesh", image: "/images/about/08.png" },
  { name: "Michelle", image: "/images/about/09.png" },
  { name: "Sahil", image: "/images/about/10.png" },
  { name: "Isha", image: "/images/about/11.png" },
  { name: "Vishal", image: "/images/about/12.png" },
  { name: "Pratik", image: "/images/about/13.png" },
  { name: "Joana", image: "/images/about/14.png" },
  { name: "Aman", image: "/images/about/15.png" },
  { name: "Dinesh", image: "/images/about/16.png" },
  { name: "Ajay", image: "/images/about/17.png" },
  { name: "Clair", image: "/images/about/18.png" },
  { name: "Supratip", image: "/images/about/19.png" },
  { name: "Sharayu", image: "/images/about/20.png" },
];
