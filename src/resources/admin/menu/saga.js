import { put, takeEvery } from "redux-saga/effects";
import { _getDataMenu } from "./action";
import axios from "axios";
import { API } from "../../../config/defaultApi";
import { DELETEDATAMENU, ADDDATAMENU, EDITDATAMENU } from "./constants";
import { ToastifyField, ToastifySuccess } from "../../../components/Toastify";
import { showLoading, hiddenLoading } from "../../loading/action";

function* getDataMenu() {
  yield put(showLoading());
  const res = yield axios.get(`${API}/admin/menu`);
  yield put(_getDataMenu(res.data));
  yield put(hiddenLoading());
}

function* deleteDataMenu() {
  yield takeEvery(DELETEDATAMENU, function* _deleteDataMenu({ payload }) {
    yield put(showLoading());
    const { id } = payload;
    try {
      const res = yield axios.get(`${API}/admin/menu/delete/${id}`);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/menu"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* addDataMenu() {
  yield takeEvery(ADDDATAMENU, function* _addDataMenu({ payload }) {
    yield put(showLoading());
    const { title, link } = payload;
    try {
      const res = yield axios.post(`${API}/admin/menu/add`, { title, link });
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/menu"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* editDataMenu() {
  yield takeEvery(EDITDATAMENU, function* _editDataMenu({ payload }) {
    yield put(showLoading());
    try {
      const res = yield axios.post(`${API}/admin/menu/edit`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/menu"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}
const sagas = [getDataMenu, deleteDataMenu, addDataMenu, editDataMenu];
export default sagas;
