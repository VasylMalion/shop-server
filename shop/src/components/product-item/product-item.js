import React from "react";
import "./product-item.scss";
import {bindActionCreators} from "redux";
import {addProductToCart, } from "../../actions/productList-actions";
import {connect} from "react-redux";

const ProductItem = ({product, addProductToCart, showPopUp, deletePerson}) => {

    return <div className = "product-item" >
        <img src = {product.img} alt = "product" />
        <span className = "product-item__name" > {product.name} </span>
        <span className = "product-item__price" > Ціна: {product.price} </span>
        <button onClick = {() => addProductToCart(product._id)}> Add to order </button>
        <button value={product._id} onClick={showPopUp}> Edit </button>
        <button value={product._id} onClick={() => deletePerson(product._id)}> Delete </button>
    </div>
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addProductToCart: (id) => addProductToCart(id)
}, dispatch);

export default connect(null, mapDispatchToProps)(ProductItem);