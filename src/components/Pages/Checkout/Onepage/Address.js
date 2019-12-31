import React,{ Component } from 'react';
import MainContext from "../../../../context/MainContext";
import ProvideCombinedContext from "../../../../context/ProvideCombinedContext";  
import axios from 'axios';

class Address extends Component{
    static contextType = MainContext;

    constructor(props)
    {
        super(props);
    }
    
    render() {

        let addresses = this.props.addresses;
        return (
             <React.Fragment>
                 <div class="customer_details">
                    <h3>Choose Delivery Addresses</h3>

                    <div class='address-list'>
                        {addresses.map(address=>
                            <div class='checkout_info address-list-address'>
                             <p>{address.full_address}</p>
                             <div class="form__btn"><button class='btn btn-secondary'>Select</button></div>
                            </div>
                        )}

                            <div class='checkout_info address-list-address'>
                              
                             <div class="form__btn"><button class='btn btn-primary'>Add Address</button></div>
                            </div>
                    </div>

                    <div class="address-box">
                     <div class="customar__field">
                        <div class="margin_between">
                            <div class="input_box space_between">
                                <label>First name <span>*</span></label>
                                <input type="text"/>
                            </div>
                            <div class="input_box space_between">
                                <label>last name <span>*</span></label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div class="input_box">
                            <label>Company name <span>*</span></label>
                            <input type="text"/>
                        </div>
                        <div class="input_box">
                            <label>Country<span>*</span></label>
                            <select class="select__option">
                                <option>Select a country…</option>
                                <option>Afghanistan</option>
                                <option>American Samoa</option>
                                <option>Anguilla</option>
                                <option>American Samoa</option>
                                <option>Antarctica</option>
                                <option>Antigua and Barbuda</option>
                            </select>
                        </div>
                        <div class="input_box">
                            <label>Address <span>*</span></label>
                            <input type="text" placeholder="Street address"/>
                        </div>
                        <div class="input_box">
                            <input type="text" placeholder="Apartment, suite, unit etc. (optional)"/>
                        </div>
                        <div class="input_box">
                            <label>District<span>*</span></label>
                            <select class="select__option">
                                <option>Select a country…</option>
                                <option>Afghanistan</option>
                                <option>American Samoa</option>
                                <option>Anguilla</option>
                                <option>American Samoa</option>
                                <option>Antarctica</option>
                                <option>Antigua and Barbuda</option>
                            </select>
                        </div>
                        <div class="input_box">
                            <label>Postcode / ZIP <span>*</span></label>
                            <input type="text"/>
                        </div>
                        <div class="margin_between">
                            <div class="input_box space_between">
                                <label>Phone <span>*</span></label>
                                <input type="text"/>
                            </div>

                            <div class="input_box space_between">
                                <label>Email address <span>*</span></label>
                                <input type="email"/>
                            </div>
                        </div>
                    </div>
                   </div>      
                </div>
             </React.Fragment>
        );
    }
}

const WrappedAddress = props => {
    return (
      <ProvideCombinedContext>
        <Address {...props} />
      </ProvideCombinedContext>
    );
  };
   
export default WrappedAddress;