import { motion } from "framer-motion";
import { Link } from "wouter";
import { Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";

const projects = [
  {
    id: "pickup",
    img: "/figmaAssets/thubnail.svg",
    imgAlt: "Map pick up experience",
    title: "Map pick up experience",
    tags: ["Visual Design", "Website Development"],
    bg: "bg-transparent",
    href: "/case-study/pickup",
  },
  {
    id: "edugla",
    img: "/figmaAssets/macbook-mockup-3-1.webp",
    imgAlt: "Edugla AI",
    title: "Edugla AI",
    tags: ["AI platform", "EdTech"],
    bg: "bg-[#d9d9d9]",
    href: "/case-study/edugla",
  },
  {
    id: "voice",
    img: "/figmaAssets/thubnail-1.svg",
    imgAlt: "Voice to Cart",
    title: "Voice to Cart",
    tags: ["Conversation design", "Voice assistant"],
    bg: "bg-transparent",
    href: "/case-study/voice",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const AvailableBadge = () => (
  <div className="inline-flex items-center gap-2">
    <div className="relative flex w-[19px] h-[19px] items-center gap-2 p-[3px] bg-[#29b31d2b] rounded-full">
      <span className="absolute inset-[3px] rounded-full bg-[#2ab41d] opacity-60 animate-ping" />
      <div className="relative w-[13px] h-[13px] bg-[#2ab41d] rounded-full" />
    </div>
    <span className="font-['Be_Vietnam_Pro',Helvetica] font-normal text-white text-base md:text-xl leading-8">
      Available for work
    </span>
  </div>
);

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    className="flex flex-col items-end gap-8 w-full"
  >
    <Link href={project.href}>
      <div className="w-full cursor-pointer group overflow-hidden rounded-2xl">
        <div
          className={`w-full aspect-[618/496] ${project.bg} rounded-2xl overflow-hidden relative`}
        >
          <img
            src={project.img}
            alt={project.imgAlt}
            className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${
              project.id === "edugla"
                ? "object-cover object-top"
                : "object-cover"
            }`}
          />
        </div>
      </div>
    </Link>
    <div className="flex items-center self-stretch w-full">
      <div className="flex flex-col items-start gap-2 flex-1">
        <Link href={project.href}>
          <span className="font-['Inter_Tight',Helvetica] font-medium text-white text-2xl md:text-[28px] leading-[37px] cursor-pointer hover:opacity-80 transition-opacity">
            {project.title}
          </span>
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          {project.tags.map((tag, i) => (
            <span key={tag}>
              <span className="font-['Inter_Tight',Helvetica] font-medium text-[#95989c] text-base leading-[1.6]">
                {tag}
              </span>
              {i < project.tags.length - 1 && (
                <span className="font-['Inter_Tight',Helvetica] font-medium text-[#656567] text-base leading-[1.6] mx-2">
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
      <Link href={project.href}>
        <div className="flex w-12 h-12 bg-[#fcfcfc] border border-[#0e0e11] items-center justify-center rounded-3xl overflow-hidden cursor-pointer hover:bg-white/90 transition-colors flex-shrink-0">
          <img loading="lazy" className="w-6 h-6" alt="Arrow" src="/figmaAssets/icon-2.svg" />
        </div>
      </Link>
    </div>
  </motion.div>
);

export const Home = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <PageMeta
        title="Ahmad Mansee — Product & UX Designer"
        description="Multidisciplinary designer focused on AI-driven digital products. See my work across mobile, web, and AI experiences."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span className="font-['Be_Vietnam_Pro',Helvetica] font-semibold text-white opacity-[0.06] text-[clamp(80px,18vw,280px)] tracking-[-0.04em] whitespace-nowrap leading-none">
            Ahmed Mansee
          </span>
        </div>

        {/* Photo */}
        <div className="relative flex justify-center pt-8 md:pt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-[280px] h-[280px] md:w-[480px] md:h-[480px] lg:w-[620px] lg:h-[620px] relative"
            data-cursor-text="Hello"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 55%, transparent 95%)",
              maskImage:
                "linear-gradient(to bottom, black 55%, transparent 95%)",
            }}
          >
            <img
              className="w-full h-full object-cover"
              alt="Ahmad Mansee"
              src="/figmaAssets/mansee-tr-1-1.webp"
            />
          </motion.div>
        </div>

        {/* Hero CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 md:px-20 py-10 md:py-12 text-center"
        >
          <div className="flex flex-col items-center gap-6 max-w-4xl w-full">
            <AvailableBadge />
            <p className="font-['Inter_Tight',Helvetica] font-medium text-white text-3xl md:text-5xl lg:text-6xl leading-tight opacity-80">
              Hi{" "}
              <motion.span
                className="inline-block origin-[70%_70%]"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
              >
                👋
              </motion.span>
              , I'm Ahmad, a multidisciplinary designer focused on AI-driven
              digital products.
            </p>
            <p className="font-['Inter_Tight',Helvetica] font-normal text-[#b8b8b8] text-base md:text-lg leading-relaxed">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#cf3570] mr-2 align-middle" />
              Currently designing principal product experiences at Jahez Group
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            href="https://drive.google.com/file/d/1H-LutKCWCjBtDySnZGO5wlKe6X9yKGYI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white text-white font-['Be_Vietnam_Pro',Helvetica] font-medium text-base leading-none px-5 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
            data-testid="button-download-cv-hero"
            data-cursor-text="Let's work together"
          >
            <span>Download My CV</span>
            <Download className="w-[18px] h-[18px] stroke-[2.2]" />
          </motion.a>
        </motion.div>
      </section>

      {/* Logos Bar */}
      <div className="w-full overflow-hidden">
        <img
          src="/figmaAssets/logos.svg"
          alt="Client logos"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Projects Section */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-[88px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-14 text-center"
        >
          <h2 className="font-['Inter_Tight',Helvetica] font-medium text-white text-4xl md:text-6xl leading-tight">
            Recent projects
          </h2>
          <p className="max-w-[886px] font-['Inter_Tight',Helvetica] font-normal text-[#95989c] text-base md:text-lg leading-[1.6]">
            A great product isn't just about good design — it's about impact.
            Here are some of my favourite projects that push boundaries and
            create meaningful experiences.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="flex flex-col gap-12 md:gap-14">
          {/* Row 1: two side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12">
            <ProjectCard project={projects[0]} index={0} />
            <ProjectCard project={projects[1]} index={1} />
          </div>
          {/* Row 2: single project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProjectCard project={projects[2]} index={2} />
          </div>
        </div>
      </section>

      <Footer linkedinSrc="/figmaAssets/linkedin.png" />
    </div>
  );
};
