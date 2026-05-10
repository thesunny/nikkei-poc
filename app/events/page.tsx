import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { IMG } from "@/components/images";

export const metadata = {
  title: "Events · Nikkei National Museum & Cultural Centre",
  description:
    "The Essence of Japan, Nikkei Garden Market, Nikkei Matsuri, and more — annual festivals, lectures, and one-day events at Nikkei Place.",
};

const featured = {
  date: "May 31",
  weekday: "Sunday",
  year: "2026",
  title: "The Essence of Japan",
  sub: "Annual showcase · Hayashi Hall + Garden Plaza",
  body: "A one-day immersion in Japanese arts and craft. Tea ceremony, ikebana, calligraphy, kimono, taiko, and a tasting market — over thirty stations across the building, all free with entry.",
  ticket: "$10 · Members + kids under 12 free",
  image: IMG.teaCeremony,
};

const upcoming = [
  {
    date: "May 16",
    weekday: "Sat",
    year: "2026",
    title: "Kimono Salon: Fundamentals",
    sub: "1:00 – 4:00 pm · Tatami Room",
    body: "A friendly afternoon learning the basics of wearing and caring for kimono — bring your own or borrow one.",
    ticket: "$45 · Materials included",
    image: IMG.paperUmbrella,
  },
  {
    date: "May 24",
    weekday: "Sun",
    year: "2026",
    title: "Mizuhiki Workshop",
    sub: "2:00 – 4:30 pm · Boardroom Kaede",
    body: "Decorative cord tying — gift wrappers, hair ornaments, calling cards. Take home four finished pieces.",
    ticket: "$35 · Beginners welcome",
    image: IMG.workshop,
  },
  {
    date: "Jul 4",
    weekday: "Sat",
    year: "2026",
    title: "Nikkei Garden Market",
    sub: "11am – 5pm · Garden Plaza",
    body: "Local makers, summer food trucks, live music, and a kids' tent in the garden — free admission, all welcome.",
    ticket: "Free admission",
    image: IMG.garden,
  },
  {
    date: "Aug 2",
    weekday: "Sun",
    year: "2026",
    title: "Obon Bon Odori Practice",
    sub: "6:00 – 8:00 pm · Hayashi Hall",
    body: "Open practice ahead of the Matsuri Bon Odori. Live taiko, simple choreography — kids and first-timers very welcome.",
    ticket: "Free · No registration",
    image: IMG.matsuriCrowd,
  },
  {
    date: "Sep 5–6",
    weekday: "Sat–Sun",
    year: "2026",
    title: "Nikkei Matsuri",
    sub: "11am – 9pm · Throughout Nikkei Place",
    body: "Our largest festival of the year — bon odori, kids' yokai parade, food stalls, and headliner performances on the main stage.",
    ticket: "By donation · $5 suggested",
    image: IMG.matsuriCrowd,
  },
];

const months = [
  ["June", [
    "Annual Volunteer Appreciation · June 14",
    "Art Sushi Workshop · June 6",
    "Father's Day Bento Brunch · June 21",
  ]],
  ["July", [
    "Nikkei Garden Market · July 4",
    "Sashiko Sampler Workshop · July 18",
    "Lecture: 'Hapa Identity in 2026' · July 25",
  ]],
  ["August", [
    "Obon Bon Odori Practice · August 2",
    "Origami Family Day · August 16",
    "Wagashi Tasting · August 29",
  ]],
  ["September", [
    "Nikkei Matsuri · September 5–6",
    "Members-Only Preview: Hands That Remember · September 25",
    "Exhibit Opening: Hands That Remember · September 26",
  ]],
] as const;

const past = [
  ["Mar 14, 2026", "Hinamatsuri Family Day"],
  ["Feb 21, 2026", "Lunar New Year Tea"],
  ["Dec 7, 2025", "Mochitsuki — Mochi pounding"],
  ["Nov 11, 2025", "Remembrance: Japanese Canadian War Memorial"],
  ["Sep 6 – 7, 2025", "Nikkei Matsuri 2025"],
];

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <PageHero
          eyebrow="Events"
          title="Festivals, workshops, openings, lectures"
          accent="."
          intro="A handful of one-day events every month, three big festivals a year, and a quiet but steady stream of openings, lectures, and kids' programs in between."
          image={IMG.matsuriCrowd}
        />

        <Featured />
        <Upcoming />
        <Calendar />
        <Past />
      </main>
      <SiteFooter />
    </>
  );
}

