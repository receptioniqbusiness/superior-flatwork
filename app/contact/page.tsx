export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Contact
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Request a quote for your concrete project.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Tell us what you need and we’ll get back to you about your driveway,
            patio, sidewalk, slab, or commercial flatwork project.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Contact Info</h2>
            <div className="mt-4 space-y-3 text-zinc-600">
              <p>(555) 555-0199</p>
              <p>info@superiorflatwork.com</p>
              <p>Your City, State</p>
            </div>
          </div>

          <form className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Get a Quote</h2>

            <div className="mt-6 grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-2xl border border-zinc-300 px-4 py-3"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-2xl border border-zinc-300 px-4 py-3"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-zinc-300 px-4 py-3"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={5}
                className="rounded-2xl border border-zinc-300 px-4 py-3"
              />
              <button
                type="submit"
                className="rounded-full bg-zinc-950 px-6 py-3 font-semibold text-white"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
