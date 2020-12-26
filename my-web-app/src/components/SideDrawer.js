import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./SideDrawer.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { auth } from "../firebase"

function SideDrawer( {user, cart, show, click} ) {
    const sideDrawerClass = ["sidedrawer"];
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

    if(show) {
        sideDrawerClass.push("show");
    }
    
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer_links" onClick={click}>
                <li>
                    <Link to={!user && '/login'}>
                        <div onClick={signOut}>
                            {!user? 'Guest' : user.email}
                            <p>
                                {!user? 'Sign In' : 'Sign Out'} 
                            </p>
                                            
                        </div>
                    </Link>   
                </li>
                <li>
                    <Link to='/cart' className="sidedrawer_link">
                        <ShoppingCartIcon />
                        <span className="sidedrawer_cart_badge">{countItem}</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        SHOP
                    </Link>
                </li>
            </ul>
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

export default connect(mapStateToProps)(SideDrawer)
