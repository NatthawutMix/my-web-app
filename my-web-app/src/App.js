import './App.css';
import React, { useEffect } from 'react'
import axios from "./axios"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import CreateProduct from "./components/CreateProduct";
import UpdateProduct from "./components/UpdateProduct";
import Cart from "./components/Cart";

import { startPage } from "../src/redux/product";
import { connect } from 'react-redux';

function App( {startPage} ) {

  useEffect(() => {
    async function fetchData() {
        const req = await axios.get("/product")
        startPage(req.data);
    }
    fetchData();        
  }, [])  
  
  return (
    <Router>
       <div className="App">
          <Switch>      
            <Route path="/update">
              <UpdateProduct />
            </Route>
            <Route path="/create">
              <CreateProduct />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>      
      </div>
    </Router>
   
  );
}
const mapStateToProps = (state) => {
  return {
      products: state.product.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      startPage: (product) => dispatch(startPage(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
