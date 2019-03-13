import { combineReducers } from "redux";
import cart from "./cart/reducer";
import product from "./product/reducer";
import stock from "./stock/reducer"

export default combineReducers({
  cart: cart,
  stock: stock,
  product: product
});
