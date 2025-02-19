import { motion } from "framer-motion";

const Blob = () => {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-black">
      {/* Main Wobbling Blob */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#F1E13A] via-[#FFAFDF] to-[#99DBE0] opacity-80"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
          x: [0, -20, 20, 0],
          y: [0, 10, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Surrounding Orbiting Blobs */}
      {[...Array(3)].map((_, i) => {
        const colors = ["#F0E02C", "#EDA1CF", "#95C9CD"];
        return (
          <motion.div
            key={i}
            className="absolute w-72 h-72 border-2 rounded-full"
            style={{ borderColor: colors[i % colors.length] }}
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default Blob;
