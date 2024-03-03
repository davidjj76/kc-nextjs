import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center h-20 px-6 border-solid border-b-2 bg-slate-900">
        <Image
          src="/Keepcoding.webp"
          width={202}
          height={48}
          alt="Keepcoding tech school"
        />
      </header>
      <main className="flex-1 text-gray-800 p-6">
        <h1
          className={clsx(lusitana.className, 'text-2xl text-orange-600 mb-8')}
        >
          Hello, Keepcoders!
        </h1>
        <p className="mb-2">Welcome to the Keepcoding React Advanced Module</p>
        <p>
          Let&#39;s start with <strong>Next.js</strong>
        </p>
      </main>
    </div>
  );
}
