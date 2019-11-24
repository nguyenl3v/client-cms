import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { ToastifyField, ToastifySuccess } from "../../components/Toastify";
import { API } from "../../config/defaultApi";
import { _getDataOrder } from "./action";
import { ADDDATAORDER } from "./constant";
import { clearCart } from "../cart/action";

function* getDataOrder() {
  const res = yield axios.get(`${API}/order`);
  yield put(_getDataOrder(res.data));
}

function* addDataOrder() {
  yield takeEvery(ADDDATAORDER, function* _addDataOrder({ payload }) {
    try {
      const res = yield axios.post(`${API}/order`, payload);
      yield put(clearCart());
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

const sagas = [getDataOrder, addDataOrder];

export default sagas;
