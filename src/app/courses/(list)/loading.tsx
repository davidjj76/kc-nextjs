export default function Loading() {
  return (
    <div role="status" className="animate-pulse">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <div>
          <div className="inline-flex rounded-md bg-gray-200">
            <span className="invisible text-2xl font-bold tracking-tight sm:text-4xl">
              All our courses
            </span>
          </div>
        </div>
        <div className="mt-2">
          <div className="inline-flex rounded-md bg-gray-200">
            <span className="invisible text-lg leading-8">
              Boost your technical skills with our courses.
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="max-w-xl">
            <div className="mt-3 flex w-1/2 items-baseline gap-4 rounded-md bg-gray-200">
              <span className="invisible text-lg leading-6">react</span>
              <span className="invisible py-1 text-xs">Done</span>
            </div>
            <div className="mt-5 rounded-md bg-gray-200">
              <span className="invisible line-clamp-3 text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit porta eu
                nulla feugiat, taciti suspendisse turpis accumsan litora
                dignissim aliquet enim est purus. Euismod turpis elementum
                sociis luctus molestie diam lectus nostra felis, odio tempor
                litora dui justo
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
