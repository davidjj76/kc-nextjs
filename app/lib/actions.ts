'use server';

import { z } from 'zod';
import * as db from '@/app/lib/database';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const generateSlug = (title: string) => title.toLowerCase().replace(/ /g, '-');

const CreateCourseSchema = z.object({
  title: z.string().min(3).max(30),
  description: z.string().min(3).max(100),
});

export async function createCourse(formData: FormData) {
  const parsedFormData = CreateCourseSchema.parse(
    Object.fromEntries(formData.entries()),
  );

  const slug = generateSlug(parsedFormData.title);
  const course = { ...parsedFormData, slug };
  await db.createCourse(course);

  revalidatePath('/courses');
  redirect('/courses');
}

export async function completeCourse(id: string) {
  await db.updateCourse(id, { done: true });

  revalidatePath('/courses');
  redirect('/courses');
}

export async function deleteCourse(id: string) {
  await db.deleteCourse(id);

  revalidatePath('/courses');
  redirect('/courses');
}
