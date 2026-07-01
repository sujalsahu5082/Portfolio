import { Calendar, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data";
import Image from "next/image";

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
          {projects.map((p, idx) => {
            const cardContent = (
              <Card className="flex h-full flex-col cursor-pointer">
                {p.image && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-line bg-ink-primary/[0.02]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={idx < 2}
                    />
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-ink-primary transition-colors duration-300 group-hover:text-electric-bright flex items-center gap-1.5">
                    {p.name}
                    {p.link && (
                      <span className="inline-block text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 group-hover:text-electric-bright" />
                      </span>
                    )}
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
            );

            return (
              <Reveal key={idx} delay={idx * 0.06}>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full focus:outline-none"
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
