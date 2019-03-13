import * as actionTypes from "./action";

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
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        addedProducts: [...state.addedProducts, action.addingProduct]
      };
    case actionTypes.TOGGLE_ADDING_PRODUCT:
      return {
        ...state,
        isAddingProducts: !state.isAddingProducts
      }

  }
  return state;
};

export default cart;
