import { createCourse } from "@/lib/actions";

export default async function Page() {
  return (
    <form action={createCourse}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base leading-7 font-semibold text-gray-900">
            New course
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter the details about the new Keepcoding course.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm leading-6 font-medium text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <div className="focus-within:ring-secondary flex rounded-md shadow-xs ring-1 ring-gray-300 ring-inset focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="block flex-1 border-0 bg-transparent p-1.5 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="react"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm leading-6 font-medium text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="focus:ring-secondary block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-xs ring-1 ring-gray-300 outline-0 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a brief description about the course.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="reset"
          className="focus-visible:outline-secondary rounded-md px-3 py-2 text-sm font-semibold text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-primary focus-visible:outline-secondary rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Save
        </button>
      </div>
    </form>
  );
}
