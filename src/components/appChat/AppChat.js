import React, { useState } from "react";
import styled from "styled-components";
import Layout from "./Layout";
import { socket } from "../../config/socketio";
import { Link } from "react-router-dom";

export default function AppChat({ userShop, user, msg }) {
  const [toggleApp, settoggleApp] = useState(false);
  const getMessage = () => {
    socket.emit("rooms", { admin: userShop.user.name, name: user.name });
    settoggleApp(true);
  };
  return (
    <React.Fragment>
      <CustomerChat>
        {toggleApp && (
          <Layout
            settoggleApp={settoggleApp}
            userShop={userShop}
            user={user}
            msg={msg}
          />
        )}
      </CustomerChat>
      {user.name ? (
        <ButtonApp onClick={() => getMessage()}>support</ButtonApp>
      ) : (
        <ButtonApp>
          <Link to="/login">support</Link>
        </ButtonApp>
      )}
    </React.Fragment>
  );
}

const ButtonApp = styled.div`
  position: fixed;
  bottom: 45px;
  right: 20px;
  z-index: 22;
  padding: 10px 20px;
  background: yellow;
  cursor: pointer;
  color: white;
`;
const CustomerChat = styled.div`
  max-width: 400px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2222;
  background: #ffff;
  border: 1px solid #cccccc;
  .user {
    height: 100%;
    border-right: 1px solid #cccccc;
  }
  @media (max-width:992px){
    .send-msg{
      height: auto !important;
    }
  }
  .send-msg {
    height: 200px;
  }
  .close-app-chat {
    position: absolute;
    right: 0;
    cursor: pointer;
    z-index: 2;
  }
`;
