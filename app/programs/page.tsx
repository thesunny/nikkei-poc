import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { IMG } from "@/components/images";

export const metadata = {
  title: "Programs · Nikkei National Museum & Cultural Centre",
  description:
    "Sixty programs in cultural arts, language, martial arts, music, fitness, and more — daily, 10am to 9:30pm at Nikkei Centre.",
};

const categories = [
  {
    id: "cultural",
    name: "Cultural arts",
    image: IMG.calligraphy,
    intro: "Tea, dance, calligraphy, kimono, manyoshu — programs that pass craft from one hand to another.",
    programs: [
      ["Urasenke Tea Ceremony", "裏千家 茶席", "May 31 · One-day"],
      ["Omotesenke Nodate Tea", "表千家 野点茶席", "May 31 · Outdoor"],
      ["Kumikō Incense Game", "香りの聞き比べ組香ゲーム", "May 31 · Drop-in"],
      ["Kimono Salon: Fundamentals", "Lecture + practice", "May 16 · One-day"],
      ["Satsuki Kai Japanese Dance", "彩月会 日本舞踊", "Wednesdays 1–3pm"],
      ["Calligraphy Class", "書道", "1st &amp; 2nd Wed monthly"],
      ["Writing Manyoshu", "Classical poetry", "Monthly"],
    ],
  },
  {
    id: "martial",
    name: "Martial arts",
    image: IMG.shrineDetail,
    intro: "Six disciplines, kids through adults, classes most days of the week — drop in to watch a class first.",
    programs: [
      ["Judo", "柔道", "Wed &amp; Fri · All ages"],
      ["Aikido", "合気道", "Tue, Thu, Sat · All ages"],
      ["Karate", "空手", "Mon, Thu, Sat · Kids – Adults"],
      ["Iaido", "居合道", "Tuesdays 7–9pm"],
      ["Jukendo &amp; Tankendo", "銃剣道 短剣道", "Sundays"],
      ["Ninjutsu", "Every 3rd Sunday", "All levels"],
    ],
  },
  {
    id: "language",
    name: "Language",
    image: IMG.bookshop,
    intro: "Beginner to advanced, 10-week sessions and weekly conversation exchange.",
    programs: [
      ["Japanese Language Class", "10 classes · Beginner – Advanced", "Spring full · Fall opens Aug"],
      ["Conversation &amp; Exchange", "Bilingual practice", "Bi-weekly"],
    ],
  },
  {
    id: "fitness",
    name: "Health &amp; fitness",
    image: IMG.bamboo,
    intro: "Drop-in or sign up for the season — for any age, any level.",
    programs: [
      ["Adult Badminton", "Wed 7:00 – 9:45pm", "Drop-in"],
      ["Senior Badminton", "シニア・バドミントン", "Tue 10am – 12pm"],
      ["Taz Badminton", "Recreational", "Fri 12 – 2:30pm"],
      ["Nikkei Pickleball", "Mixed levels", "Tue 1 – 3:30pm"],
      ["Hawaiian Hula Dance", "フラ・ダンス", "Wed &amp; Sat"],
      ["Line Dance Club", "日系ラインダンス友の会", "Wed 10 – 11:30am"],
      ["Elite Gymnastics", "Children &amp; youth", "Sun, Tue – Sat"],
      ["Self-Adjustment Fitness", "自力整体", "Twice monthly Fri + Sun"],
    ],
  },
  {
    id: "games",
    name: "Games &amp; leisure",
    image: IMG.origami,
    intro: "Weekly meetups for Go, Shogi, karuta, and Pokémon — beginners welcome at all of them.",
    programs: [
      ["Go Lessons", "囲碁", "Thu 4 – 6pm"],
      ["Go Club", "囲碁クラブ", "Sat 1 – 5pm"],
      ["Shogi Meetups", "Japanese chess", "1st &amp; 3rd Sat"],
      ["Kyougi Karuta", "競技かるた", "2nd &amp; 4th Sun"],
      ["Pokémon League", "Youth + collectors", "Friday evenings"],
      ["Ikoma Abacus", "そろばん", "Fri 4 – 5:30pm"],
    ],
  },
  {
    id: "crafts",
    name: "Crafts &amp; workshops",
    image: IMG.workshop,
    intro: "Monthly drop-in workshops — kintsugi, mizuhiki, wagashi, temari — and a weekly bonsai club.",
    programs: [
      ["Art Sushi Workshop", "Decorative food prep", "June 6"],
      ["Kintsugi Workshop", "Gold-seamed ceramic repair", "May 30"],
      ["Mizuhiki Workshop", "Decorative cord tying", "May 24"],
      ["Nerikiri Workshop", "練りきり", "May 23"],
      ["Temari Workshop", "Decorative ball embroidery", "May 9"],
      ["Wagashi Workshop", "Japanese sweets", "May 31"],
      ["Bonsai Club", "盆栽クラブ", "4th Wed 7 – 9pm"],
    ],
  },
  {
    id: "music",
    name: "Music &amp; performance",
    image: IMG.taiko,
    intro: "Taiko, karaoke, samurai cinema, art salons, and choral singing — by ear, by heart.",
    programs: [
      ["Chibi Taiko", "Youth ensemble", "Sun 5 – 9pm"],
      ["Utagoe Kissa", "歌声喫茶", "2nd Sat monthly"],
      ["Nikkei Senior Karaoke", "日系シニア・カラオケ", "Tue 12 – 3:30pm"],
      ["Hitotose Samurai Cinema", "Film club", "Wed &amp; Fri 6:30 – 8pm"],
      ["Kizuna Art Salon", "絆アートサロン", "Fridays"],
      ["Calligraphy Club", "習字クラブ", "2nd &amp; 4th Thu 1 – 2pm"],
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <PageHero
          eyebrow="Programs · Daily, 10am – 9:30pm"
          title="Sixty programs. One curious community."
          accent=""
          intro="From Urasenke tea ceremony to Pokémon league, ninjutsu to senior karaoke — the Cultural Centre is in session every day, year-round. Drop in to most classes, sign up for term programs, or join a club."
          image={IMG.taiko}
        />

        <Filter />
        {categories.map((c, i) => (
          <Category key={c.id} cat={c} alt={i % 2 === 1} />
        ))}
        <Register />
      </main>
      <SiteFooter />
    </>
  );
}

function Filter() {
  return (
    <section className="px-6 lg:px-16 py-12 border-b border-line bg-paper sticky top-[120px] z-30">
      <div className="max-w-[1400px] mx-auto flex items-center gap-4 flex-wrap">
        <span className="eyebrow">Jump to</span>
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="text-[13px] px-3 py-1.5 rounded-full border border-line-strong hover:border-foreground hover:bg-background transition-colors"
              dangerouslySetInnerHTML={{ __html: c.name }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Category({
  cat,
  alt,
}: {
  cat: (typeof categories)[number];
  alt: boolean;
}) {
  return (
    <section
      id={cat.id}
      className={`px-6 lg:px-16 py-24 lg:py-28 ${alt ? "bg-paper" : ""}`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-44 lg:self-start">
            <div className="image-frame aspect-[4/5]">
              <Image
                src={cat.image.src}
                alt={cat.image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <span className="eyebrow mt-6 block">{cat.programs.length} programs</span>
            <h2
              className="headline mt-3 text-[36px] sm:text-[44px] lg:text-[52px]"
              dangerouslySetInnerHTML={{ __html: cat.name + "." }}
            />
            <p className="mt-5 text-[15px] text-[#3a3a3a] leading-relaxed max-w-md">
              {cat.intro}
            </p>
          </div>

          <ul className="border-t border-line">
            {cat.programs.map((p) => (
              <li
                key={p[0]}
                className="border-b border-line py-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-6 items-center"
              >
                <div>
                  <h3
                    className="text-[18px] font-semibold tracking-tight"
                    dangerouslySetInnerHTML={{ __html: p[0] }}
                  />
                  <p
                    className="text-[13px] text-muted mt-0.5"
                    dangerouslySetInnerHTML={{ __html: p[1] }}
                  />
                </div>
                <span
                  className="text-[13px] text-foreground font-medium tracking-tight"
                  dangerouslySetInnerHTML={{ __html: p[2] }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Register() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-ink text-on-ink">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <span className="eyebrow-light">Registration</span>
          <h2 className="headline mt-4 text-white text-[32px] sm:text-[40px] lg:text-[52px] max-w-2xl">
            Centre-run programs at reception. Independent programs through your
            instructor.
          </h2>
          <p className="mt-6 text-[15px] text-white/70 leading-relaxed max-w-2xl">
            Some programs are managed by NNMCC and registered through reception
            — others are independently led by instructors and registered
            directly. Email{" "}
            <a
              href="mailto:programs@nikkeiplace.org"
              className="underline underline-offset-2 hover:text-white"
            >
              programs@nikkeiplace.org
            </a>{" "}
            and we&apos;ll point you to the right person.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/membership" className="btn-accent">
            Member discount <span aria-hidden>→</span>
          </Link>
          <a href="mailto:programs@nikkeiplace.org" className="btn-ghost-light">
            Ask about a program
          </a>
        </div>
      </div>
    </section>
  );
}
