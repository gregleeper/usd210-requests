export default function Example({
  departments,
  buildings,

  handleDepartmentFilterChange,
  handleBuildingFilterChange,

  buildingFilter,
  departmentFilter,
  handleFilterChange,
}) {
  console.log(toggleIsCompleted);
  return (
    <>
      <div className="mt-4">
        <fieldset>
          <legend className="text-lg font-medium text-gray-900">
            Buildings
          </legend>
          <div className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            {buildings.map((option, optionIdx) => (
              <div key={optionIdx} className="relative flex items-start py-3">
                <div className="min-w-0 flex-1 text-sm">
                  <label
                    htmlFor={`option-${option.id}`}
                    className="font-medium text-gray-700 select-none"
                  >
                    {option.name}
                  </label>
                </div>
                <div className="ml-3 flex items-center h-5">
                  <input
                    id={`building-${option.id}`}
                    name={`building-${option.id}`}
                    value={option.id}
                    defaultChecked={buildingFilter.includes(option.id)}
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    onChange={({ target }) =>
                      handleBuildingFilterChange(target.checked, target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="mt-4">
        <fieldset>
          <legend className="text-lg font-medium text-gray-900">
            Departments
          </legend>
          <div className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            {departments.map((option, optionIdx) => (
              <div key={optionIdx} className="relative flex items-start py-3">
                <div className="min-w-0 flex-1 text-sm">
                  <label
                    htmlFor={`option-${option.id}`}
                    className="font-medium text-gray-700 select-none"
                  >
                    {option.name}
                  </label>
                </div>
                <div className="ml-3 flex items-center h-5">
                  <input
                    id={`department-${option.id}`}
                    name={`department-${option.id}`}
                    value={option.id}
                    type="checkbox"
                    defaultChecked={departmentFilter.includes(option.id)}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    onChange={({ target }) =>
                      handleDepartmentFilterChange(target.checked, target.value)
                    }
                    on={option.id}
                  />
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
      <button onClick={handleFilterChange}>Submit</button>
    </>
  );
}
