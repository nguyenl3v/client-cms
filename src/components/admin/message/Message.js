import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { socket } from "../../../config/socketio";

function Message({ messageAdmin, userCustomer, userShop }) {
  const [userActive, setUserActive] = useState(null);
  const [valmsg, setValmsg] = useState("");
  const showMessage = messageAdmin.filter(
    item => item.sender === userActive || item.receiver === userActive
  );
  const sendMessage = () => {
    socket.emit("msg", {
      sender: userShop.name,
      receiver: userActive,
      msg: valmsg
    });
    setValmsg("");
  };
  return (
    <Messages>
      <div className="message-user">
        {messageAdmin.length > 0 ? (
          <ul className="list-user">
            {userCustomer.map((item, index) => (
              <li key={index} onClick={() => setUserActive(item)}>
                <b>{item}</b>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center" >khong co tin nhan</p>
        )}
      </div>
      <div className="message-content">
        {userActive &&
          showMessage.map((item, index) => (
            <div className="list-content" key={index}>
              <div>
                <b>{item.sender}</b>:<span>{item.msg}</span>
              </div>
            </div>
          ))}
      </div>
      {userActive && (
        <div className="send-message">
          <textarea
            rows="3"
            className="form-control"
            placeholder={"send message to " + userActive}
            value={valmsg}
            onChange={e => setValmsg(e.target.value)}
          />
          <label className="btn btn-success" onClick={() => sendMessage()}>
            send
          </label>
        </div>
      )}
    </Messages>
  );
}

const mapStateToProps = state => ({
  messageAdmin: state.appChat.msg,
  userCustomer: state.appChat.userCustomer,
  userShop: state.appChat.user
});

export default connect(mapStateToProps, null)(Message);

const Messages = styled.div`
  width: 100%;
  height: 100%;
  .message-user {
    border: 1px solid #cccccc;
    margin: 15px 0px;
    height: 40px;
    line-height: 40px;
    li {
      display: inline-block;
      padding: 0px 50px;
      border-right: 1px solid #cccccc;
      cursor: pointer;
    }
  }
`;
