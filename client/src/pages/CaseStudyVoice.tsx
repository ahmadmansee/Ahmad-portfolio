import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowLeft, Layout, GitBranch } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CaseStudyNav } from "@/components/CaseStudyNav";
import { PageMeta } from "@/components/PageMeta";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";

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

const Quote = ({ label, text }: { label: string; text: string }) => (
  <div className="bg-[#16171b] flex gap-6 items-start px-8 py-5 rounded-2xl w-full">
    <span className="font-['Inter_Tight',Helvetica] font-semibold text-[#cf3570] text-lg shrink-0 whitespace-nowrap">{label}</span>
    <p className="font-['Inter_Tight',Helvetica] text-[#a5a5a5] text-base leading-relaxed">{text}</p>
  </div>
);

const FullImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full rounded-3xl overflow-hidden">
    <img loading="lazy" src={src} alt={alt} className="w-full h-auto block" />
  </div>
);

const FlowLabel = ({ text }: { text: string }) => (
  <p className="font-['Inter_Tight',Helvetica] font-medium text-[#cf3570] text-sm tracking-widest uppercase">
    {text}
  </p>
);

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

export const CaseStudyVoice = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <PageMeta
        title="Voice to Cart — Jahez | Ahmad Mansee"
        description="Case study: designing a voice-driven add-to-cart experience for Jahez, blending conversation design with mobile commerce."
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
          <div className="flex items-center gap-3">
            <img loading="lazy" src="/case-study/voice/jahez-logo.png" alt="Jahez" className="h-9 object-contain" />
            <span className="font-['Inter_Tight',Helvetica] font-medium text-white text-xl md:text-[28px] tracking-wider">
              (Jahez Food delivery app)
            </span>
          </div>

          <h1 className="font-['Inter_Tight',Helvetica] font-semibold text-white text-4xl md:text-6xl lg:text-[64px] leading-none tracking-tight max-w-2xl">
            Voice to Cart Experience
          </h1>

          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              { label: "Date", value: "Jan 12, 2026" },
              { label: "Client Name", value: "Riyadh, Saudi Arabia" },
              { label: "Services", value: "AI, voice assistant" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="font-['Inter_Tight',Helvetica] font-semibold text-white text-sm leading-relaxed">{m.label}</span>
                <span className="font-['Inter_Tight',Helvetica] text-[#95989c] text-sm leading-relaxed">{m.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <FullImage src="/case-study/voice/hero-cover.png" alt="Voice to Cart hero screens" />
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
              Voice to Cart explores a conversational ordering experience that allows users to place food orders using natural speech instead of browsing menus manually. The goal was to introduce a faster interaction layer that reduces friction to cart while maintaining clarity, confirmation, and control.
            </p>
          </motion.div>

          {/* Traditional ordering system */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Traditional food ordering system</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              Food ordering apps rely heavily on search, browsing, and filters. While effective, this approach requires multiple taps and cognitive effort before an item reaches the cart.
            </p>
            <Quote
              label="Our hypotheses:"
              text={`"By introducing voice as an interaction layer, we can reduce ordering friction, increase cart conversion, and differentiate the experience in a way that feels natural and fast."`}
            />
            <FullImage src="/case-study/voice/intro-phones.png" alt="Voice ordering overview screens" />
          </motion.div>

          {/* Voice Interaction & Flow */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Voice Interaction &amp; Flow</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              Voice to Cart was designed as a structured conversation between user and system. The focus was to refine voice as the primary interaction layer. Defining how speech is interpreted and confirmed before reaching the cart, before introducing text as an additional option.
            </p>
            <Quote
              label="Design principle:"
              text={`"Voice should feel like a shortcut, not a replacement. The system confirms at each step, keeping users in control without requiring them to touch the screen."`}
            />
            <FullImage src="/case-study/voice/user-flow.png" alt="Voice to cart user flow diagram" />
          </motion.div>

          {/* Entry & Onboarding */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Entry &amp; Onboarding</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              Voice ordering is accessible from the home screen through a microphone button. Tapping it starts a voice session. On first use, microphone permission is requested and a short guide explains how to place an order using voice.
            </p>
            <FullImage src="/case-study/voice/onboarding-phones.png" alt="Entry and onboarding screens" />
          </motion.div>

          {/* Conversational & Dialogflow */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Conversational &amp; Dialogflow</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              After the session starts the app begins listening. What the user says is processed in real time. If something is unclear the system asks for clarification before moving forward.
            </p>
            <FlowLabel>FLOW: User speaks → User speech is transcribed → System listens &amp; processes → System responds (voice + text) → Conversation continues</FlowLabel>
            <FullImage src="/case-study/voice/dialogflow-phones.png" alt="Conversational dialogflow screens" />
          </motion.div>

          {/* Add to Cart */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Add to Cart</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              Once items are displayed, the user can add them to the cart manually or ask the system to add them by voice. The user can also request different results or adjust the search using voice without leaving the conversation.
            </p>
            <FlowLabel>FLOW: Results displayed → User adds item (tap or voice) → Cart updates → Mic state confirms → Conversation continues.</FlowLabel>
            <FullImage src="/case-study/voice/add-to-cart-phones.png" alt="Add to cart voice flow screens" />
          </motion.div>

          {/* Review & Checkout */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Review &amp; Checkout</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              After items are added users can review the cart, add more items or proceed to checkout.
            </p>
            <FlowLabel>FLOW: User view cart → Checkout or continue ordering → Order is submitted → Ask for user review</FlowLabel>
            <FullImage src="/case-study/voice/checkout-phones.png" alt="Review and checkout screens" />
          </motion.div>

          {/* Key Screens */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            {/* Header: title + link pills */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="font-['Inter_Tight',Helvetica] font-semibold text-[#cf3570] text-2xl md:text-[32px]">
                Key screens
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.figma.com/design/zuGcvYqmTrxEKSB08EMgTF/Voice-to-cart-experience?node-id=34-14717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-[#25262b] text-[13px] font-bold px-3 py-1.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
                >
                  <Layout size={14} />
                  Design screens
                </a>
                <a
                  href="https://www.figma.com/design/zuGcvYqmTrxEKSB08EMgTF/Voice-to-cart-experience?node-id=2004-12828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-[#25262b] text-[13px] font-bold px-3 py-1.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
                >
                  <GitBranch size={14} />
                  User flow
                </a>
              </div>
            </div>

            {/* Draggable phone carousel */}
            <div className="bg-[#111] rounded-3xl px-8 py-8">
              <DragCarousel>
                <div className="flex items-start" style={{ width: "max-content", gap: "20px" }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <img
                      key={n}
                      src={`/case-study/voice/key-screens/screen-${n}.png`}
                      alt={`Voice to Cart key screen ${n}`}
                      className="block shrink-0 rounded-2xl"
                      style={{ height: 500, width: 256, objectFit: "cover" }}
                      draggable={false}
                    />
                  ))}
                </div>
              </DragCarousel>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Prev / Next navigation */}
      <CaseStudyNav
        prev={{ label: "Edugla AI", href: "/case-study/edugla" }}
        next={{ label: "Map Pick-Up Experience", href: "/case-study/pickup" }}
      />

      <Footer linkedinSrc="/figmaAssets/linkedin.png" />
      <ScrollToTop />
    </div>
  );
};
