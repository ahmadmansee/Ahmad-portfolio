import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const CV_LINK = "https://drive.google.com/file/d/1H-LutKCWCjBtDySnZGO5wlKe6X9yKGYI/view?usp=sharing";
const PICKUP_VIDEO = "https://drive.google.com/file/d/1ipsZbVaDGm0jmFdUsEd9jRz3g6F4VKCy/preview";

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

const BeforeAfter = ({
  beforeImg, afterImg, beforeLabel = "Before", afterLabel = "After",
  beforeNotes, afterNotes,
}: {
  beforeImg: string; afterImg: string; beforeLabel?: string; afterLabel?: string;
  beforeNotes?: string[]; afterNotes?: string[];
}) => (
  <div className="bg-[#2b2d33] rounded-3xl overflow-hidden w-full">
    <div className="flex items-stretch gap-0">
      <div className="flex-1 flex flex-col">
        <div className="px-4 pt-4 pb-2">
          <span className="font-['Inter_Tight',Helvetica] font-semibold text-[#e21b70] text-sm uppercase tracking-widest">{beforeLabel}</span>
        </div>
        <div className="flex-1 p-4">
          <img src={beforeImg} alt={beforeLabel} className="w-full h-auto rounded-2xl object-contain max-h-[420px]" />
          {beforeNotes && (
            <ul className="mt-4 space-y-1">
              {beforeNotes.map((n, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                  <span className="w-1 shrink-0 h-4 bg-[#00c17a] rounded-full mt-0.5" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="w-px bg-white/10" />
      <div className="flex-1 flex flex-col">
        <div className="px-4 pt-4 pb-2">
          <span className="font-['Inter_Tight',Helvetica] font-semibold text-[#e21b70] text-sm uppercase tracking-widest">{afterLabel}</span>
        </div>
        <div className="flex-1 p-4">
          <img src={afterImg} alt={afterLabel} className="w-full h-auto rounded-2xl object-contain max-h-[420px]" />
          {afterNotes && (
            <ul className="mt-4 space-y-1">
              {afterNotes.map((n, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                  <span className="w-1 shrink-0 h-4 bg-[#00c17a] rounded-full mt-0.5" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Quote = ({ label, text }: { label: string; text: string }) => (
  <div className="bg-[#16171b] flex gap-6 items-start px-8 py-5 rounded-2xl w-full">
    <span className="font-['Inter_Tight',Helvetica] font-semibold text-[#cf3570] text-lg shrink-0">{label}</span>
    <p className="font-['Inter_Tight',Helvetica] text-[#a5a5a5] text-base leading-relaxed">{text}</p>
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

export const CaseStudyPickup = () => {
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
          <div className="flex items-center gap-3">
            <img src="/case-study/pickup/dh-logo.png" alt="Delivery Hero" className="h-8 object-contain" />
            <span className="font-['Inter_Tight',Helvetica] font-medium text-white text-xl md:text-2xl tracking-wider">Delivery Hero</span>
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
                <span className="font-['Inter_Tight',Helvetica] font-semibold text-white text-sm leading-relaxed">
                  {m.label}
                </span>
                <span className="font-['Inter_Tight',Helvetica] text-[#95989c] text-sm leading-relaxed">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Cover */}
          <div className="bg-[#eff2f5] rounded-3xl overflow-hidden w-full h-[340px] md:h-[500px] relative mt-2">
            <div className="absolute inset-0 flex items-end justify-center gap-4 pb-0">
              <img src="/case-study/pickup/screen-75.png" alt="Before screen" className="h-[85%] object-contain rounded-2xl shadow-2xl" />
              <img src="/case-study/pickup/screen-72.png" alt="Center screen" className="h-[95%] object-contain shadow-2xl" />
              <img src="/case-study/pickup/screen-74.png" alt="After screen" className="h-[85%] object-contain rounded-2xl shadow-2xl" />
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
              As delivery fees increased, pick-up became a critical, lower-cost growth alternative. However, the existing map experience failed to support discovery and confidence, according to data and qualitative feedback. This project focused on making the pick-up map a viable driver of usage and retention.
            </p>
          </motion.div>

          {/* Problem Context */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
            <SectionTitle>Problem context and the importance of the map</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
              The pick-up map was intended to be the foundation of the competitive experiences, but consistently underperformed due to poor usability, confirmed by competitor analysis and user feedback.
            </p>
            <Quote
              label="Our hypotheses:"
              text={`"By enhancing map experience, we can encourage regular pick-up use, improve customer satisfaction, and drive retention."`}
            />
          </motion.div>

          {/* My Role */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-6">
            <SectionTitle>My Role</SectionTitle>
            <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[500px]">
              The pick-up map was intended to be the foundation of the competitive experiences, but consistently underperformed due to poor usability, confirmed by competitor analysis and user feedback.
            </p>
            <div className="w-full rounded-2xl overflow-hidden">
              <img src="/case-study/pickup/role-diagram.png" alt="Process diagram" className="w-full h-auto object-contain" />
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              {[
                { label: "Data Collection", color: "text-[#92f9a6]" },
                { label: "Problem Identification", color: "text-[#3edfdc]" },
                { label: "Solution Development", color: "text-[#48a3ff]" },
                { label: "Stakeholder Alignment", color: "text-[#ecb1f6]" },
              ].map((step) => (
                <span key={step.label} className={`font-['Inter_Tight',Helvetica] font-medium text-base md:text-lg ${step.color}`}>
                  {step.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Map Pin Improvements */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 shrink-0">
                <img src="/figmaAssets/icon-2.svg" alt="" className="w-full h-full" />
              </div>
              <SectionTitle>Map Pin Improvements</SectionTitle>
            </div>
            <ProblemSolution
              problem="Pins looked visually similar and offered little useful information, increasing cognitive load and slowing decision-making."
              solution="I introduced a clearer visual hierarchy with distinct states (default, selected, grouped), added meaningful signals like vendor names and discounts, and grouped pins at lower zoom levels to reduce clutter."
            />
            <BeforeAfter
              beforeImg="/case-study/pickup/screen-73.png"
              afterImg="/case-study/pickup/screen-76.png"
              beforeNotes={["Pins are stacked on top of each other", "Pins show only discounted info", "Users expect discounts and ratings displayed on map pins."]}
              afterNotes={["Pins show related icons (e.g bakery, restaurants)", "Add vendor names to pins", "Small dots to indicate more vendors to explore zooming in and out (reduce noise)."]}
            />
          </motion.div>

          {/* Vendor Navigation */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Vendor Navigation on Map</SectionTitle>
            <ProblemSolution
              problem="Map offers horizontal navigation only to explore vendor list that making it hard for users to browse and select vendors efficiently."
              solution="Introduced a vendor list view for quick scan to the map. Enabled a vertical → horizontal hybrid browsing pattern. Allowed users to switch between overview and fast selection."
            />
            <div className="bg-[#2b2d33] rounded-3xl overflow-hidden w-full flex gap-4 p-4 md:p-8">
              <img src="/case-study/pickup/screen-77.png" alt="Vendor navigation before" className="flex-1 h-auto rounded-2xl object-contain max-h-[420px]" />
              <img src="/case-study/pickup/screen-78.png" alt="Vendor navigation after" className="flex-1 h-auto rounded-2xl object-contain max-h-[420px]" />
            </div>
          </motion.div>

          {/* Map Noise Reduction */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Map Noise Reduction</SectionTitle>
            <ProblemSolution
              problem="The map view is cluttered with overlapping pins and landmarks, causing high cognitive load that competed with vendors for attention."
              solution="Simplify the map view, remove unnecessary elements to reduce cognitive load and improve discovery."
            />
            <BeforeAfter
              beforeImg="/case-study/pickup/screen-78.png"
              afterImg="/case-study/pickup/screen-79.png"
              beforeNotes={["Pins are stacked on top of each other", "Unnecessary pins like closed vendors, and saved addresses.", "Coloured maps with many landmarks makes navigation difficult."]}
              afterNotes={["Limited visible pins by default", "Removed non essential UI elements (e.g closed pins)", "Reduced landmark prominence, and switch to saturated calm map colour"]}
            />
          </motion.div>

          {/* Vendor Location Display */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Vendor Location Display</SectionTitle>
            <ProblemSolution
              problem={`Users struggle to find the "selected vendor" locations on the map causes pickup and address issues`}
              solution="Reduced 'where exactly is it?' anxiety by adding vendor location imagery/location up clearly for users"
            />
            <div className="bg-[#2b2d33] rounded-3xl overflow-hidden w-full flex gap-4 p-4 md:p-8 items-center">
              <div className="flex-1">
                <p className="text-white/60 text-xs mb-2">Problem</p>
                <img src="/case-study/pickup/screen-80.png" alt="Location problem" className="w-full h-auto rounded-2xl object-contain max-h-[400px]" />
              </div>
              <div className="flex-1">
                <p className="text-[#e21b70] text-xs font-semibold uppercase mb-2 tracking-widest">Proposed solution</p>
                <img src="/case-study/pickup/screen-81.png" alt="Location solution" className="w-full h-auto rounded-2xl object-contain max-h-[400px]" />
              </div>
            </div>
          </motion.div>

          {/* Usability Testing */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Usability testing</SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="font-['Inter_Tight',Helvetica] text-white text-base leading-relaxed">
                <span className="font-bold uppercase block mb-1">Problem:</span>
                Evaluate the effectiveness and usability of the new designs against the current experience.
              </div>
              <div className="font-['Inter_Tight',Helvetica] text-white text-base leading-relaxed">
                <span className="font-bold uppercase block mb-1">Solution:</span>
                Conducted unmoderated usability testing with 10 participants (from Singapore) to assess navigation ease, information clarity, and overall user satisfaction.
              </div>
            </div>
          </motion.div>

          {/* Prototype Test */}
          <motion.div custom={8} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>1- Prototype Test, map navigation</SectionTitle>
            <div>
              <span className="font-['Inter_Tight',Helvetica] font-bold text-white text-sm uppercase block mb-1">Test scenario:</span>
              <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
                We asked participants to explore a restaurant (Without a discount) from the pins and add it to the menu.
              </p>
            </div>
            <Quote
              label="💡 Summary"
              text="Overall, users found the map intuitive and informative, though some favored Google Maps for more detailed navigation and reviews."
            />
            <div className="bg-[#2b2d33] rounded-3xl overflow-hidden w-full">
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <img src="/case-study/pickup/screen-88.png" alt="Prototype test A" className="w-full h-auto rounded-2xl object-contain max-h-[400px]" />
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2 text-xs text-white/70">
                      <span className="w-1 h-4 shrink-0 bg-[#00c17a] rounded-full mt-0.5" />
                      <span><strong>Ease of Use:</strong> 80% of users found it easy to navigate between Hotz. and Vert views and explore restaurants in both map and list</span>
                    </div>
                  </div>
                </div>
                <div>
                  <img src="/case-study/pickup/screen-89.png" alt="Prototype test B" className="w-full h-auto rounded-2xl object-contain max-h-[400px]" />
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2 text-xs text-white/70">
                      <span className="w-1 h-4 shrink-0 bg-[#00c17a] rounded-full mt-0.5" />
                      <span><strong>Information Clarity:</strong> 90% found the map pins effectively displayed key information like discounts and ratings.</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-[#ebebeb] text-lg md:text-2xl font-['Inter_Tight',Helvetica] leading-tight px-6 pb-8">
                "The selected 3D house pin stood out clearly from others"
              </p>
            </div>
          </motion.div>

          {/* Preference Test */}
          <motion.div custom={9} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>2- Preference Test</SectionTitle>
            <div>
              <span className="font-['Inter_Tight',Helvetica] font-bold text-white text-sm uppercase block mb-1">Test scenario:</span>
              <p className="font-['Inter_Tight',Helvetica] text-white text-base md:text-lg leading-relaxed max-w-[700px]">
                Which version of the map do you prefer? and follow up questions.
              </p>
            </div>
            <Quote
              label="💡 Summary"
              text="Users preferred the new map design for its clarity, simplicity, and modern look, finding it easier to use and more familiar."
            />
            <div className="bg-[#2b2d33] rounded-3xl overflow-hidden w-full p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
              <img src="/case-study/pickup/screen-78.png" alt="Old design" className="w-full h-auto rounded-2xl object-contain max-h-[400px]" />
              <img src="/case-study/pickup/screen-83.png" alt="New design" className="w-full h-auto rounded-2xl object-contain max-h-[400px]" />
            </div>
          </motion.div>

          {/* Video */}
          <motion.div custom={10} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
            <SectionTitle>Project Video</SectionTitle>
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#111]">
              <iframe
                src={PICKUP_VIDEO}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
                title="Map pick up experience video"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <Footer linkedinSrc="/figmaAssets/linkedin.png" />
    </div>
  );
};
