"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { siteConfig } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-hero-gradient"
    >
      <div className="mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-mono text-sm font-medium"
          style={{ color: "var(--heading-accent)" }}
        >
          Hi there, my name is
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          style={{ color: "var(--heading)" }}
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-4 text-xl font-semibold sm:text-2xl md:text-3xl"
          style={{ color: "var(--muted)" }}
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--muted)" }}
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
          <a href="#contact" className="btn-outline" aria-label="Download CV">
            <FileText size={18} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex items-center justify-center gap-6"
        >
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-accent"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Send an email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={22} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors hover:text-accent"
          style={{ color: "var(--muted)" }}
        >
          <ArrowDown size={22} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
