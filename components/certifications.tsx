import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Certifications" title="Credentials" />

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((c, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="glass flex items-start gap-4 rounded-xl p-5 transition-all duration-300 hover:border-indigo-soft/40 hover:-translate-y-0.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-elevated ring-1 ring-line">
                  <BadgeCheck size={16} className="text-violet" />
                </span>
                <div>
                  <h3 className="text-sm font-medium text-ink-primary leading-snug">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink-muted">
                    {c.issuer} <span className="text-ink-faint">·</span>{" "}
                    <span className="font-mono text-electric-bright">{c.date}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
