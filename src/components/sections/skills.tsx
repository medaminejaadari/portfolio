"use client";

import { Section } from "@/components/section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { skillCategories } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";

export function Skills() {
  return (
    <Section id="skills" number="02" title="Skills">
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => {
          const Icon = getIcon(category.icon);
          return (
            <ScrollReveal key={category.name} delay={i * 0.05}>
              <div className="card h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      color: "var(--heading-accent)",
                      background:
                        "color-mix(in srgb, var(--heading-accent) 10%, transparent)",
                    }}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: "var(--heading)" }}
                  >
                    {category.name}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li key={item}>
                      <span className="chip">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
