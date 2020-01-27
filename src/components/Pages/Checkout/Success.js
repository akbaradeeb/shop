import React,{ Component } from 'react'; 
import MainContext from "../../../context/MainContext";
import ProvideCombinedContext from "../../../context/ProvideCombinedContext";  
import axios from 'axios';


class Success extends Component{

    static contextType = MainContext;

    constructor(props){
        super(props);
         
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
                         <p>Your orders were successfully</p>    
                        
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const SuccessOnepage = props => {
    return (
      <ProvideCombinedContext>
        <Success {...props} />
      </ProvideCombinedContext>
    );
  };
   
export default SuccessOnepage; 