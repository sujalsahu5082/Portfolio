import { Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { leadership } from "@/lib/data";

export function Leadership() {
  return (
    <section id="leadership" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Leadership & Activities" title="Beyond the classroom" />

        <div className="grid gap-5 sm:grid-cols-2">
          {leadership.map((l, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <Card className="flex h-full flex-col">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-elevated ring-1 ring-line">
                    <Users size={15} className="text-electric-bright" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink-primary">
                      {l.role}
                    </h3>
                    <p className="text-sm text-ink-muted">{l.org}</p>
                    <p className="mt-0.5 font-mono text-xs text-violet">
                      {l.duration}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 flex-1 space-y-2">
                  {l.points.map((p, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-sm leading-relaxed text-ink-muted before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-electric"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
