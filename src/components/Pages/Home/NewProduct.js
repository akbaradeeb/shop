import React,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MainContext from "../../../context/MainContext";
import ProvideCombinedContext from "../../../context/ProvideCombinedContext"; 

class NewProduct extends Component{

    static contextType = MainContext;
	
	constructor(props) {
		super(props);
	}

    addToCart = (product) => {
		const obj = {product_id:product.product_id};

		axios.post('http://localhost/opencart/api/add-to-cart.php',obj)
			 .then(res=>{
				 console.log(res.data)
				 this.context.user.fetchMinicart(); 	
				 this.context.alert.setAlert('Product Added TO Cart','success'); 	   
				});
	}

	addToWishlist = (product) => {
		const obj = {product_id:product.product_id};

		axios.post('http://localhost/opencart/api/add-to-wishlist.php',obj)
			 .then(res=>{
				console.log(res.data);
				this.context.alert.setAlert('Product added to the wishlist','success');
				this.context.user.fetchMinicart(); 	
				this.context.alert.setAlert('Product Added TO Wishlist','success'); 
			 });
	}

    render(){
        console.log(this.props);
        return(
            <React.Fragment>

               <section class="wn__product__area brown--color pt--80  pb--30">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="section__title text-center">
                        <h2 class="title__be--2">New <span class="color--theme">Products</span></h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                        </div>
                    </div>
                    </div>
                    
                    <div class="furniture--4 border--round arrows_style owl-carousel owl-theme row mt--50">
                    { this.props.products.map(product=> 

                        <div class="product product__style--3">
                            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div class="product__thumb">
                            <Link to={"/product-detail/"+product.product_id} ><img src={product.image} alt="product images"  style={{width:'240px'}} /></Link>
                            <Link to={"/product-detail/"+product.product_id} className="second__img animation1" href="single-product.html"   ><img src={product.image} alt="product images"  style={{width:'240px'}} /></Link>
                
                                <div class="hot__box">
                                <span class="hot-label">BEST SALLER</span>
                                </div>
                            </div>
                            <div class="product__content content--center">
                                <h4><a href="single-product.html">{product.name}</a></h4>
                                <ul class="prize d-flex">
                                <li>$ {product.price}</li>
                                <li class="old_prize">$ {product.price}</li>
                                </ul>
                                <div class="action">
                                <div class="actions_inner">
                                    <ul class="add_to_links">
                                    {product.canAddToCart ? (    
                                    <li><a class="cart" href="#" onClick={() => this.addToCart(product)}><i class="bi bi-shopping-bag4"></i></a></li>
                                    ) : (
                                    <li><a class="cart" href="#" ><i class="bi bi-shopping-bag4"></i></a></li>        
                                    )}
                                    <li><a class="wishlist"  href="#"  onClick={() => this.addToWishlist(product)} ><i class="bi bi-shopping-cart-full"></i></a></li>
                                    </ul>
                                </div>
                                </div> 
                            </div>
                            </div>
                        </div>
                    )}
                    </div>
                    
                </div>
                </section>

            </React.Fragment>
        )
    }
}

const WrappedNewProduct = props => {
    return (
      <ProvideCombinedContext>
        <NewProduct {...props} />
      </ProvideCombinedContext>
    );
  };
   
export default WrappedNewProduct;