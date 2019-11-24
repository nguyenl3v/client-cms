import React from "react";
import { Link } from "react-router-dom";
import { AdminVertical } from "../../styled/AdminVertival";
import { socket } from "../../config/socketio";
import { connect } from "react-redux";
import { toggleMessage } from "../../resources/appChat/action";

function Vertical({ userShop, toggleMessage, toggle }) {
  const emitRooms = () => {
    socket.emit("rooms", { admin: userShop.user.name });
    toggleMessage(!toggle);
  };
  return (
      <AdminVertical>
        <div className="logoAdm">
          <h2>ADMIN CMS</h2>
        </div>
        <ul>
          <li>
            <Link to="/admin/menu">Menu</Link>
          </li>
          <li>
            <Link to="/admin/categories">Categories</Link>
          </li>
          <li>
            <Link to="/admin/slideshow">SlideShow</Link>
          </li>
          <li>
            <Link to="/admin/product">Product</Link>
          </li>
          <li>
            <Link to="/admin/blog">Blog</Link>
          </li>
          <li>
            <Link to="/admin/footer">Footer</Link>
          </li>
          <li>
            <Link to="/admin/order">Order</Link>
          </li>
          <li onClick={() => emitRooms()}>
            <Link to="/admin">Message</Link>
          </li>
        </ul>
      </AdminVertical>
  );
}
const mapStateToProps = state => ({
  userShop: state.appChat,
  toggle: state.appChat.toggleMSG
});
export default connect(mapStateToProps, { toggleMessage })(Vertical);