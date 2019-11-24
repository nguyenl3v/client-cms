import { LOGINADMIN } from "./constant";
import { takeEvery } from "redux-saga/effects";
import axios from "axios";
import { API } from "../../../config/defaultApi";
import { ToastifyField } from "../../../components/Toastify";

function* Signin() {
  yield takeEvery(LOGINADMIN, function* _Signin({ payload }) {
    try {
      const res = yield axios.post(`${API}/user/admin/login`, payload);
      sessionStorage.setItem("token", JSON.stringify(res.data));
      window.location.href = "/admin";
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

const sagas = [Signin];

export default sagas;
