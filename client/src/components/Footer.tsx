import { Button } from "@/components/ui/button";

const contactInfo = [
  { label: "Phone:", value: "+4917636067590" },
  { label: "Mail:", value: "ahmad.mansee@gmail.com" },
];

export const Footer = ({ linkedinSrc = "/figmaAssets/linkedin.png" }: { linkedinSrc?: string }) => (
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
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <Button
            className="h-auto inline-flex bg-white items-center justify-center px-3.5 py-3 rounded-3xl gap-0 hover:bg-white/90"
            variant="ghost"
            asChild
          >
            <a href="https://drive.google.com/file/d/1H-LutKCWCjBtDySnZGO5wlKe6X9yKGYI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center justify-center px-2 py-0">
                <span className="font-['Inter_Tight',Helvetica] font-semibold text-[#222222] text-base leading-[1.6]">
                  Download My CV
                </span>
              </span>
              <img className="w-6 h-6" alt="Download" src="/figmaAssets/icon-1.svg" />
            </a>
          </Button>
          <a
            href="https://www.linkedin.com/in/ahmadmansee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition-opacity"
            data-testid="link-linkedin"
          >
            <img className="w-8 h-auto" alt="LinkedIn" src={linkedinSrc} loading="lazy" />
          </a>
          <a
            href="mailto:ahmad.mansee@gmail.com"
            aria-label="Email"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
            data-testid="link-email"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);
