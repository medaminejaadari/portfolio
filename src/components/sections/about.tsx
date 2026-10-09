"use client";

import { Section } from "@/components/section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteConfig } from "@/data/portfolio";

export function About() {
  const profile =
    "Telecommunications engineering student at the National Engineering School of Tunis (ENIT), specializing in Data Science, with hands-on experience in machine learning, multi-agent systems, and large-scale data analysis. Strong skills in AI, reinforcement learning, and RAG systems. Seeking a research internship starting in February 2027 to design scalable, intelligent, and high-impact solutions.";

  return (
    <Section id="about" number="01" title="About Me">
      <ScrollReveal>
        <div className="card mt-10 leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>{profile}</p>
          <div className="mt-6 grid gap-2 text-sm">
            <p>
              <span
                className="font-semibold"
                style={{ color: "var(--heading)" }}
              >
                Location:
              </span>{" "}
              {siteConfig.location}
            </p>
            <p>
              <span
                className="font-semibold"
                style={{ color: "var(--heading)" }}
              >
                Currently:
              </span>{" "}
              {siteConfig.title}
            </p>
            <p>
              <span
                className="font-semibold"
                style={{ color: "var(--heading)" }}
              >
                Open to:
              </span>{" "}
              Research internship starting February 2027
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
