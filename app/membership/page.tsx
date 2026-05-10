import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { IMG } from "@/components/images";

export const metadata = {
  title: "Membership · Nikkei National Museum & Cultural Centre",
  description:
    "Five tiers, hundreds of benefits — free admission, member previews, partner discounts, and an invitation to belong.",
};

const tiers = [
  {
    name: "Individual",
    price: "$45",
    cadence: "/ year",
    blurb: "For one — for the curious solo visitor.",
    perks: [
      "Free admission, every visit",
      "10% off the gift shop",
      "Member-only previews",
      "Newsletter + program priority",
    ],
    cta: "Choose Individual",
    featured: false,
  },
  {
    name: "Family",
    price: "$75",
    cadence: "/ year",
    blurb: "Two adults + kids under 18. Most-popular tier.",
    perks: [
      "Everything in Individual",
      "Free admission for whole family",
      "20% off summer camps",
      "Free guest pass · 4 per year",
      "Partner discounts at 20+ local businesses",
    ],
    cta: "Choose Family",
    featured: true,
  },
  {
    name: "Sustainer",
    price: "$200",
    cadence: "/ year",
    blurb: "Family benefits + a deeper relationship.",
    perks: [
      "Everything in Family",
      "Curator's circle invitations",
      "Behind-the-scenes archive tour · annual",
      "Recognition on the donor wall",
      "Reciprocal admission · 1,000+ museums",
    ],
    cta: "Choose Sustainer",
    featured: false,
  },
  {
    name: "Patron",
    price: "$500",
    cadence: "/ year",
    blurb: "For those who want to do a little more.",
    perks: [
      "Everything in Sustainer",
      "Two reserved seats · annual gala",
      "Private tour with the Director · annual",
      "Hayashi Hall venue discount",
    ],
    cta: "Choose Patron",
    featured: false,
  },
  {
    name: "Lifetime",
    price: "$5,000",
    cadence: "once",
    blurb: "Forever benefits, forever recognized.",
    perks: [
      "Lifetime membership for two",
      "Permanent recognition on the founder wall",
      "Annual private viewing",
      "Bequest planning support",
    ],
    cta: "Talk to development",
    featured: false,
  },
];

const partners = [
  ["Hilton Vancouver Metrotown", "15% off room rates"],
  ["Maple & Miso Catering", "10% on private orders"],
  ["Sakura Studio Florals", "5% on arrangements"],
  ["Aki Sushi Co.", "10% in-store, Burnaby"],
  ["Museum of Vancouver", "Reciprocal admission"],
  ["Nikkei Bookstore", "10% off Japanese books"],
];

export default function MembershipPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <PageHero
          eyebrow="Become a member"
          title="Join the people who keep this place going"
          accent="."
          intro="Members fund roughly a quarter of our operating budget — and get free admission, members-only previews, the newsletter ahead of the public, and a meaningful discount on programs and the shop."
          image={IMG.cherryBlossom}
        />

        <Tiers />
        <Compare />
        <Partners />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}

