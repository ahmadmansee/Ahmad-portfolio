import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col">
      <PageMeta title="404 — Page not found | Ahmad Mansee" description="Looks like that page took a wrong turn." />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center gap-8 max-w-2xl"
        >
          <span className="font-['Inter_Tight',Helvetica] font-bold text-[#cf3570] text-[120px] md:text-[180px] leading-none">
            404
          </span>
          <h1 className="font-['Inter_Tight',Helvetica] font-medium text-white text-3xl md:text-5xl leading-tight">
            Looks like this page took a wrong turn
          </h1>
          <p className="font-['Inter_Tight',Helvetica] text-[#95989c] text-base md:text-lg leading-relaxed max-w-md">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
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
