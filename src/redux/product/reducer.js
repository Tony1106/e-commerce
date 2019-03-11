import * as A from "./action";
console.log(A.fetchProduct);

const initialState = {
  item1: {
    id: "hasdasdwq2132dad",
    title: "t shirt",
    quantity: 20
  },
  item2: {
    id: "hasdasdwq2132dad",
    title: "jean",
    quantity: 20
  }
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case A:
      state = { ...action.data };
      break;

    default:
      return state;
      break;
  }
};
export default product;
