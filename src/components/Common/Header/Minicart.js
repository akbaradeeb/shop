import React,{ Component } from 'react';

class Minicart extends Component{
    render() {
        return (
            <li class="shopcart"><a class="cartbox_active" href="#"><span class="product_qun">3</span></a>
                    
            <div class="block-minicart minicart__active">
            <div class="minicart-content-wrapper">
                <div class="micart__close">
                <span>close</span>
                </div>
                <div class="items-total d-flex justify-content-between">
                <span>3 items</span>
                <span>Cart Subtotal</span>
                </div>
                <div class="total_amount text-right">
                <span>$66.00</span>
                </div>
                <div class="mini_action checkout">
                <a class="checkout__btn" href="cart.html">Go to Checkout</a>
                </div>
                <div class="single__items">
                <div class="miniproduct">
                    <div class="item01 d-flex">
                    <div class="thumb">
                        <a href="product-details.html"><img src="images/product/sm-img/1.jpg" alt="product images"/></a>
                    </div>
                    <div class="content">
                        <h6><a href="product-details.html">Voyage Yoga Bag</a></h6>
                        <span class="prize">$30.00</span>
                        <div class="product_prize d-flex justify-content-between">
                        <span class="qun">Qty: 01</span>
                        <ul class="d-flex justify-content-end">
                            <li><a href="#"><i class="zmdi zmdi-settings"></i></a></li>
                            <li><a href="#"><i class="zmdi zmdi-delete"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="item01 d-flex mt--20">
                    <div class="thumb">
                        <a href="product-details.html"><img src="images/product/sm-img/3.jpg" alt="product images"/></a>
                    </div>
                    <div class="content">
                        <h6><a href="product-details.html">Impulse Duffle</a></h6>
                        <span class="prize">$40.00</span>
                        <div class="product_prize d-flex justify-content-between">
                        <span class="qun">Qty: 03</span>
                        <ul class="d-flex justify-content-end">
                            <li><a href="#"><i class="zmdi zmdi-settings"></i></a></li>
                            <li><a href="#"><i class="zmdi zmdi-delete"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="item01 d-flex mt--20">
                    <div class="thumb">
                        <a href="product-details.html"><img src="images/product/sm-img/2.jpg" alt="product images"/></a>
                    </div>
                    <div class="content">
                        <h6><a href="product-details.html">Compete Track Tote</a></h6>
                        <span class="prize">$40.00</span>
                        <div class="product_prize d-flex justify-content-between">
                        <span class="qun">Qty: 03</span>
                        <ul class="d-flex justify-content-end">
                            <li><a href="#"><i class="zmdi zmdi-settings"></i></a></li>
                            <li><a href="#"><i class="zmdi zmdi-delete"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="mini_action cart">
                <a class="cart__btn" href="cart.html">View and edit cart</a>
                </div>
            </div>
            </div>
            
        </li>
        );
    }
}

export default Minicart;