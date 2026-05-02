import { useEffect } from "react";
import { useLocation } from "wouter";

export const ScrollRestoration = () => {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
};
