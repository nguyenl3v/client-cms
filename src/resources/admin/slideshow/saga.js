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

function* getDataSlideShow() {
  const res = yield axios.get(`${API}/admin/slideshow`);
  yield put(_getDataSlideShow(res.data));
}

function* addDataSlideShow() {
  yield takeEvery(ADDDATASLIDESHOW, function* _addDataSlideShow({ payload }) {
    try {
      const res = yield axios.post(`${API}/admin/slideshow/add`, payload);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/slideshow"), 2000);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* uploadImage() {
  yield takeEvery(UPLOAD, function* _uploadImage({ payload }) {
    const { image } = payload;
    try {
      yield axios.post(`${API}/admin/slideshow/upload`, image, {
        headers: { "Content-type": "multipart/form-data" }
      });
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* deleteDataSlideShow() {
  yield takeEvery(DELETEDATASLIDESHOW, function* _deleteDataSlideShow({
    payload
  }) {
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
  });
}

function* editDataSlideShow() {
  yield takeEvery(EDITDATASLIDESHOW, function* _editDataSlideShow({ payload }) {
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
