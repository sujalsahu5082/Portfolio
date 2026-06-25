import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { education, profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Building at the intersection of data and software"
          description={profile.summary}
        />

        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-ink-primary">
                Snapshot
              </h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between border-b border-line/60 pb-3">
                  <dt className="text-ink-muted">Degree</dt>
                  <dd className="text-right text-ink-primary">B.Tech, CSE</dd>
                </div>
                <div className="flex justify-between border-b border-line/60 pb-3">
                  <dt className="text-ink-muted">CGPA</dt>
                  <dd className="text-ink-primary">8.4 / 10</dd>
                </div>
                <div className="flex justify-between border-b border-line/60 pb-3">
                  <dt className="text-ink-muted">Graduating</dt>
                  <dd className="text-ink-primary">May 2027</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-muted">Focus</dt>
                  <dd className="text-right text-ink-primary">
                    Data Analytics &amp; AI
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative space-y-8 border-l border-line/70 pl-8">
              {education.map((e, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-elevated ring-1 ring-indigo-soft/50">
                    <GraduationCap size={13} className="text-electric-bright" />
                  </span>
                  <span className="eyebrow text-violet">{e.duration}</span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink-primary">
                    {e.institution}
                  </h3>
                  <p className="text-sm text-ink-muted">{e.location}</p>
                  <p className="mt-2 text-sm text-ink-primary/90">{e.degree}</p>
                  {e.detail && (
                    <p className="mt-1 font-mono text-sm text-electric-bright">
                      {e.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
