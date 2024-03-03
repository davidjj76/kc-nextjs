'use server';

import { z } from 'zod';
import * as courseDB from '@/app/lib/database';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const CreateCourseSchema = z.object({
  title: z.string().min(3).max(30),
  description: z.string().min(3).max(100),
});

export async function createCourse(formData: FormData) {
  const course = CreateCourseSchema.parse(
    Object.fromEntries(formData.entries()),
  );

  await courseDB.createCourse(course);

  revalidatePath('/courses');
  redirect('/courses');
}

export async function completeCourse(id: string) {
  await courseDB.updateCourse(id, { done: true });

  revalidatePath('/courses');
  redirect('/courses');
}

export async function deleteCourse(id: string) {
  await courseDB.deleteCourse(id);

  revalidatePath('/courses');
  redirect('/courses');
}
