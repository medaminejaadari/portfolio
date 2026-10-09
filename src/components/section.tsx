"use client";

import { type ReactNode } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, number, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <ScrollReveal>
        <div className="section-heading">
          <h2 className="section-title">
            <span className="accent mr-2 font-mono text-xl sm:text-2xl">
              {number}.
            </span>
            {title}
          </h2>
        </div>
      </ScrollReveal>
      {children}
    </section>
  );
}
