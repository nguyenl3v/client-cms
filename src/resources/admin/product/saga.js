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

function* getDataProduct() {
  const res = yield axios.get(`${API}/admin/product`);
  yield put(_getDataProduct(res.data));
}

function* addDataProduct() {
  yield takeEvery(ADDDATAPRODUCT, function* _addDataProduct({ payload }) {
    try {
      const res = yield axios.post(`${API}/admin/product/add`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => {
        window.location.href = "/admin/product";
      }, 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* uploadProduct() {
  yield takeEvery(UPLOADPRODUCT, function* _uploadProduct({ payload }) {
    const { image } = payload;
    try {
      yield axios.post(`${API}/admin/product/upload`, image, {
        headers: { "Content-type": "multipart/form-data" }
      });
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* deleteDataProduct() {
  yield takeEvery(DELETEDATAPRODUCT, function* _deleteDataProduct({ payload }) {
    const { id, file } = payload;
    const res = yield axios.get(`${API}/admin/product/delete/${id}/${file}`);
    ToastifySuccess(res.data.msg);
    setTimeout(() => {
      window.location.href = "/admin/product";
    }, 2001);
  });
}

function* editDataProduct() {
  yield takeEvery(EDITDATAPRODUCT, function* _editDataProduct({ payload }) {
    try {
      const res = yield axios.post(`${API}/admin/product/edit`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => {
        window.location.href = "/admin/product";
      }, 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
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
