type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  accent?: string;
  align?: "left" | "center";
  trailing?: React.ReactNode;
};

export default function SectionTitle({
  eyebrow,
  title,
  intro,
  accent,
  align = "left",
  trailing,
}: Props) {
  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : ""
      } lg:flex-row lg:items-end lg:justify-between gap-6`}
    >
      <div className="max-w-3xl">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="headline mt-4 text-[32px] sm:text-[40px] lg:text-[52px]">
          {title}
          {accent && <span className="text-accent">{accent}</span>}
        </h2>
        {intro && (
          <p className="mt-5 text-[16px] text-[#3a3a3a] leading-relaxed max-w-2xl">
            {intro}
          </p>
        )}
      </div>
      {trailing && <div>{trailing}</div>}
    </div>
  );
}
