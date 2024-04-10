import React from "react";

const CardDetail = ({ key, label, value }) => {
  return (
    <p className="mb-2 w-full sm:w-1/2 flex" key={key}>
      <span className="min-w-40 inline-block">{label}:</span> {value}
    </p>
  );
};

export default CardDetail;
