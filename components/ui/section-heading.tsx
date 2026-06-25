import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <span className="eyebrow text-electric-bright">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-muted leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
