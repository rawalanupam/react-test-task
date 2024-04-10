import React from 'react';

const ErrorComponent = () => {
  const onRefresh=()=> window.location.reload();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <h2 className="text-2xl mb-4">Something went wrong... 😞</h2>
        <p className="mb-4">Please refresh the page or try again later.</p>
        <button onClick={onRefresh} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Refresh
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;
