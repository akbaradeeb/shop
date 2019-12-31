import React,{ Component } from 'react';
import MainContext from "../../../../context/MainContext";
import ProvideCombinedContext from "../../../../context/ProvideCombinedContext";  
import axios from 'axios';

class Cart extends Component{
    static contextType = MainContext;

    constructor(props)
    {
        super(props);
    } 

    render() {
        let cart  = this.context.user.user.cart;
        return (
             <React.Fragment>
                <div class="wn__order__box">
                    <h3 class="onder__title">Your order</h3>
                    <ul class="order__total">
                        <li>Product</li>
                        <li>Total</li>
                    </ul>
                    <ul class="order_product">
                        {cart.items.map(item=>
                            <li>{item.name} × {item.quantity}<span>${item.price}</span></li> 
                        )}    
                    </ul>
                    <ul class="shipping__method">
                        <li>Cart Subtotal <span>${cart.subtotal}</span></li>
                        <li>Shipping <span>${cart.shipping_charge}</span></li>
                    </ul>
                    <ul class="total__amount">
                        <li>Order Total <span>${cart.grand_total}</span></li>
                    </ul>
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