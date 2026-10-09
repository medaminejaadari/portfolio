"use client";

import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <a
          href="#home"
          className="btn-outline px-4 py-2 text-xs"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
          Back to Top
        </a>
      </div>
    </footer>
  );
}
