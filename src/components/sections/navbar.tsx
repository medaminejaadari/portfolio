"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-shadow"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--background) 75%, transparent)",
        boxShadow: scrolled ? "0 4px 20px -8px rgba(2, 6, 23, 0.35)" : "none",
      }}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="font-mono text-lg font-bold"
          style={{ color: "var(--heading)" }}
        >
          <span style={{ color: "var(--heading-accent)" }}>{"<"}</span>
          JMA
          <span style={{ color: "var(--heading-accent)" }}>{"/>"}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "page" : undefined}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent"
                style={{
                  color: active === item.id ? "var(--heading-accent)" : "var(--muted)",
                  background:
                    active === item.id
                      ? "color-mix(in srgb, var(--heading-accent) 10%, transparent)"
                      : "transparent",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
            style={{ borderColor: "var(--border)" }}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t lg:hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <ul className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? "page" : undefined}
                    className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent"
                    style={{
                      color:
                        active === item.id
                          ? "var(--heading-accent)"
                          : "var(--muted)",
                      background:
                        active === item.id
                          ? "color-mix(in srgb, var(--heading-accent) 10%, transparent)"
                          : "transparent",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
