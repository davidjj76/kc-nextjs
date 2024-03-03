import { deleteCourse } from '@/app/lib/actions';
import { getCourseBySlug } from '@/app/lib/database';
import CompleteCourse from '@/app/ui/components/complete-course';

export default async function Page({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug);
  const deleteCourseWithId = deleteCourse.bind(null, course.id);

  return (
    <>
      <p>Course detail</p>
      <CompleteCourse course={course} />
      <form action={deleteCourseWithId}>
        <button type="submit">Delete</button>
      </form>
    </>
  );
}
