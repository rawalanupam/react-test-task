import React from "react";
import Sort from "./Sort";
import { tableHeaders } from "../utils/constants";
import NothingFound from "./NothingFound";

const Table = ({
  data,
  handleSort,
  handleModal,
  page,
  itemsPerPage,
  handlePageChange,
  isModalOpen,
  selectedCard,
}) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white w-full">
        <div className="w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                {tableHeaders.map((header) => (
                  <th scope="col" className="px-6 py-3" key={header.key}>
                    <div className="flex items-center">
                      {header.label}
                      {header.key === "name" && <Sort handler={handleSort} />}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data && data.length === 0 ? (
                <tr>
                  <td colSpan={tableHeaders.length} className="text-center py-4">
                    <NothingFound />
                  </td>
                </tr>
              ) : (
                data?.map((card) => (
                  <tr
                    key={card.id}
                    className="bg-white text-gray-500 border-b h-auto"
                    onClick={() => handleModal(card)}
                    data-testid="modal-id"
                  >
                    {tableHeaders.map((header) => (
                      <td className="px-6 py-4" key={header.key}>
                        {card[header.key] ? (
                          header.key === "types" ? (
                            card.types.join(", ")
                          ) : header.key === "image" ? (
                            <img
                              src={`${card.image}/high.webp`}
                              alt={card.name}
                              className="w-12"
                            />
                          ) : (
                            card[header.key]
                          )
                        ) : (
                          "N/A"
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex mt-4 justify-center mb-4">
        <button
          className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-gray-200 shadow border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          data-testid="previous-page"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-gray-200 shadow border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          onClick={() => handlePageChange(page + 1)}
          data-testid="next-page"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Table;
