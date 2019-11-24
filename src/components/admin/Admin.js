import React from "react";
import { Switch, Route } from "react-router-dom";
import Vertical from "./Vertical";
import Menu from "../../container/admin/menu/Menu";
import AddMenu from "../../container/admin/menu/AddMenu";
import EditMenu from "../../container/admin/menu/EditMenu";
import Categories from "../../container/admin/categories/Categories";
import AddCategories from "../../container/admin/categories/AddCategories";
import EditCategories from "../../container/admin/categories/EditCategories";
import SlideShow from "../../container/admin/slideshow/SlideShow";
import AddSlideShow from "../../container/admin/slideshow/AddSlideShow";
import EditSlideShow from "../../container/admin/slideshow/EditSlideShow";
import Product from "../../container/admin/product/Product";
import AddProduct from "../../container/admin/product/AddProduct";
import EditProduct from "../../container/admin/product/EditProduct";
import Message from "./message/Message";
import Blog from "../../container/admin/blog/Blog";
import AddBlog from "../../container/admin/blog/AddBlog";
import EditBlog from "../../container/admin/blog/EditBlog";
import Footer from "../../container/admin/footer/Footer";
import AddFooter from "../../container/admin/footer/AddFooter";
import EditFooter from "../../container/admin/footer/EditFooter";
import Order from "../../container/admin/order/Order";

function Admin({ toggle }) {
  return (
    <div className="row mx-0">
      <div className="col-md-3">
        <Switch>
          <Route path="/admin" exact component={Vertical} />
          <Route path="/admin/menu" exact component={Vertical} />
          <Route path="/admin/categories" exact component={Vertical} />
          <Route path="/admin/slideshow" exact component={Vertical} />
          <Route path="/admin/product" exact component={Vertical} />
          <Route path="/admin/blog" exact component={Vertical} />
          <Route path="/admin/footer" exact component={Vertical} />
          <Route path="/admin/order" exact component={Vertical} />
        </Switch>
      </div>
      <div className="col-md-9">
        <Switch>
          <Route path="/admin/menu" exact component={Menu} />
          <Route path="/admin/categories" exact component={Categories} />
          <Route path="/admin/slideshow" exact component={SlideShow} />
          <Route path="/admin/product" exact component={Product} />
          <Route path="/admin/blog" exact component={Blog} />
          <Route path="/admin/footer" exact component={Footer} />
          <Route path="/admin/order" exact component={Order} />
          {toggle && <Route path="/admin" exact component={Message} />}
        </Switch>
      </div>
      <div className="col-12">
        <Route path="/admin/menu/add" exact component={AddMenu} />
        <Route path="/admin/menu/edit/:id" exact component={EditMenu} />
        <Route path="/admin/categories/add" exact component={AddCategories} />
        <Route
          path="/admin/categories/edit/:id"
          exact
          component={EditCategories}
        />
        <Route path="/admin/slideshow/add" exact component={AddSlideShow} />
        <Route
          path="/admin/slideshow/edit/:id"
          exact
          component={EditSlideShow}
        />
        <Route path="/admin/product/add" exact component={AddProduct} />
        <Route path="/admin/product/edit/:id" exact component={EditProduct} />
        <Route path="/admin/blog/add" exact component={AddBlog} />
        <Route path="/admin/blog/edit/:id" exact component={EditBlog} />
        <Route path="/admin/footer/add" exact component={AddFooter} />
        <Route path="/admin/footer/edit/:id" exact component={EditFooter} />
      </div>
    </div>
  );
}
export default Admin;
