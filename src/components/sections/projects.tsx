"use client";

import { ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "@/components/social-icons";
import { Section } from "@/components/section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" number="04" title="Projects">
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.05}>
            <article
              className="card group h-full flex flex-col justify-between"
              aria-label={project.title}
            >
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{
                      color: "var(--heading-accent)",
                      background:
                        "color-mix(in srgb, var(--heading-accent) 10%, transparent)",
                    }}
                  >
                    <Folder size={22} aria-hidden="true" />
                  </span>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        className="transition-colors hover:text-accent"
                        style={{ color: "var(--muted)" }}
                      >
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo of ${project.title}`}
                        className="transition-colors hover:text-accent"
                        style={{ color: "var(--muted)" }}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--heading)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="font-mono text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  {project.period}
                </p>

                <ul
                  className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description.map((point, pi) => (
                    <li key={pi}>{point}</li>
                  ))}
                </ul>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t}>
                    <span className="chip">{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
