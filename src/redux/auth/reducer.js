import { VERIFY_TOKEN, SIGN_IN, SIGN_OUT } from "./action";
const initialState = {
  _id: "",
  username: "",
  avatar: "",
  isLogin: false
};

const auth = (state = initialState, action) => {
  console.log(action, VERIFY_TOKEN.success.getType());
  switch (action.type) {
    case VERIFY_TOKEN.success.getType():
      const { _id, username } = action.payload;
      return {
        ...state,
        _id,
        username,
        isLogin: true
      };
    case VERIFY_TOKEN.failure.getType():
      return {
        ...state,
        isLogin: false
      };
    case SIGN_IN.success.getType():
      return {
        ...state,
        _id,
        username,
        isLogin: true
      };
    case SIGN_OUT.success.getType():
      return {
        ...state,
        isLogin: false
      };
    default:
      return state;
  }
};

export default auth;
