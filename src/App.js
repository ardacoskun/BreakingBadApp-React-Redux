import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Detail, Quotes } from "./pages";
import "./App.css";
import { Navbar, QuotesDetail } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:characterId" element={<Detail />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:quoteId" element={<QuotesDetail />} />
      </Routes>
    </>
  );
};

export default App;
