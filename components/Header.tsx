import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-black text-zinc-900">
          Superior Flatwork
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-zinc-700 md:flex">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
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
