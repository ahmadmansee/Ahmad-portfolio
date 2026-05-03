import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/PageMeta";

const experiences = [
  {
    title: "Principle product designer (Contractor) - Jahez group",
    location: "Riyadh, Saudi Arabia",
    locationExtra: "Remote",
    period: "May 2025 - Present",
  },
  {
    title: "Lead Product Designer | DeliveryHero",
    location: "Berlin, Germany",
    locationExtra: null,
    period: "Nov 2022 - Oct 2024",
  },
  {
    title: "UI/UX Mentor (Freelancer) | Career Foundry",
    location: "Berlin, Germany",
    locationExtra: null,
    period: "Apr 2020 – Nov 2023",
  },
  {
    title: "Senior Product Designer | FlixMobility",
    location: "Berlin, Germany",
    locationExtra: null,
    period: "Jun 2019 – Nov 2020",
  },
  {
    title: "Senior Product Designer | Home24 SE",
    location: "Berlin, Germany",
    locationExtra: null,
    period: "Aug 2015 – Jun 2019",
  },
];

const toolboxItems = [
  { img: "/figmaAssets/icon.png", label: "Figma" },
  { img: "/figmaAssets/cube-2d-dark-1.png", label: "Cursor" },
  { img: "/figmaAssets/image-76.png", label: "Claude" },
  { img: "/figmaAssets/image-2.png", label: "Jitter (Animation)" },
  { img: "/figmaAssets/image-3.png", label: "Jira" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const AvailableBadge = () => (
  <div className="inline-flex items-center gap-2">
    <div className="flex w-[19px] h-[19px] items-center p-[3px] bg-[#29b31d2b] rounded-full">
      <div className="w-[13px] h-[13px] bg-[#2ab41d] rounded-full" />
    </div>
    <span className="font-['Be_Vietnam_Pro',Helvetica] font-normal text-white text-base leading-8">
      Available for work
    </span>
  </div>
);

export const About = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <PageMeta
        title="About — Ahmad Mansee"
        description="Multidisciplinary product designer with 10+ years across DeliveryHero, FlixMobility, Home24, and now Jahez Group. Berlin-based, working remotely worldwide."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-[420px] xl:w-[520px] flex-shrink-0"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
                <span className="font-['Be_Vietnam_Pro',Helvetica] font-semibold text-white opacity-[0.08] text-[clamp(60px,12vw,180px)] tracking-[-0.04em] whitespace-nowrap leading-none">
                  Ahmed
                </span>
              </div>
              <img
                className="w-full object-cover relative z-10"
                alt="Ahmad Mansee"
                src="/figmaAssets/mansee-tr-1-1.png"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-start justify-center gap-6 max-w-[788px]"
          >
            <AvailableBadge />
            <h1 className="font-['Inter_Tight',Helvetica] font-semibold text-white text-3xl md:text-[42px] leading-tight">
              Hi, I'm Ahmad, a multidisciplinary designer focused on AI-driven
              digital products.
            </h1>
            <p className="font-['Inter_Tight',Helvetica] font-normal text-white text-lg md:text-xl leading-8">
              A product designer, VUI designer, and UI/UX mentor currently
              splitting time between Riyadh and Berlin, with roots in Amman,
              Jordan. My passion lies in creating digital products that meet
              human needs while elevating aesthetics.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                className="h-auto inline-flex bg-white items-center justify-center px-3.5 py-3 rounded-3xl gap-0 hover:bg-white/90"
                variant="ghost"
                asChild
              >
                <a
                  href="mailto:ahmad.mansee@gmail.com"
                  data-cursor-text="Drop me a line"
                  data-testid="button-contact-about"
                >
                  <span className="inline-flex items-center justify-center px-2">
                    <span className="font-['Inter_Tight',Helvetica] font-semibold text-[#222222] text-base leading-[1.6]">
                      Contact&nbsp;&nbsp;Me
                    </span>
                  </span>
                  <img loading="lazy" className="w-6 h-6" alt="Contact" src="/figmaAssets/icon-4.svg" />
                </a>
              </Button>
              <Button
                className="h-auto inline-flex border border-white items-center justify-center px-3.5 py-3 rounded-3xl gap-0 bg-transparent hover:bg-white/10"
                variant="outline"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1H-LutKCWCjBtDySnZGO5wlKe6X9yKGYI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="Let's work together"
                  data-testid="button-download-cv-about"
                >
                  <span className="inline-flex items-center justify-center px-2">
                    <span className="font-['Inter_Tight',Helvetica] font-medium text-white text-base leading-[1.6]">
                      Download My CV
                    </span>
                  </span>
                  <img loading="lazy" className="w-6 h-6" alt="Download" src="/figmaAssets/icon-1.svg" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-[88px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-start gap-14"
        >
          <h2 className="font-['Inter_Tight',Helvetica] font-medium text-white text-4xl md:text-6xl leading-normal">
            Experience
          </h2>
          <div className="flex flex-col items-start gap-4 w-full">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-4 pb-8 w-full border-b border-[#9b9ba1]"
              >
                <div className="flex flex-col md:flex-row items-start justify-between gap-3 md:gap-0">
                  <div className="flex flex-col items-start gap-3">
                    <span className="font-['Inter_Tight',Helvetica] font-normal text-white text-xl md:text-2xl leading-[37px]">
                      {exp.title}
                    </span>
                    <div className="inline-flex items-start gap-2">
                      <span className="font-['Inter_Tight',Helvetica] font-normal text-[#95989c] text-base md:text-lg leading-[1.6]">
                        {exp.location}
                      </span>
                      {exp.locationExtra && (
                        <>
                          <span className="font-['Manrope',Helvetica] font-normal text-[#656567] text-lg leading-[1.6]">
                            /
                          </span>
                          <span className="font-['Inter_Tight',Helvetica] font-normal text-[#95989c] text-base md:text-lg leading-[1.6]">
                            {exp.locationExtra}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <span className="font-['Inter_Tight',Helvetica] font-medium text-[#95989c] text-base md:text-lg leading-normal whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Toolbox Section */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-[88px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-14 md:gap-[60px]"
        >
          <h2 className="font-['Inter_Tight',Helvetica] font-medium text-white text-4xl md:text-6xl text-center leading-normal">
            Toolbox
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 w-full">
            {toolboxItems.map((tool, i) => (
              <motion.div
                key={tool.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col h-[200px] md:h-[250px] justify-center gap-6 md:gap-[30px] px-4 md:px-[72px] py-9 items-center"
              >
                <img
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  alt={tool.label}
                  src={tool.img}
                />
                <span className="font-['Be_Vietnam_Pro',Helvetica] font-normal text-[#aaaab3] text-base md:text-2xl leading-normal text-center">
                  {tool.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer linkedinSrc="/figmaAssets/linkedin-1.png" />
    </div>
  );
};
