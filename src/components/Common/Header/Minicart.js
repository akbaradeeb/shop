import React,{ Component } from 'react';
import axios from 'axios';

class Minicart extends Component{ 
    
    constructor(props){
        super(props);
        this.state = {
            visible:false,
            cart:{items:[]}
        } 
    }

    showHideCart = () => {
        const currentState = this.state.visible;
        this.setState({ visible: !currentState });     
    };

    deleteItem = (item) =>{
        const obj = {cart_id:item.cart_id};
		axios.post('http://localhost/opencart/api/remove-cart-item.php',obj)
			 .then(res=>{
                        this.props.main.user.fetchMinicart(); 
                        this.props.main.alert.setAlert('Product Deleted from cart','success');
                  });
    }

    render() {

        let minicart_class = "block-minicart minicart__active ";
        minicart_class+= this.state.visible === true ? "is-visible" : "";

        return (
            
            <li class="shopcart"><a class="cartbox_active" href="#"><span class="product_qun" onClick={this.showHideCart} >{this.props.main.user.user.cart.total}</span></a>
                    
            <div className={minicart_class}>
            <div class="minicart-content-wrapper">
                <div class="micart__close" onClick={this.showHideCart} >
                 <span>close</span> 
                </div>
                <div class="items-total d-flex justify-content-between">
                <span>0 items</span>
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
                {this.props.main.user.user.cart.items.map(item=>
                    <div class="item01 d-flex">
                    <div class="thumb">
                        <a href="product-details.html"><img src="images/product/sm-img/1.jpg" alt="product images"/></a>
                    </div>
                    <div class="content">
                        <h6><a href="product-details.html">Voyage Yoga Bag</a></h6>
                        <span class="prize">$30.00</span>
                        <div class="product_prize d-flex justify-content-between">
                        <span class="qun">Qty: {item.quantity}</span>
                        <ul class="d-flex justify-content-end">
                            <li><a href="#"><i class="zmdi zmdi-settings"></i></a></li>
                            <li><a href="#" onClick={()=>this.deleteItem(item)}><i class="zmdi zmdi-delete"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                )}
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