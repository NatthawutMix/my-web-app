import React, { useState } from 'react';
import Product from "./Product";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Homepage( {products} ) {    
    const [size, setSize] = useState('')       
    return (
        <div>
            <select onChange={e => setSize(e.target.value)}>
                <option value="">ALL</option>
                <option value="S">S</option>
                <option value="M">M</option>
            </select>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>            
            <Link to="/update">Update</Link>            
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
      products: state.product.products
    };
};

export default connect(mapStateToProps)(Homepage);
