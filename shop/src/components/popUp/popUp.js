import React, { Component } from "react";
import "./popUp.scss";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {productUpdateData} from "../../actions/productList-actions";

const PopUp = ({visibility, closePopUp, updateData,
                   updatedData = [], newProduct, setNewProduct}) => {

    const handlePopUpChange = (e) => {
        let {...updatedData} = newProduct.updatedData;
        updatedData[e.target.id] = e.target.value;
        setNewProduct({
            ...newProduct,
            updatedData
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
    };

    const clc = () => {
        updateData(`http://localhost:4000/api/products/${newProduct.currentId}`, newProduct.updatedData);
        setNewProduct({
            ...newProduct,
            updatedData: {
                name: "",
                price: "",
                count: "",
                img: ""
            },
            displayStyle: ""
        })
    };

    return(
        <div className={`pop-up ${visibility}`}>
            <form onSubmit={handleUpdate}>
                <label className="pop-up-label" htmlFor="name"> Назва </label>
                <input id="name" type="text" value={updatedData.name} onChange={handlePopUpChange}/>
                <label className="pop-up-label" htmlFor="age"> Ціна </label>
                <input id="price" type="text" value={updatedData.price} onChange={handlePopUpChange}/>
                <label className="pop-up-label" htmlFor="status"> Кількість </label>
                <input id="count" type="text" value={updatedData.count} onChange={handlePopUpChange}/>
                <label className="pop-up-label" htmlFor="status"> Фото </label>
                <input id="img" type="text" value={updatedData.img} onChange={handlePopUpChange}/>
                <br />
                <button className="btn" onClick={clc}> Обновити </button>
            </form>
            <div className="close-btn" onClick={closePopUp}>X</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => bindActionCreators({
    updateData: (url, data) => productUpdateData(url, data)
}, dispatch);

export default connect(null, mapDispatchToProps)(PopUp);