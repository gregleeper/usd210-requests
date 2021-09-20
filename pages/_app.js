import "tailwindcss/tailwind.css";

import Amplify from "aws-amplify";
import config from "../src/aws-exports";
import Sidebar from "../components/Sidebar";
import { QueryClientProvider, QueryClient } from "react-query";
import "../styles/globals.css";
Amplify.configure({
  ...config,
  ssr: true,
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
