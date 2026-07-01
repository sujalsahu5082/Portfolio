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
          {certifications.map((c, idx) => {
            const cardContent = (
              <div className={`glass flex items-start gap-4 rounded-xl p-5 transition-all duration-300 hover:border-indigo-soft/40 hover:-translate-y-0.5 ${c.file ? "cursor-pointer group" : ""}`}>
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-elevated ring-1 ring-line group-hover:ring-electric transition-colors duration-300">
                  <BadgeCheck size={16} className="text-violet group-hover:text-electric-bright transition-colors duration-300" />
                </span>
                <div>
                  <h3 className="text-sm font-medium text-ink-primary leading-snug group-hover:text-electric-bright transition-colors duration-300">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink-muted">
                    {c.issuer} <span className="text-ink-faint">·</span>{" "}
                    <span className="font-mono text-electric-bright">{c.date}</span>
                  </p>
                </div>
              </div>
            );

            return (
              <Reveal key={idx} delay={idx * 0.04}>
                {c.file ? (
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none"
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
