var fn = require("./index");

describe("test delete item in cart", () => {
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
      imageURL:
        "https://farm8.staticflickr.com/7117/7472625218_12c2b915d2_b.jpg"
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
    const addedProducts_before = [
      {
        id: "1_XanhDen_32",
        color: "XanhDen",
        size: 32,
        quantity: 2
      },
      {
        id: "2_Vang_32",
        color: "Vang",
        size: 32,
        quantity: 2
      }
    ];
    const productAdded = {
      id: 1,
      color: "XanhDen",
      size: 32,
      quantity: 2
    };
    const expectCart = [
      {
        id: "1_XanhDen_32",
        color: "XanhDen",
        size: 32,
        quantity: 4
      },
      {
        id: "2_Vang_32",
        color: "Vang",
        size: 32,
        quantity: 2
      }
    ];

    expect(fn.addToCart(productAdded, addedProducts_before)).toEqual(
      expectCart
    );
  });
  // test("it should return a new list with a new product added", () => {
  //   const addedProducts_before = [
  //     {
  //       id: "1_Xanh Den_32",
  //       color: "Xanh Den",
  //       size: 32,
  //       quantity: 2
  //     },
  //     {
  //       id: "2_Vang_32",
  //       color: "Vang",
  //       size: 32,
  //       quantity: 2
  //     }
  //   ];
  //   const productAdded = {
  //     color: "Xanh Vang",
  //     id: 3,
  //     quantity: 2,
  //     size: 32
  //   };
  //   const expectCart = [
  //     {
  //       id: "1_Xanh Den_32",
  //       color: "Xanh Den",
  //       size: 32,
  //       quantity: 4
  //     },
  //     {
  //       id: "2_Vang_32",
  //       color: "Vang",
  //       size: 32,
  //       quantity: 2
  //     },
  //     {
  //       color: "Xanh Vang",
  //       id: "3_Xanh Vang_32",
  //       quantity: 2,
  //       size: 32
  //     }
  //   ];

  //   expect(fn.addToCart(productAdded, addedProducts_before)).toEqual(
  //     expectCart
  //   );
  // });
});
describe("test check include function", () => {
  test("should return true", () => {
    let id = "1_XanhDen_32";
    let arr = [
      {
        id: "1_XanhDen_32",
        color: "XanhDen",
        size: 32,
        quantity: 2
      },
      {
        id: "2_Vang_32",
        color: "Vang",
        size: 32,
        quantity: 2
      }
    ];
    let result = true;
    expect(fn.checkExistID(id, arr)).toBe(result);
  });
});