function Tiers() {
  return (
    <section className="px-6 lg:px-16 py-24 lg:py-28 max-w-[1400px] mx-auto">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {tiers.map((t) => (
          <li
            key={t.name}
            className={`relative p-7 flex flex-col ${
              t.featured
                ? "bg-ink text-on-ink border-0"
                : "bg-background border border-line"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-7 bg-accent text-white text-[11px] tracking-[0.18em] uppercase px-3 py-1 rounded-full font-semibold">
                Most popular
              </span>
            )}
            <h3
              className={`headline text-[22px] ${t.featured ? "text-white" : ""}`}
            >
              {t.name}
            </h3>
            <p
              className={`mt-2 text-[13px] ${t.featured ? "text-white/60" : "text-muted"}`}
            >
              {t.blurb}
            </p>
            <div className="mt-6 flex items-baseline gap-1">
              <span
                className={`serif text-[44px] leading-none tracking-tight ${t.featured ? "text-white" : ""}`}
              >
                {t.price}
              </span>
              <span
                className={`text-[12px] ${t.featured ? "text-white/60" : "text-muted"}`}
              >
                {t.cadence}
              </span>
            </div>
            <ul
              className={`mt-6 space-y-3 text-[13px] flex-1 ${t.featured ? "text-white/80" : "text-[#3a3a3a]"}`}
            >
              {t.perks.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-accent flex-shrink-0">●</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-7 ${t.featured ? "btn-accent" : "btn-primary"} w-full justify-center`}
            >
              {t.cta} <span aria-hidden>→</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Compare() {
  return (
    <section className="px-6 lg:px-16 py-20 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <span className="eyebrow">Compare benefits</span>
        <h2 className="headline mt-4 text-[32px] sm:text-[40px]">
          What&apos;s included.
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-left text-[14px] border-collapse">
            <thead>
              <tr className="border-b border-line-strong text-[11px] uppercase tracking-[0.18em] text-muted">
                <th className="py-3 pr-6 font-medium">Benefit</th>
                {tiers.map((t) => (
                  <th key={t.name} className="py-3 pr-6 font-medium">
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Free TAIKEN admission", "✓", "✓", "✓", "✓", "✓"],
                ["Member previews", "✓", "✓", "✓", "✓", "✓"],
                ["Gift shop discount", "10%", "10%", "15%", "20%", "20%"],
                ["Free guest passes (yr)", "—", "4", "8", "12", "Unlimited"],
                ["Reciprocal museum admission", "—", "—", "✓", "✓", "✓"],
                ["Director's tour", "—", "—", "—", "✓", "✓"],
                ["Hayashi Hall rental discount", "—", "—", "—", "10%", "15%"],
                ["Lifetime recognition", "—", "—", "—", "—", "✓"],
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-line hover:bg-background transition-colors"
                >
                  <td className="py-4 pr-6 font-semibold tracking-tight">
                    {row[0]}
                  </td>
                  {row.slice(1).map((cell, j) => (
                    <td key={j} className="py-4 pr-6">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="px-6 lg:px-16 py-24 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">Partner discounts</span>
          <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
            Discounts you&apos;ll actually use.
          </h2>
          <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-md">
            Twenty-plus local businesses offer a member discount — a quietly
            useful perk we&apos;re proud of. Show your member card at checkout.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
          {partners.map(([name, perk]) => (
            <li
              key={name}
              className="bg-background p-5 flex items-baseline justify-between gap-3"
            >
              <span className="text-[15px] font-semibold tracking-tight">
                {name}
              </span>
              <span className="text-[12px] text-muted text-right">{perk}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    [
      "Can I gift a membership?",
      "Yes — at any tier. We&apos;ll mail a hand-addressed welcome card on the date of your choosing.",
    ],
    [
      "What if I move away?",
      "Your membership stays with you. Reciprocal admission at 1,000+ museums kicks in at Sustainer level — handy.",
    ],
    [
      "Is membership tax-deductible?",
      "The portion above the fair-market value of benefits is treated as a charitable donation. We&apos;ll issue an annual receipt.",
    ],
    [
      "How do I update my details?",
      "Sign in to the member portal, or email members@nikkeiplace.org and we&apos;ll handle it within a business day.",
    ],
  ];
  return (
    <section className="px-6 lg:px-16 py-24 bg-ink text-on-ink">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12">
        <div>
          <span className="eyebrow-light">Member FAQs</span>
          <h2 className="headline mt-4 text-white text-[32px] sm:text-[40px] lg:text-[48px]">
            Quick answers.
          </h2>
        </div>
        <ul className="border-t border-white/15">
          {faqs.map(([q, a]) => (
            <li
              key={q}
              className="border-b border-white/15 py-6 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4"
            >
              <h3 className="text-[16px] font-semibold text-white">{q}</h3>
              <p
                className="text-[14px] text-white/70 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: a }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
