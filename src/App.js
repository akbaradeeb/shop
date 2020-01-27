import React,{Component} from 'react';
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
import Checkout from './components/Pages/Checkout/Onepage';
import Success  from './components/Pages/Checkout/Success';

import AlertState from './context/alert/AlertState';
import UserState from './context/user/UserState';

class App extends Component {

  constructor(props)
   {
     super(props); 
   }

   componentDidMount()
   { 
     
   }

   render() {
    return (
     
      <div class="wrapper" id="wrapper">
         <UserState>
          <AlertState>
          <Router basename="/shop">  
          <Header/>
          
          <Switch>
                  <Route exact path='/' component={ Home } />
                  <Route exact path='/product' component={ ProductList } />
                  <Route exact path='/product-detail/:product_id' component={ ProductDetail } />
                  <Route exact path='/cart' component={ Cart } />
                  <Route exact path='/wishlist' component={ Wishlist } />
                  <Route exact path='/checkout' component={ Checkout } />
                  <Route exact path='/success'  component={ Success } />
            </Switch>
            
            <Footer/>
            </Router> 
            </AlertState>
          </UserState>        
      </div>
       
    );
   }
}

export default App;
