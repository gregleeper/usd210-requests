import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import * as queries from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import { API } from "aws-amplify";
import Header from "../../../components/Header";
import RequestDisplay from "../../../components/RequestDisplay";
import Spinner from "../../../components/Spinner";
import SlideOver from "../../../components/SlideOverFilter";

export default function Request() {
  const queryClient = new QueryClient();
  const router = useRouter();
  const id = router.query.id;
  const [open, setOpen] = useState(false);

  const requestData = useQuery(
    ["request", id],
    async () => {
      const myData = await API.graphql({
        query: queries.getRequest,
        variables: { id },
      });
      return myData;
    },
    {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,

      refetchIntervalInBackground: false,
    }
  );

  const notes = [];

  function fillInNotes() {
    requestData?.data?.data?.getRequest?.notes?.items.map((note) =>
      notes.push(note)
    );
  }

  fillInNotes();

  const updateCompletionStatus = useMutation(
    async () => {
      if (requestData.data.data.getRequest.completed) {
        const updatedRequest = await API.graphql({
          query: mutations.updateRequest,
          variables: {
            input: {
              id,
              completed: false,
              _version: requestData.data.data.getRequest._version,
              dateCompleted: null,
            },
          },
        });
        return updatedRequest;
      } else {
        const updatedRequest = await API.graphql({
          query: mutations.updateRequest,
          variables: {
            input: {
              id,
              completed: true,
              _version: requestData.data.data.getRequest._version,
              dateCompleted: new Date(),
            },
          },
        });

        return updatedRequest;
      }
    },
    {
      onSuccess: (data, variables, context) => {
        requestData.refetch();
        queryClient.invalidateQueries("requests");
      },
    }
  );

  function handleCompletionChange() {
    updateCompletionStatus.mutate();
  }

  function handleOpenSlider() {
    setOpen(true);
  }

  function DataDisplay() {
    if (requestData.isLoading) {
      return <Spinner />;
    } else if (!requestData.isSuccess) {
      return <div>Error occured</div>;
    } else
      return (
        <>
          <SlideOver
            open={open}
            setOpen={setOpen}
            id={id}
            refetch={requestData.refetch}
          />
          <RequestDisplay
            request={requestData?.data?.data?.getRequest}
            handleCompletionChange={handleCompletionChange}
            handleOpenSlider={handleOpenSlider}
            notes={notes}
          />
        </>
      );
  }

  return (
    <>
      <Header name="Request" />
      <div className="mt-4">
        <DataDisplay />
        <ReactQueryDevtools />
      </div>
    </>
  );
}
