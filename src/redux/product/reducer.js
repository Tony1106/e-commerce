import {fetchProduct} from "./action";

const initialState = {
  page: 1,
  data:[]
};

const product = (state = initialState, action) => {
  const {products} = action;
  console.log(action, 'product');
  
  switch (action.type) {
    case fetchProduct.success.getType():
      return state = { ...state,
      data: action.data };
    default:
      return state;
  }
};
export default product;
