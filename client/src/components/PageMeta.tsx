import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

const SITE_URL = "https://amansee.com";

const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
};

export const PageMeta = ({
  title,
  description,
  image = "/og-image.png",
  noIndex = false,
}: PageMetaProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${window.location.pathname === "/" ? "" : window.location.pathname}`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = title;
    upsertCanonical(canonicalUrl);
    upsertMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", `${title} social preview`);
    upsertMeta("property", "og:site_name", "Ahmad Mansee Portfolio");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:image", imageUrl);
    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }
  }, [title, description, image, noIndex]);

  return null;
};
