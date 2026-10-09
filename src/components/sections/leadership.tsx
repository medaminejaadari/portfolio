"use client";

import Image from "next/image";
import { Users } from "lucide-react";
import { Section } from "@/components/section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { leadership } from "@/data/portfolio";

export function Leadership() {
  return (
    <Section id="leadership" number="06" title="Leadership & Activities">
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((activity, i) => (
          <ScrollReveal key={activity.org} delay={i * 0.05}>
            <article className="card group h-full overflow-hidden p-0">
              {activity.image && (
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.imageAlt ?? activity.org}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, var(--surface) 0%, color-mix(in srgb, var(--surface) 20%, transparent) 45%, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              )}

              <div className="p-6">
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
            </article>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
