"use client";

import { Briefcase } from "lucide-react";
import { Section } from "@/components/section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Timeline } from "@/components/sections/timeline";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" number="03" title="Experience">
      <ScrollReveal>
        <Timeline
          entries={experience.map((item) => ({
            title: item.role,
            subtitle: item.company,
            period: item.period,
            bullets: item.bullets,
            icon: <Briefcase size={14} />,
          }))}
        />
      </ScrollReveal>
    </Section>
  );
}
