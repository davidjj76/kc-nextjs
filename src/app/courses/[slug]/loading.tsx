export default function Loading() {
  return (
    <div role="status" className="animate-pulse">
      <div className="mx-auto lg:mx-0">
        <div className="w-1/2 rounded-md bg-gray-200">
          <span className="invisible text-2xl font-bold tracking-tight sm:text-4xl">
            title
          </span>
        </div>
        <div>
          <div className="mt-2 rounded-md bg-gray-200">
            <p className="invisible text-lg leading-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis
              semper vulputate tempus condimentum torquent, porttitor magna
              viverra mattis curabitur etiam. Hendrerit nec ultricies litora
              molestie luctus leo himenaeos torquent, lacus ante conubia risus
              vivamus rhoncus rutrum, faucibus ut egestas phasellus interdum
              sagittis non.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
