import { deleteCourse } from '@/lib/actions';
import { getCourseBySlug } from '@/lib/database';
import CompleteCourse from '@/ui/complete-course';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const course = await getCourseBySlug(slug);
  const deleteCourseWithId = deleteCourse.bind(null, course.id);

  return (
    <div>
      <div className="mx-auto lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
          {course.title}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {course.description}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        {!course.done && <CompleteCourse courseId={course.id} />}
        <form action={deleteCourseWithId}>
          <button
            type="submit"
            className="rounded-md bg-error px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
