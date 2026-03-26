export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Superior Flatwork
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Concrete work built to last.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            We install driveways, patios, sidewalks, garage slabs, and other
            residential and commercial flatwork with clean finishes and dependable service.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:5555550199"
              className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-zinc-950"
            >
              Call for a Quote
            </a>
            <a
              href="mailto:info@superiorflatwork.com"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Concrete services for homes and businesses
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Driveways", "Clean, durable concrete driveways with strong curb appeal."],
            ["Patios", "Outdoor concrete spaces made for function and style."],
            ["Sidewalks", "Safe, polished walkways for homes and commercial properties."],
            ["Garage Slabs", "Level, reinforced slabs designed for long-term use."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-zinc-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Reliable service. Quality finish.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Reliable", "Clear communication, honest timelines, and dependable service."],
              ["Quality Work", "Attention to detail from prep work to final finish."],
              ["Free Estimates", "Simple, straightforward quote process for your next project."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
