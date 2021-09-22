import { useQuery } from "react-query";
import { API, withSSRContext } from "aws-amplify";
import { useState, useEffect } from "react";
import * as queries from "../../../src/graphql/queries";
import Header from "../../../components/Header";
import SimpleCards from "../../../components/SimpleCards";

export default function BuildingRequests() {
  const [buildings, setBuildings] = useState([]);

  const bldgs = useQuery(
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
      refetchIntervalInBackground: false,
    }
  );

  useEffect(() => {
    if (bldgs.isSuccess) {
      setBuildings(bldgs.data.data?.listBuildings.items);
    }
  }, [bldgs]);

  return (
    <>
      <Header name="Requests By Building" />
      <SimpleCards data={buildings} name="Buildings" linkTo="building" />
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();

    return {
      props: {
        authenticated: true,
        username: user.username,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
