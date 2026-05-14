import { Button } from "@/components/ui/button";

// Navigation links data
const navLinks = [
  { label: "Work", active: false },
  { label: "About me", active: false },
  { label: "Contact", active: false },
];

// Experience data
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

// Toolbox data
const toolboxItems = [
  {
    img: "/figmaAssets/icon.png",
    label: "Figma",
    imgClass: "relative w-20 h-[79px]",
  },
  {
    img: "/figmaAssets/cube-2d-dark-1.png",
    label: "Cursor",
    imgClass: "relative w-[68px] h-[78px] object-cover",
  },
  {
    img: "/figmaAssets/image-76.png",
    label: "Claude",
    imgClass: "relative w-[100px] h-[110px]",
  },
  {
    img: "/figmaAssets/image-2.png",
    label: "Jitter (Animation)",
    imgClass: "relative w-[79px] h-[79px] object-cover",
  },
  {
    img: "/figmaAssets/image-3.webp",
    label: "Jira",
    imgClass: "relative w-[79px] h-[79px] object-cover",
  },
];

// Projects data
const projects = [
  {
    img: "/figmaAssets/thubnail.svg",
    imgAlt: "Thubnail",
    title: "Map pick up experience",
    tags: ["Visual Design", "Website Development"],
    titleSize: "text-[28px]",
    isMockup: false,
  },
  {
    img: "/figmaAssets/macbook-mockup-3-1.webp",
    imgAlt: "Macbook mockup",
    title: "Edugla AI",
    tags: ["AI platform", "EdTech"],
    titleSize: "text-2xl",
    isMockup: true,
  },
];

const projectThird = {
  img: "/figmaAssets/thubnail-1.svg",
  imgAlt: "Thubnail",
  title: "Voice to Cart",
  tags: ["Conversation design", "Voice assistant"],
  titleSize: "text-[28px]",
};

// Contact info data
const contactInfo = [
  { label: "Phone:", value: "+4917636067590" },
  { label: "Mail:", value: "ahmad.mansee@gmail.com" },
];

