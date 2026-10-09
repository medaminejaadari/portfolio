import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Leadership } from "@/components/sections/leadership";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { siteConfig } from "@/data/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tunis",
    addressCountry: "TN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "National Engineering School of Tunis (ENIT)",
  },
  sameAs: [siteConfig.linkedin, siteConfig.github],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
