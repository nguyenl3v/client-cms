import React, { useState } from "react";
import { socket } from "../../config/socketio";

export default function Layout({ settoggleApp, userShop, user, msg }) {
  const [val, setval] = useState("");
  const sendMessage = () => {
    socket.emit("msg", {
      sender: user.name,
      receiver: userShop.user.name,
      msg: val
    });
    setval("");
  };
  const messages = msg.filter(
    item => item.sender === user.name || item.receiver === user.name
  );
  return (
    <div className="layout-App">
      <div className="close-app-chat" onClick={() => settoggleApp(false)}>
        <i className="fa fa-times-circle" />
      </div>
      <div className="row mx-0">
        <div className="col-3 p-0">
          <div className="user">
            <span>
              <b>{userShop.user.name}</b>
            </span>
          </div>
        </div>
        <div className="col-9 p-0">
          <div className="send-msg">
            <div>
              {messages &&
                messages.map((item, index) => (
                  <div key={index}>
                    <b>{item.sender}</b>:<span>{item.msg}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className="button-msg">
            <textarea
              className="form-control"
              rows="3"
              value={val}
              onChange={e => setval(e.target.value)}
            />
            <label onClick={() => sendMessage()}>send</label>
          </div>
        </div>
      </div>
    </div>
  );
}
