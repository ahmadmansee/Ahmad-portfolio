import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, [data-cursor='hover']";
const LABEL_SELECTOR = "[data-cursor-text]";

export const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;
    setEnabled(true);

    let mouseX = 0;
    let mouseY = 0;
    let raf = 0;
    let isVisible = false;
    let isHovering = false;
    let activeLabel: string | null = null;

    const updatePosition = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${mouseX - 16}px, ${mouseY - 16}px, 0)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${mouseX + 18}px, ${mouseY + 18}px, 0)`;
      }
      raf = 0;
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        setVisible(true);
      }

      const target = e.target as HTMLElement | null;
      const nextHovering = Boolean(target?.closest(INTERACTIVE_SELECTOR));
      if (nextHovering !== isHovering) {
        isHovering = nextHovering;
        setHovering(nextHovering);
      }

      const labelEl = target?.closest(LABEL_SELECTOR) as HTMLElement | null;
      const nextLabel = labelEl?.getAttribute("data-cursor-text") || null;
      if (nextLabel !== activeLabel) {
        activeLabel = nextLabel;
        setLabel(nextLabel);
      }

      if (!raf) raf = requestAnimationFrame(updatePosition);
    };

    const onLeave = () => {
      isVisible = false;
      setVisible(false);
    };
    const onEnter = () => {
      isVisible = true;
      setVisible(true);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Ring — follows cursor instantly, only size/opacity animate */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border border-[#cf3570] mix-blend-difference will-change-transform transition-[width,height,background-color,opacity,border-color] duration-100 ease-out ${
          hovering ? "bg-[#cf3570]/20 w-10 h-10 -ml-1 -mt-1" : "bg-transparent"
        } ${visible && !label ? "opacity-90" : "opacity-0"}`}
        aria-hidden
      />
      {/* Label pill */}
      <div
        ref={labelRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] px-4 py-2 rounded-full bg-[#cf3570] text-white font-['Inter_Tight',Helvetica] font-medium text-sm whitespace-nowrap shadow-lg will-change-transform transition-opacity duration-100 ${
          label && visible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      >
        {label}
      </div>
    </>
  );
};
