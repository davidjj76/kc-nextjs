"use client";

import { completeCourse } from "@/lib/actions";

export default function CompleteCourse({ courseId }: { courseId: string }) {
  const completeCourseWithId = completeCourse.bind(null, courseId);

  return (
    <button
      type="reset"
      className="rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      onClick={() => {
        completeCourseWithId();
      }}
    >
      Done
    </button>
  );
}
