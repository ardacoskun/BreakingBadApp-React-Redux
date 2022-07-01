import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import "./App.css";
import Detail from "./pages/Detail";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:characterId" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
