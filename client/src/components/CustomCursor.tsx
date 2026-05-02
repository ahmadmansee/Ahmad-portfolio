import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, [data-cursor='hover']";

export const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;
    setEnabled(true);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;
    let firstMove = true;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (firstMove) {
        ringX = mouseX;
        ringY = mouseY;
        firstMove = false;
        setVisible(true);
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest(INTERACTIVE_SELECTOR)) setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest(INTERACTIVE_SELECTOR)) setHovering(false);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
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
    <div
      ref={ringRef}
      className={`pointer-events-none fixed top-0 left-0 z-[9998] w-9 h-9 rounded-full border border-[#cf3570] mix-blend-difference transition-[width,height,background-color,opacity] duration-200 ${
        hovering ? "bg-[#cf3570]/30 scale-150" : "bg-transparent"
      } ${visible ? "opacity-80" : "opacity-0"}`}
      aria-hidden
    />
  );
};
