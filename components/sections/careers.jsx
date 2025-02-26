"use client";

import { motion } from "framer-motion";

export default function CareersSection() {
  return (
    <div className="sticky top-0 flex flex-col space-y-4 bg-[#FAFAFA] lg:w-full overflow-hidden justify-start py-14 px-10 max-h-screen overflow-y-auto h-full">
      <motion.div
        className="h-fit flex flex-col 2xl:gap-16 justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.3,
          delay: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
      >
        <div className="flex flex-col gap-4 border-b border-[#B9BFBE] pb-4">
          <h3 className="text-h3 text-balance">Join our Team</h3>
          <p className="text-body-1">
            At Ampersand, we are committed to driving business growth through
            strategic financial solutions. If you're passionate about finance,
            strategy, and helping businesses thrive, we’d love to have you on
            board.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="h-fit flex flex-col 2xl:gap-16 justify-between py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.3,
          delay: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
      >
        <div className="flex flex-col gap-10">
          <h3 className="text-h5 text-balance">Current Openings</h3>
          <div className="grid space-y-6">
            <div className="grid space-y-1 border-b-[1px] border-b-[#B9BFBE] pb-2">
              <h6 className="text-h6">Financial Analyst</h6>
              <p className="text-body-3 text-black/60">
              Responsible for analyzing financial data, preparing reports, and providing insights to support business decisions and optimize financial performance.
              </p>
            </div>
            <div className="grid space-y-1 border-b-[1px] border-b-[#B9BFBE] pb-2">
              <h6 className="text-h6">AI Development Intern</h6>
              <p className="text-body-3 text-black/60">
              Assist in developing and implementing AI models, conducting research, and supporting the development of machine learning algorithms.
              </p>
            </div>
            <div className="grid space-y-1 border-b-[1px] border-b-[#B9BFBE] pb-2">
              <h6 className="text-h6">Legal Intern</h6>
              <p className="text-body-3 text-black/60">
              Assist with legal research, document preparation, and support attorneys in case management and compliance tasks.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="h-fit flex flex-col 2xl:gap-16 justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.3,
          delay: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
      >
        <div className="flex flex-col gap-2 p-4 border-[#C8CDCC] border">
          <h5 className="text-h5">How To Apply</h5>
          <p className="text-body-1 max-w-md">
            Send your resume at{" "}
            <span className="font-semibold">careers@ampvc.gmail.com</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        className="h-fit flex flex-col 2xl:gap-16 justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.3,
          delay: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
      >
        <div className="flex flex-col gap-2 p-4 my-6">
          <h4 className="text-h5 text-balance">
            Join us in shaping the future of financial growth!
          </h4>
        </div>
      </motion.div>
    </div>
  );
}
