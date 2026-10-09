"use client";

import Image from "next/image";
import { Section } from "@/components/section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteConfig } from "@/data/portfolio";

export function About() {
  const profile =
    "Telecommunications engineering student at the National Engineering School of Tunis (ENIT), specializing in Data Science, with hands-on experience in machine learning, multi-agent systems, and large-scale data analysis. Strong skills in AI, reinforcement learning, and RAG systems. Seeking a research internship starting in February 2027 to design scalable, intelligent, and high-impact solutions.";

  return (
    <Section id="about" number="01" title="About Me">
      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[300px_1fr]">
        <ScrollReveal>
          <figure className="relative mx-auto w-full max-w-[280px] lg:max-w-none">
            <div
              className="overflow-hidden rounded-2xl border shadow-card"
              style={{ borderColor: "var(--border)" }}
            >
              <Image
                src={siteConfig.photo}
                alt={`${siteConfig.name} — portrait photo`}
                width={720}
                height={1130}
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption
              className="mt-3 text-center font-mono text-xs font-medium"
              style={{ color: "var(--heading-accent)" }}
            >
              📍 {siteConfig.location}
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="card leading-relaxed" style={{ color: "var(--muted)" }}>
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
      </div>
    </Section>
  );
}
