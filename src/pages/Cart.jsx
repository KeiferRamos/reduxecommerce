import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItem from "../components/cartItem";
import Msgbox from "../components/Msgbox";
import UserInfo from "../components/userInfo";
import {
  GET_CART_COUNT,
  GET_CART_TOTAL,
  REMOVE_MSG,
} from "../Redux/ActionType";
import "../styles/cart.css";

function Cart(state) {
  const { userCart, message, dispatch, cartCount, cartTotal, userInfo } = state;
  const [hasCheckout, setHasCheckout] = useState(false);

  const closeForm = () => setHasCheckout(false);

  const checkOutItem = () => {
    if (userCart.length > 0) {
      setHasCheckout(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: REMOVE_MSG });
    }, 1300);
    return () => clearTimeout(timer);
  }, [message]);

  useEffect(() => {
    dispatch({ type: GET_CART_COUNT });
    dispatch({ type: GET_CART_TOTAL });
  }, [userCart]);

  return (
    <div className="cart">
      {message.type == "cart" && (
        <Msgbox message={message.text} className={"header-text"} />
      )}
      <div className="cart-container">
        {userCart.length > 0 ? (
          userCart.map((item, i) => {
            return <CartItem key={i} {...item} dispatch={dispatch} />;
          })
        ) : (
          <p className="modal-text">no item in cart</p>
        )}
      </div>
      {hasCheckout && <UserInfo closeForm={closeForm} />}
      <div className="cart-info">
        <div>
          <p>quantity:</p>
          <span>{cartCount}</span>
        </div>
        <div>
          <p>total:</p>
          <span>{cartTotal.toFixed(2)}</span>
        </div>
        <button className="checkout-btn" onClick={() => checkOutItem()}>
          check-out
        </button>
      </div>
    </div>
  );
}

export default connect((state) => state)(Cart);
