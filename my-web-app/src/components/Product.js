import React from 'react'
import "./Products.css";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart";

function Product( {product, addToCart} ) {

    return (
        <div className="product">            
            <h3>{product.name}</h3>
            <p>{product.des}</p>      
            <img className="product_img" src={product.image} alt=""/>
            <p className="product_des">Description: {product.description.substring(0, 100)}...</p>            
            <p>Size: {product.size} </p>
            <p>Sex: {product.gender}</p>
            <p>Stock: {product.stock} </p>
            <p>Price: {product.price} Bath</p>
            <button onClick={() => addToCart(product)}>View</button>      
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
    }
}

export default connect(null, mapDispatchToProps)(Product)
