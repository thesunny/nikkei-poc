import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { IMG } from "@/components/images";

export const metadata = {
  title: "Exhibits · Nikkei National Museum & Cultural Centre",
  description:
    "Current, upcoming, online, and travelling exhibits at Nikkei National Museum & Cultural Centre.",
};

const current = [
  {
    eyebrow: "Karasawa Gallery (1F) · Mar 26 – Sep 5, 2026",
    title: "Return to Paueru Gai",
    sub: "50 Years of Powell Street Festival",
    body: "A retrospective tracing five decades of one of Vancouver's longest-running community festivals. Photographs, posters, oral histories, and a recreation of the festival's first 1977 gate.",
    curator: "Curated by Linda Reid, Greg Masuda &amp; the Powell Street Festival Society",
    image: IMG.festivalLanterns,
  },
  {
    eyebrow: "Permanent · Upper Level (2F)",
    title: "TAIKEN: Generations of Resilience",
    sub: "An exhibit in five chapters",
    body: "Personal stories, artefacts, and oral histories from Japanese Canadians across four generations. From early settlement and the fishing wharves of Steveston, through forced internment and dispossession in 1942, to the redress movement and today's Yonsei.",
    curator: "Curated by NNMCC staff with the Japanese Canadian community",
    image: IMG.archive,
  },
  {
    eyebrow: "1F Wall Poster · Now on view",
    title: "The Vancouver JCCA Nisei Baseball Team",
    sub: "Asahi-era ballclub",
    body: "An intimate installation honouring the legendary Asahi ballclub and the Nisei players who carried it forward — pulled from our archive of vintage team photos and game programs.",
    image: IMG.lanternsRow,
  },
];

const upcoming = [
  {
    when: "Sep 26, 2026 – Feb 14, 2027",
    title: "Hands That Remember",
    sub: "Japanese Canadian craft revival, 1948 – today",
    body: "Eighty objects across woodwork, ceramics, textiles, and bookbinding from craftspeople rebuilding lives after internment.",
    image: IMG.workshop,
  },
  {
    when: "Mar 2027",
    title: "Hapa Hyphen",
    sub: "Mixed-Japanese-Canadian identity in photography",
    body: "Contemporary photographers from across Canada examining what 'Japanese Canadian' means in 2027.",
    image: IMG.cherryBlossom,
  },
];

const online = [
  { title: "Writing Wrongs", body: "Internment stories and primary documents.", image: IMG.archive },
  { title: "Foraging with the Uyeda Family of Nakusp", body: "A digitization project on family foodways.", image: IMG.bamboo },
  { title: "Tomoni: Living with Ability — Atsu's Story", body: "An oral history on disability and community.", image: IMG.calligraphy },
];

const past = [
  ["2024", "Citizenship & Citizenship: A Hapa Reckoning"],
  ["2023", "Bento: Memory in a Box"],
  ["2022", "Steveston: Net Mending"],
  ["2021", "After the Apology: 1988 and beyond"],
  ["2020", "Forty Years on Powell Street"],
];

export default function ExhibitsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <PageHero
          eyebrow="Exhibits"
          title="History on the wall, in the archive, on the road"
          accent="."
          intro="Three exhibits on view today, two arriving by year's end, twenty more in the online archive — plus traveling installations on loan to museums and galleries across Canada."
          image={IMG.festivalLanterns}
        />

        <Featured />
        <Current />
        <Upcoming />
        <Online />
        <Past />
        <Travelling />
      </main>
      <SiteFooter />
    </>
  );
}

