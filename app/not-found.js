import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main>
      <PageHeader kicker="Error 404" title="This page was left out of the edit." sub="It doesn't exist, or it has moved. The work and the essays are where they always were." />
      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm tracking-wide text-cream transition hover:bg-clay active:scale-[0.98]">
            Back home
          </Link>
          <Link href="/work" className="text-sm tracking-wide text-ink underline underline-offset-4 hover:text-clay">
            See the work
          </Link>
        </div>
      </section>
    </main>
  );
}
