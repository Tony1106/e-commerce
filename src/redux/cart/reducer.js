import * as actionTypes from "./action";
const fn = require("../ultis/cart/index");
const initialState = {
  addedProducts: [],
  isAddingProducts: false
};

// addedProduct: {
//   name: string,
//   color: string,
//   category: string,
//   imageURL: string,
//   size: string,
//   quantity: integer
// }

const cart = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const productAddedToCart = fn.addToCart(
        action.addingProduct,
        state.addedProducts
      );
      return {
        ...state,
        addedProducts: productAddedToCart
      };
    case actionTypes.TOGGLE_ADDING_PRODUCT:
      return {
        ...state,
        isAddingProducts: !state.isAddingProducts
      };
    case actionTypes.DELETE_CART_PRODUCT:
      const deletedIDProduct = action.id;
      const newCartItem = fn.deleteItemProduct(
        deletedIDProduct,
        state.addedProducts
      );
      return {
        ...state,
        addedProducts: newCartItem
      };
    default:
      return state;
  }
};

export default cart;
