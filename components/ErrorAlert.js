import { CheckCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
export default function ErrorAlert() {
  return (
    <div className="rounded-md bg-red-100 p-4 absolute top-0 right-0 h-32 w-128">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-red-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            Error on Submission
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p>Your request had an error!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
