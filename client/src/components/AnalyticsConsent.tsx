import { useEffect } from "react";
import { initializeAnalytics } from "@/lib/analytics";

export const AnalyticsConsent = () => {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return null;
};
