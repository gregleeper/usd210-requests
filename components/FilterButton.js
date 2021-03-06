import { AdjustmentsIcon as AdjustmentsIconSolid } from "@heroicons/react/outline";

export default function FilterButton({ onClick }) {
  return (
    <div className="float-right">
      <button
        type="button"
        className="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onClick}
      >
        <AdjustmentsIconSolid className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
