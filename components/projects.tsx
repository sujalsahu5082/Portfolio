import { Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Analytics dashboards, market research, and a full-stack AI application built end to end."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <Reveal key={idx} delay={idx * 0.06}>
              <Card className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-ink-primary">
                    {p.name}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-ink-muted">
                    <Calendar size={12} /> {p.duration}
                  </span>
                </div>

                <ul className="mt-4 flex-1 space-y-2.5">
                  {p.points.map((pt, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-sm leading-relaxed text-ink-muted before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-electric"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-line/60 pt-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-ink-primary/[0.04] px-3 py-1 font-mono text-[11px] text-ink-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
