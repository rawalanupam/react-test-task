import React, { useRef } from "react";

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
        <div className="px-4 flex flex-col items-center max-h-64 overflow-y-auto">
          {card.category && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Category:</span>{" "}
              {card.category}
            </p>
          )}
          {card.dexId && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Dex ID:</span>{" "}
              {card.dexId.join(", ")}
            </p>
          )}
          {card.effect && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Effect:</span>{" "}
              {card.effect}
            </p>
          )}
          {card.energyType && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Energy Type:</span>{" "}
              {card.energyType}
            </p>
          )}
          {card.evolveFrom && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Evolve From:</span>{" "}
              {card.evolveFrom}
            </p>
          )}
          {card.hp && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">HP:</span> {card.hp}
            </p>
          )}
          {card.id && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">ID:</span> {card.id}
            </p>
          )}
          {card.illustrator && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Illustrator:</span>{" "}
              {card.illustrator}
            </p>
          )}
          {card.level && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Level:</span> {card.level}
            </p>
          )}
          {card.localId && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Local ID:</span>{" "}
              {card.localId}
            </p>
          )}
          {card.rarity && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Rarity:</span>{" "}
              {card.rarity}
            </p>
          )}
          {card.regulationMark && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Regulation Mark:</span>{" "}
              {card.regulationMark}
            </p>
          )}
          {card.retreat && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Retreat:</span>{" "}
              {card.retreat}
            </p>
          )}
          {card.stage && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Stage:</span> {card.stage}
            </p>
          )}
          {card.suffix && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Suffix:</span>{" "}
              {card.suffix}
            </p>
          )}
          {card.trainerType && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Trainer Type:</span>{" "}
              {card.trainerType}
            </p>
          )}
          {card.types && (
            <p className="mb-2 w-full sm:w-1/2 flex">
              <span className="min-w-40 inline-block">Types:</span>{" "}
              {card.types.join(", ")}
            </p>
          )}
          {/* Add more properties as needed */}
        </div>
      </div>
    </div>
  );
};

export default CardModal;
