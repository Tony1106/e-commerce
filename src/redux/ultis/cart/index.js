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
  const currentList = addedProducts;
  let newAddedProducts = [];
  let newId = `${product.id}_${product.color}_${product.size}`;
  product.id = newId;
  if (currentList.length == 0) {
    return [product];
  } else {
    console.log("trung hop");
    currentList.forEach(cartItem => {
      if (product.id == cartItem.id) {
        console.log("trung hop");

        product.quantity += cartItem.quantity;
        newAddedProducts.push(product);
      } else {
        newAddedProducts.push(product);
      }
    });
    return newAddedProducts;
  }
};
module.exports = { deleteItemProduct, addToCart };
