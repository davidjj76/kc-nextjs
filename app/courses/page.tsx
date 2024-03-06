import Link from 'next/link';
import { getCourses } from '@/app/lib/database';

export default async function Page() {
  const courses = await getCourses();

  return (
    <>
      <p>Welcome to courses catalog</p>
      <ul>
        {courses.map(course => (
          <li key={course.id} className="flex border-b">
            <Link href={`/courses/${course.slug}`}>{course.title}</Link>
            {course.done && ' - Done'}
          </li>
        ))}
      </ul>
    </>
  );
}
