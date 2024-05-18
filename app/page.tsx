import Link from 'next/link';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {backgroundGradientTop}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1
              className={clsx(
                lusitana.className,
                'text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl',
              )}
            >
              Hello Keepcoder!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to the Keepcoding Next.js in React advanced module. This
              is a sample page to show how to use the metadata and layout
              features.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/courses"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                Go to courses catalog <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        {backgroundGradientBottom}
      </div>
    </div>
  );
}

const backgroundGradientTop = (
  <div
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>
);

const backgroundGradientBottom = (
  <div
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>
);
