import Link from "next/link";
import useAmplifyAuth from "../lib/useAmplifyAuth";

export default function Header({ name }) {
  const amplifyUser = useAmplifyAuth();
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {name}
        </h2>
      </div>
      {amplifyUser.state.user && (
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Link href="/requests/create">Create Request</Link>
          </button>
        </div>
      )}
    </div>
  );
}
