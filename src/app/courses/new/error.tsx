"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="items-center justify-between rounded-md border-4 border-dashed border-error bg-error bg-opacity-10 p-8 sm:flex">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-error sm:text-4xl">
          Oooooops!
        </h2>
        <p className="mt-2 text-lg leading-8 text-error">{error.message}</p>
      </div>
      <button
        className="mt-4 w-full rounded-md bg-error px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary sm:mt-0 sm:w-auto"
        onClick={() => reset()}
      >
        Retry
      </button>
    </div>
  );
}
