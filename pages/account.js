import useAmplifyAuth from "../lib/useAmplifyAuth";
import Image from "next/image";
import Header from "../components/Header";
import { Auth } from "aws-amplify";
import Spinner from "../components/Spinner";

export default function Account() {
  const amplifyUser = useAmplifyAuth();

  return (
    <div>
      <Header name="Profile" />
      {amplifyUser.state.isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg my-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Information
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {amplifyUser.state.user.attributes.name}
                </dd>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {amplifyUser.state.user.attributes.email}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Username</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {amplifyUser.state.user.username}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Action</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <button
                    onClick={() =>
                      Auth.signOut()
                        .then((data) => console.log(data))
                        .catch((err) => console.log(err))
                    }
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign Out
                  </button>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
