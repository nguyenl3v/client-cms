import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { API } from "../../../config/defaultApi";
import { _getDataFooter } from "./action";
import {
  ADDDATAFOOTER,
  UPLOADLOGOFOOTER,
  DELETEDATAFOOTER,
  EDITDATAFOOTER
} from "./constant";
import { ToastifyField, ToastifySuccess } from "../../../components/Toastify";
import { showLoading, hiddenLoading } from "../../loading/action";

function* getDataFooter() {
  yield put(showLoading());
  const res = yield axios.get(`${API}/footer`);
  yield put(_getDataFooter(res.data));
  yield put(hiddenLoading());
}

function* uploadLogoFooter() {
  yield takeEvery(UPLOADLOGOFOOTER, function* _uploadLogoFooter({ payload }) {
    yield put(showLoading());
    try {
      yield axios.post(`${API}/footer/upload`, payload.logo, {
        headers: { "Content-type": "multipart/form-data" }
      });
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* addDataFooter() {
  yield takeEvery(ADDDATAFOOTER, function* _addDataFooter({ payload }) {
    yield put(showLoading());
    try {
      const res = yield axios.post(`${API}/footer/add`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/footer"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* deleteDataFooter() {
  yield takeEvery(DELETEDATAFOOTER, function* _deleteDataFooter({ payload }) {
    yield put(showLoading());
    try {
      const res = yield axios.get(
        `${API}/footer/delete/${payload.id}/${payload.urlFile}`
      );
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/footer"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* editDataFooter() {
  yield takeEvery(EDITDATAFOOTER, function* _editDataFooter({ payload }) {
    yield put(showLoading());
    try {
      const res = yield axios.post(`${API}/footer/edit`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/footer"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

const sagas = [
  getDataFooter,
  addDataFooter,
  uploadLogoFooter,
  deleteDataFooter,
  editDataFooter
];

export default sagas;
