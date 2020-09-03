import React, {useEffect, useState, Component} from "react";
import ProductItem from "../product-item/product-item";
import {connect} from "react-redux";
import {allAxiosProduct, productsIsLoading, productPushData,
    productUpdateData, productDeleteData} from "../../actions/productList-actions"
import "./products.scss";
import {bindActionCreators} from "redux";
import {Loading} from "../loading/loading";
import PopUp from "../popUp/popUp";

const Products = ({products, loading, allAxiosProduct, productsIsLoading,
                      pushData, wasUpdated, updateData, deleteData, newProduct, setNewProduct}) => {

    const [term, setTerm] = useState('');

    useEffect( () => {
        allAxiosProduct('http://localhost:4000/api/products');
        productsIsLoading();
    }, [wasUpdated]);

    if (loading) {
        return <Loading/>
    }

    const showPopUp = (e) => {
        setNewProduct({
            ...newProduct,
            displayStyle: "d-block",
            currentId: e.target.value
        })
    };

    const closePopUp = () => {
        setNewProduct({
            ...newProduct,
            displayStyle: ""
        })
    };

    const deletePerson = async (id) => {

            deleteData(`http://localhost:4000/api/products/${id}`)
    };

    const onSearchChange = (e) => {
        setTerm(e.target.value);
    };

    const findProduct = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter( item => {
            return item.name.toUpperCase().indexOf(term.toUpperCase()) > -1
        })
    };

    const productsMap = findProduct(products, term).map( (product, idx) => <div
        className = "products__item"
        key = {idx} >
            <ProductItem
                updatedData = {newProduct.updatedData}
                deletePerson = {deletePerson}
                showPopUp = {showPopUp}
                product={product} />
    </div>);


    return <div className = "products" >
        <PopUp
            visibility={newProduct.displayStyle}
            closePopUp={closePopUp}
            updateData = {updateData}
            updatedData={newProduct.updatedData}
            newProduct = {newProduct}
            setNewProduct={setNewProduct}
        />
        <div className = "search">
            <span>Пошук: </span>
            <input className = "search__input" type="text" value = {term} onChange = {onSearchChange} />
        </div>
        <span className = "products__map" > {productsMap} </span>
        <section className="container">
            {/*<div className="login">*/}
            {/*    <h1>Додати товар</h1>*/}
            {/*    <form onSubmit={handleSubmit}>*/}
            {/*        <p><input id="name"*/}
            {/*                  type="text"*/}
            {/*                  onChange={handleChange}*/}
            {/*                  value={newProduct.data.name}*/}
            {/*                  placeholder="Назва товару" /></p>*/}
            {/*        <p><input id="price"*/}
            {/*                  type="text"*/}
            {/*                  onChange={handleChange}*/}
            {/*                  value={newProduct.data.price}*/}
            {/*                  placeholder="Ціна товару" /></p>*/}
            {/*        <p><input id="count"*/}
            {/*                  type="text"*/}
            {/*                  onChange={handleChange}*/}
            {/*                  value={newProduct.data.count} placeholder="Кількість товару"/></p>*/}
            {/*        <p><input id="img"*/}
            {/*                  type="text"*/}
            {/*                  onChange={handleChange}*/}
            {/*                  value={newProduct.data.img}*/}
            {/*                  placeholder="Фото товару" /></p>*/}
            {/*        <p className="submit"><button className = "btn" type="submit">Підтвердити</button></p>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </section>
    </div>
};

const mapStateToProps = ({products}) => {
    return {
        products: products.productsList,
        loading: products.isLoading,
        wasUpdated: products.wasUpdated
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    allAxiosProduct: (url) => allAxiosProduct(url),
    productsIsLoading,
    pushData: (url, q) => productPushData(url,q),
    deleteData: (url) => productDeleteData(url),
    updateData: (url, data) => productUpdateData(url, data)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
