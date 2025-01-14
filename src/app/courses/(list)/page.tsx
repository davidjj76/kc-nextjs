import Link from 'next/link';
import { getCourses } from '@/lib/database';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

export default async function Page() {
  const courses = await getCourses();

  return (
    <div>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
          All our courses
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Boost your technical skills with our courses.
        </p>
      </div>
      {courses.length ? (
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {courses.map(course => (
            <article
              key={course.id}
              className="group flex max-w-xl flex-col items-start justify-between"
            >
              <Link href={`/courses/${course.slug}`}>
                <div className="flex items-baseline mt-3 gap-4">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 underline-offset-2 group-hover:underline group-hover:text-primary">
                    {course.title}
                  </h3>
                  {course.done && (
                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-secondary ring-1 ring-inset ring-secondary/10">
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
  <div className="flex mt-10 sm:mt-16 border-t border-gray-200">
    <div className="flex flex-col items-center mx-auto p-6 mt-6 border-2 border-dashed rounded-md">
      <AcademicCapIcon className="w-12 h-12 text-secondary" mt-6 />
      <h3 className="text-sm font-semibold mt-3">No courses available</h3>
      <p className="text-sm mt-1 text-gray-500">
        Get started by creating a new course.
      </p>
      <div className="mt-6 mb-3">
        <Link
          href="/courses/new"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Create a new course <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </div>
);
