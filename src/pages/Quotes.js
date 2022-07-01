import React from "react";
import { useSelector } from "react-redux";

const Quotes = () => {
  const data = useSelector((state) => state.quotes.items);

  return <div>Quotes</div>;
};

export default Quotes;
