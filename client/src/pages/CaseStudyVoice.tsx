import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const VOICE_VIDEO = "https://drive.google.com/file/d/1fQfETPDUWSsQr2EobZ1PUNqDnp0KRAUC/preview";

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

/** Renders a Figma section export at full width with no cropping */
const FullImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full rounded-3xl overflow-hidden">
    <img src={src} alt={alt} className="w-full h-auto block" />
  </div>
);

const FlowLabel = ({ text }: { text: string }) => (
  <p className="font-['Inter_Tight',Helvetica] font-medium text-[#cf3570] text-sm tracking-widest uppercase">
    {text}
  </p>
);

export const CaseStudyVoice = () => {
  return (
    <div className="bg-black min-h-screen w-full">
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
            <img src="/case-study/voice/jahez-logo.png" alt="Jahez" className="h-7 object-contain" />
            <span className="font-['Inter_Tight',Helvetica] font-medium text-white text-xl md:text-[28px] tracking-wider">
              (Jahez Food delivery app)
            </span>
          </div>

          {/* Title */}
          <h1 className="font-['Inter_Tight',Helvetica] font-semibold text-white text-4xl md:text-6xl lg:text-[64px] leading-none tracking-tight max-w-2xl">
            Voice to Cart Experience
          </h1>

          {/* Meta */}
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

          {/* Hero cover — exact Figma export (3 phones) */}
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
            {/* Intro 2 phones — exact Figma export */}
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
            {/* User flow diagram — exact Figma export */}
            <FullImage src="/case-study/voice/user-flow.png" alt="Voice to cart user flow diagram" />
          </motion.div>

          {/* Entry & Onboarding */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Entry &amp; Onboarding</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              Voice ordering is accessible from the home screen through a microphone button. Tapping it starts a voice session. On first use, microphone permission is requested and a short guide explains how to place an order using voice.
            </p>
            {/* Onboarding phones — exact Figma export */}
            <FullImage src="/case-study/voice/onboarding-phones.png" alt="Entry and onboarding screens" />
          </motion.div>

          {/* Conversational & Dialogflow */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Conversational &amp; Dialogflow</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              After the session starts the app begins listening. What the user says is processed in real time. If something is unclear the system asks for clarification before moving forward.
            </p>
            <FlowLabel>FLOW: User speaks → User speech is transcribed → System listens &amp; processes → System responds (voice + text) → Conversation continues</FlowLabel>
            {/* 4 dialogue phones — exact Figma export */}
            <FullImage src="/case-study/voice/dialogflow-phones.png" alt="Conversational dialogflow screens" />
          </motion.div>

          {/* Add to Cart */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Add to Cart</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              Once items are displayed, the user can add them to the cart manually or ask the system to add them by voice. The user can also request different results or adjust the search using voice without leaving the conversation.
            </p>
            <FlowLabel>FLOW: Results displayed → User adds item (tap or voice) → Cart updates → Mic state confirms → Conversation continues.</FlowLabel>
            {/* 4 add-to-cart phones — exact Figma export */}
            <FullImage src="/case-study/voice/add-to-cart-phones.png" alt="Add to cart voice flow screens" />
          </motion.div>

          {/* Review & Checkout */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Review &amp; Checkout</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              After items are added users can review the cart, add more items or proceed to checkout.
            </p>
            <FlowLabel>FLOW: User view cart → Checkout or continue ordering → Order is submitted → Ask for user review</FlowLabel>
            {/* 2 checkout phones — exact Figma export */}
            <FullImage src="/case-study/voice/checkout-phones.png" alt="Review and checkout screens" />
          </motion.div>

          {/* Final thoughts */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <FullImage src="/case-study/voice/final-content.png" alt="Final thoughts and impact" />
          </motion.div>

          {/* Video */}
          <motion.div custom={8} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Project Video</SectionTitle>
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#111]">
              <iframe
                src={VOICE_VIDEO}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
                title="Voice to Cart Experience video"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <Footer linkedinSrc="/figmaAssets/linkedin.png" />
    </div>
  );
};
