import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';

function Cart( {cart} ) {
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, settotalPrice] = useState(0);

    useEffect(() => {
        let items = 0;
        let prices = 0;
        cart.forEach(item => {
            items += item.qty
            prices += item.qty * item.price
        });
        setTotalItems(items);
        settotalPrice(prices);
    }, [cart, totalItems,totalPrice])

    return (
        <div>
            <Link to="/">Home</Link>
            <p>totalItems: {totalItems}</p>
            <p>totalPrice: {totalPrice}</p>
            {cart.map((item) => (
                <ItemCart 
                    key={item._id}
                    item={ item } 
                />
            ))}
           
        </div>
    )
}

export const mapStateToProps = (state) =>{
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart);
