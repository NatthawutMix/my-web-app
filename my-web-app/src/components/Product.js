import React from 'react'
import "./Products.css";
function Product( {product} ) {
    return (
        <div className="product">
            <div className="product_container" >
                <h3>{product.name}</h3>
                <p>{product.des}</p>      
                <img className="product_img" src={product.image} alt=""/>
                <p>Size {product.size} </p>
                <p>Stock: {product.stock} </p>
                <p>Price: {product.price} Bath</p>          
            </div>
        </div>
    )
}

export default Product
