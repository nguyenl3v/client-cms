import openSocket from "socket.io-client";
import { _getDataReview } from "../resources/ProductReview/action";
import {
  getUserAdmin,
  getMessage,
  getUserCustomer
} from "../resources/appChat/action";

const socket = openSocket("https://server-cms-api.herokuapp.com");

const listenToSocket = store => {
  socket.on("get/review", function(data) {
    store.dispatch(_getDataReview(data));
  });
  socket.on("get/userAdmin", function(data) {
    store.dispatch(getUserAdmin(data));
  });
  socket.on("get/msg", function(data) {
    store.dispatch(getMessage(data));
  });
  socket.on("get/user/admin", function(data) {
    store.dispatch(getUserCustomer(data));
  });
};
export { listenToSocket, socket };
