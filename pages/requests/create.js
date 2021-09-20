import { API } from "aws-amplify";
import * as queries from "../../src/graphql/queries";
import * as mutations from "../../src/graphql/mutations";
import { useQuery, useMutation } from "react-query";
import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import useForm from "../../lib/useForm";
import useAmplifyAuth from "../../lib/useAmplifyAuth";

export default function CreateRequest() {
  const amplifyUser = useAmplifyAuth();
  const [buildings, setBuildings] = useState([]);
  const [departments, setDepartments] = useState([]);
  const urgency = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
  ];

  const buildingsData = useQuery(
    "buildings",
    async () => {
      const myData = await API.graphql({
        query: queries.listBuildings,
      });
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

  const deptsData = useQuery(
    "departments",
    async () => {
      const myData = await API.graphql({
        query: queries.listDepartments,
      });
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

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    summary: "",
    buildingID: buildings.length ? buildings[0].id : "",
    departmentID: departments.length ? departments[0].id : "",
    description: "",
    completed: false,
    urgency: urgency[0].id,
    baseType: "Request",
    room: "",
    requestor: amplifyUser.state.user
      ? amplifyUser.state.user.attributes.email
      : "",
  });

  const newRequest = useMutation(
    async (newRequest) => {
      const myData = await API.graphql({
        query: mutations.createRequest,
        variables: { input: newRequest },
      });
      return myData;
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
    },
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );

  useEffect(() => {
    if (buildingsData.isSuccess) {
      setBuildings(buildingsData.data.data.listBuildings.items);
    }
  }, [buildingsData]);

  useEffect(() => {
    if (deptsData.isSuccess) {
      setDepartments(deptsData.data.data.listDepartments.items);
    }
  }, [deptsData]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await newRequest.mutate(inputs);
      resetForm();
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  }

  return (
    <form
      className="space-y-8 divide-y divide-gray-200"
      onSubmit={handleSubmit}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Create a New Request
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Be as descriptive as possible in your request.
            </p>
          </div>
        </div>
      </div>
      <TextInput
        label="Summary"
        inputAutoComplete="summary"
        inputName="summary"
        inputId="summamry"
        handleChange={handleChange}
        inputValue={inputs.summary}
      />

      <Select
        selectId="buildingID"
        selectName="buildingID"
        data={buildings}
        label="Building"
        value={inputs.building}
        handleChange={handleChange}
      />
      <Select
        selectId="departmentID"
        selectName="departmentID"
        data={departments}
        label="Department"
        value={inputs.department}
        handleChange={handleChange}
      />
      <TextArea
        label="Description of Request"
        inputAutoComplete="description"
        inputName="description"
        inputId="description"
        handleChange={handleChange}
        inputValue={inputs.description}
      />
      <Select
        selectId="urgency"
        selectName="urgency"
        data={urgency}
        label="Urgency"
        value={inputs.urgency}
        handleChange={handleChange}
      />
      <TextInput
        label="Room/Location"
        inputAutoComplete="room"
        inputName="room"
        inputId="room"
        handleChange={handleChange}
        inputValue={inputs.room}
      />
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
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
  );
}
