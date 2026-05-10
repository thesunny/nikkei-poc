import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function Photo({
  src,
  alt,
  aspect = "4/3",
  className = "",
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: Props) {
  return (
    <div
      className={`image-frame w-full ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
