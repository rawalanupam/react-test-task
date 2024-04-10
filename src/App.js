import "./App.css";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Loader from "./components/Loader";
import CardModal from "./components/CardModal";
import Table from "./components/Table";
import { Filter } from "./components/Filters";
import { categoryFilters } from "./utils/constants";
import { GET_CARDS } from "./graphql/queries";

const CardTable = () => {
  const [order, setOrder] = useState("ASC");
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [category, setCategory] = useState("");

  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { loading, error, data } = useQuery(GET_CARDS, {
    variables: { order, page, itemsPerPage, category },
  });

  const handleSort = () => {
    setOrder(order === "ASC" ? "DESC" : "ASC");
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1) return; // Prevent going to negative page numbers
    setPage(newPage);
  };

  const handleCategoryFilter = (selectedCategory) => {
    setCategory(selectedCategory);
    setPage(1);
  };

  const handleModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="px-4 md:px-6 h-vh flex items-baseline">
      <div className="flex flex-col items-center w-full">
        <div className="my-4 ml-auto">
          <Filter
            filterLabel="Category"
            id="category"
            value={category}
            onChange={(e) => handleCategoryFilter(e.target.value)}
            options={categoryFilters}
          />
        </div>
        {loading && <Loader />}
        <Table
          data={data?.cards}
          handleSort={handleSort}
          handleModal={handleModal}
          page={page}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
        />
        {isModalOpen && (
          <CardModal isOpen={isModalOpen} onClose={closeModal} card={selectedCard} />
        )}
      </div>
    </div>
  );
};

export default CardTable;
