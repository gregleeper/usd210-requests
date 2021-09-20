import Header from "../../../../components/Header";
import { useQuery } from "react-query";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as queries from "../../../../src/graphql/customQueries";
import { API } from "aws-amplify";
import RequestsTable from "../../../../components/RequestsTable";
import Spinner from "../../../../components/Spinner";
import useForm from "../../../../lib/useForm";
import Search from "../../../../components/Search";

export default function DepartmentRequests() {
  const router = useRouter();
  const departmentId = router.query.id;
  const [department, setDepartment] = useState("");
  const [page, setPage] = useState(0);
  const { inputs, handleChange } = useForm({
    searchTerm: "",
  });

  const requestData = useQuery(
    ["requests", departmentId],
    async () => {
      if (page === 0) {
        const myData = await API.graphql({
          query: queries.getDeparmentAndRequests,
          variables: {
            departmentID: departmentId,
            limit: 100,
            filter: {
              completed: {
                eq: true,
              },
            },
          },
        });
        return myData;
      } else {
        const myData = await API.graphql({
          query: queries.getDeparmentAndRequests,
          variables: {
            departmentID: departmentId,
            limit: 100,
            filter: {
              completed: {
                eq: true,
              },
            },
            nextToken: requestData.data.data.requestsByDepartment.nextToken,
          },
        });
        return myData;
      }
    },
    {
      refetchInterval: 1000 * 60 * 3,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchIntervalInBackground: true,
    }
  );

  const filteredRequests =
    requestData.data?.data?.requestsByDepartment.items.filter(
      (i) =>
        i.requestor.toLowerCase().includes(inputs.searchTerm.toLowerCase()) ||
        i.Building.name
          .toLowerCase()
          .includes(inputs.searchTerm.toLowerCase()) ||
        i.summary.toLowerCase().includes(inputs.searchTerm.toLowerCase())
    );

  useEffect(() => {
    if (requestData.isSuccess) {
      setDepartment(requestData.data.data.getDepartment?.name);
    }
  }, [requestData]);

  function DataDisplay() {
    if (!requestData.data?.data?.requestsByDepartment.items.length < 1) {
      return (
        <RequestsTable
          requests={filteredRequests}
          isFetching={requestData.isFetching}
          page={page}
          setPage={setPage}
          nextToken={requestData.data.data.requestsByDepartment.nextToken}
        />
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
              {`The ${department} department does not have any requests.`}
            </p>
          </div>
        </div>
      );
  }

  return (
    <>
      <Header name={`Closed Requests For ${department}`} />
      <div className="flex">
        <div className="grid grid-cols-3 grid-rows-1 w-48 justi place-items-center  py-2">
          <label
            htmlFor="username"
            className="block md:text-sm font-medium text-gray-700  sm:pt-2 place-self-center"
          >
            Status:
          </label>
          {/* <Link href={`/requests/building/${departmentId}/closed`} className="">
            <a className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Closed
            </a>
          </Link> */}
          <Link href={`/requests/department/${departmentId}/open`}>
            <a className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Open
            </a>
          </Link>
        </div>
        <Search value={inputs.searchTerm} onChange={handleChange} />
      </div>
      <div className="mt-4">
        <DataDisplay />
      </div>
    </>
  );
}
