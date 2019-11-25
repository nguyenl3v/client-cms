import { put, takeEvery } from "redux-saga/effects";
import { _getDataSlideShow } from "./action";
import { API } from "../../../config/defaultApi";
import {
  ADDDATASLIDESHOW,
  UPLOAD,
  DELETEDATASLIDESHOW,
  EDITDATASLIDESHOW
} from "./constants";
import { ToastifyField, ToastifySuccess } from "../../../components/Toastify";
import axios from "axios";
import { showLoading, hiddenLoading } from "../../loading/action";

function* getDataSlideShow() {
  yield put(showLoading());
  const res = yield axios.get(`${API}/admin/slideshow`);
  yield put(_getDataSlideShow(res.data));
  yield put(hiddenLoading());
}

function* addDataSlideShow() {
  yield takeEvery(ADDDATASLIDESHOW, function* _addDataSlideShow({ payload }) {
    yield put(showLoading());
    try {
      const res = yield axios.post(`${API}/admin/slideshow/add`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/slideshow"), 2000);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* uploadImage() {
  yield takeEvery(UPLOAD, function* _uploadImage({ payload }) {
    yield put(showLoading());
    const { image } = payload;
    try {
      yield axios.post(`${API}/admin/slideshow/upload`, image, {
        headers: { "Content-type": "multipart/form-data" }
      });
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* deleteDataSlideShow() {
  yield takeEvery(DELETEDATASLIDESHOW, function* _deleteDataSlideShow({
    payload
  }) {
    yield put(showLoading());
    const { id, file } = payload;
    try {
      const res = yield axios.get(
        `${API}/admin/slideshow/delete/${id}/${file}`
      );
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/slideshow"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

function* editDataSlideShow() {
  yield takeEvery(EDITDATASLIDESHOW, function* _editDataSlideShow({ payload }) {
    yield put(showLoading());
    const { heading, title, button, buttonLink, urlFile, id } = payload;
    try {
      const res = yield axios({
        url: `${API}/admin/slideshow/edit`,
        method: "post",
        data: { heading, title, button, buttonLink, urlFile, id }
      });
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/slideshow"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
    yield put(hiddenLoading());
  });
}

const sagas = [
  getDataSlideShow,
  addDataSlideShow,
  uploadImage,
  deleteDataSlideShow,
  editDataSlideShow
];

export default sagas;
