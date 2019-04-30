import { put, takeEvery } from "redux-saga/effects";
import {fetchProduct} from "./action";
import axios from 'axios';
import { getType } from "typesafe-actions";
import products from '../../asset/MOCK_DATA.json'
import {post, get} from '../ultis/services'
export function* getData(action) {
  try{
    const page = action.page || 1;
    const data = yield post(`/api/product/${page}`);
    yield put({ type: fetchProduct.success.getType(),data: data.data});
  } catch(err){
    console.log(err);
  }

}

export function* getProduct() {
  yield takeEvery(fetchProduct.request.getType(), getData);
}
