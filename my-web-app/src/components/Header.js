import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { auth } from "../firebase"
import { Dropdown, Button } from "react-bootstrap"
import { useHistory } from 'react-router-dom';
import "./Header.css";

function Header( {user, cart, click} ) {
    const history = useHistory();
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
            history.push('/')
        }
    }

    return (
        <div className="header">
            <div className="header_logo">
                <h1>My-Web-App</h1>
            </div>
            <ul className="header_links">
                <li>
                    {user ? (
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {user.email}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link class="dropdown-item" to="/profile">
                                    Profile
                                </Link>                                                                
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={signOut}>Sign Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Link to='/login'>
                            <Button variant="success">Sign In</Button>
                        </Link>
                    )}
                    
                        
                </li>
                <li>
                    <Link to='/cart' className="cart_link">
                        <ShoppingCartIcon />
                        <span className="cart_badge">{countItem}</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        SHOP
                    </Link>
                </li>                
            </ul>
            <div className="header_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
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

export default connect(mapStateToProps)(Header)
