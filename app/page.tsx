"use client";

import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const exhibits = [
  {
    eyebrow: "Special exhibit · Mar 26 – Sep 5, 2026",
    title: "Return to Paueru Gai",
    sub: "50 Years of Powell Street Festival",
    body: "A photo and ephemera retrospective tracing five decades of one of Vancouver's longest-running community festivals.",
    image: img("1528360983277-13d401cdc186"),
    alt: "Lanterns lit at a Japanese street festival",
  },
  {
    eyebrow: "Permanent · Upper level",
    title: "TAIKEN",
    sub: "Generations of Resilience",
    body: "Personal stories, artefacts, and oral histories from Japanese Canadians across four generations — from settlement through internment to today.",
    image: img("1480796927426-f609979314bd"),
    alt: "Traditional Japanese architectural detail",
  },
  {
    eyebrow: "1F wall poster · Now on view",
    title: "The Vancouver JCCA",
    sub: "Nisei Baseball Team",
    body: "A small but striking installation honouring the legendary Asahi-era ballclub and the Nisei players who carried it forward.",
    image: img("1503899036084-c55cdd92da26"),
    alt: "Vintage Japanese paper lanterns hung in rows",
  },
];

const events = [
  {
    date: "May 31",
    year: "2026",
    title: "The Essence of Japan",
    sub: "Annual showcase · Hayashi Hall",
    body: "Tea, taiko, ikebana, calligraphy, and a tasting market — a one-day immersion in Japanese arts and craft.",
  },
  {
    date: "Jul 4",
    year: "2026",
    title: "Nikkei Garden Market",
    sub: "Outdoor market · Garden plaza",
    body: "Local makers, summer food trucks, and live music in the garden — free admission, all welcome.",
  },
  {
    date: "Sep 5–6",
    year: "2026",
    title: "Nikkei Matsuri",
    sub: "Two-day festival · Nikkei Place",
    body: "Our largest festival of the year — bon odori, kids' yokai parade, food stalls, and headliner performances on the main stage.",
  },
];

const news = [
  {
    eyebrow: "Digitization",
    title: "30,000 photographs, now searchable online",
    body: "After two years of scanning, our pre-1942 photo archive is open to the public. Browse by community, by family name, or by year.",
  },
  {
    eyebrow: "Volunteer spotlight",
    title: "Meet Hideo, our Wednesday docent",
    body: "Eighteen years on the floor, three languages, and a knack for telling kids what an obaachan's kitchen looked like in 1939.",
  },
  {
    eyebrow: "Membership",
    title: "Member benefits, refreshed for 2026",
    body: "Free admission, member-only previews, 10% off the shop, plus partner discounts at over 20 local businesses.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Mission />
        <Exhibits />
        <Events />
        <Visit />
        <News />
        <Newsletter />
        <LandAck />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="px-8 lg:px-16 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-end">
      <div>
        <span className="eyebrow">Burnaby, BC · Est. 2000</span>
        <h1 className="display mt-6 text-[56px] sm:text-[72px] lg:text-[96px]">
          Honour, preserve,
          <br />
          and share<span className="text-accent">.</span>
        </h1>
        <p className="mt-8 text-[18px] text-[#3a3a3a] leading-relaxed max-w-xl">
          The Nikkei National Museum &amp; Cultural Centre cares for the
          history and heritage of Japanese Canadians — through exhibits, events,
          education, and the building of community at Nikkei Place.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 items-center">
          <Link href="/visit" className="btn-primary">
            Plan your visit <span aria-hidden>→</span>
          </Link>
          <Link href="/support" className="btn-ghost">
            Become a member
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] text-muted">
          <span>Open today · 10am – 6pm</span>
          <span aria-hidden>·</span>
          <span>By donation Tuesdays</span>
          <span aria-hidden>·</span>
          <span>Free parking, on-site</span>
        </div>
      </div>

      <div>
        <div className="relative w-full aspect-[5/6] rounded-sm overflow-hidden bg-[#1a0f0e]">
          <Image
            src={img("1545569341-9eb8b30979d9", 1400)}
            alt="A red torii gate framed against the sky"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="px-8 lg:px-16 py-20 border-t border-line">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
        <span className="eyebrow">Our mission</span>
        <p
          className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-tight max-w-3xl"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          To honour, preserve, and share Japanese Canadian history and heritage
          for a better Canada — and to be a gathering place where culture is
          carried forward, generation by generation.
        </p>
      </div>
    </section>
  );
}

