export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            About Us
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Concrete work with quality, reliability, and straight answers.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Superior Flatwork helps homeowners and businesses with durable,
            clean-finish concrete work backed by dependable service and clear
            communication.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold">What we focus on</h2>
            <p className="mt-4 leading-8 text-zinc-600">
              We focus on driveways, patios, sidewalks, garage slabs, and
              commercial flatwork with an emphasis on strong prep, clean finish
              work, and a professional customer experience.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Why clients choose us</h2>
            <ul className="mt-4 space-y-3 text-zinc-600">
              <li>• Clear communication</li>
              <li>• Honest estimates</li>
              <li>• Dependable scheduling</li>
              <li>• Clean, durable finished work</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
