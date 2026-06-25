import { Trophy, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Achievements" title="Hackathons" />

        <div className="space-y-6">
          {achievements.map((a, idx) => (
            <Reveal key={idx}>
              <div className="glass rounded-2xl p-7 hover:border-indigo-soft/40 hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo to-violet">
                      <Trophy size={16} className="text-white" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink-primary">
                        {a.name}
                      </h3>
                      <p className="mt-1 text-sm text-ink-muted">{a.meta}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-sm text-ink-muted">
                    <Calendar size={13} /> {a.duration}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5 sm:pl-12">
                  {a.points.map((p, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-sm leading-relaxed text-ink-muted before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-indigo-soft"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
