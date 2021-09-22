import { CheckCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
export default function SuccessAlert({ id }) {
  return (
    <div className="rounded-md bg-indigo-100 p-4 absolute top-0 right-0 h-32 w-128">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-indigo-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-indigo-800">
            Request Submitted
          </h3>
          <div className="mt-2 text-sm text-indigo-700">
            <p>Your request was submitted successfully!</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                type="button"
                className="bg-indigo-50 px-2 py-1.5 rounded-md text-sm font-medium text-indigo-800 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-50 focus:ring-indigo-600"
              >
                <Link href={`/request/${id}`}>View Request</Link>
              </button>
              {/* <button
                type="button"
                className="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
              >
                Dismiss
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
