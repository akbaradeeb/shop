import React,{ Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MainContext from "../../../../context/MainContext";
import ProvideCombinedContext from "../../../../context/ProvideCombinedContext";  
import axios from 'axios';

class Address extends Component{
    static contextType = MainContext;

    constructor(props)
    {
        super(props);
        this.state = {
            visible_address_box:false
        }
    } 

    showHideAddressBox = () => {
        const currentState = this.state.visible_address_box;
        this.setState({ visible_address_box: !currentState });     
    }; 

    render() {

        let address_class = "";
        address_class+= this.state.visible_address_box === true ? "" : "hide";

        let add_address_label = this.state.visible_address_box === true ? "Hide Add Address" : "Add Address";

        let addresses = this.props.addresses;
        
        return (
             <React.Fragment>
                 <div class="customer_details">
                    <h3>Choose Delivery Addresses</h3>

                    <div class='address-list'>
                        {addresses.map(address=>
                            <div class='checkout_info address-list-address'>
                             <p>{address.full_address}</p>
                             <div class="form__btn"><button  onClick={()=> this.props.onAddressSelect(address.address_id)} className={(this.props.selected_address==address.address_id ? "btn btn-success" : "btn btn-secondery")}>Select</button></div>
                            </div>
                        )}

                            <div class='checkout_info address-list-address'>
                                <div class="form__btn"><button class='btn btn-primary'  onClick={this.showHideAddressBox}>{add_address_label}</button></div>
                            </div>
                    </div>

                    <div class="address-box" className={address_class}>
                        
                    <Formik
                        initialValues={{ 
                                        first_name: '', 
                                        last_name: '', 
                                        country: '',
                                        street_address:'',
                                        unit_address:'',
                                        city:'',
                                        postcode:'',
                                        phone:'',
                                        email: '' 
                                    }}
                        validationSchema={Yup.object({
                            first_name: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Please enter first name'),

                            last_name: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Please enter last name'),
                            
                            country: Yup.string().required('Please enter country'),
                            street_address: Yup.string().required('Please enter street address'),
                            unit_address: Yup.string().required('Please enter unit address'),
                            postcode: Yup.number().required('Please enter postcode'),
                            phone: Yup.number().required('Please enter phone no'),
                            
                            email: Yup.string()
                            .email('Invalid email address')
                            .required('Please enter email id'),

                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                this.props.onAddressSave(values);
                            setSubmitting(false);
                            }, 400);
                        }}
                        >                         
                     <Form>
                     <div class="customer_details">
        					<h3>Billing details</h3>
        					<div class="customar__field">
        						<div class="margin_between">
	        						<div class="input_box space_between">
	        							<label>First name <span>*</span></label>
	        							<Field name="first_name" type="text" />
                                        <ErrorMessage name="first_name" />
	        						</div>
	        						<div class="input_box space_between">
	        							<label>last name <span>*</span></label>
	        							<Field name="last_name" type="text" />
                                        <ErrorMessage name="last_name" />
	        						</div>
        						</div>
        						 
        						<div class="input_box">
        							<label>Country<span>*</span></label>
        							<Field name="country" as="select" className="select__option">
										<option value="">Select a country…</option>
										<option value="American Samoa">Afghanistan</option>
										<option value="American Samoa">American Samoa</option>
										<option value="American Samoa">Anguilla</option>
										<option value="American Samoa">American Samoa</option>
										<option value="American Samoa">Antarctica</option>
										<option value="American Samoa">Antigua and Barbuda</option>
        							</Field>
                                    <ErrorMessage name="country" />
        						</div>
        						<div class="input_box">
        							<label>Address <span>*</span></label>
        							 
                                    <Field name="street_address" type="text" placeholder="Street address" />
                                    <ErrorMessage name="street_address" />
        						</div>
        						<div class="input_box">
        							<Field name="unit_address" type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                    <ErrorMessage name="unit_address" />
        						</div>
        						<div class="input_box">
        							<label>City<span>*</span></label>
        							<Field name="city" type="text" placeholder="City" />
                                    <ErrorMessage name="city" />
        						</div>
								<div class="input_box">
									<label>Postcode / ZIP <span>*</span></label>
									<Field name="postcode" type="text" placeholder="Postcode" />
                                    <ErrorMessage name="postcode" />
								</div>
								<div class="margin_between">
									<div class="input_box space_between">
										<label>Phone <span>*</span></label>
										<Field name="phone" type="text" placeholder="Phone" />
                                        <ErrorMessage name="phone" />
									</div>

									<div class="input_box space_between">
										<label>Email address <span>*</span></label>
										<Field name="email" type="text" placeholder="Email" />
                                        <ErrorMessage name="email" />
									</div>
								</div>

                                <div class="input_box">
                                    <button type="submit" class='btn btn-primary'>Submit</button>
								</div>
        					</div>
        					 
        				</div>
                     </Form>
                    </Formik> 
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