function Exhibits() {
  return (
    <section className="px-8 lg:px-16 py-20 border-t border-line">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
        <div>
          <span className="eyebrow">On view</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            Exhibits<span className="text-accent">.</span>
          </h2>
        </div>
        <Link href="/museum" className="link-arrow text-[14px]">
          All exhibits <span aria-hidden>→</span>
        </Link>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {exhibits.map((e) => (
          <li key={e.title}>
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-[#1a0f0e]">
              <Image
                src={e.image}
                alt={e.alt}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-5 eyebrow">{e.eyebrow}</div>
            <h3 className="headline mt-3 text-[24px] sm:text-[28px]">
              {e.title}
            </h3>
            <div className="mt-1 text-[15px] text-muted">{e.sub}</div>
            <p className="mt-4 text-[15px] text-[#3a3a3a] leading-relaxed">
              {e.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Events() {
  return (
    <section className="px-8 lg:px-16 py-20 border-t border-line bg-[#fafafa]">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
        <div>
          <span className="eyebrow">Upcoming</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            Events &amp; festivals.
          </h2>
        </div>
        <Link href="/events" className="link-arrow text-[14px]">
          All events <span aria-hidden>→</span>
        </Link>
      </div>
      <ul className="border-t border-line">
        {events.map((e) => (
          <li
            key={e.title}
            className="border-b border-line py-8 grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-6 md:gap-10 items-start"
          >
            <div>
              <div
                className="text-[28px] sm:text-[34px] tracking-tight leading-none"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {e.date}
              </div>
              <div className="mt-1 eyebrow">{e.year}</div>
            </div>
            <div>
              <h3 className="headline text-[22px] sm:text-[26px]">{e.title}</h3>
              <div className="mt-1 text-[14px] text-muted">{e.sub}</div>
              <p className="mt-3 text-[15px] text-[#3a3a3a] leading-relaxed max-w-2xl">
                {e.body}
              </p>
            </div>
            <a
              href="#"
              className="btn-ghost self-center hidden md:inline-flex"
            >
              Details <span aria-hidden>→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Visit() {
  return (
    <section className="px-8 lg:px-16 py-20 border-t border-line grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-[#131a0f]">
          <Image
            src={img("1492571350019-22de08371fd3", 1400)}
            alt="A tranquil Japanese garden with a stone path"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <span className="eyebrow">Plan your visit</span>
        <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
          6688 Southoaks Crescent.
        </h2>
        <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
          We&apos;re a 10-minute walk from Edmonds SkyTrain in Burnaby. The
          museum, garden, and shop sit beside Nikkei Place&apos;s residences
          and seniors&apos; centre — a small village within a city.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8 max-w-xl">
          <div>
            <dt className="eyebrow">Hours · Mar – Aug</dt>
            <dd className="mt-1 text-[16px]">Tue – Sun, 10am – 6pm</dd>
          </div>
          <div>
            <dt className="eyebrow">Hours · Sep – Feb</dt>
            <dd className="mt-1 text-[16px]">Tue – Sat, 10am – 5pm</dd>
          </div>
          <div>
            <dt className="eyebrow">Admission</dt>
            <dd className="mt-1 text-[16px]">$10 · Members free</dd>
          </div>
          <div>
            <dt className="eyebrow">By donation</dt>
            <dd className="mt-1 text-[16px]">Every Tuesday</dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/visit" className="btn-primary">
            Visit info <span aria-hidden>→</span>
          </Link>
          <Link href="/rentals" className="btn-ghost">
            Host an event
          </Link>
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="px-8 lg:px-16 py-20 border-t border-line">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
        <div>
          <span className="eyebrow">From the centre</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            News &amp; stories.
          </h2>
        </div>
        <Link href="/news" className="link-arrow text-[14px]">
          All stories <span aria-hidden>→</span>
        </Link>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
        {news.map((n) => (
          <li key={n.title} className="bg-white p-8">
            <div className="eyebrow">{n.eyebrow}</div>
            <h3 className="headline mt-3 text-[22px] sm:text-[26px]">
              {n.title}
            </h3>
            <p className="mt-4 text-[15px] text-[#3a3a3a] leading-relaxed">
              {n.body}
            </p>
            <a
              href="#"
              className="mt-6 inline-block link-arrow text-[14px]"
            >
              Read more <span aria-hidden>→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="px-8 lg:px-16 py-20 border-t border-line bg-[#fafafa]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
        <div>
          <span className="eyebrow">Stay in touch</span>
          <h2 className="headline mt-4 text-[32px] sm:text-[40px] lg:text-[48px] max-w-md">
            One letter a month, no fluff.
          </h2>
          <p className="mt-6 text-[15px] text-[#3a3a3a] leading-relaxed max-w-md">
            New exhibits, upcoming festivals, and stories from the archive —
            written by our team and sent the first Friday of each month.
          </p>
        </div>
        <form
          className="flex flex-col sm:flex-row gap-3 sm:items-end"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex-1 flex flex-col gap-1">
            <span className="eyebrow">Email address</span>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="bg-white border-b border-line focus:border-foreground outline-none py-3 text-[15px] placeholder:text-[#a0a0a0]"
            />
          </label>
          <button type="submit" className="btn-primary">
            Subscribe <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function LandAck() {
  return (
    <section className="px-8 lg:px-16 py-16 border-t border-line">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
        <span className="eyebrow">Land acknowledgement</span>
        <p className="text-[15px] text-[#3a3a3a] leading-relaxed max-w-3xl">
          The Nikkei National Museum &amp; Cultural Centre is located on the
          unceded ancestral and traditional territories of the
          hən̓q̓əmin̓əm̓-speaking Coast Salish peoples — the Musqueam,
          Squamish, and Tsleil-Waututh Nations. We are grateful for the
          opportunity to live and work on these lands.
        </p>
      </div>
    </section>
  );
}
