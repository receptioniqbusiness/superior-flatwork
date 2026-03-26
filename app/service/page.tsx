export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Services
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Concrete services for residential and commercial projects.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            From new installs to replacements, Superior Flatwork handles the
            concrete work people actually search for most.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            [
              "Driveways",
              "Durable driveway installs and replacements with clean curb appeal.",
            ],
            [
              "Patios",
              "Outdoor living spaces built for function, comfort, and style.",
            ],
            [
              "Sidewalks & Walkways",
              "Safe, polished walkways for homes and businesses.",
            ],
            [
              "Garage Slabs",
              "Level, reinforced slabs for long-term performance.",
            ],
            [
              "Commercial Flatwork",
              "Concrete work for businesses, properties, and builders.",
            ],
            [
              "Repair & Replacement",
              "Remove failing concrete and replace it with better-performing flatwork.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[1.75rem] border border-zinc-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-3 leading-7 text-zinc-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
