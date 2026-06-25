import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-ink-faint sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
