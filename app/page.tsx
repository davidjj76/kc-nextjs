import clsx from 'clsx';
import { ResolvingMetadata } from 'next';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { getPageTitle } from '@/app/lib/metadata';

export const generateMetadata = async (
  _props: unknown,
  parent: ResolvingMetadata,
) => {
  const parentTitle = (await parent).title?.absolute;
  return {
    title: getPageTitle({ parentTitle, title: 'Home' }),
  };
};

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-xl flex flex-col sm:border rounded-lg p-8">
        <h1
          className={clsx(
            lusitana.className,
            'text-4xl text-accent-color mb-8',
          )}
        >
          Hello, Keepcoders!
        </h1>
        <p className="mb-2">Welcome to the Keepcoding React Advanced Module</p>
        <p className="mb-4">
          Let&#39;s start with <strong>Next.js</strong>
        </p>
        <Link
          className={clsx(
            lusitana.className,
            'font-semibold text-accent-color',
          )}
          href="/courses"
        >
          See our courses catalog -&gt;
        </Link>
      </div>
    </div>
  );
}
