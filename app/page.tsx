import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-xl flex flex-col sm:border rounded-lg p-8">
        <h1 className={clsx(lusitana.className, 'text-4xl text-accent mb-8')}>
          Hello, Keepcoders!
        </h1>
        <p className="mb-2">Welcome to the Keepcoding React Advanced Module</p>
        <p className="mb-4">
          Let&#39;s start with <strong>Next.js</strong>
        </p>
        <a
          className={clsx(lusitana.className, 'font-semibold text-accent')}
          href="/courses"
        >
          See our courses catalog -&gt;
        </a>
      </div>
    </div>
  );
}
