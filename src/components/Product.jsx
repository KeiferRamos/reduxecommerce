import React from "react";
import "../styles/product.css";
import { connect } from "react-redux";
import { ADD_ITEM } from "../Redux/ActionType";

function Product({ img, name, price, addItem }) {
  return (
    <div className="product">
      <img src={img} alt="product image" />
      <div className="info">
        <p className="name">{name}</p>
        <p className="price">${price}</p>
        <button className="add-btn" onClick={() => addItem()}>
          add to cart
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch, item) => {
  const { name } = item;
  return { addItem: () => dispatch({ type: ADD_ITEM, payload: name }) };
};

export default connect(null, mapDispatchToProps)(Product);
