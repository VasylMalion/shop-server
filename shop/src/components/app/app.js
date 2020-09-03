import React, {useState} from 'react';
import Products from "../products/products";
import {Header} from "../header/header";
import {Route, Redirect} from "react-router-dom";
import Cart from "../cart/cart";
import AddProduct from "../addProduct/addProduct";
import {AuthProvider} from "../auth/LoginPage"
import {PrivateRoute} from "../privateRoute/privateRoute";
import Login from "../../login/login";

const App = () => {

    const [newProduct, setNewProduct] = useState({
        data: {
            name: "",
            price: "",
            count: "",
            img: ""
        },
        updatedData: {},
        displayStyle: "",
        currentId: ""
    });

    return <AuthProvider>
        <div>
            <Header/>
            <Route path = "/login" component={Login} />
            {/*<Route path = "/sign-in" component={SignIn} />*/}
            <Route exact path = "/" render = {() => <Products newProduct = {newProduct} setNewProduct = {setNewProduct} />} />
            <Route path = "/cart" render = {() => <Cart />} />
            <Route path = "/add-product" render = {() => <AddProduct newProduct = {newProduct} setNewProduct = {setNewProduct} />} />
            <PrivateRoute path = "/sign-in" component = {Login}/>
            <Redirect to = "/" />
        </div>
    </AuthProvider>
};

export {App}