import React,{ Component } from 'react';
import MainContext from "../../../../context/MainContext";
import ProvideCombinedContext from "../../../../context/ProvideCombinedContext";  
import axios from 'axios';

class Payment extends Component{
    static contextType = MainContext;

    constructor(props)
    {
        super(props);
    } 

    render() {
        return (
             <React.Fragment>
                 <div id="accordion" class="checkout_accordion mt--30" role="tablist">
                    <div class="payment">
                        <div class="che__header" role="tab" id="headingOne">
                            <a class="checkout__title" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span>Direct Bank Transfer</span>
                            </a>
                        </div>
                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="payment-body">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</div>
                        </div>
                    </div>
                    <div class="payment">
                        <div class="che__header" role="tab" id="headingTwo">
                            <a class="collapsed checkout__title" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span>Cheque Payment</span>
                            </a>
                        </div>
                        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="payment-body">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</div>
                        </div>
                    </div>
                    <div class="payment">
                        <div class="che__header" role="tab" id="headingThree">
                            <a class="collapsed checkout__title" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span>Cash on Delivery</span>
                            </a>
                        </div>
                        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="payment-body">Pay with cash upon delivery.</div>
                        </div>
                    </div>
                    <div class="payment">
                        <div class="che__header" role="tab" id="headingFour">
                            <a class="collapsed checkout__title" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span>PayPal <img src="images/icons/payment.png" alt="payment images"/> </span>
                            </a>
                        </div>
                        <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                            <div class="payment-body">Pay with cash upon delivery.</div>
                        </div>
                    </div>
                </div>
             </React.Fragment>
        );
    }
}

const WrappedPayment = props => {
    return (
      <ProvideCombinedContext>
        <Payment {...props} />
      </ProvideCombinedContext>
    );
  };
   
export default WrappedPayment; 