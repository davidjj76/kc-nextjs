"use client";

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
      <button
        className="bg-error focus-visible:outline-secondary mt-4 w-full rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-0 sm:w-auto"
        onClick={() => reset()}
      >
        Retry
      </button>
    </div>
  );
}
