export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-black text-zinc-900">
          Superior Flatwork
        </h1>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-700">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <a
          href="tel:5555550199"
          className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
