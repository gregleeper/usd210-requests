import Header from "../../components/Header";
import { API } from "aws-amplify";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { useState, useEffect } from "react";
import * as queries from "../../src/graphql/queries";
import Spinner from "../../components/Spinner";
import RequestsTable from "../../components/RequestsTable";
import Link from "next/link";
import useForm from "../../lib/useForm";
import Search from "../../components/Search";

export default function Requests() {
  const [departments, setDepartments] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [requests, setRequests] = useState([]);
  const [page, setPage] = useState(0);

  const buildingsData = useQuery(
    "buildings",
    async () => {
      const myData = await API.graphql({ query: queries.listBuildings });
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

  const { inputs, clearForm, handleChange, resetForm } = useForm({
    searchTerm: "",
  });

  const requestData = useQuery(
    ["requestsPaginated", page],
    async () => {
      if (page === 0) {
        const myData = API.graphql({
          query: queries.requestsByUrgency,
          variables: { baseType: "Request", limit: 100 },
        });

        return myData;
      } else {
        const myData = API.graphql({
          query: queries.requestsByUrgency,
          variables: {
            baseType: "Request",
            limit: 100,
            nextToken: requestData.data.data.requestsByUrgency.nextToken,
          },
        });

        return myData;
      }
    },
    {
      refetchInterval: 1000 * 60 * 3,
      keepPreviousData: true,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    }
  );

  useEffect(() => {
    if (requestData.isSuccess) {
      setRequests(requestData.data.data.requestsByUrgency.items);
    }
  }, [requestData]);

  const filteredRequests = requests.filter(
    (i) =>
      i.requestor.toLowerCase().includes(inputs.searchTerm.toLowerCase()) ||
      i.Building.name.toLowerCase().includes(inputs.searchTerm.toLowerCase()) ||
      i.summary.toLowerCase().includes(inputs.searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (buildingsData.isSuccess) {
      setBuildings(buildingsData.data.data.listBuildings.items);
    }
  }, [buildingsData]);

  const departmentsData = useQuery(
    "departments",
    async () => {
      const myData = await API.graphql({ query: queries.listDepartments });
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

  useEffect(() => {
    if (departmentsData.isSuccess) {
      setDepartments(departmentsData.data.data.listDepartments.items);
    }
  }, [departmentsData]);

  function DataDisplay() {
    if (!requestData.data?.data?.requestsByUrgency.items.length < 1) {
      return (
        <div>
          <RequestsTable
            requests={filteredRequests}
            isFetching={requestData.isFetching}
            page={page}
            setPage={setPage}
            nextToken={requestData.data.data.requestsByUrgency.nextToken}
          />
        </div>
      );
    } else if (requestData.isLoading) {
      return <Spinner />;
    } else
      return (
        <div className="flex h-screen justify-center items-center max-w-7xl -mt-16  sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No Requests
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {`The are no requests at the moment.`}
            </p>
          </div>
        </div>
      );
  }

  return (
    <>
      <Header name="All Requests" />
      <div className="md:flex">
        <div className="grid grid-cols-3 grid-rows-1 w-48 justi place-items-center  py-2">
          <label
            htmlFor="username"
            className="block md:text-sm font-medium text-gray-700  sm:pt-2 place-self-center"
          >
            Status:
          </label>
          <Link href={`/requests/status/closed`} className="">
            <a className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Closed
            </a>
          </Link>
          <Link href={`/requests/status/open`}>
            <a className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Open
            </a>
          </Link>
        </div>
        <Search value={inputs.searchTerm} onChange={handleChange} />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 my-2">
          <DataDisplay />
        </div>
      </div>
      <ReactQueryDevtools />
    </>
  );
}
