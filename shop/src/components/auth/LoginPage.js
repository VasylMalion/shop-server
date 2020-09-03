import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import auth0 from "auth0-js";
import {connect} from "react-redux";
import {setAuth} from "../../actions/sign-in-actions";
import {combineReducers} from "redux";

const  {Provider, Consumer: AuthConsumer} = React.createContext({
    isAuthorized:false
});


class AuthProvider extends React.Component{

    state = {isAuthorized: false};

    auth0 = new auth0.WebAuth({
        domain: "dev-1jn53tau.auth0.com",
        clientID: "62inbAF5V2vT2XDKWRfarjkeOwye834U",
        redirectUri: "http://localhost:3000/callback",
        responseType: "token id_token",
        scope: "openid"

        // domain: "satansdeer.auth0.com",
        // clientID: "60YbEWG6aWwIuyM0FdZkqqm17tbONuKn",
        // redirectUri: "http://localhost:3000/callback",
        // responseType: "token id_token",
        // scope: "openid"
    });

    authorize = () => {
        this.auth0.authorize();
        // this.setState({isAuthorized: true}, () => {
        //     this.props.history.push("/private");
        // })
    };

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken) {
                this.setState({isAuthorized: true}, () => {
                    this.props.history.push("/private");
                })
            } else if (err) {
                console.log(err)
            }
        })
    };

    render(){
       const {isAuthorized} = this.state;

        return(
            <Provider value = {{isAuthorized, authorize: this.authorize, handleAuthentication: this.handleAuthentication}} >
                {this.props.children}
            </Provider>
        );
    }
}

export function withAuth(WrappedComponent) {

    return class AuthHOC extends Component{
        render () {
            return (
                <AuthConsumer>
                    {
                        contextProps => <WrappedComponent {...contextProps} {...this.props} />
                    }
                </AuthConsumer>
            )
        }
    }
}

// const mapStateToProps = (state) => {
//
//     return {
//         isAuth: state.isAuth
//     }
// };
//
// const mapDispatchToProps = dispatch => combineReducers({
//     setAuth: () => setAuth()
// }, dispatch);

const AuthProviderWithRouter = withRouter(AuthProvider);

export { AuthProviderWithRouter as AuthProvider};