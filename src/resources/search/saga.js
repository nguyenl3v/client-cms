import { takeEvery, put } from "redux-saga/effects";
import { VALUESEARCH } from "./constant";
import axios from "axios";
import { API } from "../../config/defaultApi";
import { showLoading, hiddenLoading, dataSearch } from "./action";

function* searchProduct() {
  yield takeEvery(VALUESEARCH, function* _searchProduct({ payload }) {
    yield put(showLoading());
    const res = yield axios.get(`${API}/search?q=${payload.value}`);
    yield put(dataSearch(res.data));
    yield put(hiddenLoading());
  });
}

const sagas = [searchProduct];
export default sagas;
