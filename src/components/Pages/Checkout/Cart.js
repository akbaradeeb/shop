import React,{ Component } from 'react';
import MainContext from "../../../context/MainContext";
import ProvideCombinedContext from "../../../context/ProvideCombinedContext";  
import axios from 'axios';

class Cart extends Component{
    static contextType = MainContext;

    constructor(props)
    {
        super(props);
    }

    deleteItem = (item) =>{
        const obj = {cart_id:item.cart_id};
		axios.post('http://localhost/opencart/api/remove-cart-item.php',obj)
			 .then(res=>{
                        this.context.user.fetchMinicart(); 
                        this.context.alert.setAlert('Product Deleted from cart','success');
                  });
    }

    render() {
        let cart = this.context.user.user.cart;
        return (
             <React.Fragment>
                 <div class="ht__bradcaump__area bg-image--3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bradcaump__inner text-center">
                        	<h2 class="bradcaump-title">Shopping Cart</h2>
                            <nav class="bradcaump-content">
                              <a class="breadcrumb_item" href="index.html">Home</a>
                              <span class="brd-separetor">/</span>
                              <span class="breadcrumb_item active">Shopping Cart</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
        <div class="cart-main-area section-padding--lg bg--white">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 ol-lg-12">
                        <form action="#">               
                            <div class="table-content wnro__table table-responsive">
                                <table>
                                    <thead>
                                        <tr class="title-top">
                                            <th class="product-thumbnail">Image</th>
                                            <th class="product-name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product-quantity">Quantity</th>
                                            <th class="product-subtotal">Total</th>
                                            <th class="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.items.map(item=>
                                        <tr>
                                            <td class="product-thumbnail"><a href="#"><img src={item.image} alt="product img"/></a></td>
                                            <td class="product-name"><a href="#">{item.name}</a></td>
                                            <td class="product-price"><span class="amount">${item.price}</span></td>
                                            <td class="product-quantity"><input type="number" value={item.quantity} /></td>
                                            <td class="product-subtotal">${item.price}</td>
                                            <td class="product-remove"><a href="#" onClick={()=>this.deleteItem(item)}>X</a></td>
                                        </tr>
                                        )}  
                                    </tbody>
                                </table>
                            </div>
                        </form> 
                        <div class="cartbox__btn">
                            <ul class="cart__btn__list d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li><a href="/checkout">Check Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 offset-lg-6">
                        <div class="cartbox__total__area">
                            <div class="cartbox-total d-flex justify-content-between">
                                <ul class="cart__total__list">
                                    <li>Sub total</li>
                                    <li>Shipping Charge</li>
                                </ul>
                                <ul class="cart__total__tk">
                                    <li>${cart.subtotal}</li>
                                    <li>${cart.shipping_charge}</li>
                                </ul>
                            </div>
                            <div class="cart__total__amount">
                                <span>Grand Total</span>
                                <span>${cart.grand_total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
             </React.Fragment>
        );
    }
}

const WrappedCart = props => {
    return (
      <ProvideCombinedContext>
        <Cart {...props} />
      </ProvideCombinedContext>
    );
  };
   
export default WrappedCart; 