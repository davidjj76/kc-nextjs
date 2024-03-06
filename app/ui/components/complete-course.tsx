'use client';

import { completeCourse } from '@/app/lib/actions';
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
