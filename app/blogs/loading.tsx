export default function Loading() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <ul className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:my-8 lg:gap-8 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <li
            key={i}
            className="animate-pulse space-y-4 rounded-lg bg-gray-300 p-4"
          >
            <div className="h-48 bg-gray-700 rounded-md" />
            <div className="h-4 w-3/4 bg-gray-700 rounded-md" />
            <div className="h-4 w-1/2 bg-gray-700 rounded-md" />
            <div className="h-3 w-1/3 bg-gray-700 rounded-md" />
          </li>
        ))}
      </ul>
    </section>
  );
}
