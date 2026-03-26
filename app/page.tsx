export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Superior Flatwork
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight md:text-7xl">
              Premium concrete flatwork for homes and businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              We build durable driveways, patios, sidewalks, slabs, and
              commercial flatwork with clean finishes, dependable scheduling,
              and straightforward service from start to finish.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:5555550199"
                className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-zinc-950 transition hover:opacity-90"
              >
                Call for a Quote
              </a>
              <a
                href="mailto:info@superiorflatwork.com"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Email Us
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["15+", "Years Experience"],
                ["500+", "Projects Completed"],
                ["100%", "Free Estimates"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <p className="text-3xl font-black text-white">{number}</p>
                  <p className="mt-1 text-sm text-zinc-300">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Our Focus
              </p>
              <div className="mt-5 grid gap-4">
                {[
                  "Driveways and replacements",
                  "Patios and outdoor spaces",
                  "Garage slabs and sidewalks",
                  "Commercial flatwork",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-zinc-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 text-zinc-900 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Why customers choose us
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Clean finish work</h3>
                  <p className="mt-1 text-zinc-600">
                    Sharp lines, durable pours, and attention to detail on every
                    project.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Reliable communication</h3>
                  <p className="mt-1 text-zinc-600">
                    Straight answers, clear expectations, and a smoother process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Built to last</h3>
                  <p className="mt-1 text-zinc-600">
                    We focus on strong prep, proper execution, and long-term
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Concrete services designed around the jobs people actually need
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            From residential installs to commercial flatwork, Superior Flatwork
            handles projects with quality workmanship and dependable service.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            [
              "Driveways",
              "New driveway installs and replacements with clean curb appeal and lasting durability.",
            ],
            [
              "Patios",
              "Functional outdoor living spaces built for comfort, style, and everyday use.",
            ],
            [
              "Sidewalks & Walkways",
              "Safe, polished walkways for homes, entry paths, and property upgrades.",
            ],
            [
              "Garage Slabs",
              "Level, reinforced slabs designed for dependable long-term performance.",
            ],
            [
              "Commercial Flatwork",
              "Concrete work for builders, businesses, and commercial properties.",
            ],
            [
              "Repair & Replacement",
              "Remove failing concrete and replace it with stronger, better-looking flatwork.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[1.75rem] border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-lg font-bold text-amber-700">
                {title.charAt(0)}
              </div>
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              A simple process from estimate to finish
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Consultation", "We learn about your project, goals, and timeline."],
              ["02", "Estimate", "You get a clear quote and straightforward next steps."],
              ["03", "Build", "We prepare, pour, and finish your project with care."],
              ["04", "Final Walkthrough", "We make sure the finished work looks right and lasts."],
            ].map(([step, title, text]) => (
              <div
                key={step}
                className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold tracking-[0.2em] text-amber-600">
                  {step}
                </p>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [
              "Professional crew, great communication, and the finished driveway looks incredible.",
              "Megan R.",
            ],
            [
              "They showed up when they said they would and the patio came out exactly how we wanted.",
              "Jason T.",
            ],
            [
              "Fast estimate, honest pricing, and excellent attention to detail from start to finish.",
              "Alicia P.",
            ],
          ].map(([quote, name]) => (
            <div
              key={name}
              className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="text-lg leading-8 text-zinc-700">“{quote}”</p>
              <p className="mt-5 font-semibold text-zinc-900">— {name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-zinc-950 px-8 py-12 text-white md:px-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Get a Quote
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Ready to upgrade your concrete project?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
                Contact Superior Flatwork for a straightforward estimate on your
                driveway, patio, sidewalk, slab, or commercial concrete job.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <div className="space-y-4">
                <a
                  href="tel:5555550199"
                  className="block rounded-full bg-amber-400 px-6 py-3 text-center font-semibold text-zinc-950 transition hover:opacity-90"
                >
                  Call Now
                </a>
                <a
                  href="mailto:info@superiorflatwork.com"
                  className="block rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
