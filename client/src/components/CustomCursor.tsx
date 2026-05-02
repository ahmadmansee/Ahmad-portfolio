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

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
    };

    // Direct positioning for snappy feel — no lerp lag
    const animate = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${mouseX - 16}px, ${mouseY - 16}px, 0)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${mouseX + 18}px, ${mouseY + 18}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest(INTERACTIVE_SELECTOR)) setHovering(true);
      const labelEl = target.closest(LABEL_SELECTOR) as HTMLElement | null;
      if (labelEl) {
        const text = labelEl.getAttribute("data-cursor-text");
        if (text) setLabel(text);
      }
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest(INTERACTIVE_SELECTOR)) setHovering(false);
      if (target.closest(LABEL_SELECTOR)) setLabel(null);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Ring — follows cursor instantly, only size/opacity animate */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border border-[#cf3570] mix-blend-difference will-change-transform transition-[width,height,background-color,opacity,border-color] duration-150 ease-out ${
          hovering ? "bg-[#cf3570]/20 w-10 h-10 -ml-1 -mt-1" : "bg-transparent"
        } ${visible && !label ? "opacity-90" : "opacity-0"}`}
        aria-hidden
      />
      {/* Label pill */}
      <div
        ref={labelRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] px-4 py-2 rounded-full bg-[#cf3570] text-white font-['Inter_Tight',Helvetica] font-medium text-sm whitespace-nowrap shadow-lg will-change-transform transition-opacity duration-150 ${
          label && visible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      >
        {label}
      </div>
    </>
  );
};
