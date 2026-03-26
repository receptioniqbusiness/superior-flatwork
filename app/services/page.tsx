export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Services
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Concrete services for residential and commercial projects.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Superior Flatwork installs and replaces driveways, patios,
            sidewalks, slabs, and commercial flatwork with clean finishes and
            dependable service.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            [
              "Driveways",
              "Durable driveway installs and replacements designed for curb appeal and long-term performance.",
            ],
            [
              "Patios",
              "Outdoor concrete spaces built for everyday use, entertaining, and a cleaner backyard layout.",
            ],
            [
              "Sidewalks & Walkways",
              "Safe, polished walkways for homes, entry paths, and commercial properties.",
            ],
            [
              "Garage Slabs",
              "Level, reinforced slabs built for dependable daily use and long-lasting support.",
            ],
            [
              "Commercial Flatwork",
              "Concrete work for businesses, builders, and commercial properties that need clean, professional results.",
            ],
            [
              "Repair & Replacement",
              "Removal of failing concrete and replacement with stronger, better-looking flatwork.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[1.75rem] border border-zinc-200 bg-white p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-lg font-bold text-amber-700">
                {title.charAt(0)}
              </div>
              <h2 className="mt-5 text-2xl font-bold">{title}</h2>
              <p className="mt-3 leading-7 text-zinc-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="rounded-[2rem] bg-zinc-950 px-8 py-12 text-white md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Request a Quote
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Need concrete work for your property?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
              Call or message Superior Flatwork for a straightforward estimate on
              your next project.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:5555550199"
                className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-zinc-950"
              >
                Call Now
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white"
              >
                Request Estimate
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
