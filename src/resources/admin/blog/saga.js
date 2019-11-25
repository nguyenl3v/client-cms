import { put, takeEvery } from "redux-saga/effects";
import {
  ADDDATABLOG,
  UPLOADIMAGEBLOG,
  DELETEDATABLOG,
  EDITDATABLOG
} from "./constant";
import { _getDataBlog } from "./action";
import { API } from "../../../config/defaultApi";
import axios from "axios";
import { ToastifyField, ToastifySuccess } from "../../../components/Toastify";
import { showLoading, hiddenLoading } from "../../loading/action";

function* getDataBlog() {
  yield put(showLoading());
  const res = yield axios.get(`${API}/blog`);
  yield put(_getDataBlog(res.data));
  yield put(hiddenLoading());
}

function* uploadImageBlog() {
  yield takeEvery(UPLOADIMAGEBLOG, function* _uploadImageBlog({ payload }) {
    yield put(showLoading());
    const { files } = payload;
    try {
      yield axios.post(`${API}/blog/upload`, files, {
        headers: { "Content-type": "multipart/form-data" }
      });
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* addDataBlog() {
  yield takeEvery(ADDDATABLOG, function* _addDataBlog({ payload }) {
    yield put(showLoading());
    try {
      const res = yield axios.post(`${API}/blog/add`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/blog"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* deleteDataBlog() {
  yield takeEvery(DELETEDATABLOG, function* _deleteDataBlog({ payload }) {
    yield put(showLoading());
    try {
      const res = yield axios.get(
        `${API}/blog/delete/${payload.id}/${payload.urlFile}`
      );
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/blog"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* editDataBlog() {
  yield takeEvery(EDITDATABLOG, function* _editDataBlog({ payload }) {
    yield put(showLoading());
    try {
      const res = yield axios.post(`${API}/blog/edit`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/blog"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

const sagas = [
  getDataBlog,
  addDataBlog,
  uploadImageBlog,
  deleteDataBlog,
  editDataBlog
];

export default sagas;
