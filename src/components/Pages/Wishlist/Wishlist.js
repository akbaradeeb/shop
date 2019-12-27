import React,{ Component } from 'react';
import MainContext from "../../../context/MainContext";
import ProvideCombinedContext from "../../../context/ProvideCombinedContext";  
import axios from 'axios';

class Wishlist extends Component{
    static contextType = MainContext;

    constructor(props)
    {
        super(props);
        this.state = {wishlist:[]};
    }

    componentDidMount(){
        axios.get('http://localhost/opencart/api/wishlist.php')
			 .then(response => {
					this.setState({ wishlist: response.data }); 
			 }); 
    }

    deleteItem = (item) =>{
        const obj = {product_id:item.product_id};
		axios.post('http://localhost/opencart/api/remove-wishlist-item.php',obj)
			 .then(res=>{
                        this.context.user.fetchMinicart(); 
                        this.context.alert.setAlert('Product Deleted from wishlist','success');
                        
                        axios.get('http://localhost/opencart/api/wishlist.php')
                        .then(response => {
                                this.setState({ wishlist: response.data }); 
                        }); 
                  });
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

    render() {
        return (
             <React.Fragment>
                 <div class="ht__bradcaump__area bg-image--5">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="bradcaump__inner text-center">
                                        <h2 class="bradcaump-title">Wishlist</h2>
                                        <nav class="bradcaump-content">
                                        <a class="breadcrumb_item" href="index.html">Home</a>
                                        <span class="brd-separetor">/</span>
                                        <span class="breadcrumb_item active">Wishlist</span>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                    <div class="wishlist-area section-padding--lg bg__white">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="wishlist-content">
                                        <form action="#">
                                            <div class="wishlist-table wnro__table table-responsive">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th class="product-remove"></th>
                                                            <th class="product-thumbnail"></th>
                                                            <th class="product-name"><span class="nobr">Product Name</span></th>
                                                            <th class="product-price"><span class="nobr"> Unit Price </span></th>
                                                            <th class="product-stock-stauts"><span class="nobr"> Stock Status </span></th>
                                                            <th class="product-add-to-cart"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        { this.state.wishlist.map(item=>
                                                            <tr>
                                                                <td class="product-remove"><a href="#" onClick={() => this.deleteItem(item)}>×</a></td>
                                                                <td class="product-thumbnail"><a href="#"><img src={item.image} alt="" width="100px"/></a></td>
                                                                <td class="product-name"><a href="#">{item.name}</a></td>
                                                                <td class="product-price"><span class="amount">${item.price}</span></td>
                                                                <td class="product-stock-status"><span class="wishlist-in-stock">In Stock</span></td>
                                                                <td class="product-add-to-cart"><a href="#" onClick={() => this.handleAddToCart(item)}>Add to Cart</a></td>
                                                            </tr>
                                                        )} 
                                                    </tbody>
                                                </table>
                                            </div>  
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             </React.Fragment>
        );
    }
}

const WrappedWishlist = props => {
    return (
      <ProvideCombinedContext>
        <Wishlist {...props} />
      </ProvideCombinedContext>
    );
  };
   
export default WrappedWishlist;