"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const categories = [
  {
    title: "Weddings",
    sub: "Ceremony + reception",
    cap: "UP TO 380",
  },
  {
    title: "Event halls",
    sub: "Conferences, galas, AGMs",
    cap: "UP TO 380",
  },
  {
    title: "Birthday parties",
    sub: "Family rooms with kitchen",
    cap: "UP TO 60",
  },
  {
    title: "Boardroom & meetings",
    sub: "Off-sites and workshops",
    cap: "UP TO 16",
  },
];

const rooms = [
  {
    num: "01",
    eyebrow: "The grand ballroom for weddings and galas",
    title: "Hayashi Hall",
    label: "Hayashi Hall",
    tone: "tone-night",
    body: "Our largest event space — high ceilings, sprung wood floor, full stage, and street-level access. Pairs with the Community Kitchen and Lobby for full-evening receptions.",
    stats: [
      ["Capacity", "380"],
      ["Square feet", "4,200"],
      ["From", "$1850"],
      ["Hours", "8am – 2am"],
    ],
  },
  {
    num: "02",
    eyebrow: "A gallery setting for receptions and lectures",
    title: "Karasawa Gallery",
    label: "Karasawa Gallery",
    tone: "tone-stone",
    body: "A polished concrete and glass gallery on the main floor — perfect for cocktail receptions, intimate ceremonies, and book launches set among rotating exhibits.",
    stats: [
      ["Capacity", "120"],
      ["Square feet", "1,800"],
      ["From", "$950"],
      ["Hours", "10am – 11pm"],
    ],
  },
  {
    num: "03",
    eyebrow: "Traditional tatami space for ceremony and meetings",
    title: "Tatami Room",
    label: "Tatami Room",
    tone: "tone-paper",
    body: "Authentic eight-mat tatami room with shoji screens and a small tokonoma alcove — used for tea ceremony, board meetings, and quiet workshops.",
    stats: [
      ["Capacity", "30"],
      ["Square feet", "600"],
      ["From", "$320"],
      ["Hours", "8am – 10pm"],
    ],
  },
  {
    num: "04",
    eyebrow: "Conference room for up to 16",
    title: "Boardroom · Kaede",
    label: "Boardroom · Kaede",
    tone: "tone-moss",
    body: "A modern boardroom with built-in display, video conferencing, and whiteboard wall. Ideal for off-sites, board meetings, and small workshops.",
    stats: [
      ["Capacity", "16"],
      ["Square feet", "320"],
      ["From", "$180"],
      ["Hours", "8am – 10pm"],
    ],
  },
];

const compareRows = [
  ["Hayashi Hall", "280", "380", "4200", "8am – 2am", "$1850"],
  ["Karasawa Gallery", "80", "120", "1800", "10am – 11pm", "$950"],
  ["Community Kitchen", "—", "—", "720", "8am – 11pm", "$280"],
  ["Tatami Room", "24", "30", "600", "8am – 10pm", "$320"],
  ["Boardroom · Kaede", "16", "—", "320", "8am – 10pm", "$180"],
  ["Lobby (add-on)", "—", "100", "1200", "with hall", "add-on"],
];

const addons = [
  ["Community Kitchen", "Commercial kitchen, prep + plating · $280"],
  ["Lobby reception area", "2-hour pre-event cocktail · $180"],
  ["Garden ceremony space", "Outdoor ceremony with backup plan · $480"],
  ["AV technician on-site", "Full event coverage · $65/hr"],
  ["Premium chiavari chairs", "Per chair · $4"],
  ["Damage deposit", "Refundable · $500 – $2,000"],
];

const vendors = [
  {
    name: "Catering · Maple & Miso",
    desc: "Japanese-Canadian fusion, full-service catering",
    perk: "10% member discount",
  },
  {
    name: "Catering · Aki Sushi Co.",
    desc: "Sushi platters and bento for daytime events",
  },
  {
    name: "Florals · Sakura Studio",
    desc: "Ikebana-inspired arrangements and ceremony pieces",
    perk: "5% member discount",
  },
  {
    name: "AV · West Coast Stage",
    desc: "Full AV, lighting, stage rigging for halls",
  },
  {
    name: "Photography · Nori Aoki Studio",
    desc: "Wedding and event documentary photography",
    perk: "$200 off coord. bookings",
  },
  {
    name: "DJ · Tora Sound",
    desc: "Bilingual DJ + MC, Bon Odori sets on request",
  },
];

