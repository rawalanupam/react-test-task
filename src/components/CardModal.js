import React, { useRef } from "react";
import { cardDetails } from "../utils/constants";
import CardDetail from "./CardDetails";

const CardModal = ({ isOpen, onClose, card }) => {
  const modalRef = useRef(null);

  const handleClose = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (!isOpen || !card) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-gray-900 bg-opacity-50"
        onClick={handleClose}
      ></div>
      <div
        className="h-full sm:h-[95%] bg-white py-6 sm:rounded-lg max-w-xl w-full sm:mx-4 sm:my-16 relative"
        ref={modalRef}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800"
          data-testid="close-button-id"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        </button>
        <div className="flex justify-center">
          {card.image && (
            <img
              src={`${card.image}/high.webp`}
              alt={card.name}
              className="w-40 md:w-52"
            />
          )}
        </div>
        <h2 className="text-xl font-semibold my-4 text-center">{card.name}</h2>
        <div className="px-4 flex flex-col items-center max-h-52 overflow-y-auto">
          {cardDetails.map((detail) => {
            const { label, key, join } = detail;
            const value = join ? (card[key] || []).join(", ") : card[key];
            return (
              value && <CardDetail key={label} label={label} value={value} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardModal;
