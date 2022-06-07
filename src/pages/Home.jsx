import React, { useEffect } from "react";
import Product from "../components/Product.jsx";
import { selectionData } from "../data.js";
import { connect } from "react-redux";
import DropDown from "../components/dropdown.jsx";
import { FILTER } from "../Redux/actions";
import Msgbox from "../components/Msgbox.jsx";

function Home(state) {
  const { products, selection, message, dispatch } = state;
  useEffect(() => {
    dispatch({ type: FILTER });
  }, [selection]);

  return (
    <div className="home">
      {message.type == "home" && (
        <Msgbox message={message.text} className={"modal-message"} />
      )}
      <div className="filterer">
        {selectionData.map((item, i) => {
          return (
            <DropDown
              key={i}
              {...item}
              dispatch={dispatch}
              selection={selection}
            />
          );
        })}
      </div>
      <div className="products">
        {products.map((item, i) => (
          <Product key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export default connect((state) => state)(Home);
