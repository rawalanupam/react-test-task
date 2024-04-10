import React from "react";

const Sort = ({handler}) => {
  return <img src="/assets/images/sorticon.svg" data-testid="sort-name" alt="sort" className="w-3 cursor-pointer" onClick={handler} />;
};

export default Sort;
