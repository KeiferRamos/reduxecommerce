import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { REMOVE_ITEM, UPDATE_COUNT } from "../Redux/actions";
import "../styles/cart-item.css";

function CartItem({ id, item, quantity, dispatch }) {
  const { name, price, img, brand } = item;

  const incrementCount = () => {
    dispatch({ type: UPDATE_COUNT, payload: [id, "inc"] });
  };

  const decrementCount = () => {
    if (quantity == 1) {
      dispatch({ type: REMOVE_ITEM, payload: id });
    } else {
      dispatch({ type: UPDATE_COUNT, payload: [id, "dec"] });
    }
  };

  const removeItem = () => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <div className="cart-item">
      <img src={img} alt="product image" />
      <div className="info">
        <p className="brand">{brand.toUpperCase()}</p>
        <p>{name}</p>
        <p>$ {(price * quantity).toFixed(2)}</p>
        <button className="remove-btn" onClick={() => removeItem()}>
          remove
        </button>
      </div>
      <div className="quantity-changer">
        <FiChevronLeft onClick={() => incrementCount()} />
        <p>{quantity}</p>
        <FiChevronRight onClick={() => decrementCount()} />
      </div>
    </div>
  );
}

export default CartItem;
