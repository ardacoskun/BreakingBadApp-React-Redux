import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { quotesSelector } from "../store/quotesSlice";

const QuotesDetail = () => {
  const { quoteId } = useParams();

  const items = useSelector(quotesSelector);

  const quote = items.find((item) => item.quote_id === Number(quoteId));

  return (
    <div className="quoteDetail">
      <h1>Quote Detail </h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
};

export default QuotesDetail;
