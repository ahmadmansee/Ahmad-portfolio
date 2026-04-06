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

const BrowserFrame = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full rounded-[36px] overflow-hidden">
    <div className="bg-[#37383f] h-[56px] flex items-center px-6 gap-3 rounded-t-[36px]">
      <div className="w-5 h-5 rounded-full bg-[#ff5f57]" />
      <div className="w-5 h-5 rounded-full bg-[#febc2e]" />
      <div className="w-5 h-5 rounded-full bg-[#28c840]" />
    </div>
    <img src={src} alt={alt} className="w-full h-auto block rounded-b-[36px]" />
  </div>
);

const Quote = ({ label, text, children }: { label: string; text?: string; children?: React.ReactNode }) => (
  <div className="bg-[#16171b] flex gap-6 items-start px-8 py-5 rounded-2xl w-full">
    <span className="font-['Inter_Tight',Helvetica] font-semibold text-[#cf3570] text-lg shrink-0 whitespace-nowrap">{label}</span>
    {text && <p className="font-['Inter_Tight',Helvetica] text-[#a5a5a5] text-base leading-relaxed">{text}</p>}
    {children}
  </div>
);

const ProblemSolution = ({ problem, solution, solutionList }: { problem: string; solution: string; solutionList?: string[] }) => (
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

export const CaseStudyEdugla = () => {
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

          {/* Cover */}
          <div className="w-full rounded-[36px] overflow-hidden mt-2">
            <div className="bg-[#37383f] h-[56px] flex items-center px-6 gap-3 rounded-t-[36px]">
              <div className="w-5 h-5 rounded-full bg-[#ff5f57]" />
              <div className="w-5 h-5 rounded-full bg-[#febc2e]" />
              <div className="w-5 h-5 rounded-full bg-[#28c840]" />
            </div>
            <img
              src="/case-study/edugla/brain.png"
              alt="Edugla Brain UI"
              className="w-full h-auto block rounded-b-[36px] max-h-[600px] object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      {/* Content Sections */}
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
            {/* MacBook Mockup */}
            <div className="bg-[#eff2f5] rounded-3xl overflow-hidden w-full">
              <img src="/case-study/edugla/macbook.png" alt="Edugla MacBook interface" className="w-full h-auto object-cover object-top max-h-[500px]" />
            </div>
          </motion.div>

          {/* The Brain */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>The Brain — Knowledge Graph</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { img: "/case-study/edugla/mockup-1.png", label: "Knowledge Graph View" },
                { img: "/case-study/edugla/mockup-2.png", label: "Topic Exploration" },
                { img: "/case-study/edugla/mockup-3.png", label: "Connections View" },
                { img: "/case-study/edugla/mockup-4.png", label: "Learning Map" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <img src={item.img} alt={item.label} className="w-full h-auto rounded-2xl object-cover" />
                  <p className="font-['Inter_Tight',Helvetica] text-[#95989c] text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Roadmap Generator */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>AI Roadmap Generator (Lula)</SectionTitle>
            <ProblemSolution
              problem="From research we see a trend in which users today are increasingly interacting with AI through conversation, asking questions, generating ideas, and making decisions based on responses. The Brain knowledge graph interface alone can feel limiting."
              solution="We integrated Lula, a conversational AI assistant within the Brain view. Instead of manually structuring topics, users can generate a personalized roadmap or select suggested prompts directly through chat."
            />
            <BrowserFrame src="/case-study/edugla/feature-1.png" alt="AI Roadmap Generator" />
            <Quote label="How it works:">
              <ul className="list-disc ml-5 space-y-1 font-['Inter_Tight',Helvetica] text-[#a5a5a5] text-base leading-relaxed">
                <li>A chat panel appears on the left side of the screen</li>
                <li>Users can type a request or choose from suggested prompts to generate a roadmap.</li>
                <li>Once created, the roadmap details appear inside the chat panel.</li>
                <li>Relevant topics are automatically highlighted on the map for visual context.</li>
              </ul>
            </Quote>
          </motion.div>

          {/* Learning Mode */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Learning Mode</SectionTitle>
            <ProblemSolution
              problem="Traditional learning platforms often rely on a single content format e.g video. Learners consume material passively and must search across multiple sources/channels to build a complete understanding, making the experience fragmented and static."
              solution="Learning Mode combines curated content from multiple formats (video, e-book, and articles) into structured modules around a selected topic."
              solutionList={["Consume content from trustworthy resources", "Summarize key insights", "Take exercises", "Continue the conversation with Lula for clarification or deeper exploration"]}
            />
            <BrowserFrame src="/case-study/edugla/feature-2.png" alt="Learning Mode" />
            <Quote label="Key details:">
              <ul className="list-disc ml-5 space-y-1 font-['Inter_Tight',Helvetica] text-[#a5a5a5] text-base leading-relaxed">
                <li>Roadmap sidebar shows modules and progress.</li>
                <li>The active module is highlighted for focus.</li>
                <li>User needs to take an exercise after each module.</li>
                <li>Additional content can be added or adjusted to make learning process more engaging.</li>
                <li>Lula chat remains accessible throughout the learning process.</li>
              </ul>
            </Quote>
          </motion.div>

          {/* Favourite & Save */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Favourite & Save</SectionTitle>
            <ProblemSolution
              problem="During learning, users often come across important insights and related topics, which makes progress and track difficult over time."
              solution="Favourite feature allows users to capture important modules, content, or roadmaps and return to them later."
            />
            <BrowserFrame src="/case-study/edugla/feature-3.png" alt="Favourite & Save" />
          </motion.div>

          {/* Mockup Gallery */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>More Screens</SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
              {[5, 6, 7, 8, 9].map((n) => (
                <img
                  key={n}
                  src={`/case-study/edugla/mockup-${n}.png`}
                  alt={`Edugla screen ${n}`}
                  className="w-full h-auto rounded-2xl object-contain bg-[#111]"
                />
              ))}
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
                title="Edugla AI video"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <Footer linkedinSrc="/figmaAssets/linkedin.png" />
    </div>
  );
};
