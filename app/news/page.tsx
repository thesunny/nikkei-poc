"use client";

import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { IMG } from "@/components/images";

const featured = {
  category: "Digitization · May 2, 2026",
  title: "30,000 photographs, now searchable online",
  body: "After two years of scanning, our pre-1942 photo archive is open to the public. Browse by community, family name, or year. We talked to lead archivist Lisa Uyeda about what surfaced — including a previously unknown image of the 1939 Asahi team taken from third base during a game we'd only ever read about.",
  author: "By Lisa Uyeda · Collections Manager",
  image: IMG.archive,
};

const stories = [
  {
    category: "Volunteer spotlight",
    date: "Apr 21, 2026",
    title: "Meet Hideo, our Wednesday docent",
    body: "Eighteen years on the floor, three languages, and a knack for telling kids what an obaachan's kitchen looked like in 1939.",
    image: IMG.cherryBlossom,
  },
  {
    category: "Membership",
    date: "Apr 8, 2026",
    title: "Member benefits, refreshed for 2026",
    body: "Free admission, member-only previews, 10% off the shop, plus partner discounts at over 20 local businesses.",
    image: IMG.bookshop,
  },
  {
    category: "Programs",
    date: "Mar 28, 2026",
    title: "Ninjutsu in the news — and what they got right",
    body: "Our third-Sunday class showed up on TV last week. Sensei Tanaka talks about the difference between movie ninjutsu and the real thing.",
    image: IMG.shrineDetail,
  },
  {
    category: "Education",
    date: "Mar 14, 2026",
    title: "Call for volunteers: Education Programs Team",
    body: "We're looking for three new volunteers to help run school field trips through the spring season. Tuesdays and Thursdays, mostly mornings.",
    image: IMG.workshop,
  },
  {
    category: "Bazaar",
    date: "Feb 20, 2026",
    title: "Spring Bazaar · Call for donations",
    body: "Fifteenth annual bazaar runs May 16. We're collecting kitchenware, books, lightly-loved kimono, and craft supplies through April 30.",
    image: IMG.origami,
  },
  {
    category: "Digitization",
    date: "Feb 1, 2026",
    title: "Foraging with the Uyeda Family of Nakusp",
    body: "A new online exhibit traces three generations of foraging knowledge — matsutake, fiddleheads, sansai — preserved in cassette tapes.",
    image: IMG.bamboo,
  },
  {
    category: "Member benefit",
    date: "Jan 18, 2026",
    title: "Hilton Vancouver Metrotown · 15% off rooms",
    body: "Out-of-town family visiting? The hotel across from Metrotown station now offers a member rate, year-round.",
    image: IMG.architecture,
  },
];

const categories = [
  "All stories",
  "Digitization",
  "Volunteer",
  "Membership",
  "Education",
  "Programs",
  "Exhibits",
  "Member benefit",
];

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <PageHero
          eyebrow="News · Blog · Newsletter"
          title="Stories from the centre"
          accent="."
          intro="Notes from staff, volunteer spotlights, project updates, and the occasional dispatch from the archive — written by our team and published as we have something worth saying."
          image={IMG.cherryBlossom}
        />

        <Featured />
        <Filter />
        <Stories />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}

function Featured() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-28 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="image-frame aspect-[4/3]">
          <Image
            src={featured.image.src}
            alt={featured.image.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <span className="eyebrow">Featured · {featured.category}</span>
          <h2 className="headline mt-4 text-[32px] sm:text-[40px] lg:text-[52px]">
            {featured.title}
          </h2>
          <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
            {featured.body}
          </p>
          <p className="mt-6 text-[13px] text-muted italic">
            {featured.author}
          </p>
          <a href="#" className="mt-8 inline-flex link-arrow text-[14px]">
            Read the full story <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Filter() {
  return (
    <section className="px-6 lg:px-16 py-8 border-y border-line bg-paper sticky top-[120px] z-30">
      <div className="max-w-[1400px] mx-auto flex items-center gap-3 flex-wrap overflow-x-auto no-scrollbar">
        <span className="eyebrow flex-shrink-0">Filter</span>
        <div className="flex gap-2 flex-wrap">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`text-[13px] px-3 py-1.5 rounded-full border transition-colors ${
                i === 0
                  ? "bg-foreground text-white border-foreground"
                  : "border-line-strong hover:border-foreground hover:bg-background"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="px-6 lg:px-16 py-24 max-w-[1400px] mx-auto">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {stories.map((s) => (
          <li key={s.title}>
            <a href="#" className="group block">
              <div className="image-frame aspect-[4/3]">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="eyebrow">{s.category}</span>
                <span className="text-[11px] text-muted">{s.date}</span>
              </div>
              <h3 className="headline mt-3 text-[22px] group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] text-[#3a3a3a] leading-relaxed">
                {s.body}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-14 flex justify-center">
        <button className="btn-ghost">Load more stories</button>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section
      id="newsletter"
      className="px-6 lg:px-16 py-24 bg-ink text-on-ink"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <span className="eyebrow-light">Newsletter</span>
          <h2 className="headline mt-4 text-white text-[32px] sm:text-[40px] lg:text-[52px] max-w-md">
            One letter a month, no fluff.
          </h2>
          <p className="mt-6 text-[15px] text-white/70 leading-relaxed max-w-md">
            New exhibits, upcoming festivals, and stories from the archive —
            written by our team and sent the first Friday of each month.
            Currently 8,200 readers strong.
          </p>
        </div>
        <form
          className="flex flex-col sm:flex-row gap-3 sm:items-end"
          onSubmit={(e) => e.preventDefault()}
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
