import React, { useState, useEffect } from 'react';
import Product from "./Product";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from "../firebase"

function Homepage( {products, cart, user} ) {    
    const [size, setSize] = useState('');
    const [gender, setGender] = useState('');
    const [countItem, setCountItem] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });
        setCountItem(count)
    }, [cart])

    const signOut = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div>        
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
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>            
            <Link to="/update">Update</Link>         
            <Link to={!user && '/login'}>
                <div onClick={signOut}>
                    {!user? 'Guest' : user.email}
                    <p>
                        {!user? 'Sign In' : 'Sign Out'} 
                    </p>
                                       
                </div>
            </Link>         
            <Link to="/cart">Cart {countItem}</Link>            

            {products.filter(product => product.size.includes(size) && product.gender.includes(gender)).map(product => (
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
      cart: state.cart.cart,
      user: state.cart.user,
    };
};

export default connect(mapStateToProps)(Homepage);
