import React from "react";

const QuoteItem = ({ item, index }) => {
  return (
    <div key={index} className="quotesContainer">
      <q>{item.quote}</q> <strong>{item.author}</strong>
    </div>
  );
};

export default QuoteItem;
