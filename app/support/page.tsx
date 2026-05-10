"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { IMG } from "@/components/images";

const campaigns = [
  {
    eyebrow: "Capital campaign",
    title: "Nikkei Next",
    body: "A multi-year capital initiative to expand exhibit space, modernize archive storage, and renovate the Hayashi Hall stage. We&apos;ve raised $3.4M of a $7.5M goal.",
    progress: 0.45,
    image: IMG.architecture,
  },
  {
    eyebrow: "Annual fund",
    title: "Art For All",
    body: "Funds the free admission policy at TAIKEN, plus subsidized programs for kids, seniors, and newcomers. Roughly $250,000 a year keeps the doors open.",
    progress: 0.78,
    image: IMG.cherryBlossom,
  },
  {
    eyebrow: "Operating fund",
    title: "Maintenance Fund",
    body: "The unsung essential — HVAC, roof, archive climate, accessibility upgrades. Friends of Nikkei Centre give monthly to keep the building safe and operating.",
    progress: 0.62,
    image: IMG.zenStones,
  },
];

const ways = [
  ["One-time gift", "Make a single donation, online or by cheque."],
  ["Monthly giving", "$10 – $100 a month, withdrawn automatically. Easy to start, easy to pause."],
  ["Tribute gift", "Honour someone living, or remember someone passed."],
  ["Securities", "Donate publicly traded shares for full fair-market-value tax credit."],
  ["Planned giving", "Bequests in your will. Our development team can suggest language."],
  ["In-kind", "Photographs, archival materials, objects, Japanese books — talk to Collections first."],
];

const presets = [50, 100, 250, 500, 1000];

