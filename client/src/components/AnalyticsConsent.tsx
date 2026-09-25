import { useEffect, useState } from "react";
import { initializeAnalytics } from "@/lib/analytics";

const NOTICE_KEY = "amansee_analytics_notice_dismissed";

export const AnalyticsConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    initializeAnalytics();
    setVisible(window.localStorage.getItem(NOTICE_KEY) !== "true");
  }, []);

  const dismiss = () => {
    window.localStorage.setItem(NOTICE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/15 bg-[#17171a]/95 p-5 text-left shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
      aria-label="Analytics information"
    >
      <p className="font-['Inter_Tight',Helvetica] text-sm leading-relaxed text-[#d5d5d7] sm:max-w-xl">
        This site uses privacy-friendly analytics.
      </p>
      <div className="flex shrink-0 items-center">
        <button
          type="button"
          onClick={dismiss}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-white/90"
        >
          Got it
        </button>
      </div>
    </aside>
  );
};
