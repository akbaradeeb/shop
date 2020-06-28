import React,{ Component } from 'react';
import NewProduct from './NewProduct'
import axios from 'axios';  

class Home extends Component{

    constructor(props){
      super(props);
      this.state = {
                    new_products:[],
                  };
    }

    componentDidMount(){ 
    axios.get('http://localhost/opencart/api/home.php')
            .then(response => {
              this.setState({ new_products: response.data.new_products}); 
            }); 
    }
    render() {
        return (
         <React.Fragment>
          <div class="slider-area brown__nav slider--15 slide__activation slide__arrow01 owl-carousel owl-theme">
             
          <div class="slide animation__style10 bg-image--1 fullscreen align__center--left">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="slider__content">
                      <div class="contentbox">
                        <h2>Buy <span>your </span></h2>
                        <h2>favourite <span>Book </span></h2>
                        <h2>from <span>Here </span></h2>
                             <a class="shopbtn" href="#">shop now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          <div class="slide animation__style10 bg-image--7 fullscreen align__center--left">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="slider__content">
                      <div class="contentbox">
                        <h2>Buy <span>your </span></h2>
                        <h2>favourite <span>Book </span></h2>
                        <h2>from <span>Here </span></h2>
                             <a class="shopbtn" href="#">shop now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             
        </div>
        
    
    <NewProduct
      products = {this.state.new_products}
    />    
        
    </React.Fragment>        
        );
    }
}

export default Home