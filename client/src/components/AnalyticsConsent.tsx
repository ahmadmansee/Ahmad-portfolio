import { useEffect, useState } from "react";
import { initializeAnalytics } from "@/lib/analytics";

const CONSENT_KEY = "amansee_analytics_consent";

export const AnalyticsConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    if (consent === "granted") {
      initializeAnalytics();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem(CONSENT_KEY, "granted");
    initializeAnalytics();
    setVisible(false);
  };

  const decline = () => {
    window.localStorage.setItem(CONSENT_KEY, "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/15 bg-[#17171a]/95 p-5 text-left shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
      aria-label="Analytics preference"
    >
      <p className="font-['Inter_Tight',Helvetica] text-sm leading-relaxed text-[#d5d5d7] sm:max-w-xl">
        I use optional Google Analytics to understand which portfolio pages are useful. No advertising tracking.
      </p>
      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          onClick={decline}
          className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
        >
          No thanks
        </button>
        <button
          type="button"
          onClick={accept}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-white/90"
        >
          Accept analytics
        </button>
      </div>
    </aside>
  );
};
