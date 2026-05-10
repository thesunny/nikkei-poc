"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems: { label: string; href: string }[] = [
  { label: "Visit", href: "/visit" },
  { label: "About", href: "/about" },
  { label: "Exhibits", href: "/exhibits" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Education", href: "/education" },
  { label: "Research", href: "/research" },
  { label: "Shop", href: "/shop" },
  { label: "Rentals", href: "/rentals" },
  { label: "News", href: "/news" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <div
        role="status"
        className="bg-notice-bg text-notice-fg text-[12px] flex items-center justify-center gap-3 px-6 py-2 border-b border-[#f3e6b5]"
      >
        <span aria-hidden="true" className="text-accent">
          ●
        </span>
        <span className="hidden sm:inline">
          <strong className="font-semibold">Notice</strong> · Hayashi Hall
          closed for floor refinishing May 12 – 16. All other rentals continue
          as scheduled.
        </span>
        <span className="sm:hidden">
          <strong className="font-semibold">Notice</strong> · Floor refinishing May 12–16
        </span>
        <Link
          href="/news"
          className="underline underline-offset-2 hover:opacity-70"
        >
          Details
        </Link>
      </div>

      <div className="hidden md:flex border-b border-line text-[12px] text-[#5b4a14] items-center justify-between px-8 py-2">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="text-accent">
            ●
          </span>
          Open today · 10am – 6pm · Free TAIKEN admission
        </span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:opacity-70">
            EN · 日本語
          </a>
          <Link href="/news" className="hover:opacity-70">
            News
          </Link>
          <a href="#" className="hover:opacity-70">
            Member portal
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 lg:px-8 py-4">
        <Link
          href="/"
          aria-label="NNMCC home"
          className="flex items-center gap-3 group"
        >
          <span
            aria-hidden="true"
            className="bg-accent text-white text-[16px] leading-none w-10 h-10 flex items-center justify-center rounded-sm font-medium group-hover:bg-accent-deep transition-colors"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            日系
          </span>
          <span className="leading-tight">
            <span className="block text-[14px] font-semibold tracking-tight">
              Nikkei National Museum
            </span>
            <span className="block text-[14px] text-muted tracking-tight">
              &amp; Cultural Centre
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden xl:flex items-center gap-7 text-[13px]"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-colors ${
                  active
                    ? "text-foreground font-semibold"
                    : "text-[#5b4a14] hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full border border-line hover:bg-paper"
          >
            <span className="text-base">⌕</span>
          </button>
          <Link
            href="/membership"
            className="hidden lg:inline-flex bg-foreground text-background text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#2a2a2a]"
          >
            Become a member
          </Link>
          <Link
            href="/support"
            className="bg-accent text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-accent-deep transition-colors"
          >
            Donate
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="xl:hidden w-9 h-9 flex flex-col items-center justify-center gap-1 rounded-full border border-line"
          >
            <span className="block w-4 h-0.5 bg-foreground" />
            <span className="block w-4 h-0.5 bg-foreground" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-line px-6 py-4 bg-background">
          <ul className="grid grid-cols-2 gap-3 text-[14px]">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className={`block py-2 ${
                      active ? "font-semibold text-foreground" : "text-[#5b4a14]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
