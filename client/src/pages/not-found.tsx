import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col">
      <PageMeta title="404 — Page not found | Ahmad Mansee" description="Looks like that page took a wrong turn." noIndex />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center overflow-hidden px-6 py-16 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center max-w-4xl w-full"
        >
          <div className="relative flex items-end justify-center h-[240px] sm:h-[310px] md:h-[390px] w-full mb-8">
            <div className="absolute left-1/2 bottom-4 h-48 w-48 md:h-72 md:w-72 -translate-x-1/2 rounded-full bg-[#cf3570]/25 blur-[70px]" />
            <span className="font-['Inter_Tight',Helvetica] font-bold text-[#cf3570] text-[100px] sm:text-[170px] md:text-[240px] leading-none -mr-3 sm:-mr-5 md:-mr-8 select-none">
              4
            </span>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10 h-[230px] w-[150px] sm:h-[300px] sm:w-[225px] md:h-[380px] md:w-[280px] overflow-hidden"
            >
              <img
                src="/figmaAssets/mansee-tr-1-1.webp"
                alt="Ahmad Mansee looking for the missing page"
                className="h-full w-full object-cover object-top"
              />
            </motion.div>
            <span className="font-['Inter_Tight',Helvetica] font-bold text-[#cf3570] text-[100px] sm:text-[170px] md:text-[240px] leading-none -ml-3 sm:-ml-5 md:-ml-8 select-none">
              4
            </span>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="absolute top-2 right-2 sm:right-12 md:right-20 rounded-2xl rounded-bl-sm border border-white/10 bg-[#17171a] px-4 py-3 text-left shadow-xl"
            >
              <p className="font-['Inter_Tight',Helvetica] text-sm md:text-base text-white">
                Hmm... not here either.
              </p>
            </motion.div>
          </div>
          <h1 className="font-['Inter_Tight',Helvetica] font-medium text-white text-3xl md:text-5xl leading-tight mb-5">
            This page wandered off
          </h1>
          <p className="font-['Inter_Tight',Helvetica] text-[#95989c] text-base md:text-lg leading-relaxed max-w-lg mb-8">
            I looked everywhere, but the page you're after doesn't exist or has moved. Let's get you back to the good stuff.
          </p>
          <Link href="/">
            <button
              className="inline-flex items-center gap-2 bg-white text-black font-['Inter_Tight',Helvetica] font-semibold text-base px-6 py-3 rounded-3xl hover:bg-white/90 transition-colors"
              data-testid="button-back-home"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </button>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
