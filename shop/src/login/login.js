import React from "react";
import {NavLink} from "react-router-dom";
import {withAuth} from "../components/auth/LoginPage";
import {Redirect} from "react-router-dom";
import './login.css';

export default withAuth(({isAuthorized, authorize}) => (

    isAuthorized ? <Redirect to = "/" /> : <div className = "auth" >
        <span> Ви не авторизовані! </span>
        <br />
        <button className = "btn" onClick={authorize}> Авторизуватись </button>
    </div>
)
)

