import { combineReducers } from "redux";
import auth from "./auth/reducer";
import cart from "./cart/reducer";
import product from "./product/reducer";
import stock from "./stock/reducer";

export default combineReducers({
  auth,
  cart,
  stock,
  product
});
