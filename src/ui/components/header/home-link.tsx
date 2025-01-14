import Image from 'next/image';
import Link from 'next/link';

export default function HomeLink() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Keepcoding</span>
      <Image
        className="h-8 w-auto"
        src="/Keepcoding.webp"
        width={202}
        height={48}
        alt="Keepcoding tech school"
      />
    </Link>
  );
}
