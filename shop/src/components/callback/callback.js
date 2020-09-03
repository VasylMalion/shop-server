import React, { Component } from 'react';
// import loading from './loading.svg';
import {withAuth} from '../auth/LoginPage'

class Callback extends Component {
    componentDidMount(){
        const {handleAuthentication} = this.props;
        if(handleAuthentication){
            handleAuthentication()
        }
    }

    render() {
        return (

               <span>loading</span>

        );
    }
}

export default withAuth(Callback);