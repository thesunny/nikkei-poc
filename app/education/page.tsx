import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { IMG } from "@/components/images";

export const metadata = {
  title: "Education · Nikkei National Museum & Cultural Centre",
  description:
    "TAIKEN field trips, JOURNEYS Education Kits, teaching guides, Summer Manga Camp, and K–12 curriculum-aligned resources.",
};

const programs = [
  {
    eyebrow: "K – 12 · Half day or full day",
    title: "TAIKEN Field Trips",
    body: "An experiential museum visit guided by our education staff. Half-day visits include a tour of TAIKEN and a craft workshop; full-day visits add a primary-source archive activity and a guided lunch in the Garden Plaza.",
    image: IMG.workshop,
    chips: ["BC Curriculum aligned", "Bus stop on-site", "Group lunch room available"],
    cta: "Book a field trip",
    href: "mailto:education@nikkeiplace.org?subject=TAIKEN+field+trip",
  },
  {
    eyebrow: "K – 12 · Loanable to schools",
    title: "JOURNEYS Education Kits",
    body: "Hands-on teaching kits available for loan — picked up locally or shipped across Canada. Each kit includes primary-source documents, oral history clips, lesson plans, and the Taiken or KimonoPlay games.",
    image: IMG.archive,
    chips: ["Free to BC schools", "Ships across Canada", "Bilingual EN / FR"],
    cta: "Reserve a kit",
    href: "mailto:education@nikkeiplace.org?subject=JOURNEYS+kit",
  },
  {
    eyebrow: "Grades 5 – 9 · One week",
    title: "Summer Manga Camp",
    body: "Five-day summer camp in storyboarding, ink, screen tone, and panel design — ending with a printed mini-zine and a gallery showing for families on Friday afternoon.",
    image: IMG.calligraphy,
    chips: ["Mid-July & mid-August", "9am – 4pm", "Lunch + snacks included"],
    cta: "Sign up",
    href: "#",
  },
];

const grades = [
  {
    band: "Elementary (K – 6)",
    items: [
      "TAIKEN card game (age 10+) — sorts archive photos into community stories.",
      "KimonoPlay game (age 5+) — kimono dressing as a guided activity.",
      "Video resources (15–20 minutes) on internment-era childhood.",
    ],
  },
  {
    band: "Middle (Gr 6 – 9)",
    items: [
      "Primary-source packets on dispossession and redress.",
      "Oral history listening kits (10 voices, 8 minutes each).",
      "Vocabulary and discussion guide (Japanese Canadian terminology).",
    ],
  },
  {
    band: "Secondary (Gr 9 – 12)",
    items: [
      "Writing Wrongs exhibit + film-based lessons.",
      "Research project guide using nikkeimuseum.org collections.",
      "1988 Redress Settlement document analysis.",
    ],
  },
];

const principles = [
  ["Use precise terminology", "We say <strong>Japanese Canadian internment</strong> — not 'Japanese internment.' The people interned were Canadian residents and citizens."],
  ["Teach beyond internment", "Internment is one chapter. The story includes pre-1942 settlement, redress, contemporary identity, and joy."],
  ["Centre primary sources", "Photographs, diaries, oral histories. Students should encounter Japanese Canadians in their own words."],
];

export default function EducationPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <PageHero
          eyebrow="Education · K – 12 + community"
          title="Bring your class to Nikkei. Or bring Nikkei to your class."
          accent=""
          intro="Field trips, loanable education kits, downloadable teaching guides, and a summer manga camp — all built with BC educators and aligned to the curriculum."
          image={IMG.workshop}
        />

        <Programs />
        <Principles />
        <Grades />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

function Programs() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto space-y-24">
      {programs.map((p, i) => (
        <article
          key={p.title}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <div className="image-frame aspect-[4/3]">
              <Image
                src={p.image.src}
                alt={p.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <span className="eyebrow">{p.eyebrow}</span>
            <h2 className="headline mt-4 text-[32px] sm:text-[40px] lg:text-[48px]">
              {p.title}
            </h2>
            <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
              {p.body}
            </p>
            <ul className="mt-6 flex gap-2 flex-wrap">
              {p.chips.map((c) => (
                <li
                  key={c}
                  className="text-[12px] tracking-[0.06em] bg-paper border border-line px-3 py-1.5 rounded-full"
                >
                  {c}
                </li>
              ))}
            </ul>
            <a href={p.href} className="mt-8 inline-flex btn-primary">
              {p.cta} <span aria-hidden>→</span>
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}

function Principles() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-ink text-on-ink">
      <div className="max-w-[1400px] mx-auto">
        <span className="eyebrow-light">Three teaching principles</span>
        <h2 className="headline mt-4 text-white text-[32px] sm:text-[40px] lg:text-[52px] max-w-3xl">
          The way we teach this story.
        </h2>
        <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map(([title, body], i) => (
            <li key={title} className="border-t border-white/20 pt-6">
              <span className="serif text-[44px] text-accent leading-none">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="headline mt-4 text-white text-[20px]">{title}</h3>
              <p
                className="mt-3 text-[14px] text-white/70 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Grades() {
  return (
    <section className="px-6 lg:px-16 py-24 max-w-[1400px] mx-auto">
      <span className="eyebrow">By grade level</span>
      <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
        Curriculum-aligned resources.
      </h2>
      <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
        {grades.map((g) => (
          <li key={g.band} className="bg-background p-7">
            <h3 className="headline text-[20px]">{g.band}</h3>
            <ul className="mt-5 space-y-4">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="text-[14px] text-[#3a3a3a] leading-relaxed flex gap-3"
                >
                  <span className="text-accent flex-shrink-0">●</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="px-6 lg:px-16 py-20 max-w-[1400px] mx-auto">
      <div className="bg-paper p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
        <div>
          <span className="eyebrow">Educator support</span>
          <h3 className="serif mt-4 text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] tracking-tight">
            Talk to our education team. We&apos;ll plan with you.
          </h3>
          <p className="mt-4 text-[14px] text-muted">
            Tuesday – Friday, 9am – 4pm
          </p>
        </div>
        <div className="flex flex-col gap-3 text-[15px]">
          <a
            href="mailto:education@nikkeiplace.org"
            className="font-semibold link-arrow"
          >
            education@nikkeiplace.org
          </a>
          <a href="tel:6047777000" className="font-semibold link-arrow">
            604.777.7000 ext. 102
          </a>
          <Link href="#" className="btn-primary mt-3 self-start">
            Download teaching guide (PDF) <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
