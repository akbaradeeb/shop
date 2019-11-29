import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Home from './components/Pages/Home/Home';
import Product from './components/Pages/Catalog/Product';
import ProductDetail from './components/Pages/Catalog/ProductDetail';

function App() {
  return (
     
    <div class="wrapper" id="wrapper">
       <Header/>
       <Router>
       <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/product' component={ Product } />
              <Route exact path='/product-detail' component={ ProductDetail } />
        </Switch>
        </Router> 
       <Footer/>     
    </div>
     
  );
}

export default App;
