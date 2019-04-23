import { createAsyncAction } from "typesafe-actions";

export const VERIFY_TOKEN = createAsyncAction(
  "VERIFY_TOKEN_REQUEST",
  "VERIFY_TOKEN_SUCCESS",
  "VERIFY_TOKEN_FAILURE"
)();
export const SIGN_IN = createAsyncAction(
  "SIGN_IN_REQUEST",
  "SIGN_IN_SUCCESS",
  "SIGN_IN_FAILURE"
)();
export const SIGN_OUT = createAsyncAction(
  "SIGN_OUT_REQUEST",
  "SIGN_OUT_SUCCESS",
  "SIGN_OUT_FAILURE"
)();
export const SIGN_UP = createAsyncAction(
  "SIGN_UP_REQUEST",
  "SIGN_UP_SUCCESS",
  "SIGN_UP_FAILURE"
)();
