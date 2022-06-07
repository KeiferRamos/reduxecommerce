import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

function RoutesComp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default RoutesComp;
