import Link from "next/link";

const navItems: { label: string; href: string }[] = [
  { label: "Visit", href: "/visit" },
  { label: "Shop", href: "/shop" },
  { label: "Support", href: "/support" },
  { label: "Events", href: "/events" },
  { label: "Programs", href: "/programs" },
  { label: "Museum", href: "/museum" },
  { label: "Education", href: "/education" },
  { label: "Rentals", href: "/rentals" },
  { label: "About", href: "/about" },
];

export default function SiteHeader() {
  return (
    <header className="bg-white">
      <div
        role="status"
        className="bg-notice-bg text-notice-fg text-[13px] flex items-center justify-center gap-3 px-6 py-2 border-b border-[#f3e6b5]"
      >
        <span aria-hidden="true" className="text-accent">
          ●
        </span>
        <span>
          <strong className="font-semibold">Notice</strong> · Hayashi Hall
          closed for floor refinishing May 12 – 16. All other rentals continue
          as scheduled.
        </span>
        <a
          href="#"
          className="underline underline-offset-2 hover:opacity-70"
        >
          Details
        </a>
      </div>

      <div className="border-b border-line text-[13px] text-[#5b4a14] flex items-center justify-between px-8 py-2">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="text-accent">
            ●
          </span>
          Open today · 10am – 6pm
        </span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:opacity-70">
            EN · 日本語
          </a>
          <a href="#" className="hover:opacity-70">
            News
          </a>
          <a href="#" className="hover:opacity-70">
            Member portal
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between px-8 py-5">
        <Link
          href="/"
          aria-label="NNMCC home"
          className="flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="bg-accent text-white text-[17px] leading-none w-10 h-10 flex items-center justify-center rounded-sm font-medium"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            日系
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold tracking-tight">
              Nikkei National Museum
            </span>
            <span className="block text-[15px] text-muted tracking-tight">
              &amp; Cultural Centre
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-7 text-[13px] text-[#5b4a14]"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-line hover:bg-[#fafafa]"
          >
            <span className="text-base">⌕</span>
          </button>
          <a
            href="#"
            className="bg-accent text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:opacity-90"
          >
            Donate
          </a>
        </div>
      </div>
    </header>
  );
}
