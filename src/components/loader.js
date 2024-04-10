import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div role="status">
        <img
          src="/assets/images/loader.svg"
          alt="Loading..."
          className="inline-block w-8 h-8 text-gray-500 animate-spin dark:text-gray-600"
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
