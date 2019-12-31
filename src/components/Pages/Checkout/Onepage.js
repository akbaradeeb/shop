import React,{ Component } from 'react';
import Address from './Onepage/Address';
import Cart from './Onepage/Cart';
import Payment from './Onepage/Payment';
import MainContext from "../../../context/MainContext";
import ProvideCombinedContext from "../../../context/ProvideCombinedContext";  
import axios from 'axios';


class Onepage extends Component{

    static contextType = MainContext;

    constructor(props){
        super(props);
        this.state = {addresses:[],payment_methods:[]};
    }

    componentDidMount(){ 
		axios.get('http://localhost/opencart/api/checkout.php')
             .then(response => {
                this.setState({ addresses: response.data.addresses }); 
             }); 
	}

    render() {
        return (
            <React.Fragment>
                <div class="ht__bradcaump__area bg-image--4">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="bradcaump__inner text-center">
                                    <h2 class="bradcaump-title">Checkout</h2>
                                    <nav class="bradcaump-content">
                                    <a class="breadcrumb_item" href="index.html">Home</a>
                                    <span class="brd-separetor">/</span>
                                    <span class="breadcrumb_item active">Checkout</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="wn__checkout__area section-padding--lg bg__white">
                    <div class="container">
                         
                        <div class="row">
                            <div class="col-lg-6 col-12">
                                <Address addresses = {this.state.addresses}/>
                                 
                            </div>
                            <div class="col-lg-6 col-12 md-mt-40 sm-mt-40">
                                <Cart/>
                                <Payment methods= {this.state.payment_methods}/>

                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const WrappedOnepage = props => {
    return (
      <ProvideCombinedContext>
        <Onepage {...props} />
      </ProvideCombinedContext>
    );
  };
   
export default WrappedOnepage; 