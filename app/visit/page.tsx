import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { IMG } from "@/components/images";

export const metadata = {
  title: "Visit · Nikkei National Museum & Cultural Centre",
  description:
    "Hours, admission, getting here, accessibility — everything you need to plan your visit to Nikkei Place in Burnaby.",
};

const transitOptions = [
  {
    title: "By SkyTrain",
    body: "Edmonds Station on the Expo Line, then a 15-minute walk. Head left on Griffiths Drive, uphill to Kingsway, then left on Southoaks Crescent.",
  },
  {
    title: "By bus",
    body: "Route 119 from Metrotown or Edmonds — get off at Kingsway & Royal Oak, three minutes from our front door.",
  },
  {
    title: "By car",
    body: "Southeast corner of Kingsway and Southoaks Crescent. Free underground parking with elevator access to the lobby.",
  },
  {
    title: "By bike",
    body: "Bike racks at the main entrance. The Central Valley Greenway runs along Kingsway — three minutes by bike from Edmonds.",
  },
];

const onsite = [
  ["TAIKEN exhibit (2F)", "Free"],
  ["Special exhibits (Karasawa Gallery, 1F)", "Free with admission"],
  ["Museum gift shop", "Open during museum hours"],
  ["Nikkei Café (lobby)", "Open Tue – Sun, 10am – 4pm"],
  ["Library &amp; Resource Centre", "Free, by appointment"],
  ["Garden &amp; courtyard", "Open during programming hours"],
];

const faqs = [
  {
    q: "Is admission really free?",
    a: "Yes — admission to the permanent TAIKEN exhibit on the second floor is free, every day we&apos;re open. Special exhibits in the Karasawa Gallery are also currently free with admission.",
  },
  {
    q: "Do I need to book ahead?",
    a: "Walk-ins welcome. Groups of 8+ should email visit@nikkeiplace.org so we can have a docent ready and a quiet floor for you.",
  },
  {
    q: "Is the building accessible?",
    a: "Yes. Step-free access throughout, accessible washrooms on each floor, an elevator to all public spaces, and large-print materials at reception.",
  },
  {
    q: "Can I take photographs?",
    a: "Personal photography is welcome in TAIKEN and the Karasawa Gallery (no flash). For commercial photography or filming, contact our communications team in advance.",
  },
  {
    q: "Is there food on-site?",
    a: "Nikkei Café in the lobby serves light Japanese-Canadian fare and great coffee. The Garden Plaza is a lovely picnic spot in summer.",
  },
];

export default function VisitPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <PageHero
          eyebrow="Visit · 6688 Southoaks Crescent, Burnaby"
          title="Open seven days at Nikkei Place"
          accent="."
          intro="Free admission to the TAIKEN exhibit. A 15-minute walk from Edmonds SkyTrain. A garden, a café, a gift shop, a library — and a few thousand years of culture, a five-minute drive from Metrotown."
          image={IMG.architecture}
        />

        <Hours />
        <GettingHere />
        <Onsite />
        <Accessibility />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}

