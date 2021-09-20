import { useQuery } from "react-query";
import { API } from "aws-amplify";
import { useState, useEffect } from "react";
import * as queries from "../../../src/graphql/queries";
import Header from "../../../components/Header";
import SimpleCards from "../../../components/SimpleCards";

export default function DepartmentRequests() {
  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState();
  const depts = useQuery(
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
      refetchIntervalInBackground: false,
    }
  );

  useEffect(() => {
    if (depts.isSuccess) {
      setDepartments(depts.data.data?.listDepartments.items);
    }
  }, [depts]);

  return (
    <>
      <Header name="Requests By Department" />
      <SimpleCards data={departments} name="Departments" linkTo="department" />
    </>
  );
}
