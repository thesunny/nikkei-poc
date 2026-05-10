import Link from "next/link";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Visit",
    links: [
      { label: "Hours & admission", href: "/visit" },
      { label: "Getting here", href: "/visit#getting-here" },
      { label: "Accessibility", href: "/visit#accessibility" },
      { label: "Group visits", href: "/education" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "Membership", href: "/membership" },
      { label: "Volunteer", href: "/support#volunteer" },
      { label: "Donate", href: "/support" },
      { label: "Newsletter", href: "/news#newsletter" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Exhibits", href: "/exhibits" },
      { label: "Programs", href: "/programs" },
      { label: "Events", href: "/events" },
      { label: "Research", href: "/research" },
      { label: "Shop", href: "/shop" },
    ],
  },
  {
    title: "Rentals",
    links: [
      { label: "Hayashi Hall", href: "/rentals#rooms" },
      { label: "Karasawa Gallery", href: "/rentals#rooms" },
      { label: "Tatami Room", href: "/rentals#rooms" },
      { label: "Boardroom", href: "/rentals#rooms" },
      { label: "Inquiry form", href: "/rentals#inquiry" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-on-ink">
      <div className="px-6 lg:px-16 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-12">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="bg-accent text-white text-[17px] leading-none w-10 h-10 flex items-center justify-center rounded-sm"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              日系
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-semibold tracking-tight text-white">
                Nikkei National Museum
              </span>
              <span className="block text-[15px] text-white/60 tracking-tight">
                &amp; Cultural Centre
              </span>
            </span>
          </Link>
          <p className="mt-6 text-[14px] text-white/60 leading-relaxed max-w-xs">
            6688 Southoaks Crescent, Burnaby, BC V5E 4M7
            <br />
            <a
              href="tel:6047777000"
              className="hover:text-white transition-colors"
            >
              604.777.7000
            </a>{" "}
            ·{" "}
            <a
              href="mailto:info@nikkeiplace.org"
              className="hover:text-white transition-colors"
            >
              info@nikkeiplace.org
            </a>
          </p>
          <div className="mt-6 flex gap-3 text-[13px] text-white/60">
            <a href="#" aria-label="Facebook" className="hover:text-white">FB</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">IG</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">YT</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">LI</a>
            <a href="#" aria-label="Bluesky" className="hover:text-white">BS</a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <span className="block text-[11px] tracking-[0.2em] uppercase text-white/50 mb-4">
              {col.title}
            </span>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-white/80 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-6 lg:px-16 py-8">
        <p className="text-[12px] text-white/50 leading-relaxed max-w-3xl">
          We acknowledge that the Nikkei National Museum &amp; Cultural Centre
          is located on the unceded ancestral and traditional territories of
          the hən̓q̓əmin̓əm̓-speaking Coast Salish peoples — the Musqueam,
          Squamish, and Tsleil-Waututh Nations.
        </p>
      </div>

      <div className="border-t border-white/10 px-6 lg:px-16 py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 text-[12px] text-white/50">
        <span>© 2026 Nikkei National Museum &amp; Cultural Centre</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Accessibility</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}
