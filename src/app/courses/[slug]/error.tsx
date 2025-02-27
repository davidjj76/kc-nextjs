"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="border-error bg-error/10 items-center justify-between rounded-md border-4 border-dashed p-8 sm:flex">
      <div>
        <h2 className="text-error text-2xl font-bold tracking-tight sm:text-4xl">
          Oooooops!
        </h2>
        <p className="text-error mt-2 text-lg leading-8">{error.message}</p>
      </div>
      <Link
        href="/courses"
        className="bg-error focus-visible:outline-secondary mt-4 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Go to courses catalog <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
