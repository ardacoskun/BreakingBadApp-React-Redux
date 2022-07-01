import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Error, Loading, QuoteItem } from "../components";
import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../store/quotesSlice";

const Quotes = () => {
  const dispatch = useDispatch();
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      {status !== "loading" && <h1 className="title">Quotes</h1>}
      {status === "loading" && <Loading />}
      {status === "succeeded" &&
        data.map((item, index) => <QuoteItem key={index} item={item} />)}
      {status === "succeeded" && (
        <div className="quotesInfo">{data.length} quotes</div>
      )}
    </div>
  );
};

export default Quotes;
