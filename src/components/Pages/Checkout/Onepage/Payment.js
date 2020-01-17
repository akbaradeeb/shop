import React,{ Component } from 'react';
import MainContext from "../../../../context/MainContext";
import ProvideCombinedContext from "../../../../context/ProvideCombinedContext";

class Payment extends Component{
    static contextType = MainContext;

    constructor(props)
    {
        super(props);
        this.state = {
            visible_payment_id:''
        }
    } 

    render() {
        return (
             <React.Fragment>
                 <div id="accordion" class="checkout_accordion mt--30" role="tablist">
                    {this.props.methods.map(method=> 
                        <div class="payment">
                            <div class="che__header" role="tab" id="headingOne">
                                <a class="checkout__title" data-toggle="collapse" onClick={()=> this.props.onPaymentSelect(method)} href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                 <span>{method.name}</span>
                                </a>
                            </div> 
                       </div>
                    )}                     
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