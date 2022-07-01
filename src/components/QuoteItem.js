import React from "react";
import { Link } from "react-router-dom";

const QuoteItem = ({ item }) => {
  return (
    <div className="quotesContainer">
      <Link to={`/quotes/${item.quote_id}`}>
        {" "}
        <q>{item.quote}</q>
      </Link>{" "}
      <strong>{item.author}</strong>
    </div>
  );
};

export default QuoteItem;
