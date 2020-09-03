import {ADD_PRODUCT_TO_CART,
    DECREASE_PRODUCT,
    ENCREASE_PRODUCT,
    DELETE_PRODUCT,
    ALL_PRODUCTS_SUCESS,
    PRODUCTS_IS_LOADING,
    PRODUCT_UPDATE} from "../actions/constants";

const initialState = {
    productsList: [],
    cart: [],
    total: 0,
    isLoading: true,
    wasUpdated: false
};

const operationInCart = (state, id, countProduct) => {

    const productsList = state.productsList;
    const cart = state.cart;

    const idCart = cart.findIndex( item => item._id === id);
    const cartItem = cart[idCart];

    const idProducts = productsList.findIndex(item => item._id === cartItem._id);
    const productItem = productsList[idProducts];

    const updateCartItem = {
        ...cartItem,
        count: cartItem.count + countProduct,
        price: cartItem.price + countProduct * productItem.price
    };

    if (!updateCartItem.count) {
        return {
            ...state,
            cart: [
                ...cart.slice(0, idCart),
                ...cart.slice(idCart + 1)
            ],
            total: state.total - productItem.price
        };
    }

    return {...state,
        cart: [
            ...state.cart.slice(0, idCart),
            updateCartItem,
            ...state.cart.slice(idCart + 1),
        ],
        total: state.total + countProduct * productItem.price
    };
};

const products = (state = initialState, action) => {

    const products = state.productsList;
    const cart = state.cart;
    const total = state.total;

    switch (action.type) {

        case PRODUCT_UPDATE:

            console.log(1);

            return {
                ...state,
                wasUpdated: !state.wasUpdated
            };

        case PRODUCTS_IS_LOADING:
            return {
                ...state,
                isLoading: false
            };

        case ALL_PRODUCTS_SUCESS:
            return {
                ...state,
                productsList: action.payload
            };

        case ADD_PRODUCT_TO_CART:
            const indProducts = products.findIndex( item => item._id === action.id);
            const newItemCart = {...products[indProducts], count: 1};

            const indInCart = cart.findIndex( item => item._id === action.id);
            const isInCart = cart[indInCart];

            if (isInCart) {
                return state;
            } else {
                return {
                    ...state,
                    cart: [
                        ...cart,
                        newItemCart
                    ],
                    total: total + newItemCart.price
                };
            }

        case ENCREASE_PRODUCT:
            return operationInCart(state, action.id, 1);

        case DECREASE_PRODUCT:
            return operationInCart(state, action.id, -1);

        case DELETE_PRODUCT:
            const indDelete = cart.findIndex( item => item._id === action.id);

            return {
                ...state,
                cart: [
                    ...cart.slice(0, indDelete),
                    ...cart.slice(indDelete + 1)
                ],
                total: total - cart[indDelete].price
            };
        default:
            return state;
    }
};

export {products}