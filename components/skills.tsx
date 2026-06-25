import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { technicalSkills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Organized exactly as categorized on the resume — languages, analytics, BI, AI integrations, and core CS fundamentals."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 0.05}>
              <Card>
                <h3 className="font-display text-base font-semibold text-ink-primary">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-ink-primary/[0.04] px-3 py-1.5 text-xs text-ink-muted transition-colors duration-200 group-hover:border-indigo-soft/30 hover:!text-electric-bright hover:!border-electric-bright/40"
                    >
                      {item}
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
