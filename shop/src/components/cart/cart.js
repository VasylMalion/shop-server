import React from "react";
import CartItem from "../cart-item/cart-item";
import {connect} from "react-redux";
import "./cart.scss";

const  Cart = ({cart, total}) => {

    const cartMap = cart.map( (item, idx) => <div key = {idx}>
        <CartItem
            cartItem = {item}
            idx = {idx} />
    </div>);

    const isVisibleTotal = cart.length === 0 ?
        <span className = "cart__empty" > The order is empty! </span> :
        <React.Fragment>
        <span className = "cart__title"> Order </span>
        <div className = "cart__items" >
            <span> # </span>
            <span> count </span>
            <span> name </span>
            <span> price total </span>
        </div>
        <hr className = "cart__hr-big" />
        {cartMap}
        <span className = "cart__total" > Total: {total} </span>
            <br />
            <span className = "span_btn" >
                <button className = "btn" > Роздрукувати чек </button>
            </span>
    </React.Fragment>;

    return <div className = "cart" >
        {isVisibleTotal}
    </div>
};

const mapStateToProps = ({products}) => {
    return {
        cart: products.cart,
        total: products.total
    };
};

export default connect(mapStateToProps)(Cart)