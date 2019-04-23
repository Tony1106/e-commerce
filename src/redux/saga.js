import { verifyTokenHandleRequest } from "./auth/saga";
import { getProduct } from "./product/saga";
import { cart } from "./cart/saga";
import { all } from "redux-saga/effects";
export default function* saga() {
  yield all([getProduct(), cart(), verifyTokenHandleRequest()]);
}
