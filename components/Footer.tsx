export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        
        <div>
          <h3 className="text-xl font-bold">Superior Flatwork</h3>
          <p className="mt-3 text-zinc-400">
            Concrete driveways, patios, sidewalks, and commercial flatwork built
            with quality and reliability.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Services</h4>
          <div className="mt-3 space-y-2 text-zinc-400">
            <p>Driveways</p>
            <p>Patios</p>
            <p>Sidewalks</p>
            <p>Garage Slabs</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-3 space-y-2 text-zinc-400">
            <p>(555) 555-0199</p>
            <p>info@superiorflatwork.com</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
