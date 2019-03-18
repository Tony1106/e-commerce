const deleteItemProduct = (id, addedProducts) => {
  let newListProduct = [];
  addedProducts.forEach(item => {
    if (item.id !== id) {
      newListProduct.push(item);
    }
  });
  return newListProduct;
};
const addToCart = (product, addedProducts) => {
  let currentList = [];
  let newId = `${product.id}_${product.color}_${product.size}`;
  product.id = newId;
  if (addedProducts.length == 0) {
    currentList.push(product);
  } else {
    currentList = addedProducts;

    if (checkExistID(product.id, addedProducts)) {
      currentList.forEach(item => {
        if (item.id === product.id) {
          item.quantity += product.quantity;
        }
      });
    } else {
      currentList.push(product);
    }
  }
  return currentList;
};
const checkExistID = (id, arr) => {
  let result = false;
  arr.forEach(item => (item.id === id ? (result = true) : null));
  return result;
};
module.exports = { deleteItemProduct, addToCart, checkExistID };
