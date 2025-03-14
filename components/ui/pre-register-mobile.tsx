import Image from "next/image";
import { Button } from "./button";
import Preregister from "../forms/pre-register";
import { useState } from "react";

export default function PreRegisterMobile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="block lg:hidden px-5 py-8">
      <div className="flex flex-col bg-[#181A1A] rounded-sm p-6 justify-center space-y-6">
        <div className="flex items-center justify-center">
          <div className="w-auto h-fit">
            <Image
              src="/images/logo/platox-logo.svg"
              alt="platoX Logo"
              width={162}
              height={48}
              className="object-contain w-auto h-10"
              priority
              quality={75}
            />
          </div>
        </div>
        <h2 className="text-h4 text-center">
          <span className="bg-gradient-to-r from-[#99DBE0] text-balance from-10% via-[#FFAFDF] via-55% to-[#FCEC3B] to-98% bg-clip-text text-transparent">
            The Simple, Intuitive CRM That Gets Things Done
          </span>
        </h2>
        <h3 className="text-[#AFB6B4] text-body-1 text-balance text-center">
        PlatoX AI is built for those who want simplicity, efficiency, and results. Less hassle, more success.
        </h3>
        <Button onClick={() => setOpen(true)} className="w-full text-black hover:bg-white/80 transition-all duration-300 mx-auto p-6 bg-white shadow-none border-none rounded-full">
            Get Early Access
        </Button>
      </div>
      <Preregister open={open} setOpen={setOpen} />
    </div>
  );
}