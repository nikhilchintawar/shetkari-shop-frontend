import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

import SignIn from './user-authentication/signin/signin.component';
import SignUp from './user-authentication/signup/signup.component';
import HomePage from './pages/homepage/homepage.component';
import ContactForm from './components/contact-form/contact-form.component';
import Menu from "./core/menu/menu.component";
import Footer from "./core/footer/footer.component";
import AdminRoute from './auth/helper/admin-route';
import AdminDashBoard from "./user/admin-dashboard/AdminDashboard";
import NotFounnd from './pages/404-page/NotFound';
import AddProduct from "./admin/addProduct/AddProduct";
import { CloseButton } from './admin/utils/utils';
import ManageProduct from './admin/manageProduct/ManageProduct';
import UpdateProduct from './admin/manageProduct/UpdateProduct';
import UserRoute from './auth/helper/user-route';
import Profile from './user/user-dashboard/Profile';
import Shop from './pages/shop/Shop';
import Vegetable from './pages/vegetable/Vegetable';
import Grain from './pages/grain/Grain';
import Cart from './pages/cart/Cart';


function Routes() {
  return (
    <div>
    <Menu />
    <div className="toastContainer">
        <ToastContainer closeOnClick limit={1} closeButton={CloseButton} />
    </div>
    
    <div className="App">
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/contact" component={ContactForm} />
    <Route path="/shop" component={Shop} />
    <Route path="/vegetables" component={Vegetable} />
    <Route path="/grains" component={Grain} />
    <AdminRoute exact path="/farmer/dashboard" component={AdminDashBoard} />
    <AdminRoute path="/farmer/create/product" component={AddProduct} />
    <AdminRoute path="/farmer/manage/product" component={ManageProduct} />
    <AdminRoute path="/farmer/product/update/:productId" component={UpdateProduct} />
    <UserRoute path="/user/profile/:userId" component={Profile} />
    <UserRoute path="/user/cart" component={Cart} />

    <Route path="" component={NotFounnd} />    
    </Switch>
    </div>
    <Footer />
    </div>
  );
}

export default Routes;
