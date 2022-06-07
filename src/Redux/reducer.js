import data from "../data";
import {
  FILTER,
  SEARCH_ITEM,
  SORT_BY_PRICE,
  SELECT_FILTER,
  ADD_ITEM,
  UPDATE_COUNT,
  REMOVE_ITEM,
  REMOVE_MSG,
  GET_CART_COUNT,
  GET_CART_TOTAL,
  SET_INFO,
  CLEAR_CART,
} from "./actions";

function reducer(state, action) {
  if (action.type == SELECT_FILTER) {
    return {
      ...state,
      selection: { ...state.selection, [action.payload[1]]: action.payload[0] },
    };
  } else if (action.type == FILTER) {
    const { brand, category } = state.selection;
    return {
      ...state,
      products: data.filter((product) => {
        if (brand == "all" && category == "all") {
          return product;
        } else if (brand == "all") {
          return product.category == category;
        } else if (category == "all") {
          return product.brand == brand;
        }
        return product.brand == brand && product.category == category;
      }),
    };
  } else if (action.type == ADD_ITEM) {
    const alreadyInCart = state.userCart.find(
      (e) => e.item.name == action.payload
    );
    const selectedItem = data.find((item) => item.name == action.payload);
    if (alreadyInCart) {
      return {
        ...state,
        message: { type: "home", text: "already in cart" },
      };
    }
    return {
      ...state,
      userCart: [
        ...state.userCart,
        { id: Math.random(), item: selectedItem, quantity: 1 },
      ],
      message: { type: "home", text: "added to cart" },
    };
  } else if (action.type == SEARCH_ITEM) {
    return {
      ...state,
      searchedItem: data.filter((item) =>
        item.name.toLowerCase().startsWith(action.payload)
      ),
    };
  } else if (action.type == SORT_BY_PRICE) {
    return {
      ...state,
      products: state.products.sort((a, b) => a.price - b.price),
    };
  } else if (action.type == UPDATE_COUNT) {
    const selected = state.userCart.find(
      (item) => item.id == action.payload[0]
    );
    if (selected.quantity == 1 && action.payload[1] == "dec") {
      return {
        ...state,
        userCart: state.userCart.filter(
          (item) => item.id !== action.payload[0]
        ),
      };
    }
    return {
      ...state,
      userCart: state.userCart.map((item) => {
        if (item == selected) {
          return {
            ...item,
            quantity:
              action.payload[1] == "dec"
                ? item.quantity - 1
                : item.quantity + 1,
          };
        }
        return item;
      }),
    };
  } else if (action.type == REMOVE_ITEM) {
    return {
      ...state,
      message: { type: "cart", text: "item removed" },
      userCart: state.userCart.filter((item) => item.id !== action.payload),
    };
  } else if (action.type == REMOVE_MSG) {
    return { ...state, message: { type: "", text: "" } };
  } else if (action.type == GET_CART_COUNT) {
    return {
      ...state,
      cartCount: state.userCart.reduce((total, item) => {
        return total + item.quantity;
      }, 0),
    };
  } else if (action.type == GET_CART_TOTAL) {
    return {
      ...state,
      cartTotal: state.userCart.reduce((total, product) => {
        return total + product.item.price * product.quantity;
      }, 0),
    };
  } else if (action.type == SET_INFO) {
    return { ...state, userInfo: action.payload };
  } else if (action.type == CLEAR_CART) {
    return {
      ...state,
      userCart: [],
      message: { type: "cart", text: "thank you for shopping" },
    };
  }
  return state;
}

export default reducer;
