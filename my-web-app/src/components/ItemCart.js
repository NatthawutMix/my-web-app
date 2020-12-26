import React from 'react';
import "./ItemCart.css";
import { connect } from "react-redux";
import { removeItem } from "../redux/cart";

function ItemCart( {item, removeItem} ) {
    return (
        <div className="itemCart">
            <h3>{item.name}</h3>
            <p>{item.des}</p>      
            <img className="itemCart_img" src={item.image} alt=""/>
            <p>Size {item.size} </p>
            <p>Stock: {item.stock} </p>
            <p>Price: {item.price} Bath</p>
            <p>Qty: {item.qty} </p>
            <button onClick={() => removeItem(item._id)}>Remove</button>    
        </div>
    )
}

export const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: id => dispatch(removeItem(id)),
    }
}

export default connect(null,mapDispatchToProps)(ItemCart)
