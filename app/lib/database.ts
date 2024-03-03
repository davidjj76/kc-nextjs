import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const generateSlug = (title: string) => title.toLowerCase().replace(/ /g, '-');

export function getCourses() {
  return prisma.course.findMany({
    select: { id: true, title: true, slug: true, done: true },
  });
}

export function getCourseBySlug(slug: string) {
  return prisma.course.findFirstOrThrow({ where: { slug } });
}

export function createCourse(course: Omit<Prisma.CourseCreateInput, 'slug'>) {
  const slug = generateSlug(course.title);
  return prisma.course.create({ data: { ...course, slug } });
}

export function updateCourse(
  id: string,
  course: Omit<Prisma.CourseUpdateInput, 'slug'>,
) {
  const update: Prisma.CourseUpdateInput = { ...course };
  if (typeof course.title === 'string' && course.title) {
    update.slug = generateSlug(course.title);
  }
  return prisma.course.update({ where: { id }, data: update });
}

export function deleteCourse(id: string) {
  return prisma.course.delete({ where: { id } });
}
