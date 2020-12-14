export const ADD_TO_CART = "cart/ADD_TO_CART";
export const REMOVE_FROM_CART ="cart/REMOVE_FROM_CART";
export const SET_USER ="cart/SET_USER";

const INITIAL_STATE = {
    cart: [],
    user: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = action.product;
            
            const inCart = state.cart.find((item) =>
                item._id === action.product._id ? true : false
            );
            return {
                ...state,
                cart: inCart 
                    ? state.cart.map((item) => 
                        item._id === action.product._id
                            ? {...item, qty: item.qty +1}
                            : item
                    )
                    : [...state.cart, {...item, qty:1}],
            }
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart];
    
            const index = state.cart.findIndex(
                (Item) => Item._id === action._id
            )
            if (index >= 0){
                newCart.splice(index,1);
            } else {
                console.warn(
                    `Cant remove (id: ${action._id} )`
                );
            }
            return {
                ...state, cart:newCart
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export const addToCart = (product) => {
    return dispatch =>
        dispatch({
            type: 'ADD_TO_CART',
            product
        })
}

export const removeItem = (_id) => {
    return dispatch =>
        dispatch({
            type: 'REMOVE_FROM_CART',
            _id
        })
}

export const setUser = (user) => {
    return dispatch =>
        dispatch({
            type: 'SET_USER',
            user
        })
}