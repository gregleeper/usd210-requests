import Header from "../../../../components/Header";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as queries from "../../../../src/graphql/customQueries";
import { API } from "aws-amplify";
import RequestsTable from "../../../../components/RequestsTable";
import Spinner from "../../../../components/Spinner";
import useForm from "../../../../lib/useForm";
import Search from "../../../../components/Search";

export default function DepartmentRequests() {
  const router = useRouter();
  const buildingId = router.query.id;
  const [building, setBuilding] = useState("");
  const [page, setPage] = useState(0);
  const { inputs, handleChange } = useForm({
    searchTerm: "",
  });

  const requestData = useQuery(
    ["requests", buildingId],
    async () => {
      if (page === 0) {
        const myData = await API.graphql({
          query: queries.getBuildingAndRequests,
          variables: {
            buildingID: buildingId,
            limit: 100,
          },
        });
        return myData;
      } else {
        const myData = await API.graphql({
          query: queries.getBuildingAndRequests,
          variables: {
            buildingID: buildingId,
            limit: 100,
            nextToken: requestData.data.data.requestsByBuilding.nextToken,
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

  useEffect(() => {
    if (requestData.isSuccess) {
      setBuilding(requestData.data.data.getBuilding?.name);
    }
  }, [requestData]);

  const filteredRequests =
    requestData.data?.data?.requestsByBuilding.items.filter(
      (i) =>
        i.requestor.toLowerCase().includes(inputs.searchTerm.toLowerCase()) ||
        i.Department.name
          .toLowerCase()
          .includes(inputs.searchTerm.toLowerCase()) ||
        i.summary.toLowerCase().includes(inputs.searchTerm.toLowerCase())
    );

  function DataDisplay() {
    if (!requestData.data?.data?.requestsByBuilding.items.length < 1) {
      return (
        <RequestsTable
          requests={filteredRequests}
          isFetching={requestData.isFetching}
          page={page}
          setPage={setPage}
          nextToken={requestData.data.data.requestsByBuilding.nextToken}
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
              {`The ${building} building does not have any requests.`}
            </p>
          </div>
        </div>
      );
  }

  return (
    <>
      <Header name={`Requests For ${building}`} />
      <div className="flex">
        <div className="grid grid-cols-3 grid-rows-1 w-48 justi place-items-center  py-2">
          <label
            htmlFor="username"
            className="block md:text-sm font-medium text-gray-700  sm:pt-2 place-self-center"
          >
            Status:
          </label>
          <Link href={`/requests/building/${buildingId}/closed`} className="">
            <a className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Closed
            </a>
          </Link>
          <Link href={`/requests/building/${buildingId}/open`}>
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
