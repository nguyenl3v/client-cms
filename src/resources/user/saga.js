import { USERREGISTER, USERLOGIN } from "./constant";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { API } from "../../config/defaultApi";
import { ToastifyField } from "../../components/Toastify";
import { _getUser } from "./action";

function* userRegister() {
  yield takeEvery(USERREGISTER, function* _userRegister({ payload }) {
    try {
      yield axios.post(`${API}/register`, payload);
      window.location.href = "/login";
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* userLogin() {
  yield takeEvery(USERLOGIN, function* _userLogin({ payload }) {
    try {
      const res = yield axios.post(`${API}/login`, payload);
      sessionStorage.setItem("userToken", JSON.stringify(res.data));
      window.location.href = "/";
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

const config = {
  headers: {
    "Content-type": "application/json"
  }
};
const token = sessionStorage.getItem("userToken");
if (token) {
  var t = token.substring(1, token.length - 1);
  config.headers["authorization"] = t;
}

function* getUser() {
  const token = sessionStorage.getItem("userToken");
  if (token) {
    try {
      const res = yield axios.get(`${API}/user/customer`, config);
      yield put(_getUser(res.data));
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  }
}

const sagas = [userRegister, userLogin, getUser];

export default sagas;
