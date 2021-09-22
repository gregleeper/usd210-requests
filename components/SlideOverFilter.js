import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import TextArea from "../components/TextArea";
import useForm from "../lib/useForm";
import { useMutation } from "react-query";
import { API } from "aws-amplify";
import * as mutations from "../src/graphql/mutations";
import useAmplifyAuth from "../lib/useAmplifyAuth";

export default function SlideOverFilter({ open, setOpen, id, refetch }) {
  const { inputs, handleChange } = useForm({
    content: "",
  });

  const user = useAmplifyAuth();

  const addNote = useMutation(
    async () => {
      const newNote = await API.graphql({
        query: mutations.createNote,
        variables: {
          input: {
            content: inputs.content,
            requestID: id,
            createdBy: user.state.user.attributes.email,
          },
        },
      });
      return newNote;
    },
    {
      onSuccess: () => {
        refetch();
        setOpen(false);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  function handleSubmit(event) {
    event.preventDefault();
    addNote.mutate();
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-lg font-medium text-white">
                        New Note for Request
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 py-6 px-4 sm:px-6">
                    <form onSubmit={handleSubmit}>
                      <TextArea
                        handleChange={handleChange}
                        inputId="content"
                        inputName="content"
                        label="New Note"
                        inputValue={inputs.content}
                      />
                      <div className="flex justify-end ">
                        <button
                          type="submit"
                          className=" mt-2 md:ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Add Note
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