// Reusable navbar component
const Navbar = ({ activeItem }: { activeItem?: string }) => (
  <nav className="flex w-full items-center justify-between px-[81px] py-6 bg-black rounded-[16px_16px_0px_0px] overflow-hidden">
    <img className="flex-[0_0_auto]" alt="Logo" src="/figmaAssets/logo.svg" />
    <div className="gap-14 inline-flex items-center justify-center">
      <div className="gap-[30px] inline-flex items-center justify-center">
        {navLinks.map((link) => (
          <div
            key={link.label}
            className="inline-flex flex-col items-center justify-center gap-0.5"
          >
            <span
              className={`flex items-center w-fit [font-family:'Inter_Tight',Helvetica] text-[#ffffff] text-lg tracking-[0] leading-[28.8px] whitespace-nowrap ${activeItem === link.label ? "font-medium" : "font-normal"}`}
            >
              {link.label}
            </span>
            {activeItem === link.label && (
              <img
                className="self-stretch w-full h-px"
                alt="Line"
                src="/figmaAssets/line-3-1.svg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  </nav>
);

// Reusable footer CTA component
const FooterCTA = ({ linkedinSrc }: { linkedinSrc: string }) => (
  <div className="flex flex-col w-full items-center justify-center gap-[60px] px-20 py-[88px]">
    <div className="self-stretch [font-family:'Inter_Tight',Helvetica] font-normal text-white text-6xl tracking-[0] leading-[normal]">
      Ready to Build Something Great Together?
    </div>
    <div className="flex items-center justify-between self-stretch w-full">
      <div className="inline-flex items-center gap-[50px]">
        {contactInfo.map((info) => (
          <div
            key={info.label}
            className="inline-flex flex-col items-start justify-center gap-0.5"
          >
            <span className="w-fit [font-family:'Inter_Tight',Helvetica] font-normal text-[#95989c] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              {info.label}
            </span>
            <span className="w-fit [font-family:'Inter_Tight',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] underline">
              {info.value}
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-[462.5px] items-center justify-end gap-5">
        <Button
          className="h-auto inline-flex bg-[#ffffff] items-center justify-center px-3.5 py-3 rounded-3xl overflow-hidden gap-0 hover:bg-[#f0f0f0]"
          variant="ghost"
        >
          <span className="inline-flex items-center justify-center px-2 py-0">
            <span className="w-fit [font-family:'Inter_Tight',Helvetica] font-semibold text-[#222222] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              Download My CV
            </span>
          </span>
          <img className="w-6 h-6" alt="Icon" src="/figmaAssets/icon-1.svg" />
        </Button>
        <img className="w-8 h-[30.4px]" alt="Linkedin" src={linkedinSrc} />
      </div>
    </div>
  </div>
);

// Available for work badge
const AvailableBadge = ({ textSize = "text-xl" }: { textSize?: string }) => (
  <div className="inline-flex items-center gap-2">
    <div className="flex w-[19px] h-[19px] items-center gap-2 p-[3px] bg-[#29b31d2b] rounded-[9.5px]">
      <div className="w-[13px] h-[13px] bg-[#2ab41d] rounded-[6.5px]" />
    </div>
    <span
      className={`w-fit [font-family:'Be_Vietnam_Pro',Helvetica] font-normal text-[#ffffff] ${textSize} tracking-[0] leading-8 whitespace-nowrap`}
    >
      Available for work
    </span>
  </div>
);

export const Portfolio = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] w-full flex overflow-x-auto">
      {/* ===== PAGE 1: Main Portfolio / Hero + Projects ===== */}
      <div className="mt-[1395px] w-[1440px] min-w-[1440px] h-[3130px] relative ml-[372.3px] bg-black">
        {/* Footer CTA - Page 1 */}
        <div className="top-[2766px] flex flex-col w-[1440px] items-center justify-center gap-[60px] px-20 py-[88px] absolute left-0">
          <div className="self-stretch mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-white text-6xl tracking-[0] leading-[normal]">
            Ready to Build Something Great Together?
          </div>
          <div className="flex items-center justify-between self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[50px]">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="inline-flex flex-col items-start justify-center gap-0.5"
                >
                  <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#95989c] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                    {info.label}
                  </span>
                  <span className="w-fit [font-family:'Inter_Tight',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] underline">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex w-[462.5px] items-center justify-end gap-5">
              <Button
                className="h-auto inline-flex flex-[0_0_auto] bg-[#ffffff] items-center justify-center px-3.5 py-3 rounded-3xl overflow-hidden gap-0 hover:bg-[#f0f0f0]"
                variant="ghost"
              >
                <span className="inline-flex items-center justify-center px-2 py-0 mt-[-1.00px] mb-[-1.00px]">
                  <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-semibold text-[#222222] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    Download My CV
                  </span>
                </span>
                <img
                  className="w-6 h-6"
                  alt="Icon"
                  src="/figmaAssets/icon-1.svg"
                />
              </Button>
              <img
                className="w-8 h-[30.4px]"
                alt="Linkedin"
                src="/figmaAssets/linkedin.png"
              />
            </div>
          </div>
        </div>

        {/* Recent Projects Section */}
        <div className="flex flex-col w-[1440px] items-center justify-center gap-14 px-20 py-[88px] absolute top-[1134px] left-[calc(50.00%_-_720px)]">
          <div className="inline-flex flex-col items-center gap-4 flex-[0_0_auto]">
            <h2 className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#ffffff] text-6xl tracking-[0] leading-[73px] whitespace-nowrap">
              Recent projects
            </h2>
            <p className="w-[886px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#95989c] text-lg text-center tracking-[0] leading-[28.8px]">
              A great product isn&apos;t just about good design , it&apos;s
              about impact. Here are some of my favourite projects that push
              boundaries and create meaningful experiences.
            </p>
          </div>

          <div className="flex flex-col items-start gap-[51px] self-stretch w-full flex-[0_0_auto]">
            {/* First row: two projects side by side */}
            <div className="flex items-center gap-[47px] self-stretch w-full flex-[0_0_auto]">
              {/* Project 1: Map pick up experience */}
              <div className="flex flex-col w-[618px] items-end gap-[34px]">
                <img
                  className="self-stretch w-full h-[496px]"
                  alt="Thubnail"
                  src="/figmaAssets/thubnail.svg"
                />
                <div className="flex h-[71px] items-center self-stretch w-full">
                  <div className="flex-col items-start gap-2 flex-1 grow flex">
                    <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#ffffff] text-[28px] tracking-[0] leading-[37px] whitespace-nowrap">
                      Map pick up experience
                    </span>
                    <div className="flex items-center gap-2 self-stretch w-full flex-[0_0_auto]">
                      <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#95989c] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Visual Design
                      </span>
                      <span className="mt-[-1.00px] font-medium text-[#656567] text-base tracking-[0] leading-[25.6px] w-fit [font-family:'Inter_Tight',Helvetica] whitespace-nowrap">
                        /
                      </span>
                      <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#95989c] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Website Development
                      </span>
                    </div>
                  </div>
                  <div className="flex w-12 bg-[#fcfcfc] border border-solid border-[#0e0e11] h-12 items-center justify-center px-3.5 py-3 rounded-3xl overflow-hidden">
                    <img
                      className="w-6 h-6 ml-[-2.00px] mr-[-2.00px]"
                      alt="Icon"
                      src="/figmaAssets/icon-2.svg"
                    />
                  </div>
                </div>
              </div>

              {/* Project 2: Edugla AI */}
              <div className="flex flex-col w-[618px] items-end gap-[34px] mr-[-3.00px]">
                <div className="self-stretch w-full bg-[#d9d9d9] rounded-[32px] overflow-hidden relative h-[496px]">
                  <img
                    className="absolute left-[calc(50.00%_-_309px)] -bottom-24 w-[618px] h-[496px] object-cover"
                    alt="Macbook mockup"
                    src="/figmaAssets/macbook-mockup-3-1.webp"
                  />
                </div>
                <div className="h-[71px] items-center justify-between self-stretch w-full flex">
                  <div className="flex-col items-start gap-2 flex-1 grow mt-[-0.50px] mb-[-0.50px] flex">
                    <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[0] leading-[37px] whitespace-nowrap">
                      Edugla AI
                    </span>
                    <div className="flex items-center gap-2 self-stretch w-full flex-[0_0_auto]">
                      <span className="mt-[-0.50px] font-medium text-[#95989c] text-base tracking-[0] leading-[25.6px] w-fit [font-family:'Inter_Tight',Helvetica] whitespace-nowrap">
                        AI platform
                      </span>
                      <span className="w-fit mt-[-0.50px] [font-family:'Inter_Tight',Helvetica] font-medium text-base leading-[25.6px] text-[#656567] tracking-[0] whitespace-nowrap">
                        /
                      </span>
                      <span className="mt-[-1.00px] font-normal text-[#95989c] text-lg tracking-[0.36px] leading-[27px] w-fit [font-family:'Inter_Tight',Helvetica] whitespace-nowrap">
                        EdTech
                      </span>
                    </div>
                  </div>
                  <div className="flex w-12 bg-[#fcfcfc] border border-solid border-[#0e0e11] h-12 items-center justify-center px-3.5 py-3 rounded-3xl overflow-hidden">
                    <img
                      className="w-6 h-6 ml-[-2.00px] mr-[-2.00px]"
                      alt="Icon"
                      src="/figmaAssets/icon-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Voice to Cart */}
            <div className="flex flex-col w-[618px] items-end gap-[34px] flex-[0_0_auto]">
              <img
                className="w-[618px] h-[496px]"
                alt="Thubnail"
                src="/figmaAssets/thubnail-1.svg"
              />
              <div className="flex h-[71px] items-center self-stretch w-full">
                <div className="flex-col items-start gap-2 flex-1 grow flex">
                  <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#ffffff] text-[28px] tracking-[0] leading-[37px] whitespace-nowrap">
                    Voice to Cart
                  </span>
                  <div className="flex items-center gap-2 self-stretch w-full flex-[0_0_auto]">
                    <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#95989c] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                      Conversation design
                    </span>
                    <span className="mt-[-1.00px] font-medium text-[#656567] text-base tracking-[0] leading-[25.6px] w-fit [font-family:'Inter_Tight',Helvetica] whitespace-nowrap">
                      /
                    </span>
                    <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#95989c] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                      Voice assistant
                    </span>
                  </div>
                </div>
                <div className="flex w-12 bg-[#fcfcfc] border border-solid border-[#0e0e11] h-12 items-center justify-center px-3.5 py-3 rounded-3xl overflow-hidden">
                  <img
                    className="w-6 h-6 ml-[-2.00px] mr-[-2.00px]"
                    alt="Icon"
                    src="/figmaAssets/icon-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos bar */}
        <img
          className="absolute top-[1034px] left-[calc(50.00%_-_720px)] w-[1440px] h-[100px]"
          alt="Logos"
          src="/figmaAssets/logos.svg"
        />

        {/* Hero watermark + photo */}
        <div className="gap-2 px-20 py-0 top-[161px] left-0 flex flex-col w-[1440px] items-center justify-center absolute">
          <div className="mt-[-1.00px] ml-[-353.50px] mr-[-353.50px] opacity-10 font-semibold text-[#ffffff] text-[280px] tracking-[-11.20px] w-fit [font-family:'Be_Vietnam_Pro',Helvetica] leading-[normal]">
            Ahmed Mansee
          </div>
          <div className="flex w-[623px] h-[623px] items-center justify-center gap-2.5 absolute top-[-49px] left-[calc(50.00%_-_321px)]">
            <img
              className="w-[672px] h-[672px] mt-[-24.50px] mb-[-24.50px] ml-[-24.50px] mr-[-24.50px] object-cover"
              alt="Mansee tr"
              src="/figmaAssets/mansee-tr-1-1.webp"
            />
          </div>
        </div>

        {/* Hero CTA section */}
        <div className="gap-10 px-20 py-12 top-[694px] left-[calc(50.00%_-_720px)] flex flex-col w-[1440px] items-center justify-center absolute">
          <div className="flex flex-col items-center justify-center gap-6 self-stretch w-full flex-[0_0_auto]">
            <AvailableBadge textSize="text-xl" />
            <p className="self-stretch opacity-80 [font-family:'Inter_Tight',Helvetica] font-medium text-[#ffffff] text-6xl text-center tracking-[0] leading-[normal]">
              Hi, I&apos;m Ahmad, a multidisciplinary designer focused on
              AI-driven digital products.
            </p>
          </div>
          <div className="inline-flex flex-col items-start justify-center gap-4 flex-[0_0_auto]">
            <div className="flex items-start gap-4 self-stretch w-full flex-[0_0_auto]">
              <Button
                className="h-auto inline-flex flex-[0_0_auto] border border-solid border-[#ffffff] items-center justify-center px-3.5 py-3 rounded-3xl overflow-hidden gap-0 bg-transparent hover:bg-white/10"
                variant="outline"
              >
                <span className="inline-flex items-center justify-center px-2 py-0 mt-[-1.00px] mb-[-1.00px]">
                  <span className="w-fit mt-[-1.00px] [font-family:'Be_Vietnam_Pro',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    Download My CV
                  </span>
                </span>
                <img
                  className="w-6 h-6"
                  alt="Icon"
                  src="/figmaAssets/icon-1.svg"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Navbar - Page 1 */}
        <div className="flex w-[1440px] items-center justify-between px-[81px] py-6 absolute top-0 left-0 bg-black rounded-[16px_16px_0px_0px] overflow-hidden">
          <img
            className="flex-[0_0_auto]"
            alt="Logo"
            src="/figmaAssets/logo.svg"
          />
          <div className="gap-14 inline-flex items-center justify-center flex-[0_0_auto]">
            <div className="gap-[30px] inline-flex items-center justify-center flex-[0_0_auto]">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="inline-flex flex-col items-center justify-center gap-0.5 flex-[0_0_auto]"
                >
                  <span
                    className={`flex items-center w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] ${link.label === "Work" ? "font-medium" : "font-normal"} text-[#ffffff] text-lg tracking-[0] leading-[28.8px] whitespace-nowrap`}
                  >
                    {link.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== PAGE 2: About / Experience / Toolbox ===== */}
      <div className="mt-[1395px] w-[1440px] min-w-[1440px] h-[2779px] relative ml-[197px] bg-black">
        {/* Footer CTA - Page 2 */}
        <div className="bottom-0 flex flex-col w-[1440px] items-center justify-center gap-[60px] px-20 py-[88px] absolute left-0">
          <div className="self-stretch mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-white text-6xl tracking-[0] leading-[normal]">
            Ready to Build Something Great Together?
          </div>
          <div className="flex items-center justify-between self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[50px]">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="inline-flex flex-col items-start justify-center gap-0.5"
                >
                  <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#95989c] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                    {info.label}
                  </span>
                  <span className="w-fit [font-family:'Inter_Tight',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] underline">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex w-[462.5px] items-center justify-end gap-5">
              <Button
                className="h-auto inline-flex flex-[0_0_auto] bg-[#ffffff] items-center justify-center px-3.5 py-3 rounded-3xl overflow-hidden gap-0 hover:bg-[#f0f0f0]"
                variant="ghost"
              >
                <span className="inline-flex items-center justify-center px-2 py-0 mt-[-1.00px] mb-[-1.00px]">
                  <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-semibold text-[#222222] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    Download My CV
                  </span>
                </span>
                <img
                  className="w-6 h-6"
                  alt="Icon"
                  src="/figmaAssets/icon-1.svg"
                />
              </Button>
              <img
                className="w-8 h-[30.4px]"
                alt="Linkedin"
                src="/figmaAssets/linkedin-1.png"
              />
            </div>
          </div>
        </div>

        {/* Toolbox Section */}
        <div className="flex flex-col w-[1440px] items-center justify-center gap-[60px] px-20 py-[88px] absolute top-[1848px] left-[calc(50.00%_-_720px)]">
          <div className="flex flex-col w-[350px] items-center justify-center gap-5 flex-[0_0_auto]">
            <h2 className="self-stretch mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#ffffff] text-6xl text-center tracking-[0] leading-[normal]">
              Toolbox
            </h2>
          </div>
          <div className="flex self-stretch w-full items-center flex-[0_0_auto]">
            {toolboxItems.map((tool) => (
              <div
                key={tool.label}
                className="inline-flex flex-col h-[250px] justify-center gap-[30px] px-[72px] py-9 items-center flex-[0_0_auto]"
              >
                <img
                  className={tool.imgClass}
                  alt={tool.label}
                  src={tool.img}
                />
                <span className="w-fit [font-family:'Be_Vietnam_Pro',Helvetica] font-normal text-[#aaaab3] text-2xl tracking-[0] leading-[normal]">
                  {tool.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-[1440px] justify-center gap-14 px-20 py-[88px] absolute top-[820px] left-0 flex flex-col items-start">
          <div className="gap-14 self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
            <h2 className="self-stretch mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#ffffff] text-6xl tracking-[0] leading-[normal]">
              Experience
            </h2>
            <div className="flex flex-col items-start gap-4 self-stretch w-full flex-[0_0_auto]">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="gap-4 pt-0 pb-10 px-0 self-stretch w-full flex-[0_0_auto] border-b border-solid border-[#9b9ba1] flex flex-col items-start"
                >
                  <div className="flex items-start justify-between self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-4 flex-[0_0_auto]">
                      <span className="font-normal text-[#ffffff] text-2xl leading-[37px] whitespace-nowrap flex items-center w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] tracking-[0]">
                        {exp.title}
                      </span>
                      <div className="inline-flex items-start gap-2 flex-[0_0_auto]">
                        <span className="flex items-center w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#95989c] text-lg tracking-[0] leading-[28.8px] whitespace-nowrap">
                          {exp.location}
                        </span>
                        {exp.locationExtra && (
                          <>
                            <span className="flex items-center self-stretch w-[7px] mt-[-1.00px] font-normal text-[#656567] text-lg leading-[28.8px] whitespace-nowrap [font-family:'Manrope',Helvetica]">
                              /
                            </span>
                            <span className="font-normal text-[#95989c] text-lg leading-[28.8px] whitespace-nowrap flex items-center w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] tracking-[0]">
                              {exp.locationExtra}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="font-medium text-[#95989c] text-lg leading-[normal] flex items-center w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] tracking-[0]">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero watermark + photo - Page 2 */}
        <div className="gap-2 px-20 py-0 top-[154px] left-[calc(50.00%_-_720px)] flex flex-col w-[1440px] items-center justify-center absolute">
          <div className="mt-[-1.00px] ml-[-353.50px] mr-[-353.50px] opacity-10 font-semibold text-[#ffffff] text-[280px] tracking-[-11.20px] w-fit [font-family:'Be_Vietnam_Pro',Helvetica] leading-[normal]">
            Ahmed Mansee
          </div>
          <div className="flex w-[623px] h-[623px] items-center justify-center gap-2.5 pt-0 pb-1 px-0 absolute top-0 left-0">
            <img
              className="w-[647.5px] h-[672px] mt-[-26.50px] mb-[-26.50px] mr-[-24.50px] object-cover"
              alt="Mansee tr"
              src="/figmaAssets/mansee-tr-1-1.webp"
            />
          </div>
        </div>

        {/* About text - Page 2 */}
        <div className="flex flex-col w-[788px] items-start justify-center gap-6 absolute top-[265px] left-[572px]">
          <AvailableBadge textSize="text-base" />
          <h1 className="self-stretch [font-family:'Inter_Tight',Helvetica] font-semibold text-[#ffffff] text-[42px] tracking-[0] leading-[normal]">
            Hi, I&apos;m Ahmad, a multidisciplinary designer focused on
            AI-driven digital products.
          </h1>
          <p className="self-stretch [font-family:'Inter_Tight',Helvetica] font-normal text-[#ffffff] text-xl tracking-[0] leading-8">
            a product designer, VUI designer, and UI/UX mentor currently located
            in Berlin, with roots in Amman, Jordan. My passion lies in creating
            digital products that meet human needs while elevating aesthetics.
          </p>
          <div className="inline-flex items-start gap-5 flex-[0_0_auto]">
            <Button
              className="h-auto inline-flex flex-[0_0_auto] bg-[#ffffff] items-center justify-center px-3.5 py-3 rounded-3xl overflow-hidden gap-0 hover:bg-[#f0f0f0]"
              variant="ghost"
            >
              <span className="inline-flex items-center justify-center px-2 py-0 mt-[-1.00px] mb-[-1.00px]">
                <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-semibold text-[#222222] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                  Contact&nbsp;&nbsp;Me
                </span>
              </span>
              <img
                className="w-6 h-6"
                alt="Icon"
                src="/figmaAssets/icon-4.svg"
              />
            </Button>
            <div className="inline-flex flex-col items-start justify-center gap-4 flex-[0_0_auto]">
              <div className="flex items-start gap-4 self-stretch w-full flex-[0_0_auto]">
                <Button
                  className="h-auto inline-flex flex-[0_0_auto] border border-solid border-[#ffffff] items-center justify-center px-3.5 py-3 rounded-3xl overflow-hidden gap-0 bg-transparent hover:bg-white/10"
                  variant="outline"
                >
                  <span className="inline-flex items-center justify-center px-2 py-0 mt-[-1.00px] mb-[-1.00px]">
                    <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                      Download My CV
                    </span>
                  </span>
                  <img
                    className="w-6 h-6"
                    alt="Icon"
                    src="/figmaAssets/icon-1.svg"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar - Page 2 (About me active) */}
        <div className="flex w-[1440px] items-center justify-between px-[81px] py-6 absolute top-0 left-0 bg-black rounded-[16px_16px_0px_0px] overflow-hidden">
          <img
            className="flex-[0_0_auto]"
            alt="Logo"
            src="/figmaAssets/logo.svg"
          />
          <div className="gap-14 inline-flex items-center justify-center flex-[0_0_auto]">
            <div className="gap-[30px] inline-flex items-center justify-center flex-[0_0_auto]">
              <div className="inline-flex flex-col items-center justify-center gap-0.5 flex-[0_0_auto]">
                <span className="flex items-center w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#ffffff] text-lg tracking-[0] leading-[28.8px] whitespace-nowrap">
                  Work
                </span>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-0.5 flex-[0_0_auto]">
                <span className="flex items-center w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#ffffff] text-lg tracking-[0] leading-[28.8px] whitespace-nowrap">
                  About me
                </span>
                <img
                  className="self-stretch w-full h-px"
                  alt="Line"
                  src="/figmaAssets/line-3-1.svg"
                />
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-0.5 flex-[0_0_auto]">
                <span className="flex items-center w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#ffffff] text-lg tracking-[0] leading-[28.8px] whitespace-nowrap">
                  Contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PAGE 3: Contact ===== */}
      <div className="mt-[1395px] w-[1440px] min-w-[1440px] h-[952px] relative ml-[197px] bg-black">
        {/* Footer contact info */}
        <div className="bottom-0 flex flex-col w-[1440px] items-center justify-center gap-[60px] px-20 py-[88px] absolute left-0">
          <div className="flex items-center justify-between self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[50px]">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="inline-flex flex-col items-start justify-center gap-0.5"
                >
                  <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#95989c] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                    {info.label}
                  </span>
                  <span className="w-fit [font-family:'Inter_Tight',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] underline">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex w-[462.5px] items-center justify-end gap-5">
              <Button
                className="h-auto inline-flex flex-[0_0_auto] bg-[#ffffff] items-center justify-center px-3.5 py-3 rounded-3xl overflow-hidden gap-0 hover:bg-[#f0f0f0]"
                variant="ghost"
              >
                <span className="inline-flex items-center justify-center px-2 py-0 mt-[-1.00px] mb-[-1.00px]">
                  <span className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-semibold text-[#222222] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    Download My CV
                  </span>
                </span>
                <img
                  className="w-6 h-6"
                  alt="Icon"
                  src="/figmaAssets/icon-1.svg"
                />
              </Button>
              <img
                className="w-8 h-[30.4px]"
                alt="Linkedin"
                src="/figmaAssets/linkedin-2.png"
              />
            </div>
          </div>
        </div>

        {/* Contact hero text */}
        <div className="gap-16 px-20 py-[88px] top-[79px] left-0 flex flex-col w-[1440px] items-center justify-center absolute">
          <div className="flex flex-col items-center justify-center gap-6 self-stretch w-full flex-[0_0_auto]">
            <h1 className="self-stretch mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-bold text-[#ffffff] text-[100px] text-center tracking-[-2.00px] leading-[100px]">
              Say Hi! and tell me about your idea
            </h1>
          </div>
          <p className="w-[1040px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#95989b] text-[28px] text-center tracking-[-0.56px] leading-[normal]">
            Whether you have a project in mind, a collaboration request, or just
            want to connect, I&#39;d love to hear from you.
          </p>
        </div>

        {/* Navbar - Page 3 (Contact active) */}
        <div className="flex w-[1440px] items-center justify-between px-[81px] py-6 absolute top-0 left-0 bg-black rounded-[16px_16px_0px_0px] overflow-hidden">
          <img
            className="flex-[0_0_auto]"
            alt="Logo"
            src="/figmaAssets/logo.svg"
          />
          <div className="gap-14 inline-flex items-center justify-center flex-[0_0_auto]">
            <div className="gap-[30px] inline-flex items-center justify-center flex-[0_0_auto]">
              <div className="inline-flex flex-col items-center justify-center gap-0.5 flex-[0_0_auto]">
                <span className="flex items-center w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#ffffff] text-lg tracking-[0] leading-[28.8px] whitespace-nowrap">
                  Work
                </span>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-0.5 flex-[0_0_auto]">
                <span className="flex items-center w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#ffffff] text-lg tracking-[0] leading-[28.8px] whitespace-nowrap">
                  About me
                </span>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-0.5 flex-[0_0_auto]">
                <span className="flex items-center w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#ffffff] text-lg tracking-[0] leading-[28.8px] whitespace-nowrap">
                  Contact
                </span>
                <img
                  className="self-stretch w-full h-px"
                  alt="Line"
                  src="/figmaAssets/line-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Case Study Images ===== */}
      <img
        className="mt-[1395px] w-[1440px] min-w-[1440px] h-[12495px] ml-[239px]"
        alt="Pick up"
        src="/figmaAssets/pick-up.webp"
      />

      <img
        className="mt-[1395px] w-[1440px] min-w-[1440px] h-[11162px] ml-[186px]"
        alt="Edugla"
        src="/figmaAssets/edugla.webp"
      />

      <img
        className="mt-[1395px] w-[1440px] min-w-[1440px] h-[11165px] ml-[185px]"
        alt="Voice to cart"
        src="/figmaAssets/voice-to-cart.webp"
      />
    </div>
  );
};