function Hours() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <span className="eyebrow">Hours &amp; admission</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            We keep two seasons.
          </h2>
          <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-md">
            The museum runs slightly different hours by season. Cultural Centre
            programs run daily, late into the evening, year-round.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-line p-7">
            <span className="eyebrow">March – August</span>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li className="flex justify-between border-b border-line pb-3">
                <span className="text-muted">Tue – Fri</span>
                <span className="font-semibold">10am – 6pm</span>
              </li>
              <li className="flex justify-between border-b border-line pb-3">
                <span className="text-muted">Sat – Sun</span>
                <span className="font-semibold">10am – 5pm</span>
              </li>
              <li className="flex justify-between text-muted">
                <span>Mon &amp; holidays</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          <div className="border border-line p-7">
            <span className="eyebrow">September – February</span>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li className="flex justify-between border-b border-line pb-3">
                <span className="text-muted">Tue – Sat</span>
                <span className="font-semibold">10am – 5pm</span>
              </li>
              <li className="flex justify-between text-muted">
                <span>Sun, Mon, holidays</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          <div className="border border-line p-7 md:col-span-2 bg-paper">
            <span className="eyebrow">Cultural Centre programs</span>
            <p className="mt-4 text-[15px]">
              Open <strong>daily, 10am – 9:30pm</strong>. Many drop-ins
              welcome — see{" "}
              <Link href="/programs" className="link-arrow">
                Programs
              </Link>{" "}
              for the full schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GettingHere() {
  return (
    <section
      id="getting-here"
      className="px-6 lg:px-16 py-24 lg:py-32 bg-paper"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow">Getting here</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            Four ways to arrive.
          </h2>
          <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-md">
            6688 Southoaks Crescent, Burnaby — at the southeast corner of
            Kingsway and Southoaks. About 25 minutes from downtown Vancouver.
          </p>

          <ul className="mt-10 space-y-6">
            {transitOptions.map((t) => (
              <li key={t.title}>
                <h3 className="headline text-[18px]">{t.title}</h3>
                <p className="mt-2 text-[14px] text-[#3a3a3a] leading-relaxed max-w-md">
                  {t.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="image-frame aspect-[4/5]">
            <Image
              src={IMG.alley.src}
              alt="A pathway approaching the museum"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <a
            href="https://maps.google.com/?q=6688+Southoaks+Crescent+Burnaby"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 btn-ghost"
          >
            Open in Google Maps <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Onsite() {
  return (
    <section className="px-6 lg:px-16 py-24 max-w-[1400px] mx-auto">
      <span className="eyebrow">On-site</span>
      <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
        What&apos;s in the building.
      </h2>
      <ul className="mt-12 border-t border-line">
        {onsite.map(([name, note]) => (
          <li
            key={name}
            className="border-b border-line py-5 grid grid-cols-[1fr_auto] gap-6"
          >
            <span
              className="text-[16px] font-semibold tracking-tight"
              dangerouslySetInnerHTML={{ __html: name }}
            />
            <span
              className="text-[14px] text-muted"
              dangerouslySetInnerHTML={{ __html: note }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Accessibility() {
  return (
    <section
      id="accessibility"
      className="px-6 lg:px-16 py-24 bg-ink text-on-ink"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12">
        <div>
          <span className="eyebrow-light">Accessibility</span>
          <h2 className="headline mt-4 text-white text-[36px] sm:text-[44px] lg:text-[52px]">
            Welcome, everyone.
          </h2>
        </div>
        <div className="text-white/80 space-y-5 text-[15px] leading-relaxed max-w-2xl">
          <p>
            Step-free access throughout the building, accessible washrooms on
            every floor, and an elevator to all public spaces. The TAIKEN
            exhibit is fully accessible whenever the building is open.
          </p>
          <p>
            Large-print exhibit guides at reception. Assistive listening for
            scheduled lectures and screenings. Service animals welcome.
          </p>
          <p>
            Visiting with sensory needs?{" "}
            <a
              href="mailto:visit@nikkeiplace.org"
              className="underline underline-offset-2 hover:text-white"
            >
              Tell us in advance
            </a>{" "}
            and we&apos;ll prep a quiet welcome.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="px-6 lg:px-16 py-24 max-w-[1400px] mx-auto">
      <span className="eyebrow">Good to know</span>
      <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
        Frequently asked.
      </h2>
      <ul className="mt-12 border-t border-line">
        {faqs.map((f) => (
          <li key={f.q} className="border-b border-line py-7 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
            <h3 className="headline text-[18px] sm:text-[20px]">{f.q}</h3>
            <p
              className="text-[15px] text-[#3a3a3a] leading-relaxed max-w-2xl"
              dangerouslySetInnerHTML={{ __html: f.a }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
