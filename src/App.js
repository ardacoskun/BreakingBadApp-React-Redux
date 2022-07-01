import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import "./App.css";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:char_id" element={<Detail />} />
    </Routes>
  );
};

export default App;
