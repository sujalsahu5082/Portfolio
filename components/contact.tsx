"use client";

import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sujal-sahu-b08678294",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/sujalsahu5082",
    href: profile.github,
    icon: Github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about an opportunity"
          description="Reach out directly — every channel below is the one I actually check."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((l, idx) => (
            <Reveal key={l.label} delay={idx * 0.05}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="glass group flex items-center justify-between rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-electric-bright/40 hover:shadow-glow-blue"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo to-electric-bright">
                    <l.icon size={17} className="text-white" />
                  </span>
                  <div>
                    <p className="text-xs text-ink-muted">{l.label}</p>
                    <p className="text-sm font-medium text-ink-primary">{l.value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric-bright"
                />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <a href={profile.resumeFile} download>
            <Button variant="primary" size="md">
              Download Full Resume
            </Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
