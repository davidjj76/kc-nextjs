"use client";

import { completeCourse } from "@/lib/actions";

export default function CompleteCourse({ courseId }: { courseId: string }) {
  const completeCourseWithId = completeCourse.bind(null, courseId);

  return (
    <button
      type="reset"
      className="bg-secondary focus-visible:outline-secondary rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      onClick={() => {
        completeCourseWithId();
      }}
    >
      Done
    </button>
  );
}
