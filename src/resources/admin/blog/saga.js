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

function* getDataBlog() {
  const res = yield axios.get(`${API}/blog`);
  yield put(_getDataBlog(res.data));
}

function* uploadImageBlog() {
  yield takeEvery(UPLOADIMAGEBLOG, function* _uploadImageBlog({ payload }) {
    const { files } = payload;
    try {
      yield axios.post(`${API}/blog/upload`, files, {
        headers: { "Content-type": "multipart/form-data" }
      });
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* addDataBlog() {
  yield takeEvery(ADDDATABLOG, function* _addDataBlog({ payload }) {
    try {
      const res = yield axios.post(`${API}/blog/add`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/blog"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* deleteDataBlog() {
  yield takeEvery(DELETEDATABLOG, function* _deleteDataBlog({ payload }) {
    try {
      const res = yield axios.get(
        `${API}/blog/delete/${payload.id}/${payload.urlFile}`
      );
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/blog"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* editDataBlog() {
  yield takeEvery(EDITDATABLOG, function* _editDataBlog({ payload }) {
    try {
      const res = yield axios.post(`${API}/blog/edit`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/blog"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
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
