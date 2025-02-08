import Image from "next/image";
import Link from "next/link";

export default function CertificationCard({
  certification,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: CertificationCardProps) {
  return (
    <div
      onClick={onClick}
      className="group mx-auto h-72 w-full overflow-hidden bg-zinc-100 hover:cursor-pointer dark:bg-zinc-900 sm:h-96"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={certification.image}
        alt={certification.name}
        width={400}
        height={400}
        className="h-40 w-full object-cover sm:h-60"
      />
      <div className="px-6 pb-6 pt-4">
        <Link
          href={certification.link}
          className="text-lg font-bold group-hover:text-amber-400"
        >
          <h3>{certification.name}</h3>
        </Link>
        <span className="mb-2 block">from {certification.company}</span>
      </div>
    </div>
  );
}
