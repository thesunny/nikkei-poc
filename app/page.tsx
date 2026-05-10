"use client";

import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { IMG } from "@/components/images";

const heroSlides = [
  {
    eyebrow: "Now on view · Mar 26 – Sep 5, 2026",
    title: "Return to Paueru Gai",
    sub: "50 Years of Powell Street Festival",
    image: IMG.festivalLanterns,
    href: "/exhibits",
    cta: "See the exhibit",
  },
  {
    eyebrow: "Sep 22, 2000 → today",
    title: "Honour, preserve, and share.",
    sub: "Twenty-six years caring for Japanese Canadian history at Nikkei Place.",
    image: IMG.toriiSky,
    href: "/about",
    cta: "About the museum",
  },
];

const exhibits = [
  {
    eyebrow: "Karasawa Gallery · Mar 26 – Sep 5, 2026",
    title: "Return to Paueru Gai",
    sub: "50 Years of Powell Street Festival",
    body: "A photo and ephemera retrospective tracing five decades of one of Vancouver's longest-running community festivals.",
    image: IMG.festivalLanterns,
  },
  {
    eyebrow: "Permanent · Upper level",
    title: "TAIKEN",
    sub: "Generations of Resilience",
    body: "Personal stories, artefacts, and oral histories from Japanese Canadians across four generations — from settlement through internment to today.",
    image: IMG.archive,
  },
  {
    eyebrow: "1F wall · Now on view",
    title: "The Vancouver JCCA",
    sub: "Nisei Baseball Team",
    body: "An intimate installation honouring the Asahi-era ballclub and the Nisei players who carried it forward.",
    image: IMG.lanternsRow,
  },
];

const events = [
  {
    date: "May 31",
    weekday: "Sun",
    year: "2026",
    title: "The Essence of Japan",
    sub: "Annual showcase · Hayashi Hall · Free + ticketed sessions",
    body: "Tea, taiko, ikebana, calligraphy, and a tasting market — a one-day immersion in Japanese arts and craft.",
    image: IMG.teaCeremony,
  },
  {
    date: "Jul 4",
    weekday: "Sat",
    year: "2026",
    title: "Nikkei Garden Market",
    sub: "Outdoor market · Garden plaza · Free admission",
    body: "Local makers, summer food trucks, and live music in the garden — free admission, all welcome.",
    image: IMG.garden,
  },
  {
    date: "Sep 5–6",
    weekday: "Sat–Sun",
    year: "2026",
    title: "Nikkei Matsuri",
    sub: "Two-day festival · Nikkei Place · By donation",
    body: "Our largest festival of the year — bon odori, kids' yokai parade, food stalls, and headliner performances on the main stage.",
    image: IMG.matsuriCrowd,
  },
];

const programCategories = [
  { name: "Cultural arts", count: "12 programs", image: IMG.calligraphy },
  { name: "Martial arts", count: "6 disciplines", image: IMG.shrineDetail },
  { name: "Language", count: "Beginner – Advanced", image: IMG.bookshop },
  { name: "Crafts & workshops", count: "8 monthly", image: IMG.workshop },
  { name: "Music & performance", count: "Taiko, karaoke, more", image: IMG.taiko },
  { name: "Health & fitness", count: "Drop-in welcome", image: IMG.bamboo },
];

const news = [
  {
    eyebrow: "Digitization",
    date: "May 2, 2026",
    title: "30,000 photographs, now searchable online",
    body: "After two years of scanning, our pre-1942 photo archive is open to the public. Browse by community, family name, or year.",
    image: IMG.archive,
  },
  {
    eyebrow: "Volunteer spotlight",
    date: "Apr 21, 2026",
    title: "Meet Hideo, our Wednesday docent",
    body: "Eighteen years on the floor, three languages, and a knack for telling kids what an obaachan's kitchen looked like in 1939.",
    image: IMG.cherryBlossom,
  },
  {
    eyebrow: "Membership",
    date: "Apr 8, 2026",
    title: "Member benefits, refreshed for 2026",
    body: "Free admission, member-only previews, 10% off the shop, plus partner discounts at over 20 local businesses.",
    image: IMG.bookshop,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <Hero />
        <Mission />
        <Exhibits />
        <Events />
        <Programs />
        <Stats />
        <Visit />
        <SupportStrip />
        <News />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative bg-ink text-on-ink overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroSlides[0].image.src}
          alt={heroSlides[0].image.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-65 drift"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative px-6 lg:px-16 pt-20 lg:pt-32 pb-20 lg:pb-32 max-w-[1400px] mx-auto min-h-[80vh] flex flex-col justify-end">
        <span className="eyebrow-light rise">
          {heroSlides[0].eyebrow}
        </span>
        <h1
          className="display rise rise-delay-1 text-white mt-6 text-[56px] sm:text-[80px] lg:text-[120px] max-w-5xl"
          style={{ lineHeight: 0.92 }}
        >
          {heroSlides[0].title}
          <span className="text-accent">.</span>
        </h1>
        <p className="rise rise-delay-2 mt-6 text-[16px] sm:text-[18px] text-white/80 leading-relaxed max-w-xl">
          {heroSlides[0].sub} — open now in the Karasawa Gallery, free with
          TAIKEN admission.
        </p>
        <div className="rise rise-delay-3 mt-10 flex flex-wrap gap-3 items-center">
          <Link href="/exhibits" className="btn-accent">
            See the exhibit <span aria-hidden>→</span>
          </Link>
          <Link href="/visit" className="btn-ghost-light">
            Plan your visit
          </Link>
        </div>
        <div className="rise rise-delay-4 mt-12 flex flex-wrap items-center gap-6 text-[12px] text-white/60 tracking-[0.18em] uppercase">
          <span>Open today · 10am – 6pm</span>
          <span aria-hidden>·</span>
          <span>By donation Tuesdays</span>
          <span aria-hidden>·</span>
          <span>Free parking</span>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-20">
        <div>
          <span className="eyebrow">Our mission</span>
          <div className="divider-zen mt-6" />
        </div>
        <div>
          <p className="serif text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.12] tracking-tight max-w-4xl text-foreground">
            To honour, preserve, and share the history and heritage of Japanese
            Canadians and Japanese culture in Canada — and to be a gathering
            place where culture is carried forward, generation by generation.
          </p>
          <p className="mt-8 text-[15px] text-muted leading-relaxed max-w-2xl">
            私たちの使命は、日系カナダ人の歴史と遺産、そしてカナダにおける日本文化を称え、保存し、共有することです。
          </p>
        </div>
      </div>
    </section>
  );
}

