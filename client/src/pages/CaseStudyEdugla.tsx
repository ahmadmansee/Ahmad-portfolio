import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const CaseStudyEdugla = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <button className="flex items-center gap-2 text-[#95989c] hover:text-white transition-colors mb-8 group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-['Inter_Tight',Helvetica] text-base">Back to Work</span>
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-4 mb-12"
        >
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-['Inter_Tight',Helvetica] font-medium text-[#95989c] text-base">AI platform</span>
            <span className="text-[#656567] text-base">/</span>
            <span className="font-['Inter_Tight',Helvetica] font-medium text-[#95989c] text-base">EdTech</span>
          </div>
          <h1 className="font-['Inter_Tight',Helvetica] font-medium text-white text-4xl md:text-6xl leading-tight">
            Edugla AI
          </h1>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        <img
          src="/figmaAssets/edugla.png"
          alt="Edugla AI case study"
          className="w-full h-auto block"
        />
      </motion.div>

      <Footer linkedinSrc="/figmaAssets/linkedin.png" />
    </div>
  );
};
