"use client";

import { useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { IMG } from "@/components/images";

const collections = [
  {
    name: "Photographs",
    count: "55,500",
    body: "Pre-1942 family photos, internment camp images, post-war community life, festival documentation, and contemporary portraits.",
  },
  {
    name: "Oral history recordings",
    count: "650+",
    body: "First-person interviews recorded since 1977. Searchable by speaker, place, and theme. Sample listening kits available.",
  },
  {
    name: "Artworks &amp; objects",
    count: "3,200+",
    body: "Calligraphy, ceramics, textiles, woodwork, internment-camp craft, and personal artefacts donated by families.",
  },
  {
    name: "Textual records",
    count: "55m",
    body: "Letters, diaries, business records, association minutes, government documents — measured in shelf metres.",
  },
  {
    name: "Film reels",
    count: "157",
    body: "16mm and 8mm community footage. Most digitized; access copies available on-site or by request.",
  },
  {
    name: "Reference library",
    count: "8,400 vols",
    body: "Japanese Canadian history, Japanese language reference, exhibit catalogues, and donated personal libraries.",
  },
];

const services = [
  {
    title: "Charles H. Kadota Resource Centre",
    body: "Wheelchair-accessible reading room. Books and finding aids on open shelves; collections retrieved on request.",
    note: "By appointment · Tue – Fri, 10am – 4pm",
  },
  {
    title: "Family History · One-on-one",
    body: "Sit down with a researcher to trace family records. Bring what you have — names, places, dates — and we&apos;ll show you what the archive has.",
    note: "First 30 minutes free · $50/hr after",
  },
  {
    title: "Reproductions",
    body: "Order high-resolution scans of photographs and documents. Pricing varies by intended use; commercial licensing available.",
    note: "Quote in 2 business days",
  },
  {
    title: "Donate to the collection",
    body: "Photographs, letters, objects, Japanese books — we work with families to assess what fits the collection mandate.",
    note: "Talk to Collections first",
  },
];

const popular = [
  ["Internment camp records, by family name", "5,210 searches this year"],
  ["1942 Custodian of Enemy Property files", "2,840"],
  ["The Asahi baseball team, 1914–1941", "1,920"],
  ["Powell Street, pre-war photographs", "1,470"],
  ["Steveston cannery rolls, 1930s", "1,120"],
];

export default function ResearchPage() {
  const [q, setQ] = useState("");
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <PageHero
          eyebrow="Research · Collections · Archive"
          title="A national archive of Japanese Canadian life"
          accent="."
          intro="Sixty-thousand items, one hundred fifty-seven film reels, and fifty-five metres of textual records — open to scholars, families, students, and the curious."
          image={IMG.archive}
        />

        <section className="px-6 lg:px-16 py-16 max-w-[1400px] mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Prototype: would search nikkeimuseum.org for: " + q);
            }}
            className="bg-paper border border-line p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-end"
          >
            <label className="flex flex-col gap-2">
              <span className="eyebrow">Search the collection</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Try a family name, place, or year — e.g. Tashme, 1944"
                className="bg-background border-b border-line-strong focus:border-foreground py-3 outline-none text-[15px]"
              />
            </label>
            <button type="submit" className="btn-primary">
              Search <span aria-hidden>→</span>
            </button>
          </form>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-line border border-line">
            {popular.map(([q, n]) => (
              <li
                key={q}
                className="bg-background p-5 hover:bg-paper transition-colors cursor-pointer"
              >
                <p className="text-[14px] font-semibold tracking-tight">{q}</p>
                <p className="mt-2 text-[11px] text-muted">{n}</p>
              </li>
            ))}
          </ul>
        </section>

        <Collections />
        <Services />
        <Cite />
      </main>
      <SiteFooter />
    </>
  );
}

function Collections() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-28 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <span className="eyebrow">The collection</span>
        <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
          What&apos;s here.
        </h2>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {collections.map((c) => (
            <li key={c.name} className="bg-background p-7">
              <span
                className="serif text-[44px] sm:text-[56px] leading-none tracking-tight text-accent"
                dangerouslySetInnerHTML={{ __html: c.count }}
              />
              <h3
                className="headline mt-4 text-[20px]"
                dangerouslySetInnerHTML={{ __html: c.name }}
              />
              <p
                className="mt-3 text-[14px] text-[#3a3a3a] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: c.body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="px-6 lg:px-16 py-24 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-32">
          <div className="image-frame aspect-[4/5]">
            <Image
              src={IMG.bookshop.src}
              alt={IMG.bookshop.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <span className="eyebrow">Research services</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            How to dig in.
          </h2>
          <ul className="mt-10 border-t border-line">
            {services.map((s) => (
              <li
                key={s.title}
                className="border-b border-line py-6"
              >
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="headline text-[20px]">{s.title}</h3>
                  <span className="text-[12px] text-muted tracking-[0.06em]">
                    {s.note}
                  </span>
                </div>
                <p
                  className="mt-3 text-[14px] text-[#3a3a3a] leading-relaxed max-w-xl"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </li>
            ))}
          </ul>
          <a
            href="mailto:research@nikkeiplace.org"
            className="mt-10 inline-flex btn-primary"
          >
            Email the Collections team <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Cite() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-ink text-on-ink">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12">
        <div>
          <span className="eyebrow-light">For scholars &amp; writers</span>
          <h2 className="headline mt-4 text-white text-[32px] sm:text-[40px] lg:text-[48px]">
            Citing &amp; reproducing.
          </h2>
        </div>
        <div className="space-y-6 text-[15px] text-white/80 leading-relaxed">
          <p>
            We licence our collection for educational, editorial, and
            commercial use. Standard citation: <em>Nikkei National Museum,
            [collection name], [accession number].</em>
          </p>
          <p>
            For broadcasts, books, and exhibitions:{" "}
            <a
              href="mailto:reproductions@nikkeiplace.org"
              className="underline underline-offset-2 hover:text-white"
            >
              reproductions@nikkeiplace.org
            </a>{" "}
            — typical turnaround is 5 business days, longer for high-resolution
            requests.
          </p>
          <p>
            We waive fees for community-led projects and graduate research with
            a brief project statement.
          </p>
        </div>
      </div>
    </section>
  );
}
