import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";

export const Contact = () => {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col">
      <PageMeta
        title="Contact — Ahmad Mansee"
        description="Have a project in mind, a collaboration request, or just want to connect? Let's talk."
      />
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-20 py-16 md:py-[88px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center justify-center gap-10 md:gap-16 w-full max-w-[1040px] text-center"
        >
          <h1 className="font-['Inter_Tight',Helvetica] font-bold text-white text-5xl md:text-7xl lg:text-[100px] leading-tight tracking-[-0.02em]">
            Say Hi! and tell me about your idea
          </h1>
          <p className="font-['Inter_Tight',Helvetica] font-normal text-[#95989b] text-xl md:text-[28px] leading-normal tracking-[-0.02em]">
            Whether you have a project in mind, a collaboration request, or just
            want to connect, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mt-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+4917636067590"
              className="flex flex-col items-center sm:items-start gap-1"
            >
              <span className="font-['Inter_Tight',Helvetica] font-normal text-[#95989c] text-lg md:text-xl">
                Phone:
              </span>
              <span className="font-['Inter_Tight',Helvetica] font-normal text-white text-xl md:text-2xl underline underline-offset-2 hover:opacity-80 transition-opacity">
                +4917636067590
              </span>
            </motion.a>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:ahmad.mansee@gmail.com"
              className="flex flex-col items-center sm:items-start gap-1"
            >
              <span className="font-['Inter_Tight',Helvetica] font-normal text-[#95989c] text-lg md:text-xl">
                Mail:
              </span>
              <span className="font-['Inter_Tight',Helvetica] font-normal text-white text-xl md:text-2xl underline underline-offset-2 hover:opacity-80 transition-opacity">
                ahmad.mansee@gmail.com
              </span>
            </motion.a>
          </div>
        </motion.div>
      </main>

      <Footer linkedinSrc="/figmaAssets/linkedin-2.png" />
    </div>
  );
};
