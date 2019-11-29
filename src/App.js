import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Home from './components/Pages/Home/Home';
import ProductList from './components/Pages/Catalog/ProductList';
import ProductDetail from './components/Pages/Catalog/ProductDetail';
import Cart from './components/Pages/Checkout/Cart';
import Wishlist from './components/Pages/Wishlist/Wishlist';

function App() {
  return (
     
    <div class="wrapper" id="wrapper">
       <Header/>
       <Router>
       <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/product' component={ ProductList } />
              <Route exact path='/product-detail' component={ ProductDetail } />
              <Route exact path='/cart' component={ Cart } />
              <Route exact path='/wishlist' component={ Wishlist } />
        </Switch>
        </Router> 
       <Footer/>     
    </div>
     
  );
}

export default App;
