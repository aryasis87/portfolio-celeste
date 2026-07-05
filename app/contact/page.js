'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return; setSent(true); };
  const field = 'w-full border-b border-ink/20 bg-transparent px-1 py-3 text-ink outline-none transition placeholder:text-ink/40 focus:border-clay';

  return (
    <main>
      <PageHeader kicker="Contact" title="Let’s begin a conversation." sub="For new projects, collaborations, or a simple hello." />
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <Info icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Info icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
            <Info icon={MapPin} label="Studio" value={profile.location} />
            <div className="border-t border-ink/10 pt-6">
              <span className="flex items-center gap-2 text-sm text-ink">
                <span className="h-2 w-2 rounded-full bg-clay" /> Currently accepting select projects
              </span>
            </div>
            <div className="flex flex-wrap gap-5">
              {profile.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm tracking-wide text-ink/60 transition hover:text-clay">{s.label}</a>)}
            </div>
          </div>
          <div>
            {sent ? (
              <div className="border border-ink/10 p-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-clay text-cream"><Check size={28} /></div>
                <h2 className="mt-5 font-serif text-3xl text-ink">Thank you.</h2>
                <p className="mt-2 text-ink/60">I’ve received your note, {form.name}, and will reply to {form.email} shortly.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="mt-6 rounded-full border border-ink px-6 py-2.5 text-sm tracking-wide transition hover:bg-ink hover:text-cream">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <input name="name" value={form.name} onChange={handle} placeholder="Your name" required className={field} />
                  <input type="email" name="email" value={form.email} onChange={handle} placeholder="Your email" required className={field} />
                </div>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Tell me about your project…" rows={5} required className={`${field} resize-none`} />
                <button type="submit" className="rounded-full bg-ink px-8 py-3.5 text-sm tracking-wide text-cream transition hover:bg-clay">Send message →</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 text-clay"><Icon size={20} /></span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink/40">{label}</p>
        <p className="mt-1 font-serif text-xl text-ink">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
