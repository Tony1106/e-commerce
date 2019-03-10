import { createAsyncAction } from "typesafe-actions";

export const fetchProduct = createAsyncAction(
  "FETCH_PRODUCT_REQUEST",
  "FETCH_PRODUCT_SUCCESS",
  "FETCH_PRODUCT_FAILURE"
)();
