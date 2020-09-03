import {products} from "./products";
import {signIn} from "./sign-in";
import {combineReducers} from "redux";

const reducer = combineReducers({
    products
});

export {reducer}