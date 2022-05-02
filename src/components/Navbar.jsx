import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import "../styles/Navbar.css";
import { links } from "../data";

function Navbar() {
  const nav = useNavigate();
  const path = window.location.pathname;

  return (
    <div className="navbar">
      <div className="searchbar" onClick={() => nav("/search")}>
        <input type="text" placeholder="search here..." readOnly />
        <FaSearch />
      </div>
      {links.map((navlink, i) => (
        <div
          key={i}
          onClick={() => nav(navlink.link)}
          style={{ color: `${path == navlink.link ? "#fff" : "#000"}` }}
        >
          {navlink.logo}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
