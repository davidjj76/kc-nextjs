import { Fragment } from 'react';
import { createCourse } from '@/app/lib/actions';

export default async function Page() {
  return (
    <Fragment>
      <p>Create new course</p>
      <form action={createCourse}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" />
        <button type="submit">Create</button>
      </form>
    </Fragment>
  );
}
