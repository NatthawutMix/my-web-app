import React from 'react'
import "./Products.css";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart";

function Product( {product, addToCart} ) {
    return (
        <div className="product">
            <div className="product_container" >
                <h3>{product.name}</h3>
                <p>{product.des}</p>      
                <img className="product_img" src={product.image} alt=""/>
                <p>Size {product.size} </p>
                <p>Stock: {product.stock} </p>
                <p>Price: {product.price} Bath</p>
                <button onClick={() => addToCart(product)}>BUY</button>    
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
    }
}

export default connect(null, mapDispatchToProps)(Product)
