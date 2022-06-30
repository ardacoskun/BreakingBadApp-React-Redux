import React from "react";

const Error = ({ message }) => {
  return (
    <div className="error">
      <h1>Error: {message}</h1>
    </div>
  );
};

export default Error;
