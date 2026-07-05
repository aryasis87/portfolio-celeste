import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { posts } from '@/lib/data';

export const metadata = { title: 'Journal — Celeste' };

export default function BlogPage() {
  return (
    <main>
      <PageHeader kicker="Journal" title="Notes & essays." sub="Reflections on craft, typography, and the slow art of branding." />
      <section className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <a href="#" className="group flex flex-col justify-between gap-3 border-b border-ink/10 py-8 sm:flex-row sm:items-baseline">
                <div className="max-w-2xl">
                  <div className="mb-2 flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-ink/50">
                    <span className="text-clay">{p.category}</span><span>·</span><span>{p.date}</span><span>·</span><span>{p.read}</span>
                  </div>
                  <h2 className="font-serif text-2xl text-ink transition group-hover:text-clay md:text-3xl">{p.title}</h2>
                  <p className="mt-2 text-ink/60">{p.excerpt}</p>
                </div>
                <ArrowUpRight className="hidden shrink-0 text-ink/40 transition group-hover:translate-x-1 group-hover:text-clay sm:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
