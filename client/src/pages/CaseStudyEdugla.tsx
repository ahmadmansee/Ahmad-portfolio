import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const CV_LINK = "https://drive.google.com/file/d/1H-LutKCWCjBtDySnZGO5wlKe6X9yKGYI/view?usp=sharing";

export const CaseStudyEdugla = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      {/* Back button only */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-8">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <button className="flex items-center gap-2 text-[#95989c] hover:text-white transition-colors group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-['Inter_Tight',Helvetica] text-base">Back to Work</span>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Video section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full max-w-[1440px] mx-auto px-6 md:px-20 pb-16"
      >
        <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#111]">
          <iframe
            src="https://drive.google.com/file/d/1fQfETPDUWSsQr2EobZ1PUNqDnp0KRAUC/preview"
            className="w-full h-full"
            allow="autoplay"
            allowFullScreen
            title="Edugla AI video"
          />
        </div>
      </motion.div>

      {/* Case study image */}
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

      {/* Standalone footer row */}
      <div className="w-full bg-black border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-8 flex items-center justify-between gap-6 flex-wrap">
          <Link href="/">
            <button className="flex items-center gap-2 text-[#95989c] hover:text-white transition-colors group text-sm">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to portfolio
            </button>
          </Link>
          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#222] font-['Inter_Tight',Helvetica] font-semibold text-sm px-4 py-2.5 rounded-3xl hover:bg-white/90 transition-colors"
          >
            Download My CV
            <img className="w-5 h-5" alt="Download" src="/figmaAssets/icon-1.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};
