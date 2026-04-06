import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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

const PhoneRow = ({ images, captions }: { images: string[]; captions?: string[] }) => (
  <div className="bg-[#eff2f5] rounded-3xl overflow-hidden w-full p-6 md:p-10">
    <div className="flex items-end justify-center gap-4 md:gap-6 flex-wrap md:flex-nowrap">
      {images.map((img, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <img
            src={img}
            alt={captions?.[i] || `Screen ${i + 1}`}
            className="h-[260px] md:h-[360px] w-auto object-contain rounded-3xl shadow-xl"
          />
          {captions?.[i] && (
            <span className="font-['Inter_Tight',Helvetica] text-xs text-[#555] text-center">{captions[i]}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export const CaseStudyVoice = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Navbar />

      {/* Hero */}
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
          <div className="flex items-center gap-4">
            <img src="/case-study/voice/jahez-logo.png" alt="Jahez" className="h-6 object-contain" />
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

          {/* Cover */}
          <div className="bg-[#eff2f5] rounded-3xl overflow-hidden w-full h-[340px] md:h-[500px] relative mt-2">
            <div className="absolute inset-0 flex items-end justify-center gap-4 pb-0">
              <img src="/case-study/voice/cover-3.png" alt="Voice screen left" className="h-[78%] object-contain rounded-2xl shadow-2xl" />
              <img src="/case-study/voice/cover-1.png" alt="Voice screen center" className="h-[92%] object-contain shadow-2xl" />
              <img src="/case-study/voice/cover-2.png" alt="Voice screen right" className="h-[78%] object-contain rounded-2xl shadow-2xl" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="max-w-[1045px] mx-auto py-16 md:py-24 flex flex-col gap-16 md:gap-20">

          {/* Project Overview */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
            <SectionTitle>Project Overview</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              Voice to Cart explores a conversational ordering experience that allows users to place food orders using natural speech instead of browsing menus manually. The goal was to introduce a faster interaction layer that reduces friction to cart while maintaining clarity, confirmation, and control.
            </p>
          </motion.div>

          {/* Traditional System */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Traditional food ordering system</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              Food ordering apps rely heavily on search, browsing, and filters. While effective, this approach requires multiple taps and cognitive effort before an item reaches the cart.
            </p>
            <Quote
              label="Main challenge:"
              text="The challenge was designing a voice experience that reduces steps and increases accessibility without sacrificing clarity or accuracy."
            />
            <PhoneRow
              images={["/case-study/voice/cover-3.png", "/case-study/voice/suggest-stores.png", "/case-study/voice/cover-2.png"]}
              captions={["Home Screen", "Store Suggestions", "Menu Browse"]}
            />
          </motion.div>

          {/* Voice Interaction & Flow */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Voice Interaction & Flow</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              Voice to Cart was designed as a structured conversation between user and system. The focus was to refine voice as the primary interaction layer — defining how speech is interpreted and confirmed before reaching the cart, before introducing text as an additional option.
            </p>
            <Quote label="Flow main highlight:">
              <ul className="list-disc ml-5 space-y-1 font-['Inter_Tight',Helvetica] text-[#a5a5a5] text-base leading-relaxed">
                <li>Session start & speech capture</li>
                <li>Intent parsing & clarification</li>
                <li>Cart preview & confirmation</li>
                <li>Error handling</li>
              </ul>
            </Quote>
            <div className="w-full rounded-2xl overflow-hidden">
              <img src="/case-study/voice/user-flow.png" alt="Voice to Cart user flow diagram" className="w-full h-auto object-contain" />
            </div>
          </motion.div>

          {/* Entry & Onboarding */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Entry & Onboarding</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              Voice ordering is accessible from the home screen through a microphone button. Tapping it starts a voice session. On first use, microphone permission is requested and a short guide explains how to place an order using voice.
            </p>
            <PhoneRow
              images={["/case-study/voice/jahez-home.png", "/case-study/voice/onboarding.png"]}
              captions={["Microphone entry + tooltip in search bar", "Onboarding guide for first-time users"]}
            />
          </motion.div>

          {/* Voice States */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Voice States</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              The voice session covers four states: idle, listening, talking, and processing — each with distinct visual feedback so users always know what the system is doing.
            </p>
            <PhoneRow
              images={["/case-study/voice/default.png", "/case-study/voice/listening.png", "/case-study/voice/talking.png"]}
              captions={["Default / Idle", "Listening — recording speech", "System responding"]}
            />
          </motion.div>

          {/* Store Discovery */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Store Discovery via Voice</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              When users mention a cuisine or dish, the system suggests matching stores. Users can confirm a store using voice or by tapping, before item selection begins.
            </p>
            <PhoneRow
              images={["/case-study/voice/suggest-stores.png", "/case-study/voice/add-to-cart.png"]}
              captions={["System suggests stores", "Voice command: Add to cart"]}
            />
          </motion.div>

          {/* Cart & Confirmation */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Cart & Order Confirmation</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              After items are added, the cart appears with a summary for review. Users confirm or adjust before placing the order. A final confirmation screen closes the session.
            </p>
            <PhoneRow
              images={["/case-study/voice/items-added.png", "/case-study/voice/cart-open.png", "/case-study/voice/review-submitted.png"]}
              captions={["Items added to cart", "Cart open for review", "Order confirmed"]}
            />
          </motion.div>

          {/* Review Order flow */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Review & Submit</SectionTitle>
            <div className="w-full rounded-2xl overflow-hidden bg-[#f4f4f4]">
              <img src="/case-study/voice/review-order.png" alt="Review order screen" className="w-full h-auto object-contain max-h-[600px] mx-auto block" />
            </div>
          </motion.div>

        </div>
      </div>

      <Footer linkedinSrc="/figmaAssets/linkedin.png" />
    </div>
  );
};
