'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/lib/data';

const CATS = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function WorkPage() {
  const [cat, setCat] = useState('All');
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat]);

  return (
    <main>
      <PageHeader kicker="Work" title="Selected projects." sub="Identities, editorial, and packaging crafted to last." />
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-wrap gap-6">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`text-sm uppercase tracking-[0.15em] transition ${cat === c ? 'text-clay' : 'text-ink/70 hover:text-ink'}`}>
                {c}
              </button>
            ))}
          </div>
          <motion.div layout className="grid gap-12 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.a key={p.slug} href={`/work/${p.slug}`} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.4 }} className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                    <Image src={p.image} alt="" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl text-ink">{p.title}</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-ink/70">{p.category} · {p.year}</span>
                  </div>
                  <p className="mt-1 text-ink/75">{p.desc}</p>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
