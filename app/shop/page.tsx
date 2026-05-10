import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { IMG } from "@/components/images";

export const metadata = {
  title: "Shop · Nikkei National Museum & Cultural Centre",
  description:
    "The museum gift shop and Nikkei Japanese Bookstore — books, exhibit catalogues, made-by-hand goods, and gifts that support the centre.",
};

const featured = [
  {
    name: "Return to Paueru Gai · Exhibit catalogue",
    price: "$45",
    type: "Hardcover · 240pp",
    image: IMG.festivalLanterns,
  },
  {
    name: "Nikkei Tote · Hand-printed canvas",
    price: "$32",
    type: "Made in Burnaby",
    image: IMG.workshop,
  },
  {
    name: "Furoshiki · Indigo set of three",
    price: "$48",
    type: "Cotton · 50cm / 70cm / 90cm",
    image: IMG.paperUmbrella,
  },
  {
    name: "Wagashi gift box",
    price: "$28",
    type: "Six pieces · Refrigerated",
    image: IMG.cherryBlossom,
  },
  {
    name: "Tsukemono crock · stoneware",
    price: "$85",
    type: "Local potter · Burnaby",
    image: IMG.zenStones,
  },
  {
    name: "TAIKEN exhibit poster · A2",
    price: "$18",
    type: "Heavyweight · Recycled",
    image: IMG.archive,
  },
  {
    name: "Bento gift wrap · Sashiko",
    price: "$24",
    type: "Reversible · 70cm",
    image: IMG.origami,
  },
  {
    name: "Asahi Baseball replica cap",
    price: "$38",
    type: "Wool blend · One size",
    image: IMG.lanternsRow,
  },
];

const sections = [
  {
    title: "The Gift Shop",
    body: "On the main floor next to reception. Books, exhibit catalogues, ceramics, textiles, and small gifts — many made by local Japanese-Canadian artisans.",
    note: "Open during museum hours · 10% off for members",
    image: IMG.cherryBlossom,
  },
  {
    title: "Nikkei Japanese Bookstore",
    body: "Canada's largest selection of Japanese-language books and bilingual children's books — fiction, non-fiction, language reference, manga, and a small selection of stationery.",
    note: "Special orders welcome · Books available in 7–10 days",
    image: IMG.bookshop,
  },
];

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <PageHero
          eyebrow="Shop · Museum gift shop + bookstore"
          title="Take a piece of the museum home"
          accent="."
          intro="Books, exhibit catalogues, hand-made goods, and the largest selection of Japanese-language books in Canada — every purchase supports the museum's free admission policy."
          image={IMG.bookshop}
        />

        <Sections />
        <Featured />
        <Online />
      </main>
      <SiteFooter />
    </>
  );
}

function Sections() {
  return (
    <section className="px-6 lg:px-16 py-24 max-w-[1400px] mx-auto space-y-20">
      {sections.map((s, i) => (
        <article
          key={s.title}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <div className="image-frame aspect-[4/3]">
              <Image
                src={s.image.src}
                alt={s.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <span className="eyebrow">Inside the building</span>
            <h2 className="headline mt-4 text-[32px] sm:text-[40px] lg:text-[48px]">
              {s.title}
            </h2>
            <p className="mt-6 text-[16px] text-[#3a3a3a] leading-relaxed max-w-xl">
              {s.body}
            </p>
            <p className="mt-5 text-[13px] text-muted">{s.note}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="btn-primary">
                Shop online <span aria-hidden>→</span>
              </a>
              <Link href="/visit" className="btn-ghost">
                Visit in person
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function Featured() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <span className="eyebrow">Featured</span>
            <h2 className="headline mt-4 text-[36px] sm:text-[44px] lg:text-[52px]">
              Recently in stock.
            </h2>
          </div>
          <a href="#" className="link-arrow text-[14px]">
            Shop online <span aria-hidden>→</span>
          </a>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <li key={p.name} className="group">
              <div className="image-frame aspect-square">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold tracking-tight leading-snug group-hover:text-accent transition-colors">
                {p.name}
              </h3>
              <div className="mt-1 flex items-center justify-between text-[13px]">
                <span className="text-muted">{p.type}</span>
                <span className="font-semibold">{p.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Online() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-ink text-on-ink">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_auto] gap-10 items-end">
        <div>
          <span className="eyebrow-light">Shipping</span>
          <h2 className="headline mt-4 text-white text-[32px] sm:text-[40px] lg:text-[48px] max-w-2xl">
            We ship across Canada. Books to anywhere with an address.
          </h2>
          <p className="mt-6 text-[15px] text-white/70 leading-relaxed max-w-xl">
            Standard shipping is $9.50 in Canada, $19 in the US. Members ship
            free over $80. We pack carefully — fragile items get a hand-written
            note and reused tissue paper.
          </p>
        </div>
        <a href="#" className="btn-accent">
          Visit the online shop <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
