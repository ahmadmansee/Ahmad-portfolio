import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const EDUGLA_VIDEO = "https://drive.google.com/file/d/1fQfETPDUWSsQr2EobZ1PUNqDnp0KRAUC/preview";

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

const ProblemSolution = ({
  problem, solution, solutionList,
}: { problem: string; solution: string; solutionList?: string[] }) => (
  <div className="flex flex-col gap-4 max-w-[700px]">
    <div className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed">
      <span className="font-bold uppercase block mb-1">Problem:</span>
      {problem}
    </div>
    <div className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed">
      <span className="font-bold uppercase block mb-1">Solution:</span>
      {solution}
      {solutionList && (
        <ul className="list-disc ml-5 mt-1 space-y-0.5">
          {solutionList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
    </div>
  </div>
);

/** A full-width image that renders the Figma frame export as-is (already includes browser chrome). */
const FullImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full rounded-3xl overflow-hidden">
    <img src={src} alt={alt} className="w-full h-auto block" />
  </div>
);

export const CaseStudyEdugla = () => {
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
          <div className="flex items-center gap-4">
            <img src="/case-study/edugla/edugla-logo.png" alt="Edugla" className="h-10 object-contain" />
            <span className="font-['Inter_Tight',Helvetica] font-medium text-white text-xl md:text-[28px] tracking-wider">Edugla</span>
          </div>

          {/* Title */}
          <h1 className="font-['Inter_Tight',Helvetica] font-semibold text-white text-4xl md:text-6xl lg:text-[64px] leading-none tracking-tight max-w-2xl">
            AI-powered learning platform
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              { label: "Date", value: "July 5, 2025" },
              { label: "Client Name", value: "Edugla, Egypt" },
              { label: "Services", value: "EdTech, Startup, AI" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="font-['Inter_Tight',Helvetica] font-semibold text-white text-sm leading-relaxed">{m.label}</span>
                <span className="font-['Inter_Tight',Helvetica] text-[#95989c] text-sm leading-relaxed">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Hero cover — the brain UI inside the browser chrome */}
          <div className="w-full mt-2">
            <FullImage src="/case-study/edugla/hero-cover.png" alt="Edugla Brain interface" />
          </div>
        </motion.div>
      </div>

      {/* ───── Content ───── */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="max-w-[1045px] mx-auto py-16 md:py-24 flex flex-col gap-16 md:gap-20">

          {/* Project Overview */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
            <SectionTitle>Project Overview</SectionTitle>
            <div className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px] space-y-3">
              <p>Research from OECD and Harvard shows education is struggling to keep pace with technological change. As AI reshapes industries:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>85M jobs will disappear</li>
                <li>92M new jobs will emerge</li>
                <li>40% of core skills will change</li>
              </ul>
              <p>Yet traditional education systems remain disconnected from the industry evolution, resulting in a mismatch between industry standards and educational outcomes.</p>
            </div>
          </motion.div>

          {/* Knowledge Bank */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>A global semantic knowledge bank, powered by AI</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              Edugla is an AI learning platform that aims to bridge the market and knowledge gap by connecting learners to real outcomes, making learning structured and personal.
            </p>
            <Quote
              label="Main strengths:"
              text={`"Edugla's main strength is the ability to collect knowledge from worldwide contributors and present it in a "brain" graph to visualize subjects, learning materials and relationships.`}
            />
            {/* MacBook cover — properly framed export from Figma */}
            <FullImage src="/case-study/edugla/macbook-cover.png" alt="Edugla MacBook interface" />
          </motion.div>

          {/* The Brain */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>The Brain — Knowledge Graph</SectionTitle>
            <ProblemSolution
              problem="Most learning platforms organize knowledge as lists of courses, videos, etc — making the learning experience non-linear. Learners struggle to understand how topics are connected, move between related topics easily, and build knowledge as an expanding structure."
              solution="We introduced The Brain, a node-based knowledge map. Each node represents a topic that allows users to explore a connected network of topics."
            />
            {/* Brain UI — full browser frame export */}
            <FullImage src="/case-study/edugla/brain-image.png" alt="The Brain knowledge graph" />
            <Quote label="Key highlights:">
              <ul className="list-disc ml-5 space-y-1 font-['Inter_Tight',Helvetica] text-[#a5a5a5] text-base leading-relaxed">
                <li>Node-based interactive knowledge map</li>
                <li>Color-coded topic clusters for visual clarity</li>
                <li>Click any node to expand subtopics and related content</li>
                <li>AI-generated connections between related subjects</li>
              </ul>
            </Quote>
          </motion.div>

          {/* AI Roadmap Generator (Lula) */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>AI Roadmap Generator (Lula)</SectionTitle>
            <ProblemSolution
              problem="Users are increasingly interacting with AI through conversation, asking questions, generating ideas, and making decisions based on responses. The Brain knowledge graph interface alone can feel limiting."
              solution="We integrated Lula, a conversational AI assistant within the Brain view. Instead of manually structuring topics, users can generate a personalized roadmap or select suggested prompts directly through chat."
            />
            <FullImage src="/case-study/edugla/roadmap-image.png" alt="AI Roadmap Generator Lula" />
            <Quote label="How it works:">
              <ul className="list-disc ml-5 space-y-1 font-['Inter_Tight',Helvetica] text-[#a5a5a5] text-base leading-relaxed">
                <li>A chat panel appears on the left side of the screen</li>
                <li>Users can type a request or choose from suggested prompts to generate a roadmap</li>
                <li>Once created, the roadmap details appear inside the chat panel</li>
                <li>Relevant topics are automatically highlighted on the map for visual context</li>
              </ul>
            </Quote>
          </motion.div>

          {/* Learning Mode */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Learning Mode</SectionTitle>
            <ProblemSolution
              problem="Traditional learning platforms often rely on a single content format (e.g. video). Learners consume material passively and must search across multiple sources to build a complete understanding, making the experience fragmented and static."
              solution="Learning Mode combines curated content from multiple formats (video, e-book, and articles) into structured modules around a selected topic."
              solutionList={[
                "Consume content from trustworthy resources",
                "Summarize key insights",
                "Take exercises",
                "Continue the conversation with Lula for clarification or deeper exploration",
              ]}
            />
            <FullImage src="/case-study/edugla/learning-image.png" alt="Learning Mode" />
            <Quote label="Key details:">
              <ul className="list-disc ml-5 space-y-1 font-['Inter_Tight',Helvetica] text-[#a5a5a5] text-base leading-relaxed">
                <li>Roadmap sidebar shows modules and progress</li>
                <li>The active module is highlighted for focus</li>
                <li>User needs to take an exercise after each module</li>
                <li>Additional content can be added or adjusted to make learning more engaging</li>
                <li>Lula chat remains accessible throughout the learning process</li>
              </ul>
            </Quote>
          </motion.div>

          {/* Favourite & Save */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Favourite & Save</SectionTitle>
            <ProblemSolution
              problem="During learning, users often come across important insights and related topics, which makes progress and tracking difficult over time."
              solution="Favourite feature allows users to capture important modules, content, or roadmaps and return to them later."
            />
            <FullImage src="/case-study/edugla/favourite-image.png" alt="Favourite & Save" />
          </motion.div>

          {/* More Screens — Mockup grid */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>More Screens</SectionTitle>
            <div className="w-full rounded-3xl overflow-hidden">
              <img
                src="/case-study/edugla/mockups-grid.png"
                alt="Edugla additional screens"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

          {/* Video */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Project Video</SectionTitle>
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#111]">
              <iframe
                src={EDUGLA_VIDEO}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
                title="Edugla AI learning platform video"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <Footer linkedinSrc="/figmaAssets/linkedin.png" />
    </div>
  );
};
