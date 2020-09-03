import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {encreaseProduct,
    decreaseProduct,
    deleteProduct} from "../../actions/productList-actions";
import {FaMinusCircle, FaPlusCircle} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import "./cart-item.scss";

const CartItem = ({cartItem, idx, encreaseProduct, decreaseProduct, deleteProduct}) => {

    const {_id, name, count, price} = cartItem;

    return <React.Fragment>
        <div className = "cart-item" >
            <span>{idx + 1}</span>
            <span>{name}</span>
            <div className = "cart-item__operation" >
                <FaMinusCircle
                    className = "cart-item__btn"
                    onClick = {() => decreaseProduct(_id)} />
                <span> {count} </span>
                <FaPlusCircle
                    className = "cart-item__btn"
                    onClick = {() => encreaseProduct(_id)} />
            </div>
            <span>{price}</span>
            <MdDeleteForever
                className = "cart-item__delete"
                onClick = {() => deleteProduct(_id)} />
        </div>
        <hr className = "cart__hr" />
    </React.Fragment>
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    encreaseProduct: (id) => encreaseProduct(id),
    decreaseProduct: (id) => decreaseProduct(id),
    deleteProduct: (id) => deleteProduct(id)
}, dispatch);

export default connect(null, mapDispatchToProps)(CartItem)