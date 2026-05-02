import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Workflow, PenLine, Play } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CaseStudyNav } from "@/components/CaseStudyNav";
import { PageMeta } from "@/components/PageMeta";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";

const PICKUP_VIDEO = "https://drive.google.com/file/d/1ipsZbVaDGm0jmFdUsEd9jRz3g6F4VKCy/preview";



const VideoPlayer = ({ src, poster }: { src: string; poster: string }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="w-full rounded-3xl overflow-hidden bg-black" style={{ aspectRatio: "9/16", maxWidth: 380, margin: "0 auto" }}>
      {playing ? (
        <iframe
          src={src}
          className="w-full h-full"
          allow="autoplay"
          allowFullScreen
          title="Pick-Up Map Experience video"
        />
      ) : (
        <div className="relative w-full h-full cursor-pointer group" onClick={() => setPlaying(true)}>
          <img
            src={poster}
            alt="Pick-Up Map Experience preview"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-black fill-black ml-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-['Inter_Tight',Helvetica] font-semibold text-[#ebebeb] text-2xl md:text-[32px] leading-tight">
    {children}
  </h2>
);

const Quote = ({ label, text, children }: { label: string; text?: string; children?: React.ReactNode }) => (
  <div className="bg-[#16171b] flex gap-6 items-start px-8 py-5 rounded-2xl w-full">
    <span className="font-['Inter_Tight',Helvetica] font-semibold text-[#cf3570] text-lg shrink-0 whitespace-nowrap">{label}</span>
    {text && <p className="font-['Inter_Tight',Helvetica] text-[#a5a5a5] text-base leading-relaxed">{text}</p>}
    {children}
  </div>
);

const ProblemSolution = ({ problem, solution }: { problem: string; solution: string }) => (
  <div className="grid md:grid-cols-2 gap-6 md:gap-10">
    <div className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed">
      <span className="font-bold uppercase block mb-1">Problem:</span>
      {problem}
    </div>
    <div className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed">
      <span className="font-bold uppercase block mb-1">Solution:</span>
      {solution}
    </div>
  </div>
);

/** Renders a Figma section export at full width with no cropping */
const FullImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full rounded-3xl overflow-hidden">
    <img loading="lazy" src={src} alt={alt} className="w-full h-auto block" />
  </div>
);

/** Drag-to-scroll carousel */
const DragCarousel = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (ref.current?.offsetLeft ?? 0);
    scrollLeft.current = ref.current?.scrollLeft ?? 0;
    if (ref.current) ref.current.style.cursor = "grabbing";
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (ref.current) ref.current.style.cursor = "grab";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={ref}
      className="overflow-x-auto select-none"
      style={{ cursor: "grab", scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
};

export const CaseStudyPickup = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <PageMeta
        title="Revamping the Pick-Up Map Experience — Ahmad Mansee"
        description="Case study: redesigning Delivery Hero's pick-up map experience to improve discoverability, clarity, and user confidence."
      />
      <ScrollProgress />
      <Navbar />

      {/* ───── Hero ───── */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-20 pt-12 pb-0">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link href="/">
            <button className="flex items-center gap-2 text-[#95989c] hover:text-white transition-colors mb-10 group">
              <div className="border border-white/40 rounded-full w-10 h-10 flex items-center justify-center group-hover:border-white/80 transition-colors">
                <ArrowLeft size={18} />
              </div>
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-7"
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img loading="lazy" src="/case-study/pickup/dh-logo.png" alt="Delivery Hero" className="h-8 object-contain" />
            <span className="font-['Inter_Tight',Helvetica] font-medium text-white text-xl md:text-[28px] tracking-wider">
              Delivery Hero
            </span>
          </div>

          {/* Title */}
          <h1 className="font-['Inter_Tight',Helvetica] font-semibold text-white text-4xl md:text-6xl lg:text-[64px] leading-none tracking-tight max-w-2xl">
            Revamping the Pick-Up Map Experience
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              { label: "Date", value: "May 5, 2023" },
              { label: "Client Name", value: "Delivery Hero" },
              { label: "Services", value: "Branding, Mobile App & Website Design" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="font-['Inter_Tight',Helvetica] font-semibold text-white text-sm leading-relaxed">{m.label}</span>
                <span className="font-['Inter_Tight',Helvetica] text-[#95989c] text-sm leading-relaxed">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Hero cover — exact Figma export (3 phones on light background) */}
          <div className="mt-2">
            <FullImage src="/case-study/pickup/hero-cover.png" alt="Pick-up map experience screens" />
          </div>
        </motion.div>
      </div>

      {/* ───── Content ───── */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="max-w-[1045px] mx-auto py-16 md:py-24 flex flex-col gap-16 md:gap-20">

          {/* Project Overview */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
            <SectionTitle>Project Overview</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              As delivery fees increased, pick-up became a critical, lower-cost growth alternative. However, the existing map experience failed to support discovery and confidence, according to data and qualitative feedback. This project focused on making the pick-up map a viable driver of usage and retention.
            </p>
          </motion.div>

          {/* Problem Context */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Problem context and the importance of the map</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              The pick-up map was intended to be the foundation of the competitive experience, but consistently underperformed due to poor usability, confirmed by competitor analysis and user feedback.
            </p>
            <Quote
              label="Our hypotheses:"
              text={`"By enhancing map experience, we can encourage regular pick-up use, improve customer satisfaction, and drive retention."`}
            />
            {/* Overview phones — exact Figma export */}
            <FullImage src="/case-study/pickup/overview-phones.png" alt="Pick-up map overview screens" />
          </motion.div>

          {/* My Role */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>My Role</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[500px]">
              The pick-up map was intended to be the foundation of the competitive experience, but consistently underperformed due to poor usability, confirmed by competitor analysis and user feedback.
            </p>
            {/* Role diagram — exact Figma export */}
            <FullImage src="/case-study/pickup/role-diagram.png" alt="My role process diagram" />
          </motion.div>

          {/* Map Pin Improvements */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Map Pin Improvements</SectionTitle>
            <ProblemSolution
              problem="Pins looked visually similar and offered little useful information, increasing cognitive load and slowing decision-making."
              solution="I introduced a clearer visual hierarchy with distinct states (default, selected, grouped), added meaningful signals like vendor names and discounts, and grouped pins at lower zoom levels to reduce clutter."
            />
            {/* Before/After phones — exact Figma export */}
            <FullImage src="/case-study/pickup/map-pin-cover.png" alt="Map pin improvements before and after" />
          </motion.div>

          {/* Vendor Navigation */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Vendor Navigation on Map</SectionTitle>
            <ProblemSolution
              problem="Map offers horizontal navigation only to explore vendor list, making it hard for users to browse and select vendors efficiently."
              solution="Introduced a vendor list view for quick scan to the map. Enabled a vertical → horizontal hybrid browsing pattern. Allowed users to switch between overview and fast selection."
            />
            <FullImage src="/case-study/pickup/vendor-nav-cover.png" alt="Vendor navigation before and after" />
          </motion.div>

          {/* Cleaner Map View */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Cleaner Map View</SectionTitle>
            <ProblemSolution
              problem="The map view is cluttered with overlapping pins and landmarks, causing high cognitive load that competed with vendors for attention."
              solution="Simplify the map view, remove unnecessary elements to reduce cognitive load and improve discovery."
            />
            <FullImage src="/case-study/pickup/map-noise-cover.png" alt="Cleaner map view before and after" />
          </motion.div>

          {/* Vendor Location Display */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Vendor Location Display</SectionTitle>
            <ProblemSolution
              problem={`Users struggle to find the "selected vendor" locations on the map, causing pickup and address issues.`}
              solution={`Reduced "where exactly is it?" anxiety by adding vendor location imagery/location up clearly for users.`}
            />
            <FullImage src="/case-study/pickup/vendor-location-cover.png" alt="Vendor location display improvement" />
          </motion.div>

          {/* Key Screens */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            {/* Header row: title + link pills */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="font-['Inter_Tight',Helvetica] font-semibold text-[#cf3570] text-2xl md:text-[32px]">
                Key screens
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  {
                    href: "https://www.figma.com/design/F6LGybNfAwAfV0uFeZmRb0/Recent-work?node-id=105-49606&t=2WMBEYQQhyKyZDA9-4",
                    icon: <Workflow size={14} />,
                    label: "Full design flow",
                  },
                  {
                    href: "https://www.figma.com/design/F6LGybNfAwAfV0uFeZmRb0/Recent-work?node-id=101-43175&t=2WMBEYQQhyKyZDA9-4",
                    icon: <PenLine size={14} />,
                    label: "Design spec",
                  },
                  {
                    href: "https://drive.google.com/file/d/1ipsZbVaDGm0jmFdUsEd9jRz3g6F4VKCy/view?usp=sharing",
                    icon: <Play size={14} />,
                    label: "Video Prototype",
                  },
                ].map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-[#25262b] text-[13px] font-bold px-3 py-1.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
                  >
                    {btn.icon}
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Horizontally draggable phone carousel */}
            <div className="bg-[#111] rounded-3xl px-5 py-5">
              <DragCarousel>
                <div className="flex items-start" style={{ width: "max-content", gap: 12 }}>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <img
                      key={n}
                      src={`/case-study/pickup/key-screen-${n}.png`}
                      alt={`Key screen ${n}`}
                      className="block shrink-0 rounded-2xl"
                      style={{ height: 500, width: 310, objectFit: "cover", objectPosition: "center" }}
                      draggable={false}
                    />
                  ))}
                </div>
              </DragCarousel>
            </div>
          </motion.div>

          {/* Usability Testing */}
          <motion.div custom={8} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Usability Testing</SectionTitle>
            <ProblemSolution
              problem="Evaluate the effectiveness and usability of the new designs against the current experience."
              solution="Conducted unmoderated usability testing with 10 participants (from Singapore) to assess navigation ease, information clarity, and overall user satisfaction."
            />
          </motion.div>

          {/* Prototype Test */}
          <motion.div custom={8} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>1 — Prototype Test, Map Navigation</SectionTitle>
            <div className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              <span className="font-bold uppercase block mb-1">Test scenario:</span>
              We asked participants to explore a restaurant (without a discount) from the pins and add it to the menu.
            </div>
            <Quote
              label="💡 Summary"
              text="Overall, users found the map intuitive and informative, though some favoured Google Maps for more detailed navigation and reviews."
            />
            {/* Prototype test phones with annotations — exact Figma export */}
            <FullImage src="/case-study/pickup/prototype-test-cover.png" alt="Prototype test results" />
          </motion.div>

          {/* Preference Test */}
          <motion.div custom={9} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>2 — Preference Test</SectionTitle>
            <div className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              <span className="font-bold uppercase block mb-1">Test scenario:</span>
              Which version of the map do you prefer? And follow up questions.
            </div>
            <Quote
              label="💡 Summary"
              text="Users preferred the new map design for its clarity, simplicity, and modern look, finding it easier to use and more familiar."
            />
            {/* Preference test phones with annotations — exact Figma export */}
            <FullImage src="/case-study/pickup/preference-test-cover.png" alt="Preference test results" />
          </motion.div>

          {/* Success Metrics */}
          <motion.div custom={10} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Success Metrics & Final Thoughts</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { emoji: "🗺️", id: "info-clarity", stat: "90%", label: "found the map pins effectively displayed key info like discounts and ratings" },
                { emoji: "🧭", id: "nav-ease", stat: "80%", label: "found it easy to navigate between Hotz. and Vert views and explore restaurants" },
                { emoji: "✅", id: "preference", stat: "80%", label: "preferred the new map design over the control for its clarity and modern look" },
                { emoji: "💬", id: "quote", stat: "\"The selected 3D house pin stood out clearly from others\"", label: "— usability test participant" },
                { emoji: "🎨", id: "feel", stat: "Calmer & Familiar", label: "users described the new design as less noisy and reminiscent of Google Maps" },
                { emoji: "🚀", id: "takeaway", stat: "Key Takeaway", label: "Iterating on the map pin design and layout significantly improved discoverability and user confidence" },
              ].map(({ emoji, id, stat, label }) => (
                <div key={id} className="bg-[#2B2D33] rounded-2xl p-5 flex flex-col gap-2">
                  <span className="text-2xl">{emoji}</span>
                  <span className="font-['Inter_Tight',Helvetica] font-bold text-white text-lg leading-snug">{stat}</span>
                  <span className="font-['Inter_Tight',Helvetica] text-[#b8b8b8] text-sm leading-relaxed">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Video */}
          <motion.div custom={11} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Project Video</SectionTitle>
            <VideoPlayer src={PICKUP_VIDEO} poster="/case-study/pickup/video-mockup.png" />
          </motion.div>

        </div>
      </div>

      <CaseStudyNav
        prev={{ label: "Voice to Cart", href: "/case-study/voice" }}
        next={{ label: "Edugla AI", href: "/case-study/edugla" }}
      />
      <Footer linkedinSrc="/figmaAssets/linkedin.png" />
      <ScrollToTop />
    </div>
  );
};
