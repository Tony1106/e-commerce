var fn = require("./index");

const addedProducts_before = [
  {
    id: 1,
    name: "Quan Ao Dai Xanh Den",
    color: "Xanh Den",
    size: 32,
    category: "Quan Ao Dai",
    quantity: 2,
    imageURL:
      "https://cdn.shopify.com/s/files/1/2592/4736/products/xanhden_1024x1024.jpg?v=1538555554"
  },
  {
    id: 2,
    name: "Quan Ao Dai Vang",
    color: "Vang",
    size: 32,
    category: "Quan Ao Dai",
    quantity: 2,
    imageURL: "https://farm8.staticflickr.com/7117/7472625218_12c2b915d2_b.jpg"
  }
];
const addedProducts_after = [
  {
    id: 1,
    name: "Quan Ao Dai Xanh Den",
    color: "Xanh Den",
    size: 32,
    category: "Quan Ao Dai",
    quantity: 2,
    imageURL:
      "https://cdn.shopify.com/s/files/1/2592/4736/products/xanhden_1024x1024.jpg?v=1538555554"
  }
];
describe("test delete item in cart", () => {
  test("test delete item in Cart case 1", () => {
    const addedProductBefore = fn.deleteItemProduct(2, addedProducts_before);
    expect(addedProductBefore).toEqual(addedProducts_after);
  });
  test("test delete item in Cart case with emty array", () => {
    const addedProducts_before = [];
    const addedProducts_after = [];
    const addedProductBefore = fn.deleteItemProduct(2, addedProducts_before);
    expect(addedProductBefore).toEqual(addedProducts_after);
  });
});
describe("test add to cart", () => {
  test("it should return a new list with quantity added", () => {
    const productAdded = {
      id: 1,
      name: "Quan Ao Dai Xanh Den",
      color: "Xanh Den",
      size: 32,
      category: "Quan Ao Dai",
      quantity: 2,
      imageURL:
        "https://cdn.shopify.com/s/files/1/2592/4736/products/xanhden_1024x1024.jpg?v=1538555554"
    };
    const expectCart = [
      {
        id: 1,
        name: "Quan Ao Dai Xanh Den",
        color: "Xanh Den",
        size: 32,
        category: "Quan Ao Dai",
        quantity: 4,
        imageURL:
          "https://cdn.shopify.com/s/files/1/2592/4736/products/xanhden_1024x1024.jpg?v=1538555554"
      },
      {
        id: 2,
        name: "Quan Ao Dai Vang",
        color: "Vang",
        size: 32,
        category: "Quan Ao Dai",
        quantity: 2,
        imageURL:
          "https://farm8.staticflickr.com/7117/7472625218_12c2b915d2_b.jpg"
      }
    ];
    expect(fn.addToCart(productAdded, addedProducts_before)).toEqual(
      expectCart
    );
  });
});
