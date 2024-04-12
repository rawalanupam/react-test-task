import React from "react";

const NothingFound = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <svg
          className="w-16 h-16 text-gray-400 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h2 className="text-xl font-semibold text-gray-600 mt-4">Nothing Found</h2>
        <p className="text-gray-500 mt-2">Sorry, we couldn't find any results for your query.</p>
      </div>
    </div>
  );
};

export default NothingFound;
