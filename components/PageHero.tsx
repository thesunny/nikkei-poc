import Image from "next/image";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image: { src: string; alt: string };
  accent?: string;
};

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  accent,
}: Props) {
  return (
    <section className="relative bg-ink text-on-ink overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-55 drift"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>
      <div className="relative px-6 lg:px-16 pt-24 lg:pt-36 pb-20 lg:pb-32 max-w-[1400px] mx-auto">
        <div className="rise">
          <span className="eyebrow-light">{eyebrow}</span>
        </div>
        <h1 className="display rise rise-delay-1 text-white mt-6 text-[44px] sm:text-[60px] lg:text-[88px] max-w-4xl">
          {title}
          {accent && <span className="text-accent">{accent}</span>}
        </h1>
        {intro && (
          <p className="rise rise-delay-2 mt-8 text-[16px] sm:text-[18px] text-white/80 leading-relaxed max-w-2xl">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
