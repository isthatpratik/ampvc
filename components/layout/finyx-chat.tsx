import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";

import { motion } from 'motion/react'

export default function FinyxChat() {
  return (
    <div className="sticky top-0 flex h-screen w-full flex-col bg-[#FAFAFA] lg:w-full overflow-hidden items-center justify-between pt-[112px] pb-[56px] px-[40px]">
      <motion.h1 className="text-h3 py-[48px] tracking-tight"
      initial={{ y: "50px", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.8, type: "spring", stiffness: 100, damping: 25 },
      }}>
        Find the right investors effortlessly with <br />
        <span className="bg-gradient-to-r from-[#99DBE0] from-10% via-[#FFAFDF] via-55% to-[#FCEC3B] to-98% bg-clip-text text-transparent">
          AI-powered matching.
        </span>
      </motion.h1>
      <motion.div className="flex items-center justify-center h-[600px] w-full"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1 ,
        opacity: 1,
        transition: { delay: 1, type: "spring", stiffness: 100, damping: 10 },
      }}>
        {/* <Orb
          hoverIntensity={0.2}
          rotateOnHover={true}
          hue={0.5}
          forceHoverState={true}
        /> */}
        <Image
          src={"/images/blob.png"}
          alt="Finyx Blob"
          width={500}
          height={500}
          className="w-auto h-full object-contain"
        />
      </motion.div>
      <motion.div className="border border-[#DCE0DF] w-full h-auto px-4 py-4 flex items-center rounded-[10px]"
      initial={{ y: "50px", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 1.2, type: "spring", stiffness: 100, damping: 25 },
      }}>
        <Image
          src={"/images/icons/amp-gray-icon.svg"}
          alt="Icon"
          width={48}
          height={48}
          className="mr-2 object-contain w-12 h-auto"
        />
        <div className="w-[1px] h-full my-2 bg-[#DCDCDC]" />
        <Input
          className="w-full h-auto border-none bg-transparent shadow-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
          placeholder="Type your prompt here"
        />
        <Button className="ml-2 w-12 h-12 bg-[#181A1A] px-2 flex items-center justify-center rounded-sm">
          <Image
            src={"/images/icons/send.svg"}
            alt="Send Icon"
            width={24}
            height={24}
            className="object-contain w-auto h-4"
          />
        </Button>
      </motion.div>
    </div>
  );
}