function Featured() {
  const f = current[0];
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div className="image-frame aspect-[4/5]">
            <Image
              src={f.image.src}
              alt={f.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div>
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 className="headline mt-5 text-[40px] sm:text-[48px] lg:text-[64px]">
            {f.title}<span className="text-accent">.</span>
          </h2>
          <p className="serif mt-4 text-[20px] sm:text-[24px] text-muted leading-snug">
            {f.sub}
          </p>
          <p className="mt-8 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
            {f.body}
          </p>
          <p
            className="mt-6 text-[13px] text-muted italic"
            dangerouslySetInnerHTML={{ __html: f.curator! }}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/visit" className="btn-primary">
              Plan your visit <span aria-hidden>→</span>
            </Link>
            <a href="#" className="btn-ghost">
              Exhibit catalogue (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Current() {
  return (
    <section className="px-6 lg:px-16 py-20 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <span className="eyebrow">Also on view</span>
        <h2 className="headline mt-4 text-[36px] sm:text-[44px]">
          Two more, all under the same roof.
        </h2>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {current.slice(1).map((e) => (
            <li key={e.title} className="bg-background border border-line">
              <div className="image-frame aspect-[4/3]">
                <Image
                  src={e.image.src}
                  alt={e.image.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <span className="eyebrow">{e.eyebrow}</span>
                <h3 className="headline mt-3 text-[24px]">{e.title}</h3>
                <p className="serif mt-1 text-[16px] text-muted">{e.sub}</p>
                <p className="mt-4 text-[15px] text-[#3a3a3a] leading-relaxed">
                  {e.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Upcoming() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto">
      <span className="eyebrow">Coming soon</span>
      <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
        Upcoming.
      </h2>
      <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {upcoming.map((u) => (
          <li key={u.title}>
            <div className="image-frame aspect-[4/3]">
              <Image
                src={u.image.src}
                alt={u.image.alt}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="eyebrow">{u.when}</span>
            </div>
            <h3 className="headline mt-3 text-[24px] sm:text-[28px]">
              {u.title}
            </h3>
            <p className="serif mt-1 text-[16px] text-muted">{u.sub}</p>
            <p className="mt-3 text-[15px] text-[#3a3a3a] leading-relaxed max-w-xl">
              {u.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Online() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <span className="eyebrow">Online exhibits</span>
            <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
              Open from anywhere.
            </h2>
          </div>
          <a href="#" className="link-arrow text-[14px]">
            Browse all online exhibits <span aria-hidden>→</span>
          </a>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {online.map((o) => (
            <li key={o.title} className="bg-background border border-line">
              <div className="image-frame aspect-[4/3]">
                <Image
                  src={o.image.src}
                  alt={o.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="headline text-[20px]">{o.title}</h3>
                <p className="mt-2 text-[14px] text-[#3a3a3a] leading-relaxed">
                  {o.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Travelling() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-ink text-on-ink">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
        <div>
          <span className="eyebrow-light">Travelling exhibits</span>
          <h2 className="headline mt-4 text-white text-[36px] sm:text-[44px] lg:text-[52px]">
            On loan, across Canada.
          </h2>
        </div>
        <div className="text-white/80 text-[15px] leading-relaxed max-w-2xl space-y-5">
          <p>
            We curate a small fleet of travelling exhibits — banner-and-text
            installations and lightweight artefact loans — designed for school
            libraries, community centres, and small museums.
          </p>
          <p>
            Currently on the road: <em>Writing Wrongs</em> (Saskatchewan,
            Alberta), <em>The Asahi Years</em> (Manitoba), and{" "}
            <em>Steveston: Net Mending</em> (Northern BC).
          </p>
          <a href="#" className="link-arrow text-white">
            Request a travelling exhibit <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Past() {
  return (
    <section className="px-6 lg:px-16 py-24 max-w-[1400px] mx-auto">
      <span className="eyebrow">Past exhibits</span>
      <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
        From the archive.
      </h2>
      <ul className="mt-12 border-t border-line">
        {past.map(([year, title]) => (
          <li
            key={title}
            className="border-b border-line py-5 grid grid-cols-[80px_1fr_auto] gap-6 items-center"
          >
            <span className="serif text-[24px] text-muted">{year}</span>
            <span className="text-[16px] font-semibold tracking-tight">
              {title}
            </span>
            <a href="#" className="text-[13px] link-arrow">
              View <span aria-hidden>→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
