import './App.css';
import React, { useState, useEffect } from 'react'
import axios from "./axios"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import CreateProduct from "./components/CreateProduct";
import UpdateProduct from "./components/UpdateProduct";
import Cart from "./components/Cart";
import Login from "./components/Login"
import Profile from "./components/Profile"
import Header from "./components/Header"
import Backdrop from "./components/Backdrop"
import Sidedrawer from "./components/SideDrawer"

import { auth } from "./firebase";

import { listProduct } from "../src/redux/product";
import { setUser } from "../src/redux/cart";
import { connect } from 'react-redux';

function App( {listProduct, setUser} ) {

  const [sideToggle, setSideToggle] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(authUser)
      }
    })

    async function fetchData() {        
      listProduct();
    }
    fetchData();      
  }, [])  
  
  return (
    <Router>
       <div className="App">
          <Switch>      
            <Route path="/update">
              <Header click={() => setSideToggle(true)} />
              <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
              <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
              <UpdateProduct />
            </Route>
            <Route path="/create">
              <Header click={() => setSideToggle(true)} />
              <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
              <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
              <CreateProduct />
            </Route>
            <Route path="/cart">
              <Header click={() => setSideToggle(true)} />
              <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
              <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
              <Cart />
            </Route>
            <Route path="/login">
              <Header click={() => setSideToggle(true)} />
              <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
              <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
              <Login />
            </Route>
            <Route path="/profile">
              <Header click={() => setSideToggle(true)} />
              <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
              <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
              <Profile />
            </Route>
            <Route path="/">
              <Header click={() => setSideToggle(true)} />
              <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
              <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>              
              <Homepage />
            </Route>
          </Switch>      
      </div>
    </Router>
   
  );
}
const mapStateToProps = (state) => {
  return {
      products: state.product.products,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      listProduct: () => dispatch(listProduct()),
      setUser: (user) => dispatch(setUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