function Exhibits() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14">
          <div>
            <span className="eyebrow">On view</span>
            <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[56px]">
              Exhibits<span className="text-accent">.</span>
            </h2>
          </div>
          <Link href="/exhibits" className="link-arrow text-[14px]">
            All exhibits <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14">
          <article className="lg:col-span-7">
            <div className="image-frame aspect-[4/3]">
              <Image
                src={exhibits[0].image.src}
                alt={exhibits[0].image.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 eyebrow">{exhibits[0].eyebrow}</div>
            <h3 className="headline mt-3 text-[32px] sm:text-[40px]">
              {exhibits[0].title}
            </h3>
            <div className="mt-1 text-[16px] text-muted">{exhibits[0].sub}</div>
            <p className="mt-4 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
              {exhibits[0].body}
            </p>
            <Link
              href="/exhibits"
              className="mt-6 inline-block link-arrow text-[14px]"
            >
              View exhibit details <span aria-hidden>→</span>
            </Link>
          </article>

          <div className="lg:col-span-5 grid grid-cols-1 gap-12">
            {exhibits.slice(1).map((e) => (
              <article key={e.title}>
                <div className="image-frame aspect-[4/3]">
                  <Image
                    src={e.image.src}
                    alt={e.image.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5 eyebrow">{e.eyebrow}</div>
                <h3 className="headline mt-3 text-[24px]">{e.title}</h3>
                <div className="mt-1 text-[14px] text-muted">{e.sub}</div>
                <p className="mt-3 text-[15px] text-[#3a3a3a] leading-relaxed">
                  {e.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
        <div>
          <span className="eyebrow">Upcoming</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[56px]">
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
            className="border-b border-line py-8 grid grid-cols-1 md:grid-cols-[140px_1fr_320px] gap-6 md:gap-10 items-center group"
          >
            <div>
              <div className="serif text-[32px] sm:text-[44px] tracking-tight leading-none">
                {e.date}
              </div>
              <div className="mt-2 eyebrow">
                {e.weekday} · {e.year}
              </div>
            </div>
            <div>
              <h3 className="headline text-[22px] sm:text-[28px]">{e.title}</h3>
              <div className="mt-1 text-[14px] text-muted">{e.sub}</div>
              <p className="mt-3 text-[15px] text-[#3a3a3a] leading-relaxed max-w-2xl">
                {e.body}
              </p>
              <Link
                href="/events"
                className="mt-4 inline-block link-arrow text-[13px]"
              >
                Details &amp; tickets <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="image-frame aspect-[4/3]">
                <Image
                  src={e.image.src}
                  alt={e.image.alt}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Programs() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 bg-ink text-on-ink">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 mb-14 items-end">
          <div>
            <span className="eyebrow-light">Daily, 10am – 9:30pm</span>
            <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[56px] text-white">
              Sixty programs.
              <br />
              <span className="text-white/60">One curious community.</span>
            </h2>
          </div>
          <p className="text-[16px] text-white/70 leading-relaxed max-w-xl">
            From tea ceremony to taiko, judo to Go club — Nikkei Centre is in
            session every day of the week. Drop in, sign up for a session, or
            just watch a class with a coffee from the lobby.
          </p>
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {programCategories.map((p) => (
            <li
              key={p.name}
              className="bg-ink relative aspect-[4/3] overflow-hidden group"
            >
              <Image
                src={p.image.src}
                alt={p.image.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              />
              <Link
                href="/programs"
                className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end"
              >
                <span className="eyebrow-light">{p.count}</span>
                <span className="mt-2 headline text-white text-[22px] sm:text-[28px]">
                  {p.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Link href="/programs" className="btn-ghost-light">
            Browse all programs <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    ["55,500", "Photographs in the archive"],
    ["650+", "Oral history recordings"],
    ["3,200+", "Artworks &amp; objects"],
    ["55m", "Of textual records"],
  ];
  return (
    <section className="px-6 lg:px-16 py-20 lg:py-28 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-20 items-end">
        <div>
          <span className="eyebrow">The collection</span>
          <h2 className="headline mt-4 text-[28px] sm:text-[34px]">
            A living archive.
          </h2>
          <p className="mt-4 text-[15px] text-muted leading-relaxed">
            Built over a generation, available to scholars, families, and the
            curious — search online or visit the Charles H. Kadota Resource
            Centre by appointment.
          </p>
          <Link
            href="/research"
            className="mt-5 inline-block link-arrow text-[14px]"
          >
            Search the collection <span aria-hidden>→</span>
          </Link>
        </div>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map(([n, l]) => (
            <div
              key={l}
              className="border-l border-line pl-5 lg:pl-7"
            >
              <dt
                className="serif text-[44px] sm:text-[56px] lg:text-[72px] leading-none tracking-tight"
                dangerouslySetInnerHTML={{ __html: n }}
              />
              <dd
                className="mt-3 text-[13px] text-muted tracking-tight max-w-[16ch]"
                dangerouslySetInnerHTML={{ __html: l }}
              />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 bg-paper">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="image-frame aspect-[4/5]">
            <Image
              src={IMG.garden.src}
              alt={IMG.garden.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <span className="eyebrow">Plan your visit</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[56px]">
            6688 Southoaks Crescent, Burnaby.
          </h2>
          <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
            We&apos;re a 15-minute walk from Edmonds SkyTrain. The museum,
            garden, shop, and cultural centre sit beside Nikkei Place&apos;s
            residences and seniors&apos; centre — a small village within a
            city.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8 max-w-xl">
            <div>
              <dt className="eyebrow">Hours · Mar – Aug</dt>
              <dd className="mt-2 text-[15px]">
                Tue – Fri, 10am – 6pm
                <br />
                Sat – Sun, 10am – 5pm
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Hours · Sep – Feb</dt>
              <dd className="mt-2 text-[15px]">Tue – Sat, 10am – 5pm</dd>
            </div>
            <div>
              <dt className="eyebrow">TAIKEN admission</dt>
              <dd className="mt-2 text-[15px]">Free, always</dd>
            </div>
            <div>
              <dt className="eyebrow">Parking</dt>
              <dd className="mt-2 text-[15px]">Underground · Free</dd>
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
      </div>
    </section>
  );
}

function SupportStrip() {
  return (
    <section className="px-6 lg:px-16 py-20 lg:py-24 max-w-[1400px] mx-auto">
      <div className="border-y border-line py-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <span className="eyebrow">Become a supporter</span>
          <h3 className="serif mt-4 text-[32px] sm:text-[40px] lg:text-[52px] leading-[1.05] tracking-tight max-w-3xl">
            For every story preserved, a community holds together a little
            tighter.
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/support" className="btn-accent">
            Donate <span aria-hidden>→</span>
          </Link>
          <Link href="/membership" className="btn-ghost">
            Become a member
          </Link>
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
        <div>
          <span className="eyebrow">From the centre</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[56px]">
            News &amp; stories.
          </h2>
        </div>
        <Link href="/news" className="link-arrow text-[14px]">
          All stories <span aria-hidden>→</span>
        </Link>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((n) => (
          <li key={n.title}>
            <Link href="/news" className="group block">
              <div className="image-frame aspect-[4/3]">
                <Image
                  src={n.image.src}
                  alt={n.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="eyebrow">{n.eyebrow}</span>
                <span className="text-[11px] text-muted">{n.date}</span>
              </div>
              <h3 className="headline mt-3 text-[22px] sm:text-[24px] group-hover:text-accent transition-colors">
                {n.title}
              </h3>
              <p className="mt-3 text-[15px] text-[#3a3a3a] leading-relaxed">
                {n.body}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-ink text-on-ink">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <span className="eyebrow-light">Stay in touch</span>
          <h2 className="headline mt-4 text-[32px] sm:text-[40px] lg:text-[52px] text-white max-w-md">
            One letter a month, no fluff.
          </h2>
          <p className="mt-6 text-[15px] text-white/70 leading-relaxed max-w-md">
            New exhibits, upcoming festivals, and stories from the archive —
            written by our team and sent the first Friday of each month.
          </p>
        </div>
        <form
          className="flex flex-col sm:flex-row gap-3 sm:items-end"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="flex-1 flex flex-col gap-1">
            <span className="eyebrow-light">Email address</span>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-[15px] text-white placeholder:text-white/40"
            />
          </label>
          <button type="submit" className="btn-accent">
            Subscribe <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
