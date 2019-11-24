import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./container/admin/Admin";
import Header from "./container/header/Header";
import SlideShow from "./container/slideshow/SlideShow";
import ProductTabs from "./container/product/ProductTabs";
import Cart from "./container/cart/Cart";
import Wishlish from "./container/wishlish/Wishlish";
import ProductDetails from "./container/product/ProductDetails";
import Signin from "./container/admin/userAdmin/Signin";
import SignUp from "./container/user/SignUp";
import SignIn from "./container/user/SignIn";
import AppChat from "./container/appChat/AppChat";
import Blog from "./container/blog/Blog";
import BlogItem from "./container/blog/BlogItem";
import BlogPage from "./container/blog/BlogPage";
import Footer from "./container/footer/Footer";
import CheckOut from "./container/order/CheckOut";

const token = sessionStorage.getItem("token");
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to={"/admin/login"} />
      }
    />
  );
}

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Header} />
      <Route path="/" exact component={SlideShow} />
      <Route path="/" exact component={ProductTabs} />
      <Route path="/" exact component={AppChat} />
      <Route path="/cart" exact component={Header} />
      <Route path="/wishlish" exact component={Header} />
      <Route path="/productdetails/:name/:id.html" exact component={Header} />
      <Route path="/admin/login" exact component={Signin} />
      <Route path="/register" exact component={Header} />
      <Route path="/login" exact component={Header} />
      <Route path="/blog/:id/:name.html" exact component={Header} />
      <Route path="/blog" exact component={Header} />
      <Route path="/checkout" exact component={Header} />
      <Switch>
        <Route path="/cart" exact component={Cart} />
        <Route path="/wishlish" exact component={Wishlish} />
        <Route
          path="/productdetails/:name/:id.html"
          exact
          component={ProductDetails}
        />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/register" exact component={SignUp} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/" exact component={Blog} />
        <Route path="/blog/:id/:name.html" exact component={BlogItem} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/checkout" exact component={CheckOut} />
      </Switch>
      <Route path="/" exact component={Footer} />
      <Route path="/blog" exact component={Footer} />
      <Route path="/blog/:id/:name.html" exact component={Footer} />
      <Route path="/product" exact component={Footer} />
      <Route path="/productdetails/:name/:id.html" exact component={Footer} />
      <Route path="/checkout" exact component={Footer} />
      <Route path="/login" exact component={Footer} />
      <Route path="/register" exact component={Footer} />
      <Route path="/cart" exact component={Footer} />
      <Route path="/wishlish" exact component={Footer} />
    </div>
  );
}

export default App;
