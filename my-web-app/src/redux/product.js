import axios from "../axios";

export const CREATE_PRODUCT = "product/CREATE_PRODUCT";
export const REMOVE_PRODUCT = "product/REMOVE_PRODUCT";
export const UPDATE_PRODUCT = "product/UPDATE_PRODUCT";
export const START_PAGE = "product/START_PAGE";

const INITIAL_STATE = {
    products: [],
    cart: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'START_PAGE':
            return {
                products: action.product
            }

        case 'CREATE_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.product]
            }

        case 'REMOVE_PRODUCT':
            let newProducts = [...state.products];

            const index = state.products.findIndex(
                (productItem) => productItem._id === action._id
            )
            if (index >= 0){
                newProducts.splice(index,1);
            } else {
                console.warn(
                    `Cant remove (id: ${action._id} )`
                );
            }
            return {
                ...state, products:newProducts
            }
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                products: state.products.map((product) => 
                    product._id === action._id 
                     ? { ...product, product: action.product }
                     : product
                )
            }

        default:
            return state
    }
}

export const createProduct = (product) => {
    axios.post("/product", product)
    return dispatch =>
        dispatch({
            type: 'CREATE_PRODUCT',
            product
        })
}

export const startPage = (product) => {
    return dispatch =>
        dispatch({
            type: 'START_PAGE',
            product
        })
}

export const updateProduct = (product, _id) => {    
    axios.put(`/product/${_id}`, {
        params: _id,
        data: product
    })
    return dispatch =>
        dispatch({
            type: 'UPDATE_PRODUCT',
            product,
            _id
        })
}

export const removeProduct = (_id) => {
    axios.delete(`/product/${_id}`, {
        params: _id
    })
    return dispatch =>
        dispatch({
            type: 'REMOVE_PRODUCT',
            _id
        })
}



