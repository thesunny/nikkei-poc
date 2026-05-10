import Link from "next/link";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Visit",
    links: [
      { label: "Hours", href: "#" },
      { label: "Getting here", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "Membership", href: "#" },
      { label: "Volunteer", href: "#" },
      { label: "Donate", href: "#" },
      { label: "Newsletter", href: "#" },
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
    <footer className="bg-white border-t border-line">
      <div className="px-8 lg:px-16 pt-16 pb-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
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
              <span className="block text-[15px] font-semibold tracking-tight">
                Nikkei National Museum
              </span>
              <span className="block text-[15px] text-muted tracking-tight">
                &amp; Cultural Centre
              </span>
            </span>
          </Link>
          <p className="mt-5 text-[14px] text-muted leading-relaxed max-w-xs">
            6688 Southoaks Crescent, Burnaby, BC V5E 4M7
            <br />
            <a href="tel:6047777000" className="hover:text-foreground">
              604.777.7000
            </a>{" "}
            ·{" "}
            <a
              href="mailto:info@nikkeiplace.org"
              className="hover:text-foreground"
            >
              info@nikkeiplace.org
            </a>
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <span className="eyebrow block mb-4">{col.title}</span>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] hover:opacity-60"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line px-8 lg:px-16 py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 text-[13px] text-muted">
        <span>© 2026 Nikkei National Museum &amp; Cultural Centre</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">
            Accessibility
          </a>
          <a href="#" className="hover:text-foreground">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
