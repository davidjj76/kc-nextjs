'use client';

import { completeCourse } from '@/app/lib/actions';
import { getCourseBySlug } from '@/app/lib/database';
import { Prisma } from '@prisma/client';

export default function CompleteCourse({
  course,
}: {
  course: Prisma.CourseGetPayload<{}>;
}) {
  const completeCourseWithId = completeCourse.bind(null, course.id);

  return (
    <code onClick={() => completeCourseWithId()}>{JSON.stringify(course)}</code>
  );
}
