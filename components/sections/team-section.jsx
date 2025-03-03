"use client";

import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";

export default function TeamSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] mx-auto">
      {teamMembers.map((member, index) => (
        <FollowerPointerCard key={index} title={member.name}>
          <div className="relative bg-[#F3F3F3] group h-full overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
              className="w-full h-full object-contain object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </FollowerPointerCard>
      ))}
    </div>
  );
}

const teamMembers = [
  { name: "Aniket", image: "/images/about/01.jpg" },
  { name: "Michael", image: "/images/about/02.jpg" },
  { name: "Reuben", image: "/images/about/03.jpg" },
  { name: "Sharon", image: "/images/about/04.jpg" },
  { name: "Sonal", image: "/images/about/05.jpg" },
  { name: "Abhijeet", image: "/images/about/06.jpg" },
  { name: "Siddhesh", image: "/images/about/07.jpg" },
  { name: "Yogesh", image: "/images/about/08.jpg" },
  { name: "Nikhil", image: "/images/about/09.jpg" },
  { name: "Isha", image: "/images/about/10.jpg" },
  { name: "Vishal", image: "/images/about/11.jpg" },
  { name: "Aishwarya", image: "/images/about/12.jpg" },
  { name: "Dinesh", image: "/images/about/13.jpg" },
  { name: "Komal", image: "/images/about/14.jpg" },
  { name: "Sahil", image: "/images/about/15.jpg" },
  { name: "Clair", image: "/images/about/16.jpg" },
  { name: "Pratik", image: "/images/about/17.jpg" },
  { name: "Sharayu", image: "/images/about/18.jpg" },
  { name: "Aman", image: "/images/about/19.jpg" },
  { name: "Michelle", image: "/images/about/20.jpg" },
  { name: "Joyce", image: "/images/about/21.jpg" },
  { name: "Arwen", image: "/images/about/22.jpg" },
  { name: "Aaron", image: "/images/about/23.jpg" },
  { name: "Noelia", image: "/images/about/24.jpg" },
];
