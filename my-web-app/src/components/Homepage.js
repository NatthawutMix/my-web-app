import React, { useState, useEffect } from 'react';
import Product from "./Product";
import { connect } from 'react-redux';
import "./Homepage.css"


function Homepage( {products} ) {    
    const [size, setSize] = useState('');
    const [gender, setGender] = useState('');

    return (
        <div className="homepage">
            <select onChange={e => setSize(e.target.value)}>
                <option value="">ALL</option>                
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            <select onChange={e => setGender(e.target.value)}>
                <option value="">ALL</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>     
            <div className="homepage_products">
                {products.filter(product => product.size.includes(size) && product.gender.includes(gender)).map(product => (
                    <Product
                        key={product.id}
                        product={ product }
                    />
                ))}
            </div>            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      products: state.product.products,
    };
};

export default connect(mapStateToProps)(Homepage);
