import Header from "../../../components/Header";
import { API } from "aws-amplify";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import * as queries from "../../../src/graphql/queries";
import Spinner from "../../../components/Spinner";
import RequestsTable from "../../../components/RequestsTable";
import Search from "../../../components/Search";
import useForm from "../../../lib/useForm";

export default function Requests() {
  const [departments, setDepartments] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [requests, setRequests] = useState([]);
  const [page, setPage] = useState(0);
  const buildingsData = useQuery("buildings", async () => {
    const myData = await API.graphql({ query: queries.listBuildings });
    return myData;
  });

  const requestData = useQuery(
    ["requestsPaginated", page],
    async () => {
      if (page === 0) {
        const myData = API.graphql({
          query: queries.requestsByUrgency,
          variables: {
            baseType: "Request",
            limit: 100,
            filter: { completed: { eq: false } },
          },
        });

        return myData;
      } else {
        const myData = API.graphql({
          query: queries.requestsByUrgency,
          variables: {
            baseType: "Request",
            limit: 100,
            filter: { completed: { eq: false } },
            nextToken: requestData.data.data.requestsByUrgency.nextToken,
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

  const { inputs, handleChange } = useForm({
    searchTerm: "",
  });

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
      refetchInterval: 1000 * 60 * 3,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchIntervalInBackground: true,
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
        <RequestsTable
          requests={filteredRequests}
          isFetching={requestData.isFetching}
          page={page}
          setPage={setPage}
          nextToken={requestData.data.data.requestsByUrgency.nextToken}
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
              {`The are no requests at the moment.`}
            </p>
          </div>
        </div>
      );
  }

  return (
    <>
      <Header name="All Open Requests" />
      <div className="">
        <Search value={inputs.searchTerm} onChange={handleChange} />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 my-2">
          <DataDisplay />
        </div>
      </div>
    </>
  );
}
