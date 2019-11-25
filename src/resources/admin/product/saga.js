import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../../config/defaultApi";
import axios from "axios";
import { _getDataProduct } from "./action";
import {
  ADDDATAPRODUCT,
  UPLOADPRODUCT,
  DELETEDATAPRODUCT,
  EDITDATAPRODUCT
} from "./constants";
import { ToastifyField, ToastifySuccess } from "../../../components/Toastify";
import { showLoading, hiddenLoading } from "../../loading/action";

function* getDataProduct() {
  yield put(showLoading());
  const res = yield axios.get(`${API}/admin/product`);
  yield put(_getDataProduct(res.data));
  yield put(hiddenLoading());
}

function* addDataProduct() {
  yield takeEvery(ADDDATAPRODUCT, function* _addDataProduct({ payload }) {
    yield put(showLoading());
    try {
      const res = yield axios.post(`${API}/admin/product/add`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => {
        window.location.href = "/admin/product";
      }, 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* uploadProduct() {
  yield takeEvery(UPLOADPRODUCT, function* _uploadProduct({ payload }) {
    yield put(showLoading());
    const { image } = payload;
    try {
      yield axios.post(`${API}/admin/product/upload`, image, {
        headers: { "Content-type": "multipart/form-data" }
      });
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* deleteDataProduct() {
  yield takeEvery(DELETEDATAPRODUCT, function* _deleteDataProduct({ payload }) {
    yield put(showLoading());
    const { id, file } = payload;
    const res = yield axios.get(`${API}/admin/product/delete/${id}/${file}`);
    ToastifySuccess(res.data.msg);
    yield put(hiddenLoading());
    setTimeout(() => {
      window.location.href = "/admin/product";
    }, 2001);
  });
}

function* editDataProduct() {
  yield takeEvery(EDITDATAPRODUCT, function* _editDataProduct({ payload }) {
    yield put(showLoading());
    try {
      const res = yield axios.post(`${API}/admin/product/edit`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => {
        window.location.href = "/admin/product";
      }, 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}
const sagas = [
  getDataProduct,
  addDataProduct,
  uploadProduct,
  deleteDataProduct,
  editDataProduct
];

export default sagas;
