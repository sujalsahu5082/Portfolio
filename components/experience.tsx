import { MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Internships"
          description="Four internships spanning data analytics, AI, AR, and full-stack web development."
        />

        <div className="space-y-6">
          {experience.map((job, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="glass group rounded-2xl p-7 transition-all duration-300 hover:border-indigo-soft/40 hover:shadow-glow">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink-primary">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-electric-bright">
                      {job.company}{" "}
                      <span className="text-ink-muted">· {job.mode}</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 text-sm text-ink-muted sm:items-end sm:text-right">
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <Calendar size={13} /> {job.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} /> {job.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((p, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-sm leading-relaxed text-ink-muted before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-violet"
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
