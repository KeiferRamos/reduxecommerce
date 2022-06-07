import React, { useEffect, useState } from "react";
import "../styles/Search.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import Product from "../components/Product";
import { SEARCH_ITEM } from "../Redux/actions";
import Msgbox from "../components/Msgbox";

function Search(state) {
  const { searchedItem, dispatch, message } = state;
  const nav = useNavigate();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch({ type: SEARCH_ITEM, payload: searchText.toLowerCase() });
  }, [searchText]);

  return (
    <div className="search">
      {message.type == "home" && (
        <Msgbox message={message.text} className={"modal-message"} />
      )}
      <div className="searchbar">
        <FaArrowLeft onClick={() => nav(-1)} />
        <input
          type="text"
          placeholder="e.g. earphone"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="products">
        {searchText ? (
          searchedItem.length > 0 ? (
            searchedItem.map((product, i) => <Product key={i} {...product} />)
          ) : (
            <p className="modal-text">
              we are sorry but we dont have item you search
            </p>
          )
        ) : (
          <p className="modal-text">searh item you want we got it</p>
        )}
      </div>
    </div>
  );
}

export default connect((state) => state)(Search);
