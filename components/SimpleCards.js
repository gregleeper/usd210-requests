import { DotsVerticalIcon } from "@heroicons/react/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const bgColors = [
  "bg-pink-600",
  "bg-purple-600",
  "bg-yellow-500",
  "bg-blue-500",
  "bg-red-500",
];

export default function SimpleCards({ data, name, linkTo }) {
  return (
    <div className="mt-4">
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        {name}
      </h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {data.map((item, index) => (
          <li key={item.name} className="col-span-1 flex shadow-sm rounded-md">
            <div
              className={classNames(
                bgColors[index],
                "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
              )}
            >
              {item.name.match(/\b\w/g).join("")}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <Link
                  href={`/requests/${linkTo}/${item.id}`}
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  {item.name}
                </Link>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>
                  <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
