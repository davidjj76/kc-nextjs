'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex justify-between items-center bg-error bg-opacity-10 rounded-md border-4 border-dashed border-error p-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-error sm:text-4xl">
          Oooooops!
        </h2>
        <p className="mt-2 text-lg leading-8 text-error">{error.message}</p>
      </div>
      <Link
        href="/courses"
        className="rounded-md bg-error px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      >
        Go to courses catalog <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
