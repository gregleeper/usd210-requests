import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ClipboardListIcon,
  ClipboardCheckIcon,
  OfficeBuildingIcon,
  FolderIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import useAmplifyAuth from "../lib/useAmplifyAuth";
import Link from "next/link";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/solid";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  const navigation = [
    {
      name: "Dashboard",
      href: "/",
      icon: HomeIcon,
      current: !pathname.includes("request"),
    },
    {
      name: "Requests by Department",
      href: "/requests/department",
      icon: ClipboardListIcon,
      current: pathname.includes("department"),
    },
    {
      name: "Requests by Building",
      href: "/requests/building",
      icon: OfficeBuildingIcon,
      current: pathname.includes("building"),
    },
    {
      name: "All Requests",
      href: "/requests",
      icon: FolderIcon,
      current:
        pathname.includes("requests") &&
        !pathname.includes("building") &&
        !pathname.includes("department"),
    },
    // { name: "To Do", href: "#", icon: ClipboardCheckIcon, current: false },
  ];
  const amplifyUser = useAmplifyAuth();

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <Image
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                    width={128}
                    height={32}
                    layout="intrinsic"
                  />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                {amplifyUser.state.user ? (
                  <Link href="/account">
                    <a href="#" className="flex-shrink-0 w-full group block">
                      <div className="flex items-center">
                        <div>
                          {amplifyUser.state.user.attributes.picture ? (
                            <Image
                              className="inline-block rounded-full"
                              width={36}
                              height={36}
                              src={`${amplifyUser.state.user.attributes.picture}`}
                              alt=""
                            />
                          ) : (
                            <div className="bg-indigo-600 rounded-full h-9 w-9 flex items-center justify-center text-white">
                              {amplifyUser.state.user.attributes.name}
                            </div>
                          )}
                        </div>

                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                            {amplifyUser.state.user.attributes.name}
                          </p>
                          <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                            View profile
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                ) : (
                  <button
                    onClick={() => Auth.federatedSignIn({ provider: "Google" })}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <PlusIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Image
                  className="w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                  width={128}
                  height={32}
                  layout="intrinsic"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              {amplifyUser.state.user ? (
                <Link href="/account">
                  <a href="#" className="flex-shrink-0 w-full group block">
                    <div className="flex items-center">
                      <div>
                        {amplifyUser.state.user.attributes.picture ? (
                          <Image
                            className="inline-block rounded-full"
                            width={36}
                            height={36}
                            src={`${amplifyUser.state.user.attributes.picture}`}
                            alt=""
                          />
                        ) : (
                          <div className="bg-indigo-600 rounded-full h-9 w-9 flex items-center justify-center text-white">
                            {amplifyUser.state.user.attributes.name}
                          </div>
                        )}
                      </div>

                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {amplifyUser.state.user.attributes.name}
                        </p>
                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              ) : (
                <button
                  onClick={() => Auth.federatedSignIn({ provider: "Google" })}
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900"></h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
