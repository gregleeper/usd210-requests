import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { API } from "aws-amplify";
import * as queries from "../../../src/graphql/customQueries";
import * as mutations from "../../../src/graphql/mutations";
import { useState, useEffect } from "react";
import moment from "moment";
import Header from "../../../components/Header";
import useForm from "../../../lib/useForm";
import TextArea from "../../../components/TextArea";
import Toggle from "../../../components/Toggle";
import BadgeCompleted from "../../../components/BadgeCompleted";
import BadgeNotCompleted from "../../../components/BadgeNotCompleted";
import Link from "next/link";

export default function Response() {
  const router = useRouter();

  const queryClient = useQueryClient();

  const id = router.query.id;

  const [request, setRequest] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const requestData = useQuery(
    ["request", id],
    async () => {
      const myData = await API.graphql({
        query: queries.getRequest,
        variables: { id },
      });
      setIsCompleted(myData.data.getRequest.completed);
      return myData;
    },
    {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 900000, // 15 minutes
      refetchIntervalInBackground: false,
    }
  );

  const { inputs, handleChange, clearForm, resetForm } = useForm(
    request || {
      note: "",
      id,
    }
  );

  const updateRequest = useMutation(
    async (inputs) => {
      if (isCompleted) {
        const myData = await API.graphql({
          query: mutations.updateRequest,
          variables: {
            input: {
              id: inputs.id,
              notes: inputs.notes,
              completed: isCompleted,
              dateCompleted: new Date(),
              _version: inputs._version,
            },
          },
        });
        return myData;
      } else {
        const myData = await API.graphql({
          query: mutations.updateRequest,
          variables: {
            input: {
              id: inputs.id,
              notes: inputs.notes,
              completed: isCompleted,
              _version: request._version,
              dateCompleted: null,
            },
          },
        });
        return myData;
      }
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(["request", id], data);
        setRequest(data.data.updateRequest);
        console.log(request);
      },
    },
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );

  function handleCompletionChange() {}

  useEffect(() => {
    if (requestData.isSuccess) {
      if (requestData.data.data.getRequest) {
        setRequest(requestData.data.data.getRequest);
      } else if (requestData.data.data.updateRequest) {
        setRequest(requestData.data.data.updateRequest);
      }
    }
  }, [requestData]);

  function toggleIsCompleted() {
    setIsCompleted(!isCompleted);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await updateRequest.mutate(inputs);
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  }

  function DataDisplay() {
    if (requestData.isSuccess && request?.Building) {
      return (
        <>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Request Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Details, notes, and status of the request.
              </p>
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
                  <dt className="text-sm font-medium text-gray-500">
                    Created At
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {moment(request.createdAt).format("h:mm a on M/DD/YY")}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Building
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {request.Building.name}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className={`mt-1 text-sm `}>
                    {request.completed ? (
                      <BadgeCompleted>Completed</BadgeCompleted>
                    ) : (
                      <BadgeNotCompleted>Open</BadgeNotCompleted>
                    )}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Department
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {request.Department.name}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Summary</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {request.summary}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Room</dt>
                  <dd className="mt-1 text-sm text-gray-900">{request.room}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Urgency</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {request.urgency}
                  </dd>
                </div>
                {request.dateCompleted && (
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Date Completed
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {moment(request.dateCompleted).format(
                        "h:mm a on M/DD/YY"
                      )}
                    </dd>
                  </div>
                )}
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {request.description}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </>
      );
    } else return null;
  }

  return (
    <>
      <Header name="Response to Request" />
      <div className="mt-4">
        <DataDisplay />
        <div className="mt-4">
          <form
            className="space-y-8 divide-y divide-gray-200"
            onSubmit={handleSubmit}
          >
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Respond to Request
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Be as descriptive as possible in your response.
                  </p>
                </div>
              </div>
            </div>
            <TextArea
              inputName="notes"
              inputId="notes"
              handleChange={handleChange}
              inputValue={inputs.notes}
              inputAutoComplete="notes"
              label="Notes"
            />
            <Toggle
              label="Completed"
              onAction={toggleIsCompleted}
              isCompleted={isCompleted}
            />
            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={router.back}
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
