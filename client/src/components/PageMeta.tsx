import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description?: string;
}

const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const PageMeta = ({ title, description }: PageMetaProps) => {
  useEffect(() => {
    document.title = title;
    upsertMeta("property", "og:title", title);
    upsertMeta("name", "twitter:title", title);
    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }
  }, [title, description]);

  return null;
};