function Featured() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <span className="eyebrow">Featured · This month</span>
          <div className="mt-6">
            <span className="serif text-[80px] sm:text-[120px] leading-none tracking-tight text-accent">
              {featured.date}
            </span>
            <span className="ml-3 text-[13px] text-muted tracking-[0.2em] uppercase">
              {featured.weekday} · {featured.year}
            </span>
          </div>
          <h2 className="headline mt-6 text-[36px] sm:text-[48px] lg:text-[60px]">
            {featured.title}<span className="text-accent">.</span>
          </h2>
          <p className="serif mt-3 text-[18px] text-muted leading-snug">
            {featured.sub}
          </p>
          <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
            {featured.body}
          </p>
          <div className="mt-6 inline-block bg-paper border border-line px-4 py-2 text-[13px]">
            <span className="font-semibold">Ticket</span> · {featured.ticket}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="btn-accent">
              Reserve a ticket <span aria-hidden>→</span>
            </a>
            <a href="#" className="btn-ghost">
              Add to calendar
            </a>
          </div>
        </div>
        <div>
          <div className="image-frame aspect-[4/5]">
            <Image
              src={featured.image.src}
              alt={featured.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Upcoming() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <span className="eyebrow">Upcoming</span>
            <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
              Next at Nikkei.
            </h2>
          </div>
          <a href="#" className="link-arrow text-[14px]">
            iCal feed <span aria-hidden>→</span>
          </a>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {upcoming.map((e) => (
            <li
              key={e.title}
              className="bg-background flex flex-col"
            >
              <div className="image-frame aspect-[4/3]">
                <Image
                  src={e.image.src}
                  alt={e.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <div className="flex items-baseline gap-3">
                  <span className="serif text-[32px] leading-none tracking-tight">
                    {e.date}
                  </span>
                  <span className="text-[11px] text-muted tracking-[0.18em] uppercase">
                    {e.weekday} · {e.year}
                  </span>
                </div>
                <h3 className="headline mt-4 text-[22px]">{e.title}</h3>
                <p className="text-[13px] text-muted mt-1">{e.sub}</p>
                <p className="mt-3 text-[14px] text-[#3a3a3a] leading-relaxed flex-1">
                  {e.body}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-[12px] text-muted">{e.ticket}</span>
                  <a href="#" className="text-[13px] link-arrow">
                    Details <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Calendar() {
  return (
    <section className="px-6 lg:px-16 py-24 max-w-[1400px] mx-auto">
      <span className="eyebrow">Looking ahead</span>
      <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
        Four months at a glance.
      </h2>
      <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
        {months.map(([name, items]) => (
          <li key={name as string} className="bg-background p-7">
            <span className="serif text-[36px] leading-none tracking-tight">
              {name}
            </span>
            <ul className="mt-6 space-y-3 text-[14px] text-[#3a3a3a]">
              {(items as readonly string[]).map((it) => (
                <li
                  key={it}
                  className="border-l-2 border-line-strong pl-3 hover:border-accent transition-colors"
                >
                  {it}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Past() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-ink text-on-ink">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12">
        <div>
          <span className="eyebrow-light">Recent past</span>
          <h2 className="headline mt-4 text-white text-[32px] sm:text-[40px] lg:text-[48px]">
            Just gone by.
          </h2>
          <p className="mt-5 text-[14px] text-white/60 max-w-md leading-relaxed">
            A few highlights from the last twelve months. Browse the full
            archive for past programs and event recaps.
          </p>
          <Link
            href="#"
            className="mt-6 inline-block link-arrow text-white text-[14px]"
          >
            Past events archive <span aria-hidden>→</span>
          </Link>
        </div>
        <ul className="border-t border-white/15">
          {past.map(([when, title]) => (
            <li
              key={title}
              className="border-b border-white/15 py-5 grid grid-cols-[160px_1fr] gap-6"
            >
              <span className="text-[13px] text-white/60 tracking-[0.18em] uppercase">
                {when}
              </span>
              <span className="text-[16px] text-white">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