export default function SupportPage() {
  const [amount, setAmount] = useState<number>(100);
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");
  const [campaign, setCampaign] = useState("Art For All");

  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <PageHero
          eyebrow="Support · Donate · Volunteer"
          title="The museum runs on people who give a little"
          accent="."
          intro="Memberships and donations cover roughly 65% of what it costs to keep the doors open, the archive climate-controlled, and the TAIKEN exhibit free for every visitor."
          image={IMG.zenStones}
        />

        <Quote />

        <section className="px-6 lg:px-16 py-24 lg:py-28 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start">
            <div>
              <span className="eyebrow">Three campaigns</span>
              <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
                Choose where your gift goes.
              </h2>
              <p className="mt-5 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
                We split donations across three funds. Pick one that matches
                what you care about — or let us split it where need is highest.
              </p>

              <ul className="mt-12 space-y-10">
                {campaigns.map((c) => (
                  <li key={c.title} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6">
                    <div className="image-frame aspect-[4/3]">
                      <Image
                        src={c.image.src}
                        alt={c.image.alt}
                        fill
                        sizes="180px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="eyebrow">{c.eyebrow}</span>
                      <h3 className="headline mt-2 text-[24px]">{c.title}</h3>
                      <p
                        className="mt-3 text-[14px] text-[#3a3a3a] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: c.body }}
                      />
                      <div className="mt-4 h-1.5 bg-line rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${c.progress * 100}%` }}
                        />
                      </div>
                      <span className="mt-2 inline-block text-[12px] text-muted">
                        {Math.round(c.progress * 100)}% to goal
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:sticky lg:top-32 bg-paper border border-line p-7 lg:p-8">
              <span className="eyebrow">Give now</span>
              <h3 className="headline mt-3 text-[24px]">Your gift, today.</h3>
              <p className="mt-2 text-[13px] text-muted">
                Tax receipt issued instantly via Nikkei Place Foundation.
              </p>

              <div className="mt-6">
                <span className="block text-[12px] tracking-[0.16em] uppercase text-muted mb-2">
                  Frequency
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {(["once", "monthly"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f)}
                      className={`py-2.5 text-[13px] font-semibold rounded-full border transition-all ${
                        frequency === f
                          ? "bg-foreground text-white border-foreground"
                          : "border-line-strong hover:border-foreground"
                      }`}
                    >
                      {f === "once" ? "One-time" : "Monthly"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <span className="block text-[12px] tracking-[0.16em] uppercase text-muted mb-2">
                  Amount (CAD)
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {presets.map((p) => (
                    <button
                      key={p}
                      onClick={() => setAmount(p)}
                      className={`py-2.5 text-[14px] font-semibold rounded-md border transition-all ${
                        amount === p
                          ? "bg-foreground text-white border-foreground"
                          : "border-line-strong hover:border-foreground"
                      }`}
                    >
                      ${p}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={amount}
                  min={5}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  className="mt-3 w-full bg-background border border-line-strong rounded-md py-2.5 px-4 text-[14px] focus:border-foreground outline-none"
                />
              </div>

              <div className="mt-5">
                <span className="block text-[12px] tracking-[0.16em] uppercase text-muted mb-2">
                  Direct to
                </span>
                <select
                  value={campaign}
                  onChange={(e) => setCampaign(e.target.value)}
                  className="w-full bg-background border border-line-strong rounded-md py-2.5 px-3 text-[14px] focus:border-foreground outline-none"
                >
                  <option>Where need is greatest</option>
                  <option>Nikkei Next</option>
                  <option>Art For All</option>
                  <option>Maintenance Fund</option>
                </select>
              </div>

              <button
                onClick={() =>
                  alert(
                    `Thanks — prototype only. Would charge ${frequency === "monthly" ? "$" + amount + "/mo" : "$" + amount} to ${campaign}.`
                  )
                }
                className="mt-7 w-full btn-accent justify-center"
              >
                Give ${amount} {frequency === "monthly" ? "/ mo" : ""} <span aria-hidden>→</span>
              </button>
              <p className="mt-3 text-[11px] text-muted leading-relaxed">
                Charitable receipts processed by Nikkei Place Foundation. Your
                details are never shared.
              </p>
            </aside>
          </div>
        </section>

        <Ways />
        <Volunteer />
        <Thanks />
      </main>
      <SiteFooter />
    </>
  );
}

function Quote() {
  return (
    <section className="px-6 lg:px-16 py-24 max-w-[1400px] mx-auto">
      <blockquote className="serif text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.15] tracking-tight max-w-4xl">
        &ldquo;Every story preserved is a story we don&apos;t lose. Every
        admission free is a barrier we don&apos;t pass on. Every dollar given
        keeps the lights on for the next generation walking through the
        door.&rdquo;
      </blockquote>
      <p className="mt-6 text-[14px] text-muted">
        Sherri Kajiwara, Director · Nikkei National Museum
      </p>
    </section>
  );
}

function Ways() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <span className="eyebrow">All the ways to give</span>
        <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
          Six routes to support.
        </h2>
        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {ways.map(([title, body]) => (
            <li key={title} className="bg-background p-7">
              <h3 className="headline text-[20px]">{title}</h3>
              <p className="mt-3 text-[14px] text-[#3a3a3a] leading-relaxed">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Volunteer() {
  return (
    <section
      id="volunteer"
      className="px-6 lg:px-16 py-24 max-w-[1400px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="image-frame aspect-[4/5]">
            <Image
              src={IMG.cherryBlossom.src}
              alt="A volunteer guides visitors through the gallery"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <span className="eyebrow">Volunteer</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            Give your time.
          </h2>
          <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
            About 120 volunteers keep the centre running — gallery docents,
            archive helpers, festival hands, language tutors, and a small team
            who arrange flowers every Tuesday morning.
          </p>
          <ul className="mt-8 space-y-4 text-[15px]">
            <li className="flex gap-3">
              <span className="text-accent">●</span>{" "}
              <span>
                <strong>Gallery docent</strong> — half-day shifts, training
                provided.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">●</span>{" "}
              <span>
                <strong>Archive assistant</strong> — scanning &amp; cataloguing,
                Tuesdays &amp; Thursdays.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">●</span>{" "}
              <span>
                <strong>Festival crew</strong> — set-up, take-down, info booth
                during events.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">●</span>{" "}
              <span>
                <strong>Education team</strong> — work with school groups on
                field-trip days.
              </span>
            </li>
          </ul>
          <a
            href="mailto:volunteer@nikkeiplace.org"
            className="mt-10 inline-flex btn-primary"
          >
            Apply to volunteer <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Thanks() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-ink text-on-ink">
      <div className="max-w-[1400px] mx-auto">
        <span className="eyebrow-light">Thank you</span>
        <h2 className="headline mt-4 text-white text-[32px] sm:text-[40px] lg:text-[48px] max-w-3xl">
          Our supporters built this place. They keep it standing.
        </h2>
        <p className="mt-6 text-[15px] text-white/70 max-w-2xl leading-relaxed">
          Donor walls in the lobby honour the founding donors and the
          contributors to the Inspiration and Resilience fundraisers. Online
          recognition lives at our supporters page.
        </p>
        <Link href="#" className="mt-8 inline-flex btn-ghost-light">
          Supporters &amp; donor walls <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
