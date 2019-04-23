import { put, takeEvery } from "redux-saga/effects";
import * as A from "./action";
import { getType } from "typesafe-actions";

export function* getData(action) {
  yield put({ type: getType(A.fetchProduct.success) });
}
export function* getProduct() {
  yield takeEvery(getType(A.fetchProduct.request), getData);
}
