import { fetchProduct } from "../product/action";
export function* cart() {
  console.log("Hello tony!", fetchProduct.request.toString());
}
