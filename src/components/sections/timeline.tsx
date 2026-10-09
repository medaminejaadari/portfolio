"use client";

import { type ReactNode } from "react";

interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  bullets?: string[];
  icon: ReactNode;
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative mt-10 space-y-12 border-l-2 pl-8" style={{ borderColor: "var(--border)" }}>
      {entries.map((entry, i) => (
        <li key={entry.title + i} className="relative">
          <span
            className="absolute -left-[41px] top-0 inline-flex h-5 w-5 items-center justify-center rounded-full border-2"
            style={{
              borderColor: "var(--heading-accent)",
              background: "var(--background)",
            }}
            aria-hidden="true"
          />
          <p
            className="font-mono text-xs font-medium uppercase tracking-wider"
            style={{ color: "var(--heading-accent)" }}
          >
            {entry.period}
          </p>
          <h3
            className="mt-1 text-lg font-bold"
            style={{ color: "var(--heading)" }}
          >
            {entry.title}
          </h3>
          <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
            {entry.subtitle}
          </p>
          {entry.bullets && entry.bullets.length > 0 && (
            <ul
              className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {entry.bullets.map((bullet, bi) => (
                <li key={bi}>{bullet}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
