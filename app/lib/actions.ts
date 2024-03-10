'use server';

import { z } from 'zod';
import * as db from '@/app/lib/database';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const generateSlug = (title: string) => title.toLowerCase().replace(/ /g, '-');

const CreateCourseSchema = z.object({
  title: z.string().min(3).max(30),
  description: z.string().min(3),
});

export async function createCourse(formData: FormData) {
  let parsedFormData: z.infer<typeof CreateCourseSchema>;

  try {
    parsedFormData = CreateCourseSchema.parse(
      Object.fromEntries(formData.entries()),
    );
  } catch (error) {
    throw new Error('Invalid course data');
  }

  try {
    const slug = generateSlug(parsedFormData.title);
    const course = { ...parsedFormData, slug };
    await db.createCourse(course);
  } catch (error) {
    throw new Error('Course with this title already exists');
  }

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
