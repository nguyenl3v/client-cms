import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../../config/defaultApi";
import { _getDataCategories } from "./action";
import {
  ADDDATACATEGORIES,
  DELETEDATACATEGORIES,
  EDITDATACATEGORIES
} from "./constants";
import { ToastifySuccess, ToastifyField } from "../../../components/Toastify";
import axios from "axios";
import { showLoading, hiddenLoading } from "../../loading/action";

function* getDataCategories() {
  yield put(showLoading());
  const res = yield axios.get(`${API}/admin/categories`);
  yield put(_getDataCategories(res.data));
  yield put(hiddenLoading());
}

function* addDataCategories() {
  yield takeEvery(ADDDATACATEGORIES, function* _addDataCategories({ payload }) {
    yield put(showLoading());
    try {
      const res = yield axios.post(`${API}/admin/categories/add`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/categories"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* deleteDataCategories() {
  yield takeEvery(DELETEDATACATEGORIES, function* _deleteDataCategories({
    payload
  }) {
    yield put(showLoading());
    const { id } = payload;
    const res = yield axios.get(`${API}/admin/categories/delete/${id}`);
    ToastifySuccess(res.data.msg);
    yield put(hiddenLoading());
    setTimeout(() => (window.location.href = "/admin/categories"), 2001);
  });
}

function* editDataCategories() {
  yield takeEvery(EDITDATACATEGORIES, function* _editDataCategories({
    payload
  }) {
    yield put(showLoading());
    try {
      const res = yield axios.post(`${API}/admin/categories/edit`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/categories"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}
const sagas = [
  getDataCategories,
  addDataCategories,
  deleteDataCategories,
  editDataCategories
];
export default sagas;
