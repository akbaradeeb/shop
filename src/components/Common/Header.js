import React,{Component} from 'react';
import Search from './Header/Search';
import Wishlist from './Header/Wishlist';
import Minicart from './Header/Minicart';
import Account from './Header/Account';
import Menu from './Header/Menu';
import Alert from './../Common/Alert';

import MainContext from "../../context/MainContext";
import ProvideCombinedContext from "../../context/ProvideCombinedContext";

class Header extends Component{

    static contextType = MainContext;

    constructor(props)
    {
        super(props);
    }

    componentDidMount(){ 
        this.context.user.fetchMinicart(); 
	} 

    render() {
        return (
             
                <header id="wn__header" class="header__area header__absolute sticky__header">
                     
                    <div class="container-fluid">
                        <div class="row">
                        <div class="col-md-6 col-sm-6 col-6 col-lg-2">
                            <div class="logo">
                            <a href="index.html">
                                <img src="images/logo/logo.png" alt="logo images"/>
                            </a>
                            </div>
                        </div>
                        <Menu/>
                        <div class="col-md-6 col-sm-6 col-6 col-lg-2">
                            <ul class="header__sidebar__right d-flex justify-content-end align-items-center">
                            <Search/>
                            <Wishlist/>
                            <Minicart main = {this.context} />
                            <Account/>
                            </ul>
                        </div>
                        </div>
                        
                        <div class="row d-none">
                        <div class="col-lg-12 d-none">
                            <nav class="mobilemenu__nav">
                            <ul class="meninmenu">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="#">Pages</a>
                                <ul>
                                    <li><a href="about.html">About Page</a></li>
                                    <li><a href="portfolio.html">Portfolio</a>
                                    <ul>
                                        <li><a href="portfolio.html">Portfolio</a></li>
                                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="cart.html">Cart Page</a></li>
                                    <li><a href="checkout.html">Checkout Page</a></li>
                                    <li><a href="wishlist.html">Wishlist Page</a></li>
                                    <li><a href="error404.html">404 Page</a></li>
                                    <li><a href="faq.html">Faq Page</a></li>
                                    <li><a href="team.html">Team Page</a></li>
                                </ul>
                                </li>
                                <li><a href="shop-grid.html">Shop</a>
                                <ul>
                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                    <li><a href="single-product.html">Single Product</a></li>
                                </ul>
                                </li>
                                <li><a href="blog.html">Blog</a>
                                <ul>
                                    <li><a href="blog.html">Blog Page</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                        
                            <div class="mobile-menu d-block d-lg-none">
                            </div>

                              
                    </div>	

                    <div class="col-md-12 col-sm-12 col-12 col-lg-12">
                     <Alert/>
                    </div>   	
                </header>

                  
     
        );
    }
}

const WrappedHeader = props => {
    return (
      <ProvideCombinedContext>
        <Header {...props} />
      </ProvideCombinedContext>
    );
  };
   
export default WrappedHeader;