import React from "react";
import {connect} from "react-redux";
import "./sign-in.scss";

const SignIn = () => {

    return <div className = "sign-in" >
        {/*<hr className = "sign-in__hr" />*/}
        <div className = "sign-in__container" >
            <span className = "sign-in__title" > Sign In </span>
            <form className = "sign-in__form" >
                <input placeholder = "Login" />
                <input placeholder = "Password" />
                <button> SIGN IN </button>
            </form>
            {/*<span className = "sign-in__register" > Create an account </span>*/}
        </div>
    </div>
};

export default connect()(SignIn)