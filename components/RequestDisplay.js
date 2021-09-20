import moment from "moment";
import Link from "next/link";
import { useMutation } from "react-query";
import * as mutations from "../src/graphql/mutations";

export default function RequestDisplay({
  request,
  handleCompletionChange,
  handleOpenSlider,
  notes,
}) {
  notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="flex px-4 py-5 sm:px-6 items-center justify-between">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Request Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details, notes, and status of the request.
            </p>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="col-end-3 col-span-1 text-right">
              <button
                type="button"
                onClick={handleOpenSlider}
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Note
              </button>
            </div>
            <div className="col-end-3 col-span-1 text-right">
              <button
                type="button"
                onClick={handleCompletionChange}
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {request.completed ? `Mark Not Completed` : `Mark Completed`}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Requested By
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {request.requestor}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Created At</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {moment(request.createdAt).format("h:mm a on M/DD/YY")}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Building</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {request.Building.name}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd
                className={`mt-1 text-sm font-semibold ${
                  request.completed ? "text-green-700" : "text-red-600"
                }`}
              >
                {request.completed
                  ? `Completed at ${moment(request.dateCompleted).format(
                      "h:mm a on M/DD/YY"
                    )}  ✅`
                  : "Open"}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Department</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {request.Department.name}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Summary</dt>
              <dd className="mt-1 text-sm text-gray-900">{request.summary}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Room</dt>
              <dd className="mt-1 text-sm text-gray-900">{request.room}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Urgency</dt>
              <dd className="mt-1 text-sm text-gray-900">{request.urgency}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {request.description}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Notes</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {notes.length ? (
                  <ul className="divide-y divide-gray-200">
                    {notes.map((note) => (
                      <li className="py-4" key={note.id}>
                        <div className="flex space-x-3">
                          <div className="flex-1 space-y-1">
                            <div className="flex items-start justify-between">
                              <p className="text-sm w-10/12 leading-tight">
                                {note.content}
                              </p>
                              <p className="text-sm text-gray-500">
                                {moment(note.createdAt).format(
                                  "h:mm a on M/DD/YY"
                                )}
                              </p>
                            </div>

                            <p className="text-sm text-gray-500 italic">
                              {note.createdBy}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  "No notes added to this request"
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      {/* <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-2">
        <div className="grid grid-cols-2 px-4 py-5 sm:px-6">
          <div className="col-span-1">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Response Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Responding remarks.
            </p>
          </div>
          <div className="col-end-3 col-span-1 text-right">
            <button
              type="button"
              onClick={}
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Updated at</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {moment(request.updatedAt).format("h:mm a on M/DD/YY")}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Date Completed
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {request.dateCompleted
                  ? moment(request.dateCompleted).format("h:mm a on M/DD/YY")
                  : "Not completed"}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Notes</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {request.notes.length ? (
                  <ul>
                    {request.notes.map((n) => (
                      <li key={n.id}>{n.content}</li>
                    ))}
                  </ul>
                ) : (
                  "No notes added"
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div> */}
    </>
  );
}
