"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer
      className={`z-50 bottom-0 flex w-full bg-[#2C3030] items-center px-8 py-5 justify-between`}
    >
      <div>
        <p className="text-[#AFB6B4] text-body-3 font-light">All rights reserved.Ampersand VC</p>
      </div>
      
        <Image 
            src={'/images/logo/ampvc-footer.svg'}       
            alt="AMPVC logo"
            width={100}
            height={100}
            quality={75}
            className="object-contain w-11 h-auto" 
        />
    </footer>
  )
}

