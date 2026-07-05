// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { profile, stats, services, projects, clients, process, testimonials } from '@/lib/data';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 pt-20 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-end gap-12 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-clay">{profile.role}</p>
              <h1 className="font-serif text-6xl leading-[1.02] text-ink md:text-8xl">
                Timeless<br /><span className="italic text-clay">brands</span>, by design.
              </h1>
              <p className="dropcap mt-7 max-w-md text-lg leading-relaxed text-ink/70">{profile.intro}</p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link href="/work" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm tracking-wide text-cream transition hover:bg-clay active:scale-[0.98]">
                  View Work <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="text-sm tracking-wide text-ink underline-offset-4 hover:underline">Get in touch</Link>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                <Image src={profile.avatar} alt={profile.name} fill priority sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl border-y border-ink/10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`px-6 py-8 text-center ${i < stats.length - 1 ? 'md:border-r md:border-ink/10' : ''}`}>
                <p className="font-serif text-4xl text-ink md:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><p className="text-xs uppercase tracking-[0.3em] text-clay">What I do</p><h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">A considered practice.</h2></Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="h-full bg-cream p-8">
                  <span className="font-serif text-2xl italic text-clay">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-2xl text-ink">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work preview */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <Reveal><h2 className="font-serif text-4xl text-ink md:text-5xl">Selected work.</h2></Reveal>
            <Link href="/work" className="inline-flex items-center gap-1 text-sm tracking-wide text-clay hover:underline">All projects <ArrowUpRight size={16} /></Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {projects.slice(0, 2).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <Link href="/work" className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl text-ink">{p.title}</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-ink/50">{p.category} · {p.year}</span>
                  </div>
                  <p className="mt-1 text-ink/60">{p.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl border-y border-ink/10 py-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-clay">Trusted by</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {clients.map((c) => <span key={c} className="font-serif text-xl text-ink/50">{c}</span>)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><p className="text-xs uppercase tracking-[0.3em] text-clay">How we work</p><h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">A gentle process.</h2></Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <Reveal key={p.step}>
                <div className="h-full bg-cream p-7">
                  <span className="font-serif text-2xl italic text-clay">{p.step}</span>
                  <h3 className="mt-3 font-serif text-xl text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="font-serif text-4xl text-ink md:text-5xl">Kind words.</h2></Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="border-t border-ink/10 pt-6">
                  <blockquote className="font-serif text-xl italic leading-relaxed text-ink">“{t.quote}”</blockquote>
                  <figcaption className="mt-5"><span className="block text-sm uppercase tracking-[0.15em] text-clay">{t.name}</span><span className="block text-sm text-ink/50">{t.role}</span></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