const faqs = [
  {
    q: "What is included in the base rental rate?",
    a: "Tables, chairs in standard configurations, basic AV (projector + lectern mic in halls), and our day-of facility staff. Setup and teardown time within your booked hours is included.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Bookings cancelled more than 90 days before the event receive a full refund less the deposit. Inside 90 days, refunds are pro-rated; inside 30 days the full booking is non-refundable.",
  },
  {
    q: "How does the damage deposit work?",
    a: "A refundable deposit of $500–$2,000 (depending on space) is collected with the final payment. After a walk-through with the coordinator, it's returned within 10 business days minus any damages.",
  },
  {
    q: "Is rental time inclusive of setup and teardown?",
    a: "Yes — your booked hours include load-in, setup, the event itself, and teardown. Talk to the coordinator if you need extra hours; they're available at a reduced rate.",
  },
  {
    q: "What are the payment terms?",
    a: "A 25% deposit holds the date. The balance is due 30 days before the event. We accept e-transfer, credit card, and cheque.",
  },
  {
    q: "Do you have preferred vendors?",
    a: "Yes — see the Preferred vendors section above. You're welcome to bring your own vendors; they'll need to provide insurance and complete a brief site walk-through.",
  },
];

export default function RentalsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Categories />
        <Rooms />
        <Compare />
        <Coordinator />
        <Vendors />
        <FAQ />
        <Inquiry />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="px-8 lg:px-16 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
      <div>
        <span className="eyebrow">Rentals · Nikkei Place, Burnaby</span>
        <h1 className="display mt-6 text-[44px] sm:text-[56px] lg:text-[64px]">
          Host your event
          <br />
          at Nikkei Place
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-8 text-[18px] text-[#3a3a3a] leading-relaxed max-w-xl">
          Six rentable rooms across the museum and cultural centre — from a
          380-seat ballroom to an authentic tatami room — plus an on-site
          coordinator who will help plan every detail.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 items-center">
          <a href="#inquiry" className="btn-primary">
            Start a rental inquiry <span aria-hidden>→</span>
          </a>
          <a href="#" className="btn-ghost">
            Download rental package (PDF)
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] text-muted">
          <span>From $180/hr</span>
          <span aria-hidden>·</span>
          <span>Up to 380 guests</span>
          <span aria-hidden>·</span>
          <span>Free parking, on-site</span>
        </div>
      </div>

      <div className="relative">
        <div
          className="image-placeholder w-full aspect-[4/3] rounded-sm"
          data-watermark="会場"
          role="img"
          aria-label="Hayashi Hall set with round tables for a wedding reception"
        />
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="px-8 lg:px-16 py-20 border-t border-line">
      <span className="eyebrow">For every kind of gathering</span>
      <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px] max-w-3xl">
        Weddings, conferences, birthday parties, board off-sites — and tea
        ceremony.
      </h2>
      <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
        {categories.map((c) => (
          <li key={c.title} className="bg-white">
            <a
              href="#rooms"
              className="block p-7 hover:bg-[#fafafa] transition-colors h-full"
            >
              <div className="text-[20px] font-semibold tracking-tight">
                {c.title}
              </div>
              <div className="mt-1 text-[14px] text-muted">{c.sub}</div>
              <div className="mt-10 text-[11px] tracking-[0.18em] uppercase text-muted">
                {c.cap} <span aria-hidden>→</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Rooms() {
  return (
    <section id="rooms" className="px-8 lg:px-16 py-20 border-t border-line">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <span className="eyebrow">Our spaces</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            Six rooms<span className="text-accent">.</span> One coordinator.
          </h2>
        </div>
        <a href="#compare" className="link-arrow text-[14px]">
          Compare all rooms <span aria-hidden>→</span>
        </a>
      </div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16">
        {rooms.map((r) => (
          <article key={r.title}>
            <div
              className={`image-placeholder ${r.tone} w-full aspect-[4/3] rounded-sm`}
              role="img"
              aria-label={r.label}
              data-watermark={r.num}
            />
            <div className="mt-6">
              <div className="eyebrow">
                {r.num} · {r.eyebrow}
              </div>
              <h3 className="headline mt-3 text-[28px] sm:text-[32px] lg:text-[36px]">
                {r.title}
              </h3>
              <p className="mt-4 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
                {r.body}
              </p>
              <dl className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 max-w-xl">
                {r.stats.map(([dt, dd]) => (
                  <div key={dt}>
                    <dt className="eyebrow">{dt}</dt>
                    <dd className="mt-1 text-[18px] font-semibold tracking-tight">
                      {dd}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#inquiry" className="btn-primary">
                  Inquire about {r.title.split(" ")[0].replace("·", "")}{" "}
                  <span aria-hidden>→</span>
                </a>
                <a href="#" className="btn-ghost">
                  Floor plans &amp; setups
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section
      id="compare"
      className="px-8 lg:px-16 py-20 border-t border-line bg-[#fafafa]"
    >
      <span className="eyebrow">At a glance</span>
      <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
        Compare rooms<span className="text-accent">.</span>
      </h2>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full text-left text-[14px] border-collapse">
          <thead>
            <tr className="border-b border-[#d4d4d4] text-[11px] uppercase tracking-[0.18em] text-muted">
              <th className="py-4 pr-6 font-medium">Room</th>
              <th className="py-4 pr-6 font-medium">Capacity (seated)</th>
              <th className="py-4 pr-6 font-medium">Capacity (standing)</th>
              <th className="py-4 pr-6 font-medium">Sq ft</th>
              <th className="py-4 pr-6 font-medium">Hours</th>
              <th className="py-4 font-medium">From</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-line hover:bg-white transition-colors"
              >
                <td className="py-5 pr-6 font-semibold tracking-tight text-[15px]">
                  {row[0]}
                </td>
                <td className="py-5 pr-6">{row[1]}</td>
                <td className="py-5 pr-6">{row[2]}</td>
                <td className="py-5 pr-6">{row[3]}</td>
                <td className="py-5 pr-6">{row[4]}</td>
                <td className="py-5 font-semibold">{row[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Coordinator() {
  return (
    <section className="px-8 lg:px-16 py-20 border-t border-line grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <span className="eyebrow">Rental coordinator</span>
        <h3 className="headline mt-4 text-[28px] sm:text-[32px] lg:text-[40px] max-w-md">
          Plan with someone who knows the building.
        </h3>
        <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
          Our on-site coordinator helps with floor plans, AV setup, vendor
          introductions, day-of staffing, and runs through your schedule the
          week before. Coordinator support is included with Hayashi Hall and
          Karasawa Gallery bookings.
        </p>
        <div className="mt-8 flex flex-col gap-1 text-[16px]">
          <a
            href="mailto:rentals@nikkeiplace.org"
            className="font-semibold hover:opacity-60"
          >
            rentals@nikkeiplace.org
          </a>
          <a href="tel:6047777000" className="font-semibold hover:opacity-60">
            604.777.7000
          </a>
        </div>
      </div>

      <div>
        <span className="eyebrow">Common add-ons</span>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {addons.map(([name, desc]) => (
            <li key={name} className="py-4 flex justify-between gap-6">
              <span className="font-semibold text-[15px] tracking-tight">
                {name}
              </span>
              <span className="text-[14px] text-muted text-right">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Vendors() {
  return (
    <section className="px-8 lg:px-16 py-20 border-t border-line">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
        <div>
          <span className="eyebrow">Preferred vendors</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            Trusted partners we work with.
          </h2>
        </div>
        <span className="text-[13px] text-muted max-w-sm">
          Some partners offer member &amp; coordinator-booking discounts.
        </span>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
        {vendors.map((v) => (
          <li key={v.name} className="bg-white p-7">
            <div className="font-semibold text-[16px] tracking-tight">
              {v.name}
            </div>
            <p className="mt-2 text-[14px] text-muted leading-relaxed">
              {v.desc}
            </p>
            {v.perk && (
              <div className="mt-5 inline-block text-[11px] tracking-[0.16em] uppercase text-notice-fg bg-notice-bg px-2 py-1 rounded">
                {v.perk}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="px-8 lg:px-16 py-20 border-t border-line grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12">
      <div>
        <span className="eyebrow">Good to know</span>
        <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
          Frequently asked.
        </h2>
        <p className="mt-6 text-[15px] text-muted max-w-md leading-relaxed">
          For anything not covered here, the rental coordinator is the fastest
          path — most questions get a same-business-day reply.
        </p>
      </div>

      <ul className="border-t border-line">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-6 py-5 text-left text-[17px] font-semibold tracking-tight hover:opacity-70"
              >
                <span>{item.q}</span>
                <span aria-hidden className="text-2xl font-light text-muted">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="pb-6 pr-10 text-[15px] text-[#3a3a3a] leading-relaxed">
                  {item.a}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Inquiry() {
  return (
    <section
      id="inquiry"
      className="px-8 lg:px-16 py-20 border-t border-line bg-[#fafafa]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14">
        <div>
          <span className="eyebrow">Rental inquiry</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            Tell us about your event<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-md">
            We&apos;ll check availability and get back within one business day
            with options and a quote tailored to your guest count and timing.
          </p>
          <div className="mt-8 text-[15px] leading-relaxed">
            Or email us at{" "}
            <a
              href="mailto:rentals@nikkeiplace.org"
              className="font-semibold hover:opacity-60"
            >
              rentals@nikkeiplace.org
            </a>
            <br />
            Call{" "}
            <a href="tel:6047777000" className="font-semibold hover:opacity-60">
              604.777.7000 ext. 4
            </a>{" "}
            · Tue – Fri, 10am – 4pm
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "Thanks — this is a prototype. Inquiry would be sent to rentals@nikkeiplace.org."
            );
          }}
          className="bg-white border border-line p-8 lg:p-10 rounded-sm grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5"
        >
          <Field label="Your name" required>
            <input
              required
              type="text"
              placeholder="Jane Tanaka"
              className={inputCls}
            />
          </Field>
          <Field label="Email" required>
            <input
              required
              type="email"
              placeholder="you@example.com"
              className={inputCls}
            />
          </Field>
          <Field label="Phone">
            <input type="tel" placeholder="604 555 0000" className={inputCls} />
          </Field>
          <Field label="Event type" required>
            <select required className={inputCls} defaultValue="">
              <option value="" disabled>
                Select event type…
              </option>
              <option>Wedding</option>
              <option>Conference</option>
              <option>Birthday party</option>
              <option>Memorial</option>
              <option>Workshop</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Preferred date(s)" required>
            <input required type="date" className={inputCls} />
          </Field>
          <Field label="Estimated guests" required>
            <input
              required
              type="number"
              placeholder="40"
              className={inputCls}
            />
          </Field>
          <Field label="Address (city, postal code)" wide>
            <input type="text" placeholder="Burnaby, V5E" className={inputCls} />
          </Field>
          <Field label="Have you rented with us before?" wide>
            <div className="flex items-center gap-6 pt-2 text-[14px]">
              <label className="flex items-center gap-2">
                <input type="radio" name="prev" /> No
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="prev" /> Yes
              </label>
            </div>
          </Field>
          <Field label="Anything else we should know?" wide>
            <textarea
              rows={4}
              placeholder="Tell us about timing, set-up, dietary needs, vendors…"
              className={inputCls}
            />
          </Field>
          <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <button type="submit" className="btn-primary">
              Send inquiry <span aria-hidden>→</span>
            </button>
            <p className="text-[12px] text-muted leading-relaxed">
              By submitting this form, you agree to our{" "}
              <a href="#" className="underline underline-offset-2">
                Privacy Policy
              </a>
              . We use your details only to respond to your inquiry.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-white border-b border-line focus:border-foreground outline-none py-2.5 text-[14px] placeholder:text-[#a0a0a0] transition-colors";

function Field({
  label,
  required,
  wide,
  children,
}: {
  label: string;
  required?: boolean;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1 ${wide ? "sm:col-span-2" : ""}`}>
      <span className="eyebrow">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}
