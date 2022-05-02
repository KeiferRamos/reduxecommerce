import { createStore } from "redux";
import data from "../data";
import reducer from "./reducer";

const storageCart = localStorage.getItem("cartItem");
const storageInfo = localStorage.getItem("user-info");

const info = {
  fullname: "",
  address: "",
  contact: "",
};

const initialState = {
  products: data,
  selection: {
    category: "all",
    brand: "all",
  },
  searchedItem: data,
  userCart: storageCart ? JSON.parse(storageCart) : [],
  cartCount: 0,
  cartTotal: 0,
  message: {
    type: "",
    text: "",
  },
  userInfo: storageInfo ? JSON.parse(storageInfo) : info,
};

export default createStore(reducer, initialState);
