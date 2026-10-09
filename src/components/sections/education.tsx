"use client";

import { GraduationCap } from "lucide-react";
import { Section } from "@/components/section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Timeline } from "@/components/sections/timeline";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" number="05" title="Education">
      <ScrollReveal>
        <Timeline
          entries={education.map((item) => ({
            title: item.school,
            subtitle: item.degree,
            period: item.period,
            bullets: item.bullets,
            icon: <GraduationCap size={14} />,
            logo: item.logo,
            logoAlt: item.logoAlt,
          }))}
        />
      </ScrollReveal>
    </Section>
  );
}
