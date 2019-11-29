import React,{ Component } from 'react';
import Product from './ProductList/Product';
import Filter from './ProductList/Filter';
import Toolbar from './ProductList/Toolbar';
import Pagination from './ProductList/Pagination';

class ProductList extends Component{

	state = {
		product:[
			{id:1},
			{id:2},
			{id:3},
			{id:4},
			{id:5},
			{id:6},
			{id:7},
			{id:8},
			{id:9},
			{id:10},
			{id:11},
			{id:12},
		]
	} 

    render() {
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
        				<Toolbar/>
        				<div class="tab__container">
	        				<div class="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">
	        					<div class="row">
	        						{ this.state.product.map(product=><Product key={product.id}/>)}
	        						 
	        					</div>
	        					
								<Pagination/>
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

export default ProductList;