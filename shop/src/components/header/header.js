import React from "react";
import {NavLink} from "react-router-dom";
import {PrivateRoute} from "../privateRoute/privateRoute";
import "./header.scss";
import {AuthProvider} from "../auth/LoginPage";

const Header = () => {

    return <AuthProvider>
        <div className = "header">
            <NavLink className = "header__link" to = '/' > Shop.ua </NavLink>
            <NavLink className = "header__link" to = '/cart' > Order </NavLink>
            <NavLink className = "header__link" to = '/add-product' > Add Product</NavLink>
            <span className = "header__sign-in">
            <NavLink className = "header__link" to = '/sign-in' > Sign In</NavLink>

        </span>
        </div>
    </AuthProvider>
};

export {Header}