import React, { useState, useEffect } from 'react';
import Product from "./Product";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Homepage( {products, cart} ) {    
    const [size, setSize] = useState('');
    const [countItem, setCountItem] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });
        setCountItem(count)

    }, [cart])
    return (
        <div>
            <select onChange={e => setSize(e.target.value)}>
                <option value="">ALL</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>            
            <Link to="/update">Update</Link>         
            <Link to="/cart">Cart {countItem}</Link>
            

            {products.filter(product => product.size.includes(size)).map(product => (
                        <Product
                            key={product.id}
                            product={ product }
                        />
                    ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      products: state.product.products,
      cart: state.cart.cart
    };
};

export default connect(mapStateToProps)(Homepage);
