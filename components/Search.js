export default function Search({ value, onChange }) {
  return (
    <div className="flex justify-start items-center space-x-2 md:mx-4  py-2 ">
      <label
        htmlFor="username"
        className="block md:text-sm font-medium text-gray-700  sm:pt-2 "
      >
        Search:
      </label>

      <div className="mt-1 sm:mt-0">
        <input
          type="text"
          name={"searchTerm"}
          value={value}
          onChange={onChange}
          className="max-w-lg block w-full place-self-center shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}
