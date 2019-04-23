import { takeEvery, all, put, call } from "redux-saga/effects";
import { VERIFY_TOKEN, SIGN_IN } from "./action";
import axios from "axios";

function* verifyToken(action) {
  try {
    const token = action.token;
    const res = yield axios.post("/api/user/token", { token });
    if (res) {
      yield put({ type: VERIFY_TOKEN.success.getType() });
    }
  } catch (err) {
    const errMsg = err.response.data.message;
    if (errMsg) {
      yield put({ type: VERIFY_TOKEN.failure.getType() });
    }
  }
}
export function* verifyTokenHandleRequest() {
  yield takeEvery(VERIFY_TOKEN.request.getType(), verifyToken);
}

// fucntion signIn(){

// }
// export function* signInHandleRequest() {
//   yield takeEvery(SIGN_IN.request.getType(), signIn);
// }
