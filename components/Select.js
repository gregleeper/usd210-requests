import { useState } from "react";

export default function TextInput({
  label,
  selectName,
  selectId,
  data,
  value,
  handleChange,
}) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 py-3">
      <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <select
            onChange={handleChange}
            type="select"
            name={selectName}
            id={selectId}
            value={value}
            className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
          >
            {data && data.length ? (
              data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))
            ) : (
              <option value=""></option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}
