import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ServiceLayout({ title, subtitle, content, onBack }) {
  return (
    <motion.div
      className="px-[40px] py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back Button */}
      <button onClick={onBack} className="flex items-center text-gray-600 mb-6">
        <ArrowLeft className="mr-2" /> Back to Services
      </button>

      {/* Title & Subtitle */}
      <h2 className="text-h2 mb-4">{title}</h2>
      <h3 className="text-h3 text-gray-500 mb-6">{subtitle}</h3>

      {/* Dynamic Content */}
      <div className="text-body-1 text-gray-700">{content}</div>
    </motion.div>
  );
}
