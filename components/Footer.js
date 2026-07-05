import Link from 'next/link';
import { profile, nav } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-ink/10 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl font-serif text-4xl leading-tight text-ink md:text-5xl">Let’s make something timeless.</h2>
          <Link href="/contact" className="shrink-0 rounded-full bg-clay px-7 py-3 text-sm tracking-wide text-cream transition hover:bg-ink">
            Start a project →
          </Link>
        </div>
        <div className="rule mb-12" />
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl text-ink">Celeste</h3>
            <p className="mt-3 max-w-xs text-sm text-ink/60">{profile.role} · {profile.location}.</p>
            <a href={`mailto:${profile.email}`} className="mt-3 inline-block text-sm text-clay hover:underline">{profile.email}</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink/40">Navigation</p>
            <ul className="mt-3 space-y-2">
              {nav.map((l) => <li key={l.href}><Link href={l.href} className="text-sm text-ink/70 transition hover:text-clay">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink/40">Elsewhere</p>
            <ul className="mt-3 space-y-2">
              {profile.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-ink/70 transition hover:text-clay">{s.label}</a></li>)}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-ink/40">© {new Date().getFullYear()} Studio Celeste. All rights reserved.</p>
      </div>
    </footer>
  );
}
