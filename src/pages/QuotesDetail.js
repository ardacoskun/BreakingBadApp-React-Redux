import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const QuotesDetail = () => {
  const { quoteId } = useParams();

  const quote = useSelector((state) =>
    state.quotes.items.find((item) => item.quote_id === Number(quoteId))
  );

  if (!quote) {
    return <Navigate to="/" />;
  }

  return (
    <div className="quoteDetail">
      <h1>Quote Detail </h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
};

export default QuotesDetail;
