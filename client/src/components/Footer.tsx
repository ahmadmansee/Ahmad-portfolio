import { motion } from "framer-motion";
import { Download, Linkedin } from "lucide-react";

const contactInfo = [
  { label: "Phone:", value: "+4917636067590" },
  { label: "Mail:", value: "ahmad.mansee@gmail.com" },
];

const CV_URL = "https://drive.google.com/file/d/1H-LutKCWCjBtDySnZGO5wlKe6X9yKGYI/view?usp=sharing";

export const Footer = ({ linkedinSrc }: { linkedinSrc?: string }) => (
  <footer className="w-full bg-black border-t border-white/10">
    <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-[88px] flex flex-col gap-12 md:gap-[60px]">
      <h2 className="font-['Inter_Tight',Helvetica] font-normal text-white text-4xl md:text-6xl leading-tight">
        Ready to Build Something Great Together?
      </h2>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-[50px]">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex flex-col items-start gap-1">
              <span className="font-['Inter_Tight',Helvetica] font-normal text-[#95989c] text-lg md:text-xl leading-normal">
                {info.label}
              </span>
              <a
                href={info.label === "Mail:" ? `mailto:${info.value}` : `tel:${info.value}`}
                className="font-['Inter_Tight',Helvetica] font-normal text-white text-xl md:text-2xl leading-normal underline hover:text-white/80 transition-colors"
                data-testid={info.label === "Mail:" ? "link-footer-email" : "link-footer-phone"}
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0e0e11] rounded-full px-5 py-3 font-['Inter_Tight',Helvetica] font-semibold text-base leading-none hover:bg-white/90 transition-colors shadow-sm"
            data-testid="button-download-cv-footer"
          >
            <span>Download My CV</span>
            <Download className="w-[18px] h-[18px] stroke-[2.2]" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08, rotate: -4 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            href="https://www.linkedin.com/in/ahmadmansee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/15 hover:bg-[#cf3570] hover:border-[#cf3570] transition-colors"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5" fill="currentColor" strokeWidth={0} />
          </motion.a>
        </div>
      </div>
    </div>
  </footer>
);
