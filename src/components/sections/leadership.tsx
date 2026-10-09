"use client";

import { Users } from "lucide-react";
import { Section } from "@/components/section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { leadership } from "@/data/portfolio";

export function Leadership() {
  return (
    <Section id="leadership" number="06" title="Leadership & Activities">
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {leadership.map((activity, i) => (
          <ScrollReveal key={activity.org} delay={i * 0.05}>
            <div className="card h-full">
              <span
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                style={{
                  color: "var(--heading-accent)",
                  background:
                    "color-mix(in srgb, var(--heading-accent) 10%, transparent)",
                }}
              >
                <Users size={20} aria-hidden="true" />
              </span>
              <h3
                className="text-base font-bold"
                style={{ color: "var(--heading)" }}
              >
                {activity.org}
              </h3>
              <p
                className="font-mono text-xs font-medium"
                style={{ color: "var(--heading-accent)" }}
              >
                {activity.role}
              </p>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {activity.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
