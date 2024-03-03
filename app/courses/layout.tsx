import { ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import { getPageTitle } from '@/app/lib/metadata';

export const generateMetadata = async (
  _props: unknown,
  parent: ResolvingMetadata,
) => {
  const parentTitle = (await parent).title?.absolute;
  return {
    title: getPageTitle({ parentTitle, title: 'Courses' }),
  };
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between items-center h-20 px-6 bg-header-bg-color text-header-text-color">
        <Link href="/">
          <Image
            src="/Keepcoding.webp"
            width={202}
            height={48}
            alt="Keepcoding tech school"
          />
        </Link>
        <NavLinks />
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
