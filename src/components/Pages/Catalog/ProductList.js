import React,{ Component } from 'react';
import Product from './ProductList/Product';
import Filter from './ProductList/Filter';
import Toolbar from './ProductList/Toolbar';
import Pagination from './ProductList/Pagination'; 
import axios from 'axios';
import MainContext from "../../../context/MainContext";
import ProvideCombinedContext from "../../../context/ProvideCombinedContext"; 

class ProductList extends Component{
	
	static contextType = MainContext;
	static alert;
	
	constructor(props) {
		super(props);
		this.state = {
					  product:[],
					  pagination:{pages:[],current_page:1},
					  records:{
								start:0,
								end:0,
								total:0
					  		  }
					 }; 
	} 

	componentDidMount(){ 
		this.alert = this.context; 
		this.callApi(1);

		console.log("ProductList");
		console.log(this.context); 
	}

	handlePageChange = (pageId) => {
		 
		this.callApi(pageId)
	}

	handleAddToCart = (product) => {
		const obj = {product_id:product.product_id};

		axios.post('http://localhost/opencart/api/add-to-cart.php',obj)
			 .then(res=>{
				 console.log(res.data)
				 this.context.user.fetchMinicart(); 	
				 this.context.alert.setAlert('Product Added TO Cart','success'); 	   
				});
	}

	handleWishlist = (product) => {
		const obj = {product_id:product.product_id};

		axios.post('http://localhost/opencart/api/add-to-wishlist.php',obj)
			 .then(res=>{
				console.log(res.data);
				this.alert.setAlert('Product added to the wishlist','success');
				
			 });
	}

	callApi = (pageId) =>{
		axios.get('http://localhost/opencart/api/products.php?page='+pageId)
			 .then(response => {
					this.setState({ product: response.data.products, pagination:response.data.pagination,records:response.data.records }); 
			 }); 			   
	}

    render() {console.log(this.state);	
        return (
			
            <React.Fragment>
                <div class="ht__bradcaump__area bg-image--6">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="bradcaump__inner text-center">
                                    <h2 class="bradcaump-title">Shop Grid</h2>
                                    <nav class="bradcaump-content">
                                    <a class="breadcrumb_item" href="index.html">Home</a>
                                    <span class="brd-separetor">/</span>
                                    <span class="breadcrumb_item active">Shop Grid</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            

            <div class="page-shop-sidebar left--sidebar bg--white section-padding--lg">
        	<div class="container">
        		<div class="row">
        			<div class="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
        				<Filter/>
        			</div>
        			<div class="col-lg-9 col-12 order-1 order-lg-2">
        				<Toolbar records={this.state.records}/>
        				<div class="tab__container">
	        				<div class="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">
	        					<div class="row">
	        						{ this.state.product.map(product=>
										<Product key={product.id} 
												 product={product} 
												 onAddToCart={this.handleAddToCart}
												 onAddToWishlist={this.handleWishlist}
												 />
									)}
	        						 
	        					</div>
	        					
								<Pagination onPageChange={this.handlePageChange} pagination={this.state.pagination} />
	        				</div>
	        				 
        				</div>
        			</div>
        		</div>
        	</div>
        </div>

        </React.Fragment> 
        );
    }
}

const WrappedProductList = props => {
    return (
      <ProvideCombinedContext>
        <ProductList {...props} />
      </ProvideCombinedContext>
    );
  };
   
export default WrappedProductList;