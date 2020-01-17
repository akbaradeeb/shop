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
        this.state = {addresses:[],
                      payment_methods:[],
                      selected_address:0,
                      selected_payment_method:'',
                      can_show_placeorder_btn:false
                    };
    }

    componentDidMount(){ 
		axios.get('http://localhost/opencart/api/checkout.php')
             .then(response => {
                this.setState({ addresses: response.data.addresses,payment_methods:response.data.payment_methods }); 
             }); 
    } 

    handleAddressSave = (addresses) => {
        axios.post('http://localhost/opencart/api/save-address.php',addresses)
             .then(res=>{
                let address_id = res.data.address_id;
                axios.get('http://localhost/opencart/api/checkout.php')
                    .then(response => {
                      this.setState({ addresses: response.data.addresses }); 
                      this.handleSelectAddress(address_id)
                    });
                }); 
    }

    handleSelectAddress = (address_id) => {
        this.setState({selected_address:address_id})
    }

    handlePaymentSelect = (method) => {
        this.setState({selected_payment_method:method.code});
        this.setState({can_show_placeorder_btn:true})
    }

    handlePlaceOrder = () => {

         if(this.state.selected_payment_method!='' && this.state.selected_address!=0){
            const obj = {
                            payment_method:this.state.selected_payment_method,
                            address_id:this.state.selected_address
                        }; 
            axios.post('http://localhost/opencart/api/place-order.php',obj)
             .then(res=>{
                    alert(res.data.msg);
                 
                });  

         } else {
             alert('Please select Payment Method And Address');
         }
    }

    render() {

        let place_order_btn_class = "col-lg-6 ";
        place_order_btn_class+= this.state.can_show_placeorder_btn === true ? "" : "hide";
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
                                <Address 
                                 addresses = {this.state.addresses}
                                 selected_address  = {this.state.selected_address}
                                 onAddressSave = {this.handleAddressSave}
                                 onAddressSelect = {this.handleSelectAddress} 
                                 />
                                 
                            </div>
                            <div class="col-lg-6 col-12 md-mt-40 sm-mt-40">
                                <Cart/>
                                <Payment 
                                 methods= {this.state.payment_methods}
                                 onPaymentSelect = {this.handlePaymentSelect}
                                />
                                
                                
                                <div className={place_order_btn_class}>
                                    <div class="mt--20">
                                      <button class="btn btn-success" onClick={this.handlePlaceOrder}>Payment</button>
                                    </div>
                                </div> 
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