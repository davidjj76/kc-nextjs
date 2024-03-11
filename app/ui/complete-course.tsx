'use client';

import { completeCourse } from '@/app/lib/actions';

export default function CompleteCourse({ courseId }: { courseId: string }) {
  const completeCourseWithId = completeCourse.bind(null, courseId);

  return (
    <button
      type="reset"
      className="rounded-md px-3 py-2 text-sm font-semibold bg-secondary text-white hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      onClick={() => {
        completeCourseWithId();
      }}
    >
      Done
    </button>
  );
}
