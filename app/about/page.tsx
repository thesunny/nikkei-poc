import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { IMG } from "@/components/images";

export const metadata = {
  title: "About · Nikkei National Museum & Cultural Centre",
  description:
    "A nationally recognized museum and gathering place that bridges Japanese and Canadian arts, culture, and history.",
};

const values = [
  {
    title: "Respect for heritage",
    body: "We hold space for the lived experience of Japanese Canadians — the joy and the trauma — and steward the artefacts, photographs, and stories entrusted to us.",
  },
  {
    title: "Diverse community",
    body: "Nikkei means people of Japanese ancestry, but the centre is built for everyone. Our doors open to all who want to learn, gather, and celebrate.",
  },
  {
    title: "Compassion & humility",
    body: "We listen first, share generously, and recognize the elders, families, and predecessors who made this institution possible.",
  },
];

const milestones = [
  ["1942", "Forced relocation begins; over 22,000 Japanese Canadians lose homes, businesses, and citizenship rights."],
  ["1977", "Japanese Canadian Centennial — community begins formal preservation work."],
  ["1988", "Government of Canada acknowledges and apologizes for wartime injustices."],
  ["2000", "Nikkei National Museum & Cultural Centre opens September 22 in Burnaby, BC."],
  ["2010", "Online collection database launches at nikkeimuseum.org."],
  ["2026", "Pre-1942 photo archive — 30,000+ images — fully digitized and searchable."],
];

const leadership = [
  { name: "Sherri Kajiwara", role: "Director · Curator", img: IMG.cherryBlossom },
  { name: "Lisa Uyeda", role: "Collections Manager", img: IMG.archive },
  { name: "Maiko Behr", role: "Director, Cultural Centre", img: IMG.teaCeremony },
  { name: "Ken Yada", role: "Education Lead", img: IMG.workshop },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <PageHero
          eyebrow="About · Est. September 22, 2000"
          title="A place to honour, preserve, and share"
          accent="."
          intro="The Nikkei National Museum & Cultural Centre is a nationally recognized museum and gathering place — bridging Japanese and Canadian arts, culture, and history at the heart of Burnaby."
          image={IMG.architecture}
        />

        <Mission />
        <Values />
        <History />
        <Stats />
        <Leadership />
        <Join />
      </main>
      <SiteFooter />
    </>
  );
}

function Mission() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-20">
        <div>
          <span className="eyebrow">Mission &amp; vision</span>
          <div className="divider-zen mt-6" />
        </div>
        <div className="space-y-12">
          <div>
            <span className="eyebrow">Mission</span>
            <p className="serif mt-4 text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.15] tracking-tight max-w-3xl">
              To honour, preserve, and share the history and heritage of
              Japanese Canadians and Japanese culture in Canada.
            </p>
          </div>
          <div>
            <span className="eyebrow">Vision</span>
            <p className="serif mt-4 text-[24px] sm:text-[30px] lg:text-[36px] leading-[1.2] tracking-tight max-w-3xl text-muted">
              A nationally recognized museum and gathering place that bridges
              Japanese and Canadian arts, culture, and history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <span className="eyebrow">What guides us</span>
        <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
          Three values<span className="text-accent">.</span>
        </h2>
        <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <li key={v.title} className="bg-background border border-line p-8">
              <span
                className="serif text-[44px] text-accent leading-none block"
              >
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="headline mt-6 text-[22px]">{v.title}</h3>
              <p className="mt-3 text-[15px] text-[#3a3a3a] leading-relaxed">
                {v.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function History() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <div className="image-frame aspect-[4/5]">
            <Image
              src={IMG.archive.src}
              alt={IMG.archive.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <span className="eyebrow">A timeline</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            How we got here.
          </h2>
          <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
            The museum&apos;s founding traces back to a community-led
            preservation effort that began in the 1970s — and accepts the long
            arc of Japanese Canadian history as its starting point.
          </p>
          <ol className="mt-10 border-t border-line">
            {milestones.map(([year, body]) => (
              <li
                key={year}
                className="border-b border-line py-5 grid grid-cols-[80px_1fr] gap-6"
              >
                <span className="serif text-[24px] text-accent leading-none pt-1">
                  {year}
                </span>
                <span className="text-[15px] text-[#3a3a3a] leading-relaxed">
                  {body}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    ["55,500", "Photographs"],
    ["650+", "Oral history recordings"],
    ["3,200+", "Artworks &amp; objects"],
    ["157", "Film reels"],
    ["55m", "Of textual records"],
    ["22,000", "Japanese Canadians displaced 1942–46"],
  ];
  return (
    <section className="px-6 lg:px-16 py-24 bg-ink text-on-ink">
      <div className="max-w-[1400px] mx-auto">
        <span className="eyebrow-light">The collection in numbers</span>
        <h2 className="headline mt-4 text-white text-[36px] sm:text-[44px] lg:text-[52px]">
          A national archive of Japanese Canadian life.
        </h2>
        <dl className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {stats.map(([n, l]) => (
            <div key={l} className="border-l border-white/15 pl-5 lg:pl-7">
              <dt
                className="serif text-[44px] sm:text-[56px] lg:text-[72px] leading-none tracking-tight text-white"
                dangerouslySetInnerHTML={{ __html: n }}
              />
              <dd
                className="mt-3 text-[13px] text-white/60 tracking-tight max-w-[20ch]"
                dangerouslySetInnerHTML={{ __html: l }}
              />
            </div>
          ))}
        </dl>
        <div className="mt-12">
          <Link href="/research" className="btn-ghost-light">
            Search the collection <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
        <div>
          <span className="eyebrow">Leadership</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            The team.
          </h2>
        </div>
        <div className="flex gap-4 text-[14px]">
          <Link href="#" className="link-arrow">
            Board of directors <span aria-hidden>→</span>
          </Link>
          <Link href="#" className="link-arrow">
            Employment <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {leadership.map((p) => (
          <li key={p.name}>
            <div className="image-frame aspect-[4/5]">
              <Image
                src={p.img.src}
                alt={p.img.alt}
                fill
                sizes="(min-width: 768px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
            <h3 className="headline mt-5 text-[18px]">{p.name}</h3>
            <p className="mt-1 text-[13px] text-muted">{p.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Join() {
  return (
    <section className="px-6 lg:px-16 py-20 max-w-[1400px] mx-auto">
      <div className="bg-paper p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <span className="eyebrow">Join us</span>
          <h3 className="serif mt-4 text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] tracking-tight max-w-3xl">
            Walk the floor with us. Volunteer, become a member, or work here.
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/membership" className="btn-primary">
            Become a member <span aria-hidden>→</span>
          </Link>
          <Link href="/support#volunteer" className="btn-ghost">
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
}
