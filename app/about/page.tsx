export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            About
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Quality concrete work with reliable service.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Superior Flatwork focuses on clean finishes, honest communication,
            and durable results for homes and businesses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">What we do</h2>
            <p className="mt-4 leading-8 text-zinc-600">
              We handle driveways, patios, sidewalks, garage slabs, and
              commercial flatwork with a focus on long-term performance and a
              professional customer experience.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Why people choose us</h2>
            <div className="mt-4 space-y-3 text-zinc-600">
              <p>• Straightforward estimates</p>
              <p>• Dependable scheduling</p>
              <p>• Clean finish work</p>
              <p>• Clear communication</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
