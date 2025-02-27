import Link from "next/link";
import { getCourses } from "@/lib/database";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default async function Page() {
  const courses = await getCourses();

  return (
    <div>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-primary text-2xl font-bold tracking-tight sm:text-4xl">
          All our courses
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Boost your technical skills with our courses.
        </p>
      </div>
      {courses.length ? (
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group flex max-w-xl flex-col items-start justify-between"
            >
              <Link href={`/courses/${course.slug}`}>
                <div className="mt-3 flex items-baseline gap-4">
                  <h3 className="group-hover:text-primary text-lg leading-6 font-semibold text-gray-900 underline-offset-2 group-hover:underline">
                    {course.title}
                  </h3>
                  {course.done && (
                    <span className="text-secondary ring-secondary/10 inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium ring-1 ring-inset">
                      Done
                    </span>
                  )}
                </div>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {course.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        emptyState
      )}
    </div>
  );
}

const emptyState = (
  <div className="mt-10 flex border-t border-gray-200 sm:mt-16">
    <div className="mx-auto mt-6 flex flex-col items-center rounded-md border-2 border-dashed p-6">
      <AcademicCapIcon className="text-secondary h-12 w-12" />
      <h3 className="mt-3 text-sm font-semibold">No courses available</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating a new course.
      </p>
      <div className="mt-6 mb-3">
        <Link
          href="/courses/new"
          className="bg-primary focus-visible:outline-secondary rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Create a new course <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </div>
);
