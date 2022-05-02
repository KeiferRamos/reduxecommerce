import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

function RoutesComp() {
  return (
    <Routes>
      <Route path="/reduxecommerce/" element={<Home />} />
      <Route path="/reduxecommerce/cart" element={<Cart />} />
      <Route path="/reduxecommerce/search" element={<Search />} />
    </Routes>
  );
}

export default RoutesComp;
