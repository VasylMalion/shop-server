const initialState = {
    isAuth: false
};

const signIn = (state = initialState, action) => {

    switch (action.type) {

        case "AUTH_TRUE":
            console.log(state);
            return {
                ...state,
                isAuth: true
            };
        default:
            return state
    }
};

export {signIn}