"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { Section } from "@/components/section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteConfig } from "@/data/portfolio";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Please enter your name.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("Please enter a valid email address."),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters.")
    .max(5000, "Message is too long."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
        style={{
          color: "var(--heading-accent)",
          background:
            "color-mix(in srgb, var(--heading-accent) 10%, transparent)",
        }}
      >
        <Icon size={18} aria-hidden="true" />
      </span>
      <div>
        <p className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>
          {label}
        </p>
        <p className="text-sm font-semibold" style={{ color: "var(--heading)" }}>
          {value}
        </p>
      </div>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex items-center gap-4 transition-opacity hover:opacity-80"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4">{content}</div>
  );
}

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (values: ContactFormValues) => {
    const subject = encodeURIComponent(
      `Portfolio contact from ${values.name}`
    );
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <Section id="contact" number="07" title="Get In Touch">
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <ScrollReveal>
          <div className="space-y-6">
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              I&apos;m currently seeking a research internship starting in
              February 2027. Whether you have an opportunity in AI and data
              science or just want to say hi — my inbox is always open!
            </p>
            <ContactInfo
              icon={Mail}
              label="Email"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactInfo
              icon={Phone}
              label="Phone"
              value={siteConfig.phone}
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            />
            <ContactInfo
              icon={MapPin}
              label="Location"
              value={siteConfig.location}
            />
            <div className="flex items-center gap-4 pt-2">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="transition-colors hover:text-accent"
                style={{ color: "var(--muted)" }}
              >
                <LinkedinIcon size={22} />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="transition-colors hover:text-accent"
                style={{ color: "var(--muted)" }}
              >
                <GithubIcon size={22} />
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card space-y-5"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-semibold"
                style={{ color: "var(--heading)" }}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
                style={{ borderColor: errors.name ? "#f87171" : "var(--border)" }}
                {...register("name")}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold"
                style={{ color: "var(--heading)" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="your@email.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
                style={{ borderColor: errors.email ? "#f87171" : "var(--border)" }}
                {...register("email")}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold"
                style={{ color: "var(--heading)" }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full resize-y rounded-lg border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
                style={{ borderColor: errors.message ? "#f87171" : "var(--border)" }}
                {...register("message")}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              Send Message
            </button>
          </form>
        </ScrollReveal>
      </div>
    </Section>
  );
}
