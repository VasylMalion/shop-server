import {ADD_PRODUCT_TO_CART,
    DECREASE_PRODUCT,
    ENCREASE_PRODUCT,
    DELETE_PRODUCT,
    ALL_PRODUCTS_SUCESS,
    PRODUCTS_HAS_ERRORED,
    PRODUCTS_IS_LOADING,
    PRODUCT_UPDATE} from "./constants";

import axios from "axios";

export function productsHasErrored(error) {
    return {
        type: PRODUCTS_HAS_ERRORED,
        hasErrored: error
    }
}

function productsIsLoading() {
    return {
        type: PRODUCTS_IS_LOADING,
    }
}

const allProducts = (products) => {
    return {
        type: ALL_PRODUCTS_SUCESS,
        payload: products
    }
};

const allAxiosProduct = (url) => {
    return (dispatch) => {
        axios.get(`${url}`)
            .then( a => a.data)
            .then( data => dispatch(allProducts(data)))
            .catch(error => productsHasErrored(error));
    }
};

const addProductToCart = (id) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        id
    }
};

const encreaseProduct = (id) => {
    return {
        type: ENCREASE_PRODUCT,
        id
    }
};

const decreaseProduct = (id) => {
    return {
        type: DECREASE_PRODUCT,
        id
    }
};

const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        id
    }
};

export function productUpdate(bool) {
    return {
        type: PRODUCT_UPDATE,
        wasUpdated: bool
    }
}

function productPushData(url, data) {
    return dispatch => {
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                dispatch(productUpdate(true));
                return response
            })
            .then(response => response.json())
            .then(persons => console.log(persons))
            .catch(()=>{})
    }
}

function productUpdateData(url, data) {
    return dispatch => {
        fetch(url, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                dispatch(productUpdate(true));
                return response
            })
            .then(response => response.json())
            .then(persons => console.log(persons))
            .catch(()=> {})
    }
}

function productDeleteData(url) {
    return dispatch => {
        fetch(url, {
            method: "DELETE"
        })
            .then(response => {
                dispatch(productUpdate(true));
                return response
            })
            .then(response => response.json())
            .catch(()=> {console.log("Error with deleting")})
    }
}

export {
    addProductToCart,
    encreaseProduct,
    decreaseProduct,
    deleteProduct,
    allAxiosProduct,
    productsIsLoading,
    productPushData,
    productUpdateData,
    productDeleteData
}