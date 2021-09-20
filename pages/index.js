import Header from "../components/Header";
import useAmplifyAuth from "../lib/useAmplifyAuth";
import { Auth } from "aws-amplify";
import { PlusIcon } from "@heroicons/react/solid";

export default function Home() {
  const amplifyUser = useAmplifyAuth();
  return (
    <>
      <Header name="Dashboard" />
      {!amplifyUser.state.user && (
        <div className="flex h-screen justify-center items-center max-w-7xl -mt-16  sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              Not Signed In
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Use the button below to sign in using Google.
            </p>
            <div className="mt-6">
              <button
                onClick={() => Auth.federatedSignIn({ provider: "Google" })}
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
