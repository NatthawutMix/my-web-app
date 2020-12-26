import axios from "../axios";

export const CREATE_PRODUCT = "product/CREATE_PRODUCT";
export const REMOVE_PRODUCT = "product/REMOVE_PRODUCT";
export const UPDATE_PRODUCT = "product/UPDATE_PRODUCT";
export const LIST_PRODUCT = "product/LIST_PRODUCT";

const INITIAL_STATE = {
    products: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LIST_PRODUCT':
            return {
                products: action.product.data
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
                     ? { ...product, 
                            _id: action._id,
                            name: action.product.name,
                            description: action.product.description,
                            price: action.product.price,
                            stock: action.product.stock,
                            gender: action.product.gender,
                            image: action.product.image,
                            size: action.product.size,
                            date: action.product.date,
                        } 
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

export const listProduct = () => {    
    return async dispatch => {
        const product = await axios.get("/product")
        dispatch({
            type: 'LIST_PRODUCT',
            product
        })
    }
        
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